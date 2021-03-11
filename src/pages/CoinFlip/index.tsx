import React, { useState, useRef, useEffect } from 'react'
import {
  PageContainer,
  CoinContentBox,
  CoinBox,
  CoinText,
  MainButton,
  TextButton,
  ResultBox,
  ResultList,
  ResultText,
  ClearResultButton,
  ClearResultText,
  CoinResultBobble
} from '../../styles'
import * as Animatable from 'react-native-animatable'
import env from '../../../.env.json'

import { FlipCoin, openInterstitialAd } from '../../utils'
import { AdMobBanner } from 'expo-ads-admob'

const showBanner = Math.floor(Math.random() * 10)

const CoinFlip: React.FC = () => {
  const [coin, setCoin] = useState('Flip Me')
  const [resultList, setResultList] = useState<String[]>([])

  const CoinRef = useRef<any>()
  const ResultBobbleRef = useRef<any>()

  useEffect(() => {
    if (resultList.length > 60) {
      setResultList(resultList.slice(0, 20))
    }
    if (
      resultList.length == 10 ||
      resultList.length == 20 ||
      resultList.length == 30
    ) {
      openInterstitialAd(env.ads.page.coin['ad-interstitial-id'])
    }
  }, [resultList])

  function handleFlip() {
    ResultBobbleRef.current!.bounceIn()
    CoinRef.current!.bounceIn()

    const resultFlip = FlipCoin()

    setCoin(resultFlip)
    setResultList([resultFlip, ...resultList])
  }

  function handleClearResult() {
    setCoin('Flip Me')
    setResultList([])
  }

  return (
    <PageContainer>
      <CoinContentBox style={{ elevation: 3 }}>
        <Animatable.View ref={CoinRef}>
          <CoinBox>
            <CoinText>{coin}</CoinText>
          </CoinBox>
        </Animatable.View>
      </CoinContentBox>

      <MainButton onPress={() => handleFlip()}>
        <TextButton>Flip</TextButton>
      </MainButton>

      <ResultBox style={{ elevation: 3 }}>
        {coin !== 'Flip Me' && <ResultText>Result:</ResultText>}
        <Animatable.View
          animation="bounceIn"
          easing="ease-out"
          iterationCount={1}
          ref={ResultBobbleRef}
        >
          {coin !== 'Flip Me' && (
            <ResultList>
              <CoinResultBobble>{coin}</CoinResultBobble>
            </ResultList>
          )}
        </Animatable.View>

        {resultList.length > 0 && <ResultText>Result History:</ResultText>}
        <ResultList>
          {resultList.map((result, index) => (
            <CoinResultBobble key={index}>{result}</CoinResultBobble>
          ))}
        </ResultList>

        {resultList.length > 0 && (
          <ClearResultButton onPress={() => handleClearResult()}>
            <ClearResultText>Clear Results</ClearResultText>
          </ClearResultButton>
        )}
      </ResultBox>

      {showBanner > 3 && (
        <AdMobBanner
          bannerSize="leaderboard"
          adUnitID={env.ads.page.coin['ad-banner-id']}
          servePersonalizedAds
          style={{ marginTop: 12, alignSelf: 'center' }}
        />
      )}
    </PageContainer>
  )
}

export default CoinFlip

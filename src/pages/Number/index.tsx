import React, { useState, useRef, useEffect } from 'react'
import {
  PageContainer,
  NumberContentBox,
  InputBox,
  InputLabel,
  InputField,
  MainButton,
  TextButton,
  ResultBox,
  ResultList,
  ResultText,
  ResultBobble,
  ClearResultButton,
  ClearResultText
} from '../../styles'
import * as Animatable from 'react-native-animatable'
import env from '../../../.env.json'

import { DrawNumber, openInterstitialAd } from '../../utils'
import { AdMobBanner } from 'expo-ads-admob'

const showBanner = Math.floor(Math.random() * 10)

export default function Number() {
  const [minNumber, setMinNumber] = useState(1)
  const [maxNumber, setMaxNumber] = useState(10)
  const [numResult, setNumResult] = useState(1)
  const [modifier, setModifier] = useState(0)

  const [currentResult, setCurrentResult] = useState<Number[]>([])
  const [resultList, setResultList] = useState<Number[]>([])

  const ResultBobbleRef = useRef()

  useEffect(() => {
    if (resultList.length > 100) {
      setResultList(resultList.slice(0, 20))
    }
    if (
      resultList.length == 10 ||
      resultList.length == 20 ||
      resultList.length == 30
    ) {
      openInterstitialAd(env.ads.page.number['ad-interstitial-id'])
    }
  }, [resultList])

  function handleDrawNumber() {
    ResultBobbleRef.current.bounceIn()

    const drawNumberResults = DrawNumber({
      minNumber,
      maxNumber,
      modifier,
      numResult,
      setNumResult
    })

    setCurrentResult(drawNumberResults)
    setResultList([...drawNumberResults, ...resultList])
  }

  function handleClearResult() {
    setResultList([])
    setCurrentResult([])
  }

  return (
    <PageContainer>
      <NumberContentBox style={{ elevation: 3 }}>
        <InputBox>
          <InputLabel>Minimum</InputLabel>
          <InputField
            value={String(minNumber)}
            maxLength={3}
            keyboardType="numeric"
            onChangeText={(num: string) => setMinNumber(parseInt(num, 10) || 0)}
          />
        </InputBox>
        <InputBox>
          <InputLabel>Maximum</InputLabel>
          <InputField
            value={String(maxNumber)}
            maxLength={3}
            keyboardType="numeric"
            onChangeText={(num: string) => setMaxNumber(parseInt(num, 10) || 0)}
          />
        </InputBox>
      </NumberContentBox>

      <NumberContentBox style={{ elevation: 3 }}>
        <InputBox>
          <InputLabel>Number of Results</InputLabel>
          <InputField
            value={String(numResult)}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={(num: string) => setNumResult(parseInt(num, 10) || 0)}
          />
        </InputBox>
        <InputBox>
          <InputLabel>Modifier</InputLabel>
          <InputField
            value={String(modifier)}
            maxLength={3}
            keyboardType="numeric"
            onChangeText={(num: string) => setModifier(parseInt(num, 10) || 0)}
          />
        </InputBox>
      </NumberContentBox>

      <MainButton onPress={() => handleDrawNumber()}>
        <TextButton>Draw</TextButton>
      </MainButton>

      <ResultBox style={{ elevation: 3 }}>
        {currentResult.length > 0 && <ResultText>Result:</ResultText>}
        <Animatable.View ref={ResultBobbleRef}>
          <ResultList>
            {currentResult.map((result, index) => (
              <ResultBobble key={index}>{result}</ResultBobble>
            ))}
          </ResultList>
        </Animatable.View>

        {resultList.length > 0 && <ResultText>Result History:</ResultText>}
        <ResultList>
          {resultList.map((result, index) => (
            <ResultBobble key={index}>{result}</ResultBobble>
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

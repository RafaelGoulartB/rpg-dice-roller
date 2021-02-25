import React, { useState, useRef, useEffect } from 'react'
import {
  PageContainer,
  DiceContextBox,
  SwitchDice,
  SwitchDiceButton,
  SwitchDiceButtonText,
  MainButton,
  TextButton,
  ResultBox,
  ResultList,
  ResultText,
  ResultBobble,
  ClearResultButton,
  ClearResultText,
  InputBox,
  InputLabel,
  InputField,
  NumberContentBox
} from '../../styles'
import * as Animatable from 'react-native-animatable'
import env from '../../../.env.json'

import { RollDice, openInterstitialAd } from '../../utils'

import d6Img from '../../assets/d6.png'
import d8Img from '../../assets/d8.png'
import d12Img from '../../assets/d12.png'
import d20Img from '../../assets/d20.png'
import { AdMobBanner } from 'expo-ads-admob'

const showBanner = Math.floor(Math.random() * 10)

export default function DiceRoll() {
  const [diceImg, setDiceImg] = useState(d6Img)
  const [modifier, setModifier] = useState(0)
  const [numResult, setNumResult] = useState(1)
  const [maxNumber, setMaxNumber] = useState(6)

  const [currentResult, setCurrentResult] = useState<Number[]>([])
  const [resultList, setResultList] = useState<Number[]>([])

  const ResultBobbleRef = useRef()
  const DiceImgRef = useRef()

  useEffect(() => {
    if (resultList.length > 100) {
      setResultList(resultList.slice(0, 20))
    }
    if (
      resultList.length == 10 ||
      resultList.length == 20 ||
      resultList.length == 30
    ) {
      openInterstitialAd(env.ads.page.dice['ad-interstitial-id'])
    }
  }, [resultList])

  function handleDiceChange(image, number) {
    DiceImgRef.current.bounceIn()
    setDiceImg(image)
    setMaxNumber(number)
    setCurrentResult([])
    setModifier(0)
  }

  function handleDiceRoll() {
    ResultBobbleRef.current.bounceIn()
    DiceImgRef.current.bounceIn()

    const diceRollResults = RollDice({
      maxNumber,
      modifier,
      numResult,
      setNumResult
    })

    setCurrentResult(diceRollResults)
    setResultList([...diceRollResults, ...resultList])
  }

  function handleClearResult() {
    setResultList([])
    setCurrentResult([])
  }

  return (
    <PageContainer>
      {showBanner > 4 && (
        <AdMobBanner
          bannerSize="leaderboard"
          adUnitID={env.ads.page.coin['ad-banner-id']}
          servePersonalizedAds
          style={{ marginTop: 12, alignSelf: 'center' }}
        />
      )}

      <DiceContextBox style={{ elevation: 3 }}>
        <Animatable.Image
          source={diceImg}
          animation="bounceIn"
          easing="ease-out"
          iterationCount={1}
          ref={DiceImgRef}
        />
        <SwitchDice>
          <SwitchDiceButton onPress={() => handleDiceChange(d6Img, 6)}>
            <SwitchDiceButtonText>d6</SwitchDiceButtonText>
          </SwitchDiceButton>

          <SwitchDiceButton onPress={() => handleDiceChange(d8Img, 8)}>
            <SwitchDiceButtonText>d8</SwitchDiceButtonText>
          </SwitchDiceButton>

          <SwitchDiceButton onPress={() => handleDiceChange(d12Img, 12)}>
            <SwitchDiceButtonText>d12</SwitchDiceButtonText>
          </SwitchDiceButton>

          <SwitchDiceButton onPress={() => handleDiceChange(d20Img, 20)}>
            <SwitchDiceButtonText>d20</SwitchDiceButtonText>
          </SwitchDiceButton>
        </SwitchDice>
      </DiceContextBox>
      <NumberContentBox style={{ elevation: 3 }}>
        <InputBox>
          <InputLabel>Number of Results</InputLabel>
          <InputField
            value={String(numResult)}
            maxLength={2}
            keyboardType="numeric"
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

      <MainButton onPress={() => handleDiceRoll()}>
        <TextButton>Roll</TextButton>
      </MainButton>

      <ResultBox style={{ elevation: 3 }}>
        {currentResult.length > 0 && <ResultText>Result:</ResultText>}
        <Animatable.View
          animation="bounceIn"
          easing="ease-out"
          iterationCount={1}
          ref={ResultBobbleRef}
        >
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
    </PageContainer>
  )
}

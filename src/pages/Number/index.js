import React, { useState, useRef, useEffect } from "react";
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
  ResultBooble,
  ClearResultButton,
  ClearResultText,
} from "../../styles";
import * as Animatable from "react-native-animatable";
import { AdMobBanner, AdMobInterstitial } from "expo-ads-admob";
import env from "../../../.env-exemple.json";

export default function Number() {
  const [minNumber, setMinNumber] = useState("1");
  const [maxNumber, setMaxNumber] = useState("10");
  const [numResult, setNumResult] = useState("1");

  const [numbersResult, setNumbersResult] = useState([]);
  const [resultList, setResultList] = useState([]);

  const ResultBoobleRef = useRef();

  // useEffect(() => {
  //   if(resultList.length == 10 || resultList.length == 30) {
  //     openInterstitialAd()
  //   }
  // }, [resultList])

  async function openInterstitialAd() {
    await AdMobInterstitial.setAdUnitID(
      env.ads.page.number["ad-interstitial-id"]
    );
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync();
  }

  function handleDrawNumber() {
    ResultBoobleRef.current.bounceIn();

    let newNumbersResults = [];

    for (let i = 0; i < numResult; i++) {
      const min = Math.ceil(minNumber);
      const max = Math.floor(maxNumber) + 1;
      const randomNumber = Math.floor(Math.random() * (max - min)) + min;

      newNumbersResults = [...newNumbersResults, randomNumber];
    }

    setNumbersResult(newNumbersResults);
    setResultList([...newNumbersResults, ...resultList]);
  }

  function handleClearResult() {
    setResultList([]);
    setNumbersResult([]);
  }

  return (
    <PageContainer>
      {/* <AdMobBanner
        bannerSize="largeBanner"
        adUnitID={env.ads.page.number["ad-banner-id"]}
        servePersonalizedAds
        style={{marginTop: 12, alignSelf: "center"}}
      />  */}
      <NumberContentBox style={{ elevation: 3 }}>
        <InputBox>
          <InputLabel>Min.</InputLabel>
          <InputField
            value={minNumber}
            maxLength={3}
            keyboardType="numeric"
            onChangeText={(num) => setMinNumber(num)}
          />
        </InputBox>
        <InputBox>
          <InputLabel>Max.</InputLabel>
          <InputField
            value={maxNumber}
            maxLength={3}
            keyboardType="numeric"
            onChangeText={(num) => setMaxNumber(num)}
          />
        </InputBox>
        <InputBox>
          <InputLabel>Number of Result</InputLabel>
          <InputField
            value={numResult}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={(num) => setNumResult(num)}
          />
        </InputBox>
      </NumberContentBox>

      <MainButton onPress={() => handleDrawNumber()}>
        <TextButton>Draw</TextButton>
      </MainButton>

      <ResultBox style={{ elevation: 3 }}>
        <ResultText>Result:</ResultText>
        <Animatable.View ref={ResultBoobleRef}>
          <ResultList>
            {numbersResult.map((result, index) => (
              <ResultBooble key={index}>{result}</ResultBooble>
            ))}
          </ResultList>
        </Animatable.View>

        <ResultText>Result History:</ResultText>
        <ResultList>
          {resultList.map((result, index) => (
            <ResultBooble key={index}>{result}</ResultBooble>
          ))}
        </ResultList>

        {resultList.length > 0 && (
          <ClearResultButton onPress={() => handleClearResult()}>
            <ClearResultText>Clear Results</ClearResultText>
          </ClearResultButton>
        )}
      </ResultBox>

      {/* <AdMobBanner
        bannerSize="banner"
        adUnitID={env.ads.page.number["ad-banner-id"]}
        // servePersonalizedAds
        style={{marginBottom: 12, alignSelf: "center"}}
      />  */}
    </PageContainer>
  );
}

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
import env from "../../../.env.json";

import { DrawNumber, openInterstitialAd } from "../../utils";

export default function Number() {
  const [minNumber, setMinNumber] = useState("1");
  const [maxNumber, setMaxNumber] = useState("10");
  const [numResult, setNumResult] = useState("1");

  const [currentResult, setCurrentResult] = useState([]);
  const [resultList, setResultList] = useState([]);

  const ResultBoobleRef = useRef();

  useEffect(() => {
    if (
      resultList.length == 10 ||
      resultList.length == 20 ||
      resultList.length == 30
    ) {
      openInterstitialAd(env.ads.page.number["ad-interstitial-id"]);
    }
  }, [resultList]);

  function handleDrawNumber() {
    ResultBoobleRef.current.bounceIn();

    const drawNumberResults = DrawNumber(minNumber, maxNumber, numResult);

    setCurrentResult(drawNumberResults);
    setResultList([...drawNumberResults, ...resultList]);
  }

  function handleClearResult() {
    setResultList([]);
    setCurrentResult([]);
  }

  return (
    <PageContainer>
      <NumberContentBox style={{ elevation: 3 }}>
        <InputBox>
          <InputLabel>Minimum</InputLabel>
          <InputField
            value={minNumber}
            maxLength={3}
            keyboardType="numeric"
            onChangeText={(num) => setMinNumber(num)}
          />
        </InputBox>
        <InputBox>
          <InputLabel>Maximum</InputLabel>
          <InputField
            value={maxNumber}
            maxLength={3}
            keyboardType="numeric"
            onChangeText={(num) => setMaxNumber(num)}
          />
        </InputBox>
      </NumberContentBox>

      <NumberContentBox style={{ elevation: 3 }}>
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
        {currentResult.length > 0 && <ResultText>Result:</ResultText>}
        <Animatable.View ref={ResultBoobleRef}>
          <ResultList>
            {currentResult.map((result, index) => (
              <ResultBooble key={index}>{result}</ResultBooble>
            ))}
          </ResultList>
        </Animatable.View>

        {resultList.length > 0 && <ResultText>Result History:</ResultText>}
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
    </PageContainer>
  );
}

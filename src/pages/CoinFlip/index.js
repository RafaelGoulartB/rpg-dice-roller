import React, { useState, useRef, useEffect } from "react";
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
  CoinResultBooble,
} from "../../styles";
import * as Animatable from "react-native-animatable";
import env from "../../../.env.json";

import { FlipCoin, openInterstitialAd } from "../../utils";

export default function CoinFlip() {
  const [coin, setCoin] = useState("Flip Me");
  const [resultList, setResultList] = useState([]);

  const CoinRef = useRef();
  const ResultBoobleRef = useRef();

  useEffect(() => {
    if (resultList.length > 60) {
      setResultList(resultList.slice(0, 20));
    }
    if (
      resultList.length == 10 ||
      resultList.length == 20 ||
      resultList.length == 30
    ) {
      openInterstitialAd(env.ads.page.coin["ad-interstitial-id"]);
    }
  }, [resultList]);

  function handleFlip() {
    ResultBoobleRef.current.bounceIn();
    CoinRef.current.bounceIn();

    const resultFlip = FlipCoin();

    setCoin(resultFlip);
    setResultList([resultFlip, ...resultList]);
  }

  function handleClearResult() {
    setCoin("Flip Me");
    setResultList([]);
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
        {coin !== "Flip Me" && <ResultText>Result:</ResultText>}
        <Animatable.View
          animation="bounceIn"
          easing="ease-out"
          iterationCount={1}
          ref={ResultBoobleRef}
        >
          {coin !== "Flip Me" && (
            <ResultList>
              <CoinResultBooble>{coin}</CoinResultBooble>
            </ResultList>
          )}
        </Animatable.View>

        {resultList.length > 0 && <ResultText>Result History:</ResultText>}
        <ResultList>
          {resultList.map((result, index) => (
            <CoinResultBooble key={index}>{result}</CoinResultBooble>
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

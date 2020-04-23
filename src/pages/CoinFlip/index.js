import React, { useState } from 'react';
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
  CoinResultBooble,
} from '../../styles';
import { View } from 'react-native';

export default function Number() {
  const [coin, setCoin] = useState('Flip Me');
  const [resultList, setResultList] = useState([]);

  function handleFlip() {
    const randomNumber = Math.round(Math.random() * Math.floor(1));
    const resultFlip = randomNumber ? 'Tails' : 'Heads';

    setCoin(resultFlip);
    setResultList([resultFlip, ...resultList])
  }

  return (
    <PageContainer>
      <CoinContentBox style={{elevation: 3}}>
        <CoinBox>
          <CoinText>{coin}</CoinText>
        </CoinBox>
      </CoinContentBox>

      <MainButton
        onPress={() => handleFlip()}
      >
        <TextButton>Flip</TextButton>
      </MainButton>

      <ResultBox style={{elevation: 3}}>
        <ResultText>Result:</ResultText>
        { coin !== 'Flip Me' &&
          <ResultList>
            <CoinResultBooble>{coin}</CoinResultBooble>
          </ResultList>
        }

        <ResultText>Result History:</ResultText>
        <ResultList>
          {resultList.map((result, index) => (
            <CoinResultBooble key={index}>{result}</CoinResultBooble>
          ))}
        </ResultList>
      </ResultBox>
    </PageContainer>
  );
}
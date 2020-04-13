import React from 'react';
import { TouchableOpacity ,Text } from 'react-native';
import {
  PageContainer,
  CoinContentBox,
  CoinBox,
  CoinText,
  MainButton,
  TextButton,
  ResultBox,
  ResultText,
  CoinResultBooble,
} from '../../styles';

export default function Number() {
  return (
    <PageContainer>
      <CoinContentBox style={{elevation: 3}}>
        <CoinBox>
          <CoinText>Flip me</CoinText>
        </CoinBox>
      </CoinContentBox>

      <MainButton>
        <TextButton>Flip</TextButton>
      </MainButton>

      <ResultBox style={{elevation: 3}}>
        <ResultText>Result:</ResultText>
        <CoinResultBooble>Tails</CoinResultBooble>
        <CoinResultBooble>Tails</CoinResultBooble>
        <CoinResultBooble>Heads</CoinResultBooble>
        <CoinResultBooble>Heads</CoinResultBooble>
      </ResultBox>
    </PageContainer>
  );
}
import React, { useState } from 'react';
import { Image } from 'react-native';
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
  ResultBooble,
} from '../../styles';
import d6Img from '../../assets/d6.png';
import d8Img from '../../assets/d8.png';
import d12Img from '../../assets/d12.png';
import d20Img from '../../assets/d20.png';

export default function DiceRoll() {
  const [diceImg, setDiceImg] = useState(d6Img);
  const [maxNumber, setMaxNumber] = useState(6);
  const [diceResult, setDiceResult] = useState(null);
  const [resultList, setResultList] = useState([]);

  function handleDiceChange(image, number) {
    setDiceImg(image);
    setMaxNumber(number);
    setResultList([])
    setDiceResult(null);
  }

  function handleDiceRoll() {
    const randomNumber = Math.floor(Math.random() * Math.floor(maxNumber));
    const diceNumber = randomNumber+1;

    setDiceResult(diceNumber);
    setResultList([diceNumber, ...resultList]);
  }

  return (
    <PageContainer>
      <DiceContextBox style={{elevation: 3}}>
        <Image source={diceImg}></Image>
        <SwitchDice>
          <SwitchDiceButton
            onPress={() => handleDiceChange(d6Img, 6)}
          >
            <SwitchDiceButtonText>d6</SwitchDiceButtonText>
          </SwitchDiceButton>

          <SwitchDiceButton
            onPress={() => handleDiceChange(d8Img, 8)}
          >
            <SwitchDiceButtonText>d8</SwitchDiceButtonText>
          </SwitchDiceButton>

          <SwitchDiceButton
            onPress={() => handleDiceChange(d12Img, 12)}
          >
            <SwitchDiceButtonText>d12</SwitchDiceButtonText>
          </SwitchDiceButton>

          <SwitchDiceButton
            onPress={() => handleDiceChange(d20Img, 20)}
          >
            <SwitchDiceButtonText>d20</SwitchDiceButtonText>
          </SwitchDiceButton>
        </SwitchDice>
      </DiceContextBox>

      <MainButton
        onPress={() => handleDiceRoll()}
      >
        <TextButton>Roll</TextButton>
      </MainButton>

      <ResultBox style={{elevation: 3}}>
        <ResultText>Result:</ResultText>
        {diceResult &&
          <ResultList>
            <ResultBooble>{diceResult}</ResultBooble>
          </ResultList>
        }

        <ResultText>Result History:</ResultText>
        <ResultList>
          {resultList.map((result, index) => (
            <ResultBooble key={index}>{result}</ResultBooble>
          ))}
        </ResultList>
      </ResultBox>

    </PageContainer>
  );
}
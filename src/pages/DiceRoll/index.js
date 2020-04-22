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
  ResultText,
  ResultBooble,
} from '../../styles';
import d6Img from '../../assets/d6.png';
import d8Img from '../../assets/d8.png';
import d12Img from '../../assets/d12.png';
import d20Img from '../../assets/d20.png';

export default function DiceRoll() {
  const [diceImg, setDiceImg] = useState(d6Img);
  const mimNumber = 1;
  const [maxNumber, setMaxNumber] = useState(6);

  function handleDiceChange(image, number) {
    setDiceImg(image);
    setMaxNumber(number)
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

      <MainButton>
        <TextButton>Roll</TextButton>
      </MainButton>

      <ResultBox style={{elevation: 3}}>
        <ResultText>Result:</ResultText>
        <ResultBooble>5</ResultBooble>
      </ResultBox>

    </PageContainer>
  );
}
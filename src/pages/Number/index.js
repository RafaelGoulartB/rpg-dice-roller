import React, { useState } from 'react';
import { Text } from 'react-native';
import {
  PageContainer,
  NumberContentBox,
  InputBox,
  InputLabel,
  InputField,
  SwitchRepeat,
  SwitchRepeatBtn,
  SwitchRepeatText,
  MainButton,
  TextButton,
  ResultBox,
  ResultText,
  ResulBooble,
} from '../../styles';

export default function Number() {
  const [minNumber, setMinNumber] = useState("1");
  const [maxNumber, setMaxNumber] = useState("10");
  const [numResult, setNumResult] = useState("1");
  const [repeatNum, setRepeatNum] = useState(true);

  return (
    <PageContainer>
      <NumberContentBox style={{elevation: 3}}>
        <InputBox>
          <InputLabel>Min.</InputLabel>
          <InputField 
            value={minNumber}
            keyboardType='numeric'
            onChange={num => setMinNumber(num)}
            />
        </InputBox>
        <InputBox>
          <InputLabel>Max.</InputLabel>
          <InputField 
            value={maxNumber}
            keyboardType='numeric'
            onChange={num => setMaxNumber(num)}
          />
        </InputBox>
        <InputBox>
          <InputLabel>Number of Result</InputLabel>
          <InputField 
            value={numResult}
            keyboardType='numeric'
            maxLength={2}
            onChange={num => setNumResult(num)}
          />
        </InputBox>
        <InputBox>
          <InputLabel>Repeat Number</InputLabel>
          <SwitchRepeat>
            <SwitchRepeatBtn 
              title="YES"
              onPress={() => setRepeatNum(!repeatNum)}
            >
              <SwitchRepeatText>Yes</SwitchRepeatText>
            </SwitchRepeatBtn>
            <SwitchRepeatBtn 
              title="NO"
              onPress={() => setRepeatNum(!repeatNum)}
            >
              <SwitchRepeatText>No</SwitchRepeatText>
            </SwitchRepeatBtn>
          </SwitchRepeat>
        </InputBox>
      </NumberContentBox>

      <MainButton>
        <TextButton>Sortear</TextButton>
      </MainButton>

      <ResultBox style={{elevation: 3}}>
        <ResultText>Result:</ResultText>
        <ResulBooble>1</ResulBooble>
        <ResulBooble>3</ResulBooble>
        <ResulBooble>9</ResulBooble>
        <ResulBooble>9</ResulBooble>
      </ResultBox>
    </PageContainer>
  );
}
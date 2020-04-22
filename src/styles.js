import styled from "styled-components/native";
import Constants from 'expo-constants';

// Header
export const HeaderContainer = styled.View`
    flex-direction: row;
    background: ${props => props.theme.headerColor};
    height: ${Constants.statusBarHeight+50}px;
    padding-top: ${Constants.statusBarHeight+20-16}px;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderTitle = styled.Text`
    color: ${props => props.theme.secondaryText};
    font-size: 16px;
    margin-left: 25px;
`;

export const SwitchTheme = styled.Switch``;

// Global
export const PageContainer = styled.View`
    background-color: ${props => props.theme.background};
    height: 100%;
`;
export const ContentBox = styled.View`
    flex-direction: column;
    width: 80%;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    background-color: ${props => props.theme.primaryColor};
    border-radius: 8px;
`;
export const MainButton = styled.TouchableOpacity`
    align-items: center;
    background-color: ${props => props.theme.secondaryColor};
    border-radius: 8px;
    width: 80%;
    padding: 12px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
`;
export const TextButton = styled.Text`
    font-size: 12px;
    text-transform: uppercase;
    color: #fff;
    font-weight: bold;
`;
export const ResultBox = styled(ContentBox)`
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
`;
export const ResultText = styled.Text`
    color: ${props => props.theme.primaryText};
    margin-right: 12px;
`;
export const ResultBooble = styled.Text`
    color: ${props => props.theme.secondaryText};
    background-color: ${props => props.theme.secondaryColor};
    width: 25px;
    height: 25px;
    border-radius: 8px;
    text-align: center;
    margin-right: 8px;
    margin-bottom: 8px;
    line-height: 22px;
`;

// Number Page
export const NumberContentBox = styled(ContentBox)`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

`;
export const InputBox = styled.View``;
export const InputLabel = styled.Text`
    font-size: 12px;
    color: ${props => props.theme.primaryText};
    margin-bottom: 2px;
`;
export const InputField = styled.TextInput`
    width: 120px;
    height: 25px;
    border: 1px solid ${props => props.theme.label};
    border-radius: 2px;
    padding-left: 8px;
    margin-bottom: 28px;
    color: ${props => props.theme.primaryText};
`;
export const SwitchRepeat = styled.View`
    width: 120px;
    height: 25px;
    flex-direction: row;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 2px;
`;
export const SwitchRepeatBtn = styled.TouchableOpacity`
    width: 49.8%;
    background-color: ${props => props.theme.secondaryColor};
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
`;
export const SwitchRepeatText = styled(TextButton)`
    font-weight: normal;
`;

// Dice Roll
export const DiceContextBox = styled(ContentBox)`
    align-items: center;
    padding-right: 0px;
    padding-left: 0px;
`;
export const SwitchDice = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-top-width: 1px;
    border-top-color: ${props => props.theme.primaryText};
    border-style: solid;
    margin-top: 42px;
`;
export const SwitchDiceButton = styled.TouchableOpacity`
    width: 25%;
    margin-top: 22px;
    margin-top: 22px;
`;
export const SwitchDiceButtonText = styled.Text`
    font-size: 18px;
    text-align: center;
    color: ${props => props.theme.primaryText};
    text-align: center;
`;


// Coin Flip
export const CoinContentBox = styled(ContentBox)`
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
`;
export const CoinBox = styled.View`
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.coinBcg};
    width: 120px;
    height: 120px;
    border: 2px solid ${props => props.theme.coinBorder};
    border-radius: 60px;
`;
export const CoinText = styled.Text`
    text-transform: uppercase;
    font-weight: bold;
    color: ${props => props.theme.primaryText};
`;
export const CoinResultBooble = styled(ResultBooble)`
    width: 65px;
    height: 28px;
    line-height: 26px;
`;
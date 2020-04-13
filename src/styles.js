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
export const ResulBooble = styled.Text`
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
export const CoinResultBooble = styled(ResulBooble)`
    width: 65px;
    height: 28px;
    line-height: 26px;
`;
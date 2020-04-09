import styled from "styled-components/native";
import Constants from 'expo-constants';

export const HeaderContainer = styled.View`
    flex-direction: row;
    background: ${props => props.theme.secondaryColor};
    height: ${Constants.statusBarHeight+50}px;
    padding-top: ${Constants.statusBarHeight+20-16}px;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderTitle = styled.Text`
    color: ${props => props.theme.primaryText};
    font-size: 16px;
    margin-left: 25px;
`;

export const SwitchTheme = styled.Switch`

`;

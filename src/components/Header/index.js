import React from "react";
import { Switch } from "react-native";
import { HeaderContainer, HeaderTitle, SwitchTheme } from "../../styles";

export default function Header({ darkModeValue, onDarkModeChange, pageTitle }) {
  return (
    <HeaderContainer>
      <HeaderTitle>{pageTitle}</HeaderTitle>
      <SwitchTheme
        value={darkModeValue}
        onValueChange={onDarkModeChange}
        checkedIcon={false}
        uncheckedIcon={false}
      />
    </HeaderContainer>
  );
}

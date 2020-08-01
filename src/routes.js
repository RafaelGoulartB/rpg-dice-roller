import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import styled, { ThemeProvider } from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from "@react-native-community/async-storage";

import Header from "./components/Header";
import lightTheme from "./themes/light";
import darkTheme from "./themes/dark";

import NumberPage from "./pages/Number";
import DicePage from "./pages/DiceRoll";
import CoinPage from "./pages/CoinFlip";

import { Image } from "react-native";

const Tab = createMaterialBottomTabNavigator();

export default function Routes() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    async function fetchTheme() {
      const theme = await AsyncStorage.getItem("@random:theme");
      console.log(theme);
      if (theme == "true") {
        setDark(true);
      } else if (theme == "false" || theme == null || theme == undefined) {
        setDark(false);
      }
    }
    fetchTheme();
  }, []);

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <Header
        pageTitle="Random Number Generator"
        onDarkModeChange={async () => {
          // Persistent theme
          if (!dark) await AsyncStorage.setItem("@random:theme", "true");
          else await AsyncStorage.setItem("@random:theme", "false");

          setDark(!dark);
        }}
        darkModeValue={dark}
      />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Dice"
          activeColor="#fff"
          inactiveColor="#b0b0b0"
          barStyle={{ backgroundColor: dark ? "#1d1d1d" : "#6200ee" }}
        >
          <Tab.Screen
            name="Number"
            component={NumberPage}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require("../assets/number-icon.png")}
                  style={{ width: 22, height: 22 }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Dice"
            component={DicePage}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="dice-five" color={color} size={22} />
              ),
            }}
          />
          <Tab.Screen
            name="Coin"
            component={CoinPage}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="coins" color={color} size={22} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

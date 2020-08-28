import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import Icon from "react-native-vector-icons/FontAwesome5";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  NumberStackScreen,
  DiceStackScreen,
  CoinStackScreen,
} from "./app.routes";

import { ThemeProvider } from "styled-components";
import lightTheme from "../themes/light";
import darkTheme from "../themes/dark";

const Tab = createMaterialBottomTabNavigator();

export default function Routes() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    (async () => {
      const theme = await AsyncStorage.getItem("@random:theme");
      if (theme == "true") setDark(true);
      else if (theme == "false" || theme == null || theme == undefined)
        setDark(false);
    })();
  }, []);

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Dice"
          activeColor="#fff"
          inactiveColor="#b0b0b0"
          barStyle={{ backgroundColor: "#6200ee" }}
        >
          <Tab.Screen
            name="Number"
            component={NumberStackScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="hashtag" color={color} size={22} />
              ),
            }}
          />
          <Tab.Screen
            name="Dice"
            component={DiceStackScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="dice-five" color={color} size={22} />
              ),
            }}
          />
          <Tab.Screen
            name="Coin"
            component={CoinStackScreen}
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

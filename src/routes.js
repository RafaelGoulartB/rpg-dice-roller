import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import styled, { ThemeProvider } from 'styled-components'

import Header from './components/Header/Header'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'

import NumberPage from './pages/Number'
import DicePage from './pages/DiceRoll'
import CoinPage from './pages/CoinFlip'


const Tab = createMaterialBottomTabNavigator();


export default function Routes() {

  const [dark, setDark] = useState(false)

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <Header pageTitle="Random Number Generator" 
        onDarkModeChange={
          () => setDark(!dark)
        }
        darkModeValue={dark}
      />
      <NavigationContainer>
        <Tab.Navigator
          activeColor="#f0edf6"
          inactiveColor="#000"
          barStyle={{ backgroundColor: '#6200ee' }}
        >
          <Tab.Screen name="Number" component={NumberPage} />
          <Tab.Screen name="Dice" component={DicePage} />
          <Tab.Screen name="Coin" component={CoinPage} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

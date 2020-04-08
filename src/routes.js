import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NumberPage from './pages/Number'
import DicePage from './pages/DiceRoll'
import CoinPage from './pages/CoinFlip'

const Tab = createBottomTabNavigator();


export default function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Number" component={NumberPage} />
      <Tab.Screen name="Dice" component={DicePage} />
      <Tab.Screen name="Coin" component={CoinPage} />
    </Tab.Navigator>
  );
}

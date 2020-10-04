import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import {
  NumberStackScreen,
  DiceStackScreen,
  CoinStackScreen
} from './app.routes'

import { ThemeProvider } from 'styled-components'
import { dark, light } from '../themes'

const Tab = createMaterialBottomTabNavigator()

const Routes: React.FC = () => {
  return (
    <ThemeProvider theme={false ? dark : light}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Dice"
          activeColor="#fff"
          inactiveColor="#b0b0b0"
          barStyle={{ backgroundColor: '#6200ee' }}
          // barStyle={{ backgroundColor: "#1d1d1d" }}
        >
          <Tab.Screen
            name="Number"
            component={NumberStackScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="hashtag" color={color} size={22} />
              )
            }}
          />
          <Tab.Screen
            name="Dice"
            component={DiceStackScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="dice-five" color={color} size={22} />
              )
            }}
          />
          <Tab.Screen
            name="Coin"
            component={CoinStackScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="coins" color={color} size={22} />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default Routes

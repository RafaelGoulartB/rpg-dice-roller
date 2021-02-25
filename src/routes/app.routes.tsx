import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native'
import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

import NumberPage from '../pages/Number'
import DicePage from '../pages/DiceRoll'
import CoinPage from '../pages/CoinFlip'

const NumberStack = createStackNavigator()
const DiceStack = createStackNavigator()
const CoinStack = createStackNavigator()

function rightButton(toggleDark: () => void) {
  return {
    headerRight: () => {
      return (
        <TouchableOpacity
          onPress={async () => {
            toggleDark()
          }}
        >
          <Icon name="adjust" color="#ffff" size={20} />
        </TouchableOpacity>
      )
    },
    headerRightContainerStyle: { paddingRight: 22 }
  }
}

export const NumberStackScreen: React.FC = () => {
  const { isDark, toggleDark } = useContext(ThemeContext)

  return (
    <NumberStack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: isDark ? '#1d1d1d' : '#6200ee'
        }
      }}
    >
      <NumberStack.Screen
        name="Number Generator"
        component={NumberPage}
        options={rightButton(toggleDark)}
      />
    </NumberStack.Navigator>
  )
}

export const DiceStackScreen: React.FC = () => {
  const { isDark, toggleDark } = useContext(ThemeContext)

  return (
    <DiceStack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: isDark ? '#1d1d1d' : '#6200ee'
        }
      }}
    >
      <DiceStack.Screen
        name="Dice Roller"
        component={DicePage}
        options={rightButton(toggleDark)}
      />
    </DiceStack.Navigator>
  )
}

export const CoinStackScreen: React.FC = () => {
  const { isDark, toggleDark } = useContext(ThemeContext)

  return (
    <CoinStack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: isDark ? '#1d1d1d' : '#6200ee'
        }
      }}
    >
      <CoinStack.Screen
        name="Coin Flip"
        component={CoinPage}
        options={rightButton(toggleDark)}
      />
    </CoinStack.Navigator>
  )
}

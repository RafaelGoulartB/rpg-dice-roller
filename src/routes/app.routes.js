import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native";

import NumberPage from "../pages/Number";
import DicePage from "../pages/DiceRoll";
import CoinPage from "../pages/CoinFlip";

const NumberStack = createStackNavigator();
const DiceStack = createStackNavigator();
const CoinStack = createStackNavigator();


function rightButton(navigation) {
  return {
    headerRight: () => {
      return (
        <TouchableOpacity
          onPress={async () => {
            if (!dark) await AsyncStorage.setItem("@random:theme", "true");
            else await AsyncStorage.setItem("@random:theme", "false");

            setDark(!dark);
          }}
        >
          <Icon name="adjust" color="#ffff" size={20} />
        </TouchableOpacity>
      );
    },
    headerRightContainerStyle: { paddingRight: 22 },
  };
}

const headerStackStyle = {
  backgroundColor: "#6200ee",
};

export const NumberStackScreen = ({ navigation }) => (
  <NumberStack.Navigator
    screenOptions={{ headerTintColor: "white", headerStyle: headerStackStyle }}
  >
    <NumberStack.Screen
      name="Number Generator"
      component={NumberPage}
      // options={rightButton(navigation)}
    />
  </NumberStack.Navigator>
);

export const DiceStackScreen = ({ navigation }) => (
  <DiceStack.Navigator
    screenOptions={{ headerTintColor: "white", headerStyle: headerStackStyle }}
  >
    <DiceStack.Screen
      name="Dice Roller"
      component={DicePage}
      // options={rightButton(navigation)}
    />
  </DiceStack.Navigator>
);

export const CoinStackScreen = ({ navigation }) => (
  <CoinStack.Navigator
    screenOptions={{ headerTintColor: "white", headerStyle: headerStackStyle }}
  >
    <CoinStack.Screen
      name="Coin Flip"
      component={CoinPage}
      // options={rightButton(navigation)}
    />
  </CoinStack.Navigator>
);
/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "../Screens/GetStarted";
import SplashScreen1 from "../Screens/SplashScreen1";
import SplashScreen2 from "../Screens/SplashScreen2";
import SplashScreen3 from "../Screens/SplashScreen3";
import SplashScreen4 from "../Screens/SplashScreen4";

const Stack = createNativeStackNavigator();

function Navigators(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="getstarted"
          component={GetStarted}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ss1"
          component={SplashScreen1}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ss2"
          component={SplashScreen2}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ss3"
          component={SplashScreen3}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ss4"
          component={SplashScreen4}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Navigators;

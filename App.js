/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Navigators from "./navigators/Navigators";
import LandingPage from "./Screens/LandingPage";
import LoginPage from "./Screens/LoginPage";
import RegisterScreen from "./Screens/RegisterScreen";

export default function App() {
  return <RegisterScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

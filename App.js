/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Navigators from "./navigators/Navigators";
import LandingPage from "./Screens/LandingPage";
import LoginPage from "./Screens/LoginPage";
import ProfileCheck from "./Screens/ProfileCheck";
import ProfileType from "./Screens/ProfileType";
import RegisterScreen from "./Screens/RegisterScreen";

export default function App() {
  return <ProfileType />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

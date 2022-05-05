/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Navigators from "./navigators/Navigators";
import LandingPage from "./Screens/LandingPage";

export default function App() {
  return <LandingPage />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

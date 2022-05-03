/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import GetStarted from "./Screens/GetStarted";
import SplashScreen1 from "./Screens/SplashScreen1";

export default function App() {
  return <SplashScreen1 />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

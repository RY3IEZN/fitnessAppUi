/** @format */

import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

function SplashScreen4({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: "100%" }}
        resizeMode="cover"
        source={require("../assets/splashscreenimg4.png")}
      />
      <Text
        style={{
          marginHorizontal: 20,
          color: "#9DCEFF",
          fontWeight: "700",
          fontSize: 25,
          marginTop: 30,
        }}
      >
        Improve Sleep
      </Text>
      <Text
        style={{
          marginHorizontal: 20,
          color: "#9DCEFF",
          fontWeight: "700",
          fontSize: 25,
        }}
      >
        Quality
      </Text>
      <Text
        style={{
          marginHorizontal: 20,
          color: "grey",
          fontWeight: "700",
          fontSize: 13,
          marginTop: 10,
        }}
      >
        Improve the quality of sleep with us, good quality sleep can bring a
        good mood althrough the day
      </Text>

      <View
        style={{
          flexDirection: "row-reverse",
          marginHorizontal: 20,
          marginTop: 180,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{
            width: 70,
            height: 70,
            backgroundColor: "#9DCEFF",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            name="chevron-right"
            size={35}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default SplashScreen4;

/** @format */

import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

function SplashScreen3({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: "100%" }}
        resizeMode="cover"
        source={require("../assets/splashscreenimg3.png")}
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
        Eat Well
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
        Lets start a health lifestyle with us , we can determine your diet
        everyday, eating healthy is fun
      </Text>

      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 20,
          marginTop: 200,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          onPress={() => navigation.navigate("ss4")}
          style={{
            color: "#9DCEFF",
            fontWeight: "700",
            fontSize: 15,
          }}
        >
          Skip
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("ss4")}
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

export default SplashScreen3;

/** @format */

import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity, View, StyleSheet, Image, Text } from "react-native";

function SplashScreen1(props) {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: "100%" }}
        resizeMode="cover"
        source={require("../assets/splashscreenimg1.png")}
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
        Track Your Goals
      </Text>
      <Text
        style={{
          marginHorizontal: 20,
          color: "grey",
          fontWeight: "700",
          fontSize: 15,
          marginTop: 10,
        }}
      >
        Dont worry if you having trouble determing your goals,we can help you
        determine your goals and track your goals.
      </Text>

      <View
        style={{
          flexDirection: "row-reverse",
          marginHorizontal: 20,
          marginTop: 200,
        }}
      >
        <TouchableOpacity
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

export default SplashScreen1;

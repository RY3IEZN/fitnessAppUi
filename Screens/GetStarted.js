/** @format */

import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";

function GetStarted(props) {
  return (
    <View style={styles.container}>
      <Text>kkkkk</Text>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 350,
        }}
      >
        <Image source={require("../assets/fitnesxLogoq.png")} />
      </View>

      <TouchableOpacity
        style={{
          marginHorizontal: 20,
          backgroundColor: "white",
          height: 60,
          borderRadius: 15,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 300,
        }}
      >
        <Text style={{ color: "#9DCEFF", fontWeight: "700", fontSize: 20 }}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9DCEFF",
    flex: 1,
  },
});

export default GetStarted;

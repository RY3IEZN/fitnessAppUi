/** @format */

import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

function LandingPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
        }}
      >
        <Image source={require("../assets/landingpageimg.png")} />
        <Text
          style={{
            marginTop: 40,
            color: "#9DCEFF",
            fontWeight: "700",
            fontSize: 30,
          }}
        >
          Welcome Back,
        </Text>
        <Text
          style={{
            alignItems: "center",
            textAlign: "center",
            color: "grey",
            fontSize: 15,
          }}
        >
          You are all set now, lets reach your
        </Text>
        <Text
          style={{
            alignItems: "center",
            textAlign: "center",
            color: "grey",
            fontSize: 15,
          }}
        >
          goals together with us
        </Text>
        <TouchableOpacity
          style={{
            width: "80%",
            height: 50,
            backgroundColor: "#7990CB",
            marginTop: 230,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>
            Go To Home
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default LandingPage;

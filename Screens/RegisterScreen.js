/** @format */

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

function RegisterScreen({ navigation }) {
  const [ticked, setTicked] = useState(false);
  const [visible, setVisible] = useState(true);
  return (
    <View style={styles.container}>
      <Text
        style={{
          alignItems: "center",
          textAlign: "center",
          color: "grey",
          fontSize: 15,
          marginTop: 70,
        }}
      >
        Hey, there
      </Text>
      <Text
        style={{
          alignItems: "center",
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Create an Account
      </Text>
      <View
        style={{
          width: "90%",
          height: 50,
          borderRadius: 15,
          backgroundColor: "#F7F8F8",
          justifyContent: "center",
          marginHorizontal: 20,
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
          <MaterialCommunityIcons
            name="account-outline"
            size={24}
            color="grey"
          />
          <TextInput
            placeholder="First Name"
            style={{ width: "80%", marginHorizontal: 10 }}
          />
        </View>
      </View>
      <View
        style={{
          width: "90%",
          height: 50,
          borderRadius: 15,
          backgroundColor: "#F7F8F8",
          justifyContent: "center",
          marginHorizontal: 20,
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
          <MaterialCommunityIcons
            name="account-outline"
            size={24}
            color="grey"
          />
          <TextInput
            placeholder="Last Name"
            style={{ width: "80%", marginHorizontal: 10 }}
          />
        </View>
      </View>
      <View
        style={{
          width: "90%",
          height: 50,
          borderRadius: 15,
          backgroundColor: "#F7F8F8",
          justifyContent: "center",
          marginHorizontal: 20,
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
          <MaterialCommunityIcons name="email-outline" size={24} color="grey" />
          <TextInput
            placeholder="Email"
            style={{ width: "80%", marginHorizontal: 10 }}
          />
        </View>
      </View>
      <View
        style={{
          width: "90%",
          height: 50,
          borderRadius: 15,
          backgroundColor: "#F7F8F8",
          justifyContent: "center",
          marginHorizontal: 20,
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
          <MaterialCommunityIcons name="lock" size={24} color="grey" />
          <TextInput
            placeholder="Password"
            secureTextEntry={visible}
            style={{ width: "80%", marginHorizontal: 10 }}
          />
          <MaterialCommunityIcons
            onPress={() => setVisible(!visible)}
            name={visible ? "eye-off-outline" : "eye-outline"}
            size={24}
            color="black"
          />
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 20,
          }}
        >
          <MaterialCommunityIcons
            onPress={() => setTicked(!ticked)}
            name={ticked ? "checkbox-marked" : "checkbox-blank-outline"}
            size={24}
          />
          <Text style={{ color: "black" }}>
            {" "}
            By continuing, you accept our
            <Text
              style={{
                color: "grey",
                textDecorationLine: "underline",
              }}
            >
              {" "}
              Privacy Policy
            </Text>{" "}
            and{" "}
            <Text
              style={{
                color: "grey",
                textDecorationLine: "underline",
              }}
            >
              Terms of Use
            </Text>
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          width: "80%",
          height: 50,
          backgroundColor: "#7990CB",
          marginTop: 200,
          borderRadius: 65,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 40,
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            marginHorizontal: 5,
            color: "white",
            fontWeight: "700",
            fontSize: 20,
          }}
        >
          Register
        </Text>
      </TouchableOpacity>
      <View
        style={{
          width: "85%",
          height: 1,
          backgroundColor: "lightgrey",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          marginHorizontal: 30,
        }}
      ></View>
      <View
        style={{
          width: 30,
          height: 30,
          backgroundColor: "white",
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 660,
          left: 190,
        }}
      >
        <Text>Or</Text>
      </View>
      {/*  */}
      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 100,
        }}
      >
        <TouchableOpacity
          style={{
            width: 70,
            height: 70,
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "lightgrey",
          }}
        >
          <Image source={require("../assets/google.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 70,
            height: 70,
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "lightgrey",
          }}
        >
          <Image source={require("../assets/facebook.png")} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text>Already have an account?</Text>
        <Text
          onPress={() => navigation.navigate("Login")}
          style={{ color: "#7990CB" }}
        >
          {" "}
          Login
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default RegisterScreen;

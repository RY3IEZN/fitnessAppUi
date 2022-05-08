/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

function ProfileCheck({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/setupprofile.png")}
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 30,
        }}
      />

      <Text
        style={{
          alignItems: "center",
          textAlign: "center",
          fontSize: 25,
          fontWeight: "bold",
          color: "black",
          marginTop: 20,
        }}
      >
        Let's complete your profile
      </Text>
      <Text style={{ color: "grey", textAlign: "center" }}>
        It will help us know more about you
      </Text>
      <View
        style={{
          width: "90%",
          height: 50,
          borderRadius: 15,
          backgroundColor: "#F7F8F8",
          justifyContent: "center",
          marginHorizontal: 20,
          marginTop: 20,
        }}
      >
        <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
          <MaterialCommunityIcons
            name="account-multiple-outline"
            size={24}
            color="grey"
          />
          <TextInput
            placeholder="Gender"
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
          marginTop: 20,
        }}
      >
        <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
          <MaterialCommunityIcons name="calendar" size={24} color="grey" />
          <TextInput
            placeholder="Date of Birth"
            style={{ width: "80%", marginHorizontal: 10 }}
          />
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: "75%",
            height: 50,
            borderRadius: 15,
            backgroundColor: "#F7F8F8",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
            <MaterialCommunityIcons
              name="scale-bathroom"
              size={24}
              color="grey"
            />
            <TextInput
              placeholder="Weight"
              secureTextEntry
              style={{ width: "80%", marginHorizontal: 10 }}
            />
          </View>
        </View>
        <View>
          <Image
            source={require("../assets/Button-Kg.png")}
            style={{ marginTop: 21 }}
          />
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: "75%",
            height: 50,
            borderRadius: 15,
            backgroundColor: "#F7F8F8",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
            <MaterialCommunityIcons
              name="human-male-height"
              size={24}
              color="black"
            />
            <TextInput
              placeholder="Height"
              secureTextEntry
              style={{ width: "80%", marginHorizontal: 10 }}
            />
          </View>
        </View>
        <View>
          <Image
            source={require("../assets/Button-Kg.png")}
            style={{ marginTop: 21 }}
          />
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("ProfileType")}
        style={{
          width: "80%",
          height: 50,
          backgroundColor: "#7990CB",
          marginTop: 50,
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
          Next {" >"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ProfileCheck;

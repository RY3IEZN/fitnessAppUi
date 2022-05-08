/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Shapes from "../data/bodyType";

function ProfileType(props) {
  const ShapeList = ({ item }) => {
    return (
      <View
        style={{
          width: 290,
          height: 500,
          backgroundColor: "#7990CB",
          marginHorizontal: 50,
          marginTop: 10,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={item.img} />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              marginHorizontal: 5,
              color: "white",
              fontWeight: "700",
              fontSize: 15,
              marginTop: 10,
            }}
          >
            {item.name}
          </Text>
          <View
            style={{
              width: 50,
              height: 1,
              borderColor: "white",
              borderWidth: 1,
            }}
          ></View>
          <Text
            style={{
              marginHorizontal: 5,
              color: "white",
              fontSize: 12,
              marginTop: 5,
              textAlign: "center",
              marginHorizontal: 5,
            }}
          >
            {item.description}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          alignItems: "center",
          textAlign: "center",
          fontSize: 25,
          fontWeight: "bold",
          marginTop: 70,
        }}
      >
        What is your goal ?
      </Text>
      <Text
        style={{
          alignItems: "center",
          textAlign: "center",
          color: "grey",
          fontSize: 13,
        }}
      >
        It will help us to choose a program
      </Text>
      <Text
        style={{
          alignItems: "center",
          textAlign: "center",
          color: "grey",
          fontSize: 13,
        }}
      >
        that best fits you
      </Text>
      <FlatList
        snapToAlignment={"center"}
        decelerationRate={"fast"}
        pagingEnabled={true}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={2}
        keyExtractor={(item) => item.id}
        data={Shapes}
        renderItem={ShapeList}
        centerContent={true}
      />

      <TouchableOpacity
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
            fontSize: 18,
          }}
        >
          Confirm
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ProfileType;

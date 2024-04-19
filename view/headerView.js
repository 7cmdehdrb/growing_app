import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Header } from "react-native-elements";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const HeaderView = ({ mainState, setMainState }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        backgroundColor="black"
        leftComponent={
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.object}
            onPress={() => {
              setMainState(0);
            }}
          >
            <Entypo name="home" size={24} color="white" />
          </TouchableOpacity>
        }
        centerComponent={
          <View>
            <Text style={styles.text}>APPLICATION</Text>
          </View>
        }
        rightComponent={
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.object}
            onPress={() => {
              console.log("HELLO +");
            }}
          >
            <AntDesign name="pluscircleo" size={24} color="white" />
          </TouchableOpacity>
        }
      ></Header>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "flex-start", // 하단에 정렬
  },
  object: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
  },
});

export default HeaderView;

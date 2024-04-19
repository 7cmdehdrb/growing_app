import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const NavbarView = ({ mainState, setMainState }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.bar}
        onPress={() => setMainState(0)}
      >
        <Entypo name="home" size={30} color="white" />
        <Text style={styles.text}>홈</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.bar}
        onPress={() => setMainState(1)}
      >
        <AntDesign name="calendar" size={30} color="white" />
        <Text style={styles.text}>기록</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.bar}
        onPress={() => setMainState(2)}
      >
        <Ionicons name="albums" size={30} color="white" />
        <Text style={styles.text}>엘범</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.bar}
        onPress={() => setMainState(3)}
      >
        <Entypo name="menu" size={30} color="white" />
        <Text style={styles.text}>메뉴</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end", // 하단에 정렬
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "gray", // 테두리 색상
    borderStyle: "solid", // 테두리 스타일: solid, dotted, dashed 등
  },
  bar: {
    flex: 1,
    backgroundColor: "black", // 바의 배경색
    alignItems: "center", // 수평 가운데 정렬
    justifyContent: "center", // 수직 가운데 정렬
    paddingVertical: 10,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
    paddingTop: 5,
  },
});

export default NavbarView;

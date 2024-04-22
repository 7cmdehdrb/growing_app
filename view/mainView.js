import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  Rating,
  SearchBar,
  ListItem,
  Button,
  Icon,
} from "react-native-elements";

const MainView = ({ item, onDelete }) => {
  const renderRightActions = () => (
    <Icon
      name="delete"
      type="material"
      color="white"
      onPress={() => console.log("HELLO WORLD!")}
      containerStyle={{ backgroundColor: "red", padding: 10 }}
    />
  );

  return (
    <View style={styles.container}>
      <Text>Main View</Text>
      <View style={styles.trapezoid}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  trapezoid: {
    width: 100,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "blue",
    transform: [{ rotate: "45deg" }],
  },
});

export default MainView;

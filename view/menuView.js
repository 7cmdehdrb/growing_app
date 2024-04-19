import React from "react";
import { StyleSheet, View, Text } from "react-native";

const MenuView = () => {
  return (
    <View style={styles.container}>
      <Text>Menu View</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default MenuView;

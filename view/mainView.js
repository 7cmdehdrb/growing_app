import React from "react";
import { View, StyleSheet, Text } from "react-native";

const MainView = () => {
  return (
    <View style={styles.container}>
      <Text>Main View</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default MainView;

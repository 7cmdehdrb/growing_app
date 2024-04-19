import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// import views
import SwitchView from "./view/switchView";

// import parts
import HeaderView from "./view/headerView";
import NavbarView from "./view/navbarView";

export default function App() {
  const [mainState, setMainState] = useState(0);

  /*
  {
    0: home
    1: archive
    2. album
    3. menu
  }
  */

  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <HeaderView mainState={mainState} setMainState={setMainState} />
        <SwitchView mainState={mainState} setMainState={setMainState} />
        <NavbarView mainState={mainState} setMainState={setMainState} />
      </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8D8D8", // 배경색 설정
  },
});

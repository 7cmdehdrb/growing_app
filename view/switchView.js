import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import MainView from "./mainView";
import AlbumView from "./albumView";
import ListView from "./listView";
import MenuView from "./menuView";

const SwitchView = ({ mainState, setMainState }) => {
  /*
  {
    0: home
    1: archive
    2. album
    3. menu
  }
  */

  switch (mainState) {
    case 0:
      return <MainView />;
      break;

    case 1:
      return <ListView />;
      break;

    case 2:
      return <AlbumView />;
      break;

    case 3:
      return <MenuView />;
      break;

    default:
      return <MainView />;
      break;
  }

  return (
    <View style={styles.container}>
      <Text>HELLO WORLD!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SwitchView;

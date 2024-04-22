import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import views
import SwitchView from "./view/switchView";
import MainView from "./view/mainView";
import AlbumView from "./view/albumView";
import ListView from "./view/listView";
import MenuView from "./view/menuView";

// import parts
import HeaderView from "./view/headerView";
import NavbarView from "./view/navbarView";

// Stack Navigator 생성
const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <NavigationContainer>
          <HeaderView />
          <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Main" component={MainView} />
            <Stack.Screen name="Album" component={AlbumView} />
            <Stack.Screen name="List" component={ListView} />
            <Stack.Screen name="Menu" component={MenuView} />
          </Stack.Navigator>
          <NavbarView />
        </NavigationContainer>
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

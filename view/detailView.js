import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const ITEM_WIDTH = width / 3;

const DetailView = ({ route }) => {
  const navigation = useNavigation();

  const changeScreen = (screen) => {
    navigation.navigate(screen);
  };

  const { id, name, url } = route.params;

  //   fake data
  const data = [];

  for (let index = 0; index < 31; index++) {
    data.push({
      id: index,
      name: "Item " + index,
      url: `https://picsum.photos/seed/${index}/200/200`,
    });
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.item}
      onPress={() => {
        console.log("Press Image");
      }}
    >
      <Image source={{ uri: item.url }} style={styles.image} />
      {/* <Text>{item.url}</Text> */}
    </TouchableOpacity>
  );

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container_profile}>{/* 프로필 상단 */}</View>
      <View style={styles.container_images}>
        {/* 사진 목록 */}
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={renderItem}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container_profile: {
    flex: 1,
    backgroundColor: "white",
    // height: height * 0.3,
    height: "auto",
  },
  container_images: {
    flex: 1,
  },
  item: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    borderWidth: 1,
    borderColor: "gray",
  },
  image: {
    flex: 1,
  },
});

export default DetailView;

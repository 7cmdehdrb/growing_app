import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Overlay } from "react-native-elements";

const { width, height } = Dimensions.get("window");
const ITEM_WIDTH = width / 3;

const AlbumView = () => {
  const data = [];

  for (let index = 0; index < 31; index++) {
    data.push({
      id: index,
      name: "Item " + index,
      url: `https://picsum.photos/seed/${index}/200/200`,
    });
  }

  const [visible, setVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState("https://picsum.photos/200");

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.item}
      onPress={() => {
        toggleOverlay();
        setImageUrl(item.url);
      }}
    >
      {/* <Text>{item.url}</Text> */}
      <Image source={{ uri: item.url }} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={renderItem}
      />
      <Overlay
        overlayStyle={styles.overlay}
        isVisible={visible}
        onBackdropPress={toggleOverlay}
      >
        <View style={styles.image_wrap}>
          <Image
            // source={{ uri: imageUrl }}
            source={{ uri: "https://picsum.photos/1920/1080" }}
            style={styles.overlay_image}
            resizeMode="contain"
          />
          <View style={styles.test}>
            <Text>그냥 이미지 설명이다</Text>
          </View>
        </View>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
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
  overlay: {
    flex: 1,
    marginVertical: height * 0.1,
  },
  image_wrap: {
    width: width * 0.8,
    height: "100%",
  },
  overlay_image: {
    flex: 4,
  },
  test: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
});

export default AlbumView;

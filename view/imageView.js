import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";

const ImageView = ({ route }) => {
  const { data, list } = route.params;

  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      showsPagination={false}
      index={data.id}
    >
      {list.map((item, index) => (
        <View key={index} style={styles.slide}>
          <Image source={{ uri: item.url }} style={styles.image} />
        </View>
      ))}
      {/* 추가적인 이미지 슬라이드 추가 가능 */}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default ImageView;

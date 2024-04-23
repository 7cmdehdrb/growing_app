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
import { Button } from "react-native-elements";

const { width, height } = Dimensions.get("window");
const ITEM_WIDTH = width / 3;

const DetailView = ({ route }) => {
  const navigation = useNavigation();

  const changeScreen = (screen, data) => {
    navigation.navigate(screen, data);
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
        changeScreen("Image", {
          data: item,
          list: data,
        });
      }}
    >
      <Image source={{ uri: item.url }} style={styles.image} />
      {/* <Text>{item.url}</Text> */}
    </TouchableOpacity>
  );

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container_profile}>
        {/* 프로필 상단 */}
        <View style={{ height: height * 0.35 * 0.6, flexDirection: "row" }}>
          <View
            style={{
              flex: 1, // 이미지 컨테이너가 화면 전체를 차지하도록 설정
              justifyContent: "center", // 수직 방향으로 가운데 정렬
              alignItems: "center", // 수평 방향으로 가운데 정렬
              marginHorizontal: 20,
            }}
          >
            {/* 대표 이미지 */}
            <Image
              source={{ uri: "https://picsum.photos/200/200" }}
              style={{
                width: height * 0.35 * 0.35,
                height: height * 0.35 * 0.35,
                resizeMode: "cover",
                borderRadius: height * 0.35 * 0.35 * 0.5,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center", // 수직 방향으로 가운데 정렬
              alignItems: "center", // 수평 방향으로 가운데 정렬
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold", marginBottom: 5 }}>
              10
            </Text>
            <Text style={{ fontSize: 15 }}>사진</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center", // 수직 방향으로 가운데 정렬
              alignItems: "center", // 수평 방향으로 가운데 정렬
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold", marginBottom: 5 }}>
              좋음
            </Text>
            <Text style={{ fontSize: 15 }}>상태</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center", // 수직 방향으로 가운데 정렬
              alignItems: "center", // 수평 방향으로 가운데 정렬
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold", marginBottom: 5 }}>
              04/23
            </Text>
            <Text style={{ fontSize: 15 }}>업데이트</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 5,
          }}
        >
          <Button
            title="대표사진 변경"
            buttonStyle={{
              backgroundColor: "black",
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 30,
            }}
            containerStyle={{
              width: "30%",
              marginHorizontal: 10,
            }}
            titleStyle={{ fontWeight: "bold" }}
          />
          <Button
            title="사진 추가"
            buttonStyle={{
              backgroundColor: "black",
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 30,
            }}
            containerStyle={{
              width: "30%",
              marginHorizontal: 10,
            }}
            titleStyle={{ fontWeight: "bold" }}
          />
          <Button
            title="???"
            buttonStyle={{
              backgroundColor: "black",
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 30,
            }}
            containerStyle={{
              width: "30%",
              marginHorizontal: 10,
            }}
            titleStyle={{ fontWeight: "bold" }}
          />
        </View>
      </View>
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
    height: height * 0.35,
  },
  container_images: {
    flex: 1,
  },
  profile_text: {
    fontSize: 20,
    fontWeight: "bold",
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

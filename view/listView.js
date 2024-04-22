import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Rating, SearchBar, ListItem, Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import {
  FontAwesome,
  MaterialIcons,
  AntDesign,
  EvilIcons,
} from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const ListView = () => {
  const navigation = useNavigation();

  const changeScreen = (screen, data) => {
    navigation.navigate(screen, data);
  };

  const [search, setSearch] = useState("");

  const folderData = [
    { id: 1, name: "Folder1" },
    { id: 2, name: "Folder2" },
    { id: 3, name: "Folder3" },
    { id: 4, name: "Folder4" },
    { id: 5, name: "Folder5" },
    { id: 6, name: "Folder6" },
    { id: 7, name: "Folder7" },
  ];
  var data = [];

  for (let index = 0; index < 31; index++) {
    data.push({
      id: index,
      name: `${index}번째 이름입니다`,
      url: `https://picsum.photos/seed/${index}/200/200`,
    });
  }

  const renderFolder = ({ item }) => (
    <TouchableOpacity
      style={{
        paddingHorizontal: 10,
        marginHorizontal: 5,
        backgroundColor: "#D3D3D3",
        borderRadius: 10,
      }}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.listitem}
      onPress={() => {
        console.log("Detail");
        changeScreen("Detail", item);
      }}
    >
      <Image style={styles.image} source={{ uri: item.url }}></Image>
      <View style={styles.detail}>
        <View style={styles.detail_name}>
          <Text style={styles.text_name}>{item.name}</Text>
        </View>
        <View style={styles.detail_rating}>
          <Rating
            style={styles.rating}
            readonly={true}
            ratingCount={5}
            startingValue={3.3}
            ratingBackgroundColor="red"
            imageSize={20}
          ></Rating>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* 화면 Container */}
      <View style={styles.searchContainer}>
        {/* Search Bar Container */}
        <SearchBar
          containerStyle={styles.searchBar}
          inputContainerStyle={{ backgroundColor: "#D3D3D3", borderRadius: 10 }}
          searchIcon={
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                console.log("DO SEARCH");
              }}
            >
              <FontAwesome name="search" size={20} color="black" />
            </TouchableOpacity>
          }
          clearIcon={
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                setSearch("");
              }}
            >
              <MaterialIcons name="clear" size={20} color="black" />
            </TouchableOpacity>
          }
          placeholder="이름으로 검색하기"
          onChangeText={setSearch}
          value={search}
        />
      </View>
      <View>
        <FlatList
          style={{
            paddingVertical: 5,
            marginBottom: 10,
          }}
          data={folderData}
          keyExtractor={(item) => item.id}
          renderItem={renderFolder}
          ListFooterComponent={
            <TouchableOpacity
              style={{
                paddingHorizontal: 10,
                marginHorizontal: 5,
                backgroundColor: "#D3D3D3",
                borderRadius: 10,
              }}
            >
              <Text>+</Text>
            </TouchableOpacity>
          }
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {/* <Divider width={2} color={"gray"} /> */}
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    padding: 10,
  },
  listContainer: {
    flex: 1,
  },
  listitem: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  image: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: width * 0.2 * 0.5,
    overflow: "hidden",
  },
  detail: {
    flex: 1,
    paddingLeft: 10,
  },
  detail_name: {
    flex: 1,
    justifyContent: "center",
  },
  detail_rating: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    backgroundColor: "transparent",
  },
  text_name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  searchBar: {
    borderRadius: 10,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 5,
  },
});

export default ListView;

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
import { Rating, SearchBar } from "react-native-elements";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const ListView = () => {
  const [search, setSearch] = useState("");

  var data = [];

  for (let index = 0; index < 31; index++) {
    data.push({
      id: index,
      name: `${index}번째 이름`,
      url: `https://picsum.photos/seed/${index}/200/200`,
    });
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity activeOpacity={0.8} style={styles.listitem}>
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
      <View style={styles.searchContainer}>
        <SearchBar
          containerStyle={styles.searchBar}
          inputContainerStyle={{ backgroundColor: "transparent" }}
          searchIcon={
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                console.log("DO SEARCH");
                data = [];
              }}
            >
              <FontAwesome name="search" size={20} color="white" />
            </TouchableOpacity>
          }
          clearIcon={
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                setSearch("");
              }}
            >
              <MaterialIcons name="clear" size={20} color="white" />
            </TouchableOpacity>
          }
          placeholder="이름으로 검색하기"
          onChangeText={setSearch}
          value={search}
        />
      </View>
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
  searchContainer: {
    // flex: 1,
    padding: 10,
  },
  listContainer: {
    // flex: 1,
  },
  searchBar: {
    borderRadius: 10,
  },
});

export default ListView;

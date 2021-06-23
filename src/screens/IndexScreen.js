import axios from "axios";
import React from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/action/userAction";

const IndexScreen = ({ navigation }) => {
  const userList = useSelector((state) => state.user.userList);
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    const res = await axios.delete(
      `https://60c1ee034f7e880017dc0d4f.mockapi.io/api/v1/User/${id}`
    );
    if (res) {
      await dispatch(getUser());
      alert("Xoa thanh cong");
    }
  };

  // const handleGetUsers = () => {
  //   dispatch(getUser());
  // };

  React.useEffect(() => {
    console.log(userList);
  }, [userList]);

  React.useEffect(() => {
    dispatch(getUser());
    // handleGetUsers();
  }, []);

  // "name": "name 1",
  // "avatar": "avatar 1",
  // "phone": 29,
  // "birthday": 3,
  // "Address": [],
  // "Family": {}

  return (
    <View>
      <Button
        title="Create User"
        onPress={() => navigation.navigate("Create")}
      />
      <Text>Test</Text>
      <FlatList
        data={userList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.name}</Text>
              <Text>{item.phone}</Text>
              <Image
                source={{ uri: item.avatar || "" }}
                style={{ width: 100, height: 100 }}
              />
              <Text>{item.birthday}</Text>
              {/* <Text>{item.Address}</Text>
              <Text>{item.Family}</Text> */}
              <Button title="delete" onPress={() => handleDelete(item.id)} />
              <Button
                title="click Item"
                onPress={() => navigation.navigate("Update", { data: item })}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({});

import React from "react";
import { Text, View, TextInput, Button, Alert, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/action/userAction";

const UpdateScreen = ({ navigation }) => {
    const dispatch = useDispatch();

  //   console.log(navigation.state.params.data);
  const dataA = navigation.state.params.data;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // dataA.name = data.name;
    // dataA.phone = data.phone;
    // console.log(dataA);

    updateUser(data);
  };
  const updateUser = async (data) => {
    await axios.put(
      `https://60c1ee034f7e880017dc0d4f.mockapi.io/api/v1/User/${dataA.id}`,
      data
    );
    await dispatch(getUser());
    navigation.navigate("Index");
  };
  return (
    <View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="name"
        rules={{ required: true }}
        defaultValue={dataA.name}
      />
      {errors.name && <Text>This is required.</Text>}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            keyboardType="numeric"
          />
        )}
        name="phone"
        defaultValue={dataA.phone}
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default UpdateScreen;

const styles = StyleSheet.create({});

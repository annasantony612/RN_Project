import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Button from "../components/Button";
import CategoryPg from "./CategoryPg";

const Home = ({ navigation }) => {
  console.log(navigation);
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to FaMoney</Text>
      </View>
      <View style={styles.container1}>
        <Button
          onPress={() => navigation.navigate("CategoryPg")}
          navigation={navigation}
          title="Add Expenses"
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontSize: 13,
  },
  container1: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
});

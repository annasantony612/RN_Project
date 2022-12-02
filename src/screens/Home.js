import { View, Text, Button } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "black", fontSize: 13 }}>Welcome to FaMoney</Text>
    </View>
  );
};

export default Home;

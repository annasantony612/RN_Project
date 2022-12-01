import { View, Text, Button } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text style={{ color: "black", fontSize: 30 }}>Home</Text>

      <Button title=" home" onPress={() => navigation.navigate("History")} />
    </View>
  );
};

export default Home;

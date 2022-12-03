import { View, Text, StyleSheet } from "react-native";
import React from "react";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>FaMoney</Text>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#02C3BD",
    paddingVertical: 18,
    paddingHorizontal: 25,
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
  },
});

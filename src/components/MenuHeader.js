import { View, Text, StyleSheet } from "react-native";
import React from "react";

const MenuHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>FaMoney</Text>
    </View>
  );
};

export default MenuHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#02C3BD",
    paddingVertical: 18,
    paddingHorizontal: 25,
  },
  text: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "700",
  },
});

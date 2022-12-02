import { View, Text, StyleSheet } from "react-native";
import React from "react";

const MenuHeader = () => {
  return (
    <View style={styles.container}>
      <Text>FaMoney</Text>
    </View>
  );
};

export default MenuHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#02C3BD",
    paddingVertical: 18,
    paddingHorizontal: 16,
  },
});

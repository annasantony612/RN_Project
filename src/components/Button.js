import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const CircleButton = ({ navigation, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    ></TouchableOpacity>
  );
};

export default CircleButton;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: "#02C3BD",
    borderRadius: 45,
  },
});

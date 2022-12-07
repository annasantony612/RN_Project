import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ navigation, onPress, title }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.container1} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#02C3BD",
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  container1: {
    backgroundColor: "#02C3BD",
  },
  text: { color: "white", fontSize: 25, fontWeight: "700" },
});

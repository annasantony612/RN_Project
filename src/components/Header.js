import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
// import Icon from "../assets/icons";
// import { Icon } from "../assets/Icon";
const Header = ({ children }) => {
  return (
    <SafeAreaView style={styles.HeaderContainer}>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  HeaderContainer: {
    backgroundColor: "#02C3BD",
    paddingVertical: 18,
    paddingHorizontal: 16,
    flexDirection: "row",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
});

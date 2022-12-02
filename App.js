import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Routes from "./src/Routes";

const App = () => {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default App;

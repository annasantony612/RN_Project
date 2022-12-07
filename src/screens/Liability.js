import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Button from "../components/Button";
import { TextInput } from "react-native-gesture-handler";

const Liability = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.text1}>💰Add Liabilities</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text2}>Name</Text>

        <TextInput
          style={{
            width: 300,
            height: 41,
            backgroundColor: "#D9D9D9",
            borderRadius: 10,
          }}
        ></TextInput>
        <Text style={{ paddingBottom: 10, paddingTop: 30, color: "black" }}>
          Total Amount
        </Text>

        <TextInput
          style={{
            width: 300,
            height: 41,
            backgroundColor: "#D9D9D9",
            borderRadius: 10,
          }}
        ></TextInput>
        <Text style={{ paddingBottom: 10, paddingTop: 30, color: "black" }}>
          Installment Amount
        </Text>

        <TextInput
          style={{
            width: 300,
            height: 41,
            backgroundColor: "#D9D9D9",
            borderRadius: 10,
          }}
        ></TextInput>
      </View>
      <View style={styles.container3}>
        <Button title="save" />
      </View>
    </View>
  );
};

export default Liability;
styles = StyleSheet.create({
  container: { flex: 1 },
  container1: { flex: 1, alignItems: "center", justifyContent: "center" },
  container2: { flex: 3, paddingLeft: 30 },
  container3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  text1: {
    color: "black",
    opacity: 90,
    fontSize: 28,
    fontWeight: "700",
  },
  text2: { color: "black", paddingBottom: 10 },
  text3: { color: "black" },
});

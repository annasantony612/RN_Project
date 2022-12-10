import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Button from "../components/Button";
import { TextInput } from "react-native-gesture-handler";
import SQLite from "react-native-sqlite-storage";
import { useState, useEffect } from "react";
import Home from "./Home";

const db = SQLite.openDatabase(
  {
    name: "MainDB",
    location: "default",
  },
  () => {},
  (error) => {
    console.log(error);
  }
);

export default function Login({ navigation }) {
  const [name, setName] = useState("");
  const [totalamount, setTotalAmount] = useState("");
  const [installmentamount, setInstallmentAmount] = useState("");

  useEffect(() => {
    createTable();
    getData();
  }, []);
  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS " +
          "Users " +
          "(Name  TEXT PRIMARY KEY AUTOINCREMENT, TotalAmount INTEGER, InstallmentAmount INTEGER);"
      );
    });
  };
  const getData = () => {
    try {
      // AsyncStorage.getItem('UserData')
      //     .then(value => {
      //         if (value != null) {
      //             navigation.navigate('Home');
      //         }
      //     })
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT Name, TotalAmount ,Installment FROM Users",
          [],
          (tx, results) => {
            var len = results.rows.length;
            if (len > 0) {
              navigation.navigate("Home");
            }
          }
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setData = async () => {
    if (name.length == 0 || age.length == 0) {
      Alert.alert("Warning!", "Please write your data.");
    } else {
      try {
        // var user = {
        //     Name: name,
        //     Age: age
        // }
        // await AsyncStorage.setItem('UserData', JSON.stringify(user));
        await db.transaction(async (tx) => {
          // await tx.executeSql(
          //     "INSERT INTO Users (Name, Age) VALUES ('" + name + "'," + age + ")"
          // );
          await tx.executeSql(
            "INSERT INTO Users (Name, TotalAmount, InstallmentAmount) VALUES (?,?)",
            [name, totalamount, installmentamount]
          );
        });
        navigation.navigate("Home");
      } catch (error) {
        console.log(error);
      }
    }
  };
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
        <Button
          onPress={() => navigation.navigate({ name: Home })}
          navigation={navigation}
          title="Continue"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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

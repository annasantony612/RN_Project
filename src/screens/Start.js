import { View, Text } from "react-native";
import React from "react";
import Button from "../components/Button";
import { TextInput } from "react-native-gesture-handler";
import { openDatabase, enablePromise } from "react-native-sqlite-storage";

import GetStartScreen from "../Routes";
import { AuthContext } from "../Context";
const Start = () => {
  const [phone, setPhone] = React.useState();
  const { signIn } = React.useContext(AuthContext);

  async function example() {
    try {
      enablePromise(true);
      let db = await openDatabase({
        name: "MainDB1",
        location: "default",
      });

      let res = await db.executeSql(`
              CREATE TABLE IF NOT EXISTS users
                (Name  TEXT ,email TEXT, phone TEXT);
      `);
      res = await db.executeSql(
        `INSERT INTO users VALUES("anna","email", "p");`
      );

      res = await db.executeSql("SELECT * FROM users;");

      console.log(res.forEach((r) => console.log(r.rows.raw())));

      db.close();
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 3,
          paddingLeft: 30,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ paddingBottom: 10, paddingTop: 30, color: "black" }}>
          Name
        </Text>
        <TextInput
          style={{
            width: 300,
            height: 41,
            backgroundColor: "#D9D9D9",
            borderRadius: 10,
            color: "black",
          }}
        ></TextInput>
        <Text style={{ paddingBottom: 10, paddingTop: 30, color: "black" }}>
          Email ID
        </Text>

        <TextInput
          style={{
            width: 300,
            height: 41,
            backgroundColor: "#D9D9D9",
            borderRadius: 10,
            color: "black",
          }}
        ></TextInput>
        <Text style={{ paddingBottom: 10, paddingTop: 30, color: "black" }}>
          Mobile Number
        </Text>

        <TextInput
          style={{
            width: 300,
            height: 41,
            backgroundColor: "#D9D9D9",
            borderRadius: 10,
            color: "black",
          }}
          onChangeText={(e) => setPhone(e)}
        ></TextInput>
      </View>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button onPress={() => example().then((_) => signIn())} title="Login" />
      </View>
    </View>
  );
};

export default Start;

import { View, Text, Button } from "react-native";
import React from "react";
import { AuthContext } from "../Context";
import { openDatabase, enablePromise } from "react-native-sqlite-storage";

const Profile = ({ navigation }) => {
  async function example() {
    try {
      enablePromise(true);
      let db = await openDatabase({
        name: "MainDB1",
        location: "default",
      });

      let res = await db.executeSql("SELECT * FROM users;");

      let user = [];
      console.log(res.forEach((r) => user.push(r.rows.raw())));
      setU(user[0]);
      db.close();
    } catch (error) {
      console.log("error", error);
    }
  }

  React.useEffect(() => {
    example();
  }, []);

  const [u, setU] = React.useState();
  const { signOut } = React.useContext(AuthContext);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 2,
          backgroundColor: "#02C3BD",
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}
      >
        <View
          style={{ flexDirection: "column", paddingLeft: 30, paddingTop: 20 }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 40,
              fontWeight: "700",
              paddingBottom: 10,
            }}
          >
            {u[0].Name}
          </Text>
          <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "700" }}>
            {u[0].email}
          </Text>
          <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "700" }}>
            {u[0].phone}
          </Text>
        </View>
      </View>
      <View style={{ flex: 2 }}></View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button onPress={() => signOut()} title="Sign out" />
      </View>
    </View>
  );
};

export default Profile;

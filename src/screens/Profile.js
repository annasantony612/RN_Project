import { View, Text, Button } from "react-native";
import React from "react";
import { AuthContext } from "../Context";

const Profile = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 4 }}>{/* <Atmcard /> */}</View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button onPress={() => signOut()} title="Sign out" />
      </View>
    </View>
  );
};

export default Profile;

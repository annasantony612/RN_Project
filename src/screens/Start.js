import { View, Text } from "react-native";
import React from "react";
import Button from "../components/Button";

import Atmcard from "../../assets/Atmcard.png";
import GetStartScreen from "../Routes";
import { AuthContext } from "../Context";
const Start = () => {
  const { signIn } = React.useContext(AuthContext);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 4 }}>{/* <Atmcard /> */}</View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button onPress={() => signIn()} title="Get Started" />
      </View>
    </View>
  );
};

export default Start;

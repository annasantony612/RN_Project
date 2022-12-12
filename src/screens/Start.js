import { View, Text } from "react-native";
import React from "react";
import Button from "../components/Button";

import Atmcard from "../../assets/Atmcard.png";
import GetStartScreen from "../Routes";
const Start = (navigation) => {
  // const { start } = GetStartScreen;
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 4 }}>{/* <Atmcard /> */}</View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          onPress={async () => navigate.navigate("GetStartScreen")}
          //   onPress={() => navigation.navigate(<Routes />)}
          navigation={navigation}
          title="Get Started"
        />
      </View>
    </View>
  );
};

export default Start;

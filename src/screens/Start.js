import { View, Text } from "react-native";
import React from "react";
import Button from "../components/Button";
import Routes from "../Routes";
//import Atmcard from "../../assets/Atmcard.png";
const Start = (navigation) => {
  const { start } = useStart;
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 4 }}>{/* <Atmcard /> */}</View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          onPress={async () => await start()}
          //   onPress={() => navigation.navigate(<Routes />)}
          //   navigation={navigation}
          title="Get Started"
        />
      </View>
    </View>
  );
};

export default Start;

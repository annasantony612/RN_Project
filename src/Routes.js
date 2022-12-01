import { View, Text } from "react-native";
import React from "react";
import Profile from "./screens/Profile";
import Home from "./screens/Home";
import History from "./screens/History";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CategoryPg from "./screens/CategoryPg";

const TabsScreen = () => {
  return <NavigationContainer></NavigationContainer>;
};
const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="CategoryPg" component={CategoryPg} />
  </HomeStack.Navigator>;
};
// const ProfileStack= createStackNavigator ();
// const ProfileStackScreen =() =>
// {
//   <ProfileStack.Navigator>
//     <ProfileStack.Screen name = ""
//   </ProfileStack.Navigator>
// }

const Tabs = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="HomeStack" component={HomeStackScreen} />
        <Tabs.Screen name="Profile" children={Profile} />
        <Tabs.Screen name="History" component={History} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

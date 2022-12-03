import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Profile from "./screens/Profile";
import Home from "./screens/Home";
import History from "./screens/History";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CategoryPg from "./screens/CategoryPg";
import Header from "./components/Header";
import MenuHeader from "./components/MenuHeader";

const PageHeader = ({ navigation, title }) => (
  <Header>
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </Header>
);

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
        <Tabs.Screen
          name="HomeStack"
          component={HomeStackScreen}
          options={{
            header: MenuHeader,
          }}
        />

        <Tabs.Screen
          name="History"
          component={History}
          options={{
            header: ({ navigation }) => <PageHeader title="History" />,
          }}
        />
        <Tabs.Screen
          name="Profile"
          component={Profile}
          options={{
            header: ({ navigation }) => <PageHeader title="Profile" />,
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
  },
});

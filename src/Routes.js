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
import HomeHeader from "./components/HomeHeader";
import Liability from "./screens/Liability";
import Bills from "./screens/Bills";
// import DataBase from "./screens/DataBase";

const PageHeader = ({ navigation, title }) => (
  <Header>
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </Header>
);

{
  // <DataBase />;
}

const TabsScreen = () => {
  return <NavigationContainer></NavigationContainer>;
};
const HomeStack = createStackNavigator();
const HomeScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="CategoryPg"
        component={CategoryPg}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Liability"
        component={Liability}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Bills"
        component={Bills}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
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
          component={HomeScreen}
          options={{
            header: ({ navigation }) => <HomeHeader title="FaMoney" />,
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

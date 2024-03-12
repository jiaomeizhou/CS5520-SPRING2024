import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "./components/Home";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetails from "./components/GoalDetails";
import Signup from "./components/Signup";
import Login from "./components/Login";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Signup"
        screenOptions={{
          headerStyle: { backgroundColor: "#929" },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />

        <Stack.Screen
          options={{
            headerTitle: "All My Goals",
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={({ route }) => {
            return {
              headerTitle: route.params ? route.params.data.text : "Details",
            };
          }}
          name="Details"
          component={GoalDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
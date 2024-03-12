import { Pressable, StyleSheet, Text, View } from "react-native";
import { React, useState, useEffect } from "react";
import Home from "./components/Home";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetails from "./components/GoalDetails";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { auth } from "./firebase-files/firebaseSetup";
import Profile from "./components/Profile";
import PressableButton from "./components/PressableButton";
import { AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  console.log("userLoggedIn: ", userLoggedIn);

  // check if user is logged in， if no useEffect, it will check every time
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserLoggedIn(true);
      } else {
        setUserLoggedIn(false);
      }
    });
  }, []);

  const AuthStack = <>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
  </>

  const AppStack = <>
    <Stack.Screen
        options={({ navigation }) => {
          return {
            headerTitle: "All My Goals",
            headerRight: () => {
              return (
                <PressableButton
                  onPressFunction={() => {
                    navigation.navigate("Profile");
                  }}
                >
                  <AntDesign name="profile" size={24} color="black" />
                </PressableButton>
              );
            },
          };
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
    <Stack.Screen name="Profile" component={Profile} />
  </>


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Signup"
        screenOptions={{
          headerStyle: { backgroundColor: "#929" },
          headerTintColor: "white",
        }}
      >
        {userLoggedIn ? AppStack : AuthStack}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
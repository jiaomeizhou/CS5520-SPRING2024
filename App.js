import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, View, Text } from "react-native";
import Header from "./components/Header";
import { useState } from "react";
import Input from "./components/Input";

export default function App() {
  const appName = "My awesome app";
  const [text, setText] = useState("");
  function receiveInput(data) {
    console.log("recieved data from input ", data);
    setText(data);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header name={appName} version={2} />
      <Input inputHandler={receiveInput}/>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
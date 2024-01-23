import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, View, Text, Button, SafeAreaView} from "react-native";
import Header from "./components/Header";
import { useState } from "react";
import Input from "./components/Input";

export default function App() {
  const appName = "My awesome app";
  const [text, setText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  function receiveInput(data) {
    console.log("recieved data from input ", data);
    setText(data);
    setIsModalVisible(false);
  }
  function dismissModal() {
    setIsModalVisible(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
      <StatusBar style="auto" />
      
      <Header name={appName} version={2} />
      <Button title="Add a goal" onPress={() => setIsModalVisible(true)}/>
      <Input inputHandler={receiveInput} modelVisible={isModalVisible} dismissModal={dismissModal}/>
      </View>
      <View style={styles.bottomView}>
      <Text style={styles.text}>{text}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    //alignItems: "center",
    justifyContent: "center",
  },
  topView: {
    flex: 1,
    alignItems: "center",
  },
  bottomView: {
    flex: 4,
    backgroundColor: "lightblue",
  },
  text: {
    textAlign: "center",
  },
});
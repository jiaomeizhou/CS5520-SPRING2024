import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import Header from "./components/Header";
import { useState } from "react";
import Input from "./components/Input";
import GoalItem from "./components/GoalItem";

export default function App() {
  const appName = "My awesome app";
  // const [text, setText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function receiveInput(data) {
    console.log("recieve input ", data);
    // setText(data);
    const newGoal = {
      text: data,
      id: Math.random(),
    }
    setGoals((currentGoals) => { return [...currentGoals, newGoal] });

    setIsModalVisible(false);
    //use this to update the text showing in the
    //Text component
  }
  function dismissModal() {
    setIsModalVisible(false);
  }

  function goalDeleteHandler() {
    console.log("delete pressed");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <StatusBar style="auto" />

        <Header name={appName} version={2} />
        <Button title="Add a goal" onPress={() => setIsModalVisible(true)} />
        <Input
          inputHandler={receiveInput}
          modalVisible={isModalVisible}
          dismissModal={dismissModal}
        />
      </View>
      <View style={styles.bottomView}>
        <GoalItem goals={goals} goalDeleteHandler={goalDeleteHandler}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    justifyContent: "center",
  },
  topView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  bottomView: {
    flex: 4,
    backgroundColor: "lightpink",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    padding: 15,
    borderRadius: 10,
  },
  textContainer: {
    backgroundColor: "grey",
    marginTop: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  scrollViewContent: {
    alignItems: "center",
  },
  flatList: {
    alignItems: "center",
},
});
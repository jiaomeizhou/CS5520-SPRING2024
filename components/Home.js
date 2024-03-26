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
  Pressable,
} from "react-native";
import Header from "./Header";
import { useState, useEffect } from "react";
import Input from "./Input";
import GoalItem from "./GoalItem";
import PressableButton from "./PressableButton";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { database } from "../firebase-files/firebaseSetup";
import { writeToDB, deleteFromDB } from "../firebase-files/firestoreHelper";
import { auth } from "../firebase-files/firebaseSetup";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase-files/firebaseSetup";



export default function Home({ navigation }) {
  useEffect(() => {
    // set up a listener to get the data from the database, only after the first time
    const unsubscribe = onSnapshot(query(collection(database, "goals"), where("owner", "==", auth.currentUser.uid)), (querySnapshot) => {
      // console.log("querySnapshot", querySnapshot);
      const currentGoals = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        currentGoals.push({ ...doc.data(), id: doc.id });
      })
      setGoals(currentGoals);
    },
      (error) => {
        console.log("error getting data", error);
      });
    // cleanup function
    return () => {
      console.log("cleanup");
      unsubscribe();
    }
  }, [])
  console.log(database);
  const appName = "My awesome app";
  // const [text, setText] = useState("");
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  async function receiveInput(data, imageURI) {
    // console.log("recieve input ", data);
    // setText(data);
    console.log("we are in home imageURI", imageURI);
    if (imageURI) {
      try {
        const response = await fetch(imageURI);
        const imageBlob = await response.blob();
        const imageName = uri.substring(uri.lastIndexOf('/') + 1);
        const imageRef = await ref(storage, `images/${imageName}`);
        const uploadResult = await uploadBytes(imageRef, imageBlob);
        console.log("upload result", uploadResult);
      }
      catch (error) {
        console.log("error fetching image", error);
      }
    }
    //1. define a new object {text:.., id:..} and store data in object's text
    // 2. use Math.random() to set the object's id
    // const newGoal = { text: data, id: Math.random() };
    // don't use Math.random() for id generation, use firebase's auto id generation
    const newGoal = { text: data, imageURI: imageURI }
    // write to database
    writeToDB(newGoal, "goals");

    // const newArray = [...goals, newGoal];
    //setGoals (newArray)
    //use updater function whenever we are updating state variables based on the current value
    setGoals((currentGoals) => [...currentGoals, newGoal]);

    // 3. how do I add this object to goals array?
    setIsModalVisible(false);
    //use this to update the text showing in the
    //Text component
  }
  function dismissModal() {
    setIsModalVisible(false);
  }

  function goalDeleteHandler(deletedId) {
    console.log("deleted ", deletedId);
    // remove that from the goals array --> filter
    // const updatedArray = goals.filter((goal) => {
    //   return goal.id !== deletedId;
    // });
    //use updater function whenever we are updating state variables based on the current value

    // setGoals(updatedArray);
    // setGoals((currentGoals) => {
    //   return currentGoals.filter((goal) => {
    //     return goal.id !== deletedId;
    //   });
    // });
    //delete from database
    deleteFromDB(deletedId);

  }

  function goalPressHandler(goalItem) {
    // console.log(goalItem);
    // navigate to GoalDetails using navigation prop
    //We need to pass the goal data to Details page
    navigation.navigate("Details", { data: goalItem });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <StatusBar style="auto" />

        <Header name={appName} version={2} />
        <Button title="Add a goal" onPress={() => setIsModalVisible(true)} />
        {/* <PressableButton customStyle={styles.addButton} onPress={() => setIsModalVisible(true)}>
          <Text>Add a goal</Text>
        </PressableButton> */}
        <Input
          inputHandler={receiveInput}
          modalVisible={isModalVisible}
          dismissModal={dismissModal}
        />
      </View>
      <View style={styles.bottomView}>
        <FlatList
          contentContainerStyle={styles.scrollViewContent}
          data={goals}
          renderItem={({ item }) => {
            return (
              <GoalItem
                goalObj={item}
                deleteFunction={goalDeleteHandler}
                detailFunction={goalPressHandler}
              />
            );
          }}
        />
        {/* <ScrollView contentContainerStyle={styles.scrollViewContent}> */}
        {/* {goals.map((goalObj) => {
            return (
              <View style={styles.textContainer} key={goalObj.id}>
                <Text style={styles.text}>{goalObj.text}</Text>
              </View>
            );
          })} */}
        {/* </ScrollView> */}
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
  scrollViewContent: {
    alignItems: "center",
  },
  bottomView: { flex: 4, backgroundColor: "#dcd" },
  addButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 10,
  },
});
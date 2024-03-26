import { Button, StyleSheet, Text, View, Image} from "react-native";
import React, { useEffect, useState } from "react";
import GoalUsers from "./GoalUsers";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase-files/firebaseSetup";

export default function GoalDetails({ navigation, route }) {
  const [warning, setWatning] = useState(false);
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    async function getImageURL() {
      if (route.params.data) {
        const imageUri = route.params.data.imageUri;
        const imageRef = ref(storage, imageUri);
        const imageDownloadURL = await getDownloadURL(imageRef);
        setImageURL(imageDownloadURL);
      }
    }
    getImageURL();
  }, []);


  function warningHandler() {
    console.log("warning");
    setWatning(true);
  }
  // functions inside useEffect are called after the rendering
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="Warning" color="gray" onPress={warningHandler} />;
      },
    });
  }, []);

  return (
    <View>
      {route.params ? (
        <Text>
          You are viewing details of {route.params.data.text} with id{" "}
          {route.params.data.id}
        </Text>
      ) : (
        <Text> "Extra details"</Text>
      )}
      {warning && <Text style={{ color: "red" }}>WARNING</Text>}
      <Button
        title="extra details"
        onPress={() => navigation.push("Details")}
      />
      <GoalUsers id={route.params.data.id} />
      <Image source={{ uri: imageURL }} style={{ width: 200, height: 200 }} />
    </View>
  );
}

const styles = StyleSheet.create({});
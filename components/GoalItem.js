import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function GoalItem({ goalObj, deleteFunction, detailFunction }) {
  function deleteHandler() {
    deleteFunction(goalObj.id);
  }
  function goalPressHandler() {
    detailFunction(goalObj);
  }
  return (
    <Pressable onPress={goalPressHandler} android_ripple={{color: "white"}}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{goalObj.text}</Text>
        <Button color="black" title="X" onPress={deleteHandler} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 30,
    color: "#929",
    padding: 5,
    borderRadius: 10,
  },
  textContainer: {
    borderRadius: 10,
    backgroundColor: "#aaa",
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },
});
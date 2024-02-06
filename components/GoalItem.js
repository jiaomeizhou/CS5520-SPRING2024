import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function GoalItem({ goalObj, deleteFunction, detailFunction}) {
  function deleteHandler() {
    deleteFunction(goalObj.id);
  }
  function detailHandler() {
    detailFunction(goalObj);
  }

  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{goalObj.text}</Text>
      <Button color="gray" title="X" onPress={deleteHandler} />
      <Button color="gray" title="i" onPress={detailHandler} />
    </View>
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
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import PressableButton from "./PressableButton";
import { Feather } from '@expo/vector-icons';

export default function GoalItem({ goalObj, deleteFunction, detailFunction }) {
  function deleteHandler() {
    deleteFunction(goalObj.id);
  }
  function goalPressHandler() {
    detailFunction(goalObj);
  }
  return (
    <View >
      <Pressable
        style={({ pressed }) => { return [styles.textContainer, pressed && styles.pressed] }}
        onPress={goalPressHandler}
        android_ripple={{ color: "#e9e" }}>
        <Text style={styles.text}>{goalObj.text}</Text>
        {/* <Button color="black" title="X" onPress={deleteHandler} /> */}
        <PressableButton onPress={deleteHandler}>
          <Feather name="delete" size={24} color="green" />
        </PressableButton>
      </Pressable>
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
  pressed: {
    opacity: 0.5,
    backgroundColor: "#e9e"
  },
});
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function Input({inputHandler}) {
  const [text, setText] = useState("");
  // callback handler
  function changeTextHandler(changedText) {
    console.log("user is typing ", changedText);
    setText(changedText);
  }
  function confirmFunction() {
    inputHandler(text);
  }
  return (
    <View>
      <TextInput
        placeholder="Type something"
        style={styles.input}
        value={text}
        onChangeText={changeTextHandler}
      />
      <Button title='Confirm' onPress={confirmFunction} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "purple",
    width: "50%",
  },
});
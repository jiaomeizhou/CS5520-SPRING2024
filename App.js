import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Hearder from './components/Header'
import React, { useState } from 'react'


export default function App() {
  const appName = "My Native App";
  const [text, setText] = useState("");

  // callback handler
  function handleTextChange(changedText) {
    console.log("user is typing", changedText)
    setText(changedText)
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Hearder name={appName} version={2}>
        <Text>child 1</Text>
        <TextInput 
        placeholder='Enter your name'
        style={styles.input}
        value={text} 
        onChangeText={handleTextChange}
         />
      </Hearder>
      <Text>typeing: {text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: 200,
  }
});

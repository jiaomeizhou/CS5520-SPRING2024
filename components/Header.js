import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Header({ name }) {
  return (
    <View>
      <Text style={styles.titleText}>Welcome to {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 20,
    color: "purple",
    borderColor: "purple",
    borderWidth: 2,
    padding: 10,
  },
});
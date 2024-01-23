import { Button, StyleSheet, Text, TextInput, View, Modal, Image } from "react-native";
import React, { useState } from "react";

export default function Input({ inputHandler, modelVisible, dismissModal }) {
    const [text, setText] = useState("");
    // callback handler
    function changeTextHandler(changedText) {
        console.log("user is typing ", changedText);
        setText(changedText);
    }
    function confirmFunction() {
        inputHandler(text);
    }
    function cancelHandler() {
        // hide the modal
        dismissModal();
    }
    return (
        <Modal visible={modelVisible}>
            <View style={styles.container}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2617/2617812.png' }} style={styles.image} />
                <Image source={require('../assets/goal.png')} style={styles.image} />
                <TextInput
                    placeholder="Type something"
                    style={styles.input}
                    value={text}
                    onChangeText={changeTextHandler}
                />
                <Button title='Confirm' onPress={confirmFunction} />
                <Button title="Cancel" onPress={cancelHandler} />
            </View>
        </Modal>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: "purple",
        width: "50%",
    },
    image: {
        width: 50,
        height: 50,
    }
});
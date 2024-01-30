import { View, Text, FlatList, StyleSheet, Button} from 'react-native'
import React from 'react'

export default function GoalItem({ goals, goalDeleteHandler}) {
    function deleteHandler() {
        goalDeleteHandler();
    }
    return (
        <FlatList contentContainerStyle={styles.flatList} data={goals} renderItem={({ item }) => {  // item.item == {item}
            console.log("item ", { item });
            return <View style={styles.textContainer}>
                <Text style={styles.text}>{item.text}</Text>
                <Button title='X' onPress={deleteHandler}/>
            </View>
        }}>
        </FlatList>
    )
}

styles = StyleSheet.create({
    flatList: {
        alignItems: "center",
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
        flexDirection: "row",
    },
})
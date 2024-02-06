import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect } from 'react'

export default function GoalDetails({ navigation, route }) {
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <Button title="warning" color="grey" onPress={() => alert("Are you sure?")} />
            }
        })
    })

    console.log(route);
    return (
        <View>
            <Text>Goal Details</Text>
            <Text>{route.params.goal.id}</Text>
            <Text>{route.params.goal.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
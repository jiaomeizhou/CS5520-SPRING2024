import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function GoalDetails({ route }) {
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
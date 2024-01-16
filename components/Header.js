import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header({name, version, children}) {
    console.log(name, version)
    return (
        <View>
        <Text>Welcome to {name}</Text>
        {children}
        </View>
    )
}

const styles = StyleSheet.create({})
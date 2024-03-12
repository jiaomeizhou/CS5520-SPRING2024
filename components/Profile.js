import { View, Text } from 'react-native'
import React from 'react'
import { auth } from '../firebase-files/firebaseSetup'

export default function Profile() {
    const user = auth.currentUser;
    return (
        <View>
            <Text>Profile</Text>
        </View>
    )
}
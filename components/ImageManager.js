import { View, Text, Button } from 'react-native'
import React from 'react'
import * as ImagePicker from 'expo-image-picker'
import PressableButton from './PressableButton'

export default function ImageManager() {
    const takeImageHandler = async () => {
        try {
            const result = await ImagePicker.launchCameraAsync(
                {
                 allowsEditing: true,   
                }
            )
            console.log(result)
        }
        catch (error) {
            console.log(error)
        }

    }
    return (
        <View>
            <Button title="Take an image" onPress={takeImageHandler} />
        </View>
    )
}
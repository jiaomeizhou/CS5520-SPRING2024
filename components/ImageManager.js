import { View, Text, Button } from 'react-native'
import React from 'react'
import * as ImagePicker from 'expo-image-picker'


export default function ImageManager() {
    const [status, requestPermission] = ImagePicker.useCameraPermissions();

    async function verifyPemission() {
        if (status !== 'granted') {
            result = await requestPermission();
            return result;
        }
        else {
            return true;
        }
    }

    const takeImageHandler = async () => {
        try {
            const havePermission = verifyPemission();
            console.log(havePermission)
            if (!havePermission) {
                alert('Permission to access camera is required');
                return;
            }
            const results = await ImagePicker.launchCameraAsync(
                {
                 allowsEditing: true,   
                }
            )
            console.log(results.assets[0].uri)
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
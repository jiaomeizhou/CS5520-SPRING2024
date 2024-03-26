import { View, Text, Button, Image } from 'react-native'
import React, { useState } from 'react'
import * as Location from 'expo-location'
import { mapsApiKey } from "@env"

export default function LocationManager() {
    const [status, requestPermission] = Location.useForegroundPermissions();
    const [location, setLocation] = useState(null);

    async function verifyPemission() {
        if (status.granted) {
            return true;
        }
        try {
            const result = await requestPermission();
            return result.granted;
        } catch (error) {
            console.log("error: ", error);
        }
    }

    const locateUserHandler = async () => {
        try {
            const havePermission = await verifyPemission();
            console.log("have permission? ", havePermission);
            if (!havePermission) {
                alert('Permission to access location is required');
                return;
            }
            const location = await Location.getCurrentPositionAsync();
            console.log(location.coords.latitude, location.coords.longitude);
            console.log("location: ", location);
            setLocation(
                {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude
                }
            );

        }
        catch (error) {
            console.log("error: ", error);
        }
    }
    if (location) {
        console.log("api", `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude} & zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:L%7C${location.latitude},${location.longitude}&key=AIzaSyC9e8wMt9caQ4-A7GwyYWuaEgzqvFQuk24`)
    }

    return (
        <View>
            <Button title="Locate me" onPress={locateUserHandler} />
            {location && <Image source={{
                uri: `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:L%7C${location.latitude},${location.longitude}&key=${mapsApiKey}`
            }} style={{ width: 200, height: 200 }} />
            }
        </View>
    )
}
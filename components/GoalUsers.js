import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

export default function GoalUsers() {
    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) {
                    throw new Error("Data wasn't there"); // automatically exit
                }
                // extract data from the response
                const data = await response.json(); // await the promise
                console.log("data: ", data);
            }
            catch (error) {
                console.log("fetch error: ", error);
            }
        }
        fetchUsers()
    }, [])

    return (
        <View>
            <Text>GoalUsers</Text>
        </View>
    )
}
import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAllDocs, writeToDB } from '../firebase-files/firestoreHelper';

export default function GoalUsers({id}) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const usersFromDB = await getAllDocs(`goals/${id}/users`);
                if (usersFromDB.length) {
                    console.log("usersFromDB: ", usersFromDB);
                    setUsers(usersFromDB); // if it's already in the database, don't fetch again
                    return;
                }

                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) {
                    throw new Error("Data wasn't there"); // automatically exit
                }
                // extract data from the response
                const data = await response.json(); // await the promise
                setUsers(data);
                console.log("data: ", data);

                data.forEach((user) => {
                    console.log("user: ", user);
                    writeToDB(user, "goals", id, "users")
                })
                
            }
            catch (error) {
                console.log("fetch error: ", error);
            }
        }
        fetchUsers();
    }, [])

    return (
        <View>
            <Text>GoalUsers</Text>
            <FlatList
                data={users}
                renderItem={({ item }) => {
                    return <Text>{item.name}</Text>
                }} 
            />
        </View>
    )
}
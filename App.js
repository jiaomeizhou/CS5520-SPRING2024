import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './components/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GoalDetails from './components/GoalDetails'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: 'darkmagenta' },
        headerTintColor: 'white'
      }}>
        <Stack.Screen name="Home" component={Home} options={{
          headerTitle: 'All my goals',
        }} />
        <Stack.Screen name="Details" component={GoalDetails} options={
          ({ route }) => ({ headerTitle: route.params.goal.text, headerTitleAlign: 'center' })
        }/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
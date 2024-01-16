import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Hearder from './components/Header'

export default function App() {
  const appName = "My Native App";
  return (
    <View style={styles.container}>
      <Text>welcome to {appName} </Text>
      <StatusBar style="auto" />
      <Hearder name="My Native App" version={2}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

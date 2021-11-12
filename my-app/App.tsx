import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bruh! X Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button styles={styles}>
      Login
        </Button>
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
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
});

const button = StyleSheet.create({
  
  primary: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
 
});


import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer }>
        <TextInput style={styles.textInput}/>

    <Button title='valider'/>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:40,
    paddingTop:60
  
  },
  inputContainer:{

  },
  textInput:{
    borderColor:"grey",
    borderWidth:1,
    padding :5,
    paddingLeft:9,
    fontSize

  }
});

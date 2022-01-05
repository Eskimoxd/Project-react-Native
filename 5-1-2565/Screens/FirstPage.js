import React, { useState } from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

const FirstPage = ({navigation}) => {
    const [inputName, setInputName] = useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
          React Native Pass Value From One Screen
          </Text>
      <Text style={styles.textStyle}>
          Please insert your name to pass it to second screen
        </Text>
        <TextInput
            placeholder = 'Enter your name'
            style = {styles.inputStyle}
            onChangeText = {(inputName) => {setInputName(inputName)}}
        />
      <Button
        title="GO NEXT"
        onPress={() =>
          navigation.navigate('Second', {
            name: inputName
          }
        )}
      />
    </View>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
  inputStyle: {
    width: '80%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#dc4e41',
  },
});
//Import All Component
import React, { useState } from 'react';

import {StyleSheet
  , SafeAreaView 
, TextInput
, Text
, Button
, View
} from 'react-native';


const App = () => {

  const [inputValue, setInputValue] = useState('')
  
  const checkValuseIsNumberOrnot = () =>{
    if(isNaN(inputValue)){
      alert("Is it not a Number");

    } else {
      alert("It is a Number")
    }
  } 
 
 return (
   <SafeAreaView style={styles.container}>
    <View style = {styles.container}>
      <TextInput
        placeholder = "Enter Text"
        style = {styles.TextInputStyle}
        onChangeText = {(inputValue)=> {setInputValue(inputValue)}}
        />
        <Button
         title = "Check Value Is Number or Not"
         color = "#606070"
         onPress = {checkValuseIsNumberOrnot}
        />
    </View>
   </SafeAreaView>
  );
};

const styles = StyleSheet.create({
   container: {
   flex: 1,
   alignContent: 'center',
   margin: 60
   },
   TextInputStyle:{
    textAlign:'center',
    height:50,
    width:'70%',
    marginBottom:10,
    borderColor:'black'
   }
   });
   export default App;

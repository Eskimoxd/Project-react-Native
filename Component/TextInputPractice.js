import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, SafeAreaView, Button } from 'react-native'

const TextInputPractice1 = () => {
    const [inputName, setInputName] = useState('')
    const [inputEmail, setInputEmail] = useState('')

    const checkNameAlert = () => {
        if(!inputName.trim()){
            alert("Please Enter Name..")
        }else if(!inputEmail.trim()){
            alert("Please Enter Email")
        } else{
            alert("Successful !!")
        }
    }
    return (
        <SafeAreaView style= {{flex: 1}}>
            <View style = {styles.container}>
                <TextInput
                    placeholder = 'Enter Name'
                    style = {styles.textInputStyle}
                    onChangeText = {(inputName) => {setInputName(inputName)}}
                />
                <TextInput
                    placeholder = 'Enter Email'
                    style = {styles.textInputStyle}
                    onChangeText = {(inputEmail) => {setInputEmail(inputEmail)}}
                />
                <Button
                    title = 'SUBMIT'
                    color = "#841584"
                    onPress = {checkNameAlert}
                />
            </View>
        </SafeAreaView>
    )
}

export default TextInputPractice

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 35,
    },
    textInputStyle: {
    width: '100%',
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
    },
});
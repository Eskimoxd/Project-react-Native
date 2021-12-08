import React, {useState} from 'react'
import { StyleSheet, Text, View,SafeAreaView,TextInput,TouchableOpacity } from 'react-native'


const TouchablePractice = () => {
    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')

    const checkNameAlert = () => {
        if(!inputEmail.trim()){
            alert("Please Enter Email")
        }else if(!inputPassword.trim()){
            alert("Please Enter Password")
        } else{
            alert("Email : " + (inputEmail)+"\nPassword : " + (inputPassword))
        }
    }
    return (
        <SafeAreaView style= {{flex: 1}}>
            <View style = {styles.container}>
                <TextInput
                    placeholder = 'Email'
                    style = {styles.textInputStyle}
                    onChangeText = {(inputEmail) => {setInputEmail(inputEmail)}}
                />
                <TextInput
                    placeholder = 'Password'
                    style = {styles.textInputStyle}
                    onChangeText = {(inputPassword) => {setInputPassword(inputPassword)}}
                />
                <TouchableOpacity
                style = {styles.buttonStyle}
                activeOpacity = {0.5}
                onPress = {checkNameAlert}
                >
                    <Text>SUBMIT</Text>

                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default TouchablePractice

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
    buttonStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#606070",
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
        width : '100%'
    }
});

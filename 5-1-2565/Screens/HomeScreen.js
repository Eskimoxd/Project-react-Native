import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation}) => {
    return (
        <View style = {styles.container}>
          <Ionicons name='home' size={30} color='skyblue'/>
          <Text>หน้าหลัก</Text>
           <Button title='Go to About'
           onPress={() => navigation.navigate('About',{
            email:'ma.surasit_st@tni.ac.th'
          }
          )}
          />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
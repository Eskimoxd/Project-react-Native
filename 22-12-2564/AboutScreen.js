import React from 'react';
import { View , Text, StyleSheet} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';

const AboutScreen = () => {
  return (  
    <View style = {styles.container}>
        <Text>เกี่ยวกับเรา</Text>
    </View>
    
  )
}

export default AboutScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
    
})
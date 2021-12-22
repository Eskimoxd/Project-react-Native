import React from 'react';
import { View , Text, StyleSheet, Button} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';

const Homescreen = ({navigation}) => {
  return (  
    <View style = {styles.container}>
        <Text>หน้าหลัก</Text>
        <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
      />
    </View>
    
  )
}

export default Homescreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
    
})
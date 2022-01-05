import React from 'react';
import { View , Text, StyleSheet,Button} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';

const AboutScreen = ({Navigation}) => {
  return (  
    <View style = {styles.container}>
        <Text>เกี่ยวกับเรา</Text>
        <Button 
           title='Go to About Page again....'
           onPrree={()=>Navigation.push('About')}
        />
        <Button
          title='Go to Home Page'
          onPress={()=> Navigation.navigate('Home')} 
        />
        <Button
        title='Go back'
        onPress={()=> Navigation.goback()} 
      />
      <Button
      title='Go back to first screen in stack'
      onPress={()=> Navigation.popToTop('Home')} 
    />
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
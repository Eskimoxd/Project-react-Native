import React from 'react';

import { StyleSheet,Text,View,SafeAreaView,Button} from 'react-native';

const ButtonExample = () => {
    const onPressAleart = ()=>{
        alert('Hello');
    }
    
    return (
        <SafeAreaView style = {{flex:1}}>
            <View style = {styles.container}>
                <Text>Button Example</Text>
                <Button
                 onPress ={onPressAleart}    
                 title = "Click Me"
                 color = "#841584"
                />
            </View>
        </SafeAreaView>
    )
}
export default ButtonExample

const styles = StyleSheet.create({
     container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center'
     }
 }
);

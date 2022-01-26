import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="FirstPage"
      screenOptions= {{
        //Set Header Color
        headerStyle:{backgroundColor:'#5f9ea0'},
        //Set Header text color
        headerTintColor:'#fff',
        //Set Header text style
        headerTitleStyle:{fontWeight:'bold'}
      }}
      >
        <Stack.Screen 
        name='FirstPage' 
        component = {FirstPage}
        options={{title:'First Page'}} 
        />
        <Stack.Screen 
        name='SecondPage' 
        component = {SecondPage}
        options={{title:'Second Page'}} 
        />
        <Stack.Screen 
        name='ThirdPage' 
        component = {ThirdPage}
        options={{title:'Third Page'}} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
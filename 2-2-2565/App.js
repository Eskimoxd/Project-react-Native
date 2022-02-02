import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import CustomSidebarMenu from './pages/CustomSidebarMenu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigation Drawer
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };
  return(
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Image
          source = { require('C:/rnproject/assets/drawerWhite.png') }
          style = {{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );
}

function firstScreenStack({navigation}) {
  return (
    <Stack.Navigator 
        initialRouteName='FirstPage'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#5f9ea0',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => <NavigationDrawerStructure navigationProps = {navigation}/>
        }}
      >
        <Stack.Screen 
          name = 'FirstPage' 
          component = {FirstPage} 
          options={{ title: 'First Page' }}
        />
    </Stack.Navigator>
  )
}

function secondScreenStack({navigation}) {
  return(
    <Stack.Navigator 
        initialRouteName='FirstPage'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0096DA',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => <NavigationDrawerStructure navigationProps = {navigation}/>
        }}
      >
        <Stack.Screen
          name="SecondPage"
          component={SecondPage}
          options={{ title: 'Second Page' }}
        />
        <Stack.Screen
          name="ThirdPage"
          component={ThirdPage}
          options={{ title: 'Third Page' }}
        />
      </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent = {(props)=><CustomSidebarMenu {...props}/>}>
      <Drawer.Screen
          name = "First Page Options"
          component = {firstScreenStack}
      />
      <Drawer.Screen
          name = "Second Page Options"
          component = {secondScreenStack}
      />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
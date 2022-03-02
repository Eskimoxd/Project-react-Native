import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { styles } from "./components/styles";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ProductScreen from "./screens/ProductScreen";
import DetailScreen from "./screens/DetailScreen";
import MenuScreen from "./screens/MenuScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        // Header Color
        headerStyle: styles.HeaderStyle,
        // Header Text Color
        headerTintColor: "#fff",
        // Header Text Style
        headerTitleStyle: styles.HeaderTitleStyle,
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home Page" }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{ title: "About Page" }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: "Register Page" }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Login Page" }}
      />
    </Stack.Navigator>
  );
}

function ProductStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        // Header Color
        headerStyle: styles.HeaderStyle,
        // Header Text Color
        headerTintColor: "#fff",
        // Header Text Style
        headerTitleStyle: styles.HeaderTitleStyle,
      }}
    >
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{ title: "Product Page" }}
      />
      <Stack.Screen
        name="Details"
        component={DetailScreen}
        options={{ title: "Details Page" }}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomeStack"
        drawerPosition="left"
        drawerContentOptions={{
          activeTintColor: "#e91263",
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <MenuScreen {...props} />}
      >
        <Drawer.Screen name="HomeStack" component={HomeStack} />
        <Drawer.Screen name="ProductStack" component={ProductStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
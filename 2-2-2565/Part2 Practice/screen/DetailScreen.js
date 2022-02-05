import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    Button,
  } from "react-native";
  import React from "react";
  import { Ionicons } from "@expo/vector-icons";
  
  import { styles } from "../components/styles";
  
  const DetailScreen = ({ navigation }) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 15 }}>
          <View style={styles.container}>
            <Text style={styles.textTopStyle}>Home Screen</Text>
            <View style={{ width: "75%" }}>
              <View style={{ margin: 5 }}>
                <Button
                  title="Go to Setting Tab"
                  onPress={() => navigation.navigate("SettingScreen")}
                  color="#3C565B"
                />
              </View>
              <View style={{ margin: 5 }}>
                <Button title="Open New Screen" color="#3C565B" />
              </View>
            </View>
          </View>
          <Text style={styles.textBottomStyle}>www.tni.ac.th</Text>
        </View>
      </SafeAreaView>
    );
  };
  
  export default DetailScreen;
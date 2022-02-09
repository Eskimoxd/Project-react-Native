import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {styles} from '../components/styles';

const SettingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          padding: 35,
        }}>
        <Text style={styles.PageText}>Settings Screen</Text>
        <TouchableOpacity
          style={styles.Button}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={styles.BottonText}>Go to Home Tab</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          activeOpacity={0.8}
          onPress={() => {
            alert('Peerapol Boonkoom');
          }}>
          <Text style={styles.BottonText}>Open News Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Text style={styles.BottonText}>Go Profile Screen</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.TextBotton}>www.tni.ac.th</Text>
    </SafeAreaView>
  );
};

export default SettingScreen;
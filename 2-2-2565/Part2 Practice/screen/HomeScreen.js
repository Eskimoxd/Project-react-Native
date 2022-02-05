import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {styles} from '../components/styles';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          padding: 35,
        }}>
        <Text style={styles.PageText}>Home Screen</Text>
        <TouchableOpacity
          style={styles.Button}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Settings');
          }}>
          <Text style={styles.BottonText}>Go to setting Tab</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          activeOpacity={0.8}
          onPress={() => {
            alert('Peerapol Boonkoom');
          }}>
          <Text style={styles.BottonText}>Open News Screen</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.TextBotton}>www.tni.ac.th</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
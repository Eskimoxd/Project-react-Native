import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from '../components/styles';

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          padding: 35,
        }}>
        <Text style={styles.PageText}>You are on Profile Screen</Text>
        <Text style={styles.PageText}>Surasit Manson 1913110423</Text>
      </View>
      <Text style={styles.TextBotton}>www.tni.ac.th</Text>
    </SafeAreaView>
  );
};

export default ProfileScreen;
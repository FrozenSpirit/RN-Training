import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function HomeScreen(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
      }}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={{
          padding: 10,
          borderWidth: 1,
          borderRadius: 5,
          backgroundColor: '#C65BCF',
          elevation: 5,
        }}
        onPress={() => props.navigation.navigate('ProfileScreen')}>
        <Text style={{fontWeight: '600', color: 'white'}}>
          Go To Profile Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

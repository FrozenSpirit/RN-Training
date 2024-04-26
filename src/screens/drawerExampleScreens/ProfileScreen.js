import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function ProfileScreen(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
      }}>
      <Text>Profile Screen</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('UserScreen')}
        style={{
          padding: 10,
          borderWidth: 1,
          borderRadius: 5,
          backgroundColor: '#C65BCF',
          elevation: 5,
        }}>
        <Text style={{fontWeight: '600', color: 'white'}}>
          Go To User Screen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={{
          padding: 10,
          borderWidth: 1,
          borderRadius: 5,
          backgroundColor: '#C65BCF',
          elevation: 5,
        }}>
        <Text style={{fontWeight: '600', color: 'white'}}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

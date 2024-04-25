import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function DetailsScreen(props) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
      }}>
      <Text>Details Screen</Text>
      <View
        style={{
          backgroundColor: 'cyan',
          padding: 5,
          borderWidth: 2,
          borderRadius: 5,
          elevation: 5,
        }}>
        <Text>itemId: {JSON.stringify(props?.route?.params?.itemId)}</Text>
        <Text>
          otherParam: {JSON.stringify(props?.route?.params?.otherParam)}
        </Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: '#4CCD99',
          padding: 5,
          borderWidth: 2,
          borderRadius: 5,
          elevation: 5,
        }}
        onPress={() => props.navigation.navigate('HomeScreen')}>
        <Text>Go to Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: '#97E7E1',
          padding: 5,
          borderWidth: 2,
          borderRadius: 5,
          elevation: 5,
        }}
        onPress={() => props.navigation.navigate('CreatePostScreen')}>
        <Text>Go to Create Post Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#7BC9FF',
          padding: 5,
          borderWidth: 2,
          borderRadius: 5,
          elevation: 5,
        }}
        onPress={() => props.navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

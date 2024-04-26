import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../navExampleScreens/HomeScreen';
import DetailsScreen from '../navExampleScreens/DetailsScreen';
import CreatePostScreen from '../navExampleScreens/CreatePostScreen';

export default function TabScreen2() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerLeft: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      <Stack.Screen name="CreatePostScreen" component={CreatePostScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

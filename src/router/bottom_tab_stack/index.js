import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabScreen2 from '../../screens/bottomTabScreen/TabScreen2';
import Tab1 from '../stack_nav';
import Icons from '../../assets/icons/Icon';

export default function BottomNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FF3EA5',
        // tabBarInactiveTintColor: 'red',
        tabBarHideOnKeyboard: true,

        tabBarStyle: {
          backgroundColor: '#DFF5FF',
          height: 60,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {fontSize: 16, fontWeight: '700'},
        // tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Tab1"
        component={Tab1}
        options={{
          tabBarIcon: () => {
            return (
              <Icons type={'fa'} name={'magnet'} size={25} color={'#008DDA'} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={TabScreen2}
        options={{
          tabBarIcon: () => {
            return (
              <Icons type={'fa'} name={'home'} size={25} color={'#5356FF'} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});

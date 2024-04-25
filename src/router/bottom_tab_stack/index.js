import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabScreen2 from '../../screens/bottomTabScreen/TabScreen2';
import StackNav from '../stack_nav';
import Icons from '../../assets/icons/Icon';
import DrawerNavigator from '../drawer_nav';

export default function BottomNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FF3EA5',
        // tabBarInactiveTintColor: 'red',
        tabBarActiveBackgroundColor: 'orange',
        tabBarHideOnKeyboard: true,

        tabBarStyle: {
          backgroundColor: '#DFF5FF',
          height: 60,
        },
        tabBarLabelStyle: {fontSize: 16, fontWeight: '700'},
        // tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="StackNav"
        component={StackNav}
        options={{
          tabBarIcon: () => {
            return (
              <Icons type={'fa'} name={'random'} size={25} color={'#008DDA'} />
            );
          },
        }}
      />
      {/* <Tab.Screen
        name="DrawerNav"
        component={DrawerNavigator}
        options={{
          tabBarIcon: () => {
            return (
              <Icons type={'fa'} name={'star'} size={25} color={'#008DDA'} />
            );
          },
        }}
      /> */}
      <Tab.Screen
        name="DataStackNav"
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

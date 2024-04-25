import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Drawer1 from '../../screens/drawerExampleScreens/Drawer1';
import Drawer2 from '../../screens/drawerExampleScreens/Drawer2';
import Drawer3 from '../../screens/drawerExampleScreens/Drawer3';
import StackNav from '../stack_nav';
import BottomNavigator from '../bottom_tab_stack';

export default function DrawerNavigator() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Drawer1" component={Drawer1} />
      <Drawer.Screen name="Drawer2" component={Drawer2} />
      <Drawer.Screen name="Drawer3" component={BottomNavigator} />
      <Drawer.Screen name="Drawer4" component={StackNav} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});

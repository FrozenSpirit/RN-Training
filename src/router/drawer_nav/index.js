import {StyleSheet} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNav from '../stack_nav';
import DrawerContents from '../../screens/drawerExampleScreens/DrawerContents';

export default function DrawerNavigator() {
  const Drawer = createDrawerNavigator();
  const renderDrawer = () => {
    return <DrawerContents />;
  };
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={() => renderDrawer()}>
      <Drawer.Screen name="Home" component={StackNav} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});

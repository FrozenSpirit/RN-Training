import {StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CounterScreen from '../../screens/counter/CounterScreen';
import PaginationScreen from '../../screens/pagination/PaginationScreen';
import ToDoScreen from '../../screens/toDoProject/toDo/ToDoScreen';
import Strings from '../../utils/constants/Strings';

export default function StackNav() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="CounterScreen">
      <Stack.Screen
        options={{title: 'Hello'}}
        name={Strings.NAVIGATION_KEYS.counteScreen}
        component={CounterScreen}
      />
      <Stack.Screen
        name={Strings.NAVIGATION_KEYS.toDoScreen}
        component={ToDoScreen}
      />
      <Stack.Screen
        name={Strings.NAVIGATION_KEYS.paginationScreen}
        component={PaginationScreen}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
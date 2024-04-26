import {StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CounterScreen from '../../screens/counter/CounterScreen';
import PaginationScreen from '../../screens/pagination/PaginationScreen';
import ToDoScreen from '../../screens/toDoProject/toDo/ToDoScreen';
import Strings from '../../utils/constants/Strings';
import BottomNavigator from '../bottom_tab_stack';
import Icons from '../../assets/icons/Icon';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import ProfileScreen from '../../screens/drawerExampleScreens/ProfileScreen';
import UserScreen from '../../screens/drawerExampleScreens/UserScreen';
import SettingScreen from '../../screens/drawerExampleScreens/SettingScreen';
import HomeScreen from '../../screens/drawerExampleScreens/HomeScreen';
import SignInScreen from '../../screens/signin/SignInScreen';
import ReduxExample from '../../screens/redux-example/reduxExample';
import ReduxTaskList from '../../screens/redux-example/reduxTaskList';

export default function StackNav() {
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName="CounterScreen"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerStyle: {backgroundColor: '#0163d2'},
        headerLeft: () => {
          return (
            <Icons
              type={'fa'}
              name={'bars'}
              size={30}
              color={'white'}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />
          );
        },
        headerLeftContainerStyle: {paddingLeft: 10},
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="UserScreen" component={UserScreen} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      <Stack.Screen name="ReduxExample" component={ReduxExample} />
      <Stack.Screen name="ReduxTaskList" component={ReduxTaskList} />
      <Stack.Screen
        // options={{headerShown: false}}
        name="BottomNav"
        component={BottomNavigator}
      />
      <Stack.Screen name="SignIn" component={SignInScreen} />

      {/* <Stack.Screen
        options={{title: 'Hello'}}
        name={Strings.NAVIGATION_KEYS.counteScreen}
        component={CounterScreen}
      />
      <Stack.Screen
        name={Strings.NAVIGATION_KEYS.toDoScreen}
        component={ToDoScreen}
      /> */}
      {/* <Stack.Screen
        // options={{headerShown: false}}
        name={Strings.NAVIGATION_KEYS.paginationScreen}
        component={PaginationScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'BottomNav'}
        component={BottomNavigator}
      /> */}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

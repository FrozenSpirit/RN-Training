import 'react-native-gesture-handler';
import {Alert, BackHandler, Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import CounterScreen from './src/screens/counter/CounterScreen';
import GridScreen from './src/screens/grid/GridScreen';
import ShapeScreen from './src/screens/shapes/ShapeScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import RenderListScreen from './src/screens/render/RenderListScreen';
import PracticeScreen from './src/screens/hooks/PracticeScreen';
import PaginationScreen from './src/screens/pagination/PaginationScreen';
import KeyboardAwareScrollScreen from './src/screens/keyboard/KeyboardAwareScrollScreen';
import Header from './src/common/components/header/Header';
import WebViewScreen from './src/screens/webview/WebViewScreen';
import ToDoScreen from './src/screens/toDoProject/toDo/ToDoScreen';
import PincodeModal from './src/common/components/pincode/PincodeModal';
import AsyncStorageTestScreen from './src/screens/asynctest/AsyncStorageTestScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BottomNavigator from './src/router/bottom_tab_stack';
import StackNav from './src/router/stack_nav';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './src/router/drawer_nav';

export default function App() {
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* <CounterScreen /> */}
        {/* <ShapeScreen /> */}
        {/* <RenderListScreen /> */}
        {/* <GridScreen /> */}
        {/* <PracticeScreen /> */}
        {/* <PaginationScreen /> */}
        {/* <KeyboardAwareScrollScreen /> */}
        {/* <WebViewScreen /> */}
        {/* <PincodeModal /> */}
        {/* <AsyncStorageTestScreen /> */}
        {/* <ToDoScreen /> */}
        {/* <StackNav /> */}
        {/* <BottomNavigator /> */}
        <DrawerNavigator />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});

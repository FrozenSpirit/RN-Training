import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {store} from '../../redux/store/store';

export default function HomeScreen(props) {
  const Tasks = useSelector(store => store.tasks.taskList);
  const Counter = useSelector(store => store.counter.count);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
      }}>
      <Text>Home Screen</Text>
      <Text style={{fontWeight: '600', fontSize: 18, color: 'black'}}>
        Redux Task List: {Tasks.length}
      </Text>
      <Text style={{fontWeight: '600', fontSize: 18, color: 'black'}}>
        Redux Counter: {Counter}
      </Text>
      <TouchableOpacity
        style={{
          padding: 10,
          borderWidth: 1,
          borderRadius: 5,
          backgroundColor: '#C65BCF',
          elevation: 5,
        }}
        onPress={() => props.navigation.navigate('ProfileScreen')}>
        <Text style={{fontWeight: '600', color: 'white'}}>
          Go To Profile Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

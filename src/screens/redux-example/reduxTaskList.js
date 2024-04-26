import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {store} from '../../redux/store/store';

import {addTask, removeTask} from '../../redux/actions/taskActions';
import moment from 'moment';

export default function ReduxTaskList() {
  const [task, setTask] = useState('');
  const [counter, setCounter] = useState(10);

  const Tasks = useSelector(store => store.tasks.taskList);
  console.log(Tasks);

  const handleAdd = () => {
    if (task.length > 0) {
      const mnt = moment().format('MMMM Do YYYY, h:mm:ss a');
      store.dispatch(addTask({id: mnt, title: task}));
      setCounter(counter + 3);
      setTask('');
    }
  };

  const handleRemove = id => {
    const newTaskList = Tasks.filter(item => item.id !== id);
    console.log(newTaskList);
    store.dispatch(removeTask(newTaskList));
  };

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: 'orange',
          padding: 10,
          borderWidth: 1,
          elevation: 5,
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 5,
        }}>
        <Text style={{color: 'black', fontSize: 16}}>{item.title}</Text>

        <TouchableOpacity
          onPress={() => handleRemove(item.id)}
          style={{
            backgroundColor: '#FC4100',
            padding: 5,
            borderWidth: 1,
            borderRadius: 5,
          }}>
          <Text style={{fontWeight: '600', color: 'white'}}>Remove</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{flex: 1, padding: 10}}>
      <TextInput
        style={{padding: 10, borderWidth: 1}}
        value={task}
        onChangeText={text => setTask(text)}
      />

      <View style={{alignItems: 'center', marginVertical: 10}}>
        <TouchableOpacity
          onPress={handleAdd}
          style={{
            padding: 10,
            backgroundColor: 'cyan',
            borderWidth: 1,
            borderRadius: 5,
          }}>
          <Text style={{color: 'black'}}>Add Task</Text>
        </TouchableOpacity>
      </View>

      <Text style={{fontWeight: '600', fontSize: 18, color: 'black'}}>
        Active Tasks : {Tasks.length}
      </Text>

      <FlatList
        data={Tasks}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

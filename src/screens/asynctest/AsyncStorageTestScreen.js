import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AsyncStorageTestScreen() {
  const [textInputValue, setTextInputValue] = useState('');
  const [getValue, setGetValue] = useState('');

  const saveValueFunction = () => {
    if (textInputValue) {
      AsyncStorage.setItem('val', textInputValue);
      setTextInputValue('');
      Alert.alert('Value Saved');
    } else {
      Alert.alert('Please Enter Value');
    }
  };

  const getValueFunction = () => {
    AsyncStorage.getItem('val')
      .then(value => {
        setGetValue(value);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <View style={{flex: 1, backgroundColor: 'cyan', padding: 10}}>
      <Text>AsyncStorageTestScreen</Text>
      <TextInput
        placeholder="Enter Some Text here"
        value={textInputValue}
        onChangeText={data => setTextInputValue(data)}
        underlineColorAndroid="transparent"
        style={{borderWidth: 1, borderColor: 'black', padding: 10}}
      />

      <TouchableOpacity
        onPress={saveValueFunction}
        style={{
          padding: 10,
          backgroundColor: 'red',
          marginTop: 10,
          borderRadius: 5,
        }}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 18,
            color: 'white',
            textAlign: 'center',
          }}>
          SAVE VALUE
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={getValueFunction}
        style={{
          padding: 10,
          backgroundColor: 'white',
          marginTop: 10,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: 'black',
        }}>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 18,
          }}>
          GET VALUE
        </Text>
      </TouchableOpacity>
      <Text style={{}}>{getValue}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

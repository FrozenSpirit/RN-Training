import {
  Alert,
  BackHandler,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {useNetInfo} from '@react-native-community/netinfo';

export default function PracticeScreen() {
  const {type, isConnected} = useNetInfo(); // hook doesn't do real time, better use evnet listner
  const [val, setVal] = useState();
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [editable, setEditable] = useState(true);

  const isEven = useMemo(() => {
    console.log('A HEAVY FUNCTION CALLED');
    let i = 0;
    while (i < 400000) i++;
    return count % 2 === 0;
  }, [count]);

  //   console.log(isConnected);
  //   console.log(type);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={isConnected ? 'green' : 'red'} />

      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Text Here"
        value={val}
        maxLength={6}
        autoFocus
        editable={editable}
        onChangeText={text => {
          if (text.length > 5) {
            Alert.alert('Password cannot be more than 6 numbers');
            setEditable(!editable);
          }
          setVal(text);
        }}
        multiline
        inputMode="numeric"
      />
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.5}
        onPress={() => {
          setEditable(true);
        }}>
        <Text style={styles.btnText}>Enable Edit</Text>
      </TouchableOpacity>

      <View style={styles.btnWrapper}>
        <View
          style={[
            styles.textWrapper,
            {width: '100%', backgroundColor: '#FFF5E0'},
          ]}>
          <Text style={[styles.textInputFont, {textAlign: 'center'}]}>
            {count}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.5}
          onPress={() => {
            setCount(count + 1);
          }}>
          <Text style={styles.btnText}>COUNT 1</Text>
        </TouchableOpacity>

        <View
          style={[
            styles.textWrapper,
            {width: '100%', backgroundColor: '#FFC94A'},
          ]}>
          <Text style={[styles.textInputFont, {textAlign: 'center'}]}>
            {count2}
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.btn, {backgroundColor: '#FFFAB7'}]}
          activeOpacity={0.5}
          onPress={() => setCount2(count2 + 1)}>
          <Text style={styles.btnText}>COUNT 2</Text>
        </TouchableOpacity>

        <Text>{isEven ? 'Even' : 'Odd'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    gap: 15,
  },
  textWrapper: {
    width: '80%',
    backgroundColor: 'cyan',
    padding: 10,
    borderRadius: 5,
    elevation: 5,
  },
  textInput: {
    backgroundColor: '#f5f5f5',
    width: '80%',
    borderRadius: 5,
    padding: 10,
    borderWidth: 2,
    elevation: 10,
    color: 'black',
    fontWeight: '700',
    fontSize: 16,
  },
  textInputFont: {color: 'black', fontSize: 15, fontWeight: '500'},
  btnWrapper: {width: '80%', gap: 20},
  btn: {
    backgroundColor: '#8DECB4',
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    elevation: 5,
  },
  btnText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '600',
    fontSize: 17,
  },
});

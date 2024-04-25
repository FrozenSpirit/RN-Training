import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CounterScreenUI from './CounterScreenUI';
import Header from '../../common/components/header/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStore from '../../data/async/AsyncStore';
import Strings from '../../utils/constants/Strings';

export default function CounterScreen(props) {
  const [number, setNumber] = useState(0);
  const [comment, setComment] = useState('');
  const [title, setTitle] = useState('Counter');

  function handlePress(params) {
    if (params === '+') {
      setNumber(number + 1);
    } else if (params === '-') {
      setNumber(number - 1);
    }
  }

  useEffect(() => {
    if (number < 3) {
      setTitle('Counter');
    }

    if (number > 3) {
      setTitle('Greater than 3');
    }

    if (number > 6) {
      setTitle('Greater than 6');
    }
  }, [number]);

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <Header title={title} />
      <TouchableOpacity
        onPress={() => props?.navigation?.navigate('PaginationScreen')}>
        <Text>Click Me</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <CounterScreenUI
          handlePress={handlePress}
          currNumber={number}
          comment={comment}
          setComment={setComment}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: 'black',
    borderTopWidth: 2,
  },
});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStore from '../../data/async/AsyncStore';
import Strings from '../../utils/constants/Strings';

export default function SignInScreen() {
  return (
    <View>
      <Text>SignInScreen</Text>
      <TouchableOpacity
        onPress={() => AsyncStore.setData(Strings.ASYNC_KEYS.login, true)}>
        <Text>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => AsyncStore.setData(Strings.ASYNC_KEYS.login, false)}>
        <Text>Sign OUT</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => AsyncStore.getData(Strings.ASYNC_KEYS.login)}>
        <Text>Get Status</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

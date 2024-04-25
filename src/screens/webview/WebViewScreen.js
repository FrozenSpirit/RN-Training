import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

export default function WebViewScreen() {
  const MyWebComponent = () => {
    return (
      <WebView source={{uri: 'https://reactnative.dev/'}} style={{flex: 1}} />
    );
  };
  return (
    <View>
      <Text>WebViewScreen</Text>
      <TouchableOpacity onPress={MyWebComponent}>
        <Text>Hello</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

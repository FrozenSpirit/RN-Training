import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';

export default function CreatePostScreen(props) {
  const [postText, setPostText] = React.useState('');

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 10,
        gap: 10,
      }}>
      <TextInput
        multiline
        placeholder="Enter Text To Send to Home Screen"
        style={{padding: 10, backgroundColor: 'white', borderWidth: 2}}
        value={postText}
        onChangeText={setPostText}
      />
      <TouchableOpacity
        style={{
          backgroundColor: '#5356FF',
          padding: 5,
          borderWidth: 2,
          borderRadius: 5,
          elevation: 5,
        }}
        onPress={() => {
          // Pass and merge params back to home screen
          props.navigation.navigate({
            name: 'HomeScreen',
            params: {post: postText},
            merge: true,
          });
        }}>
        <Text style={{textAlign: 'center', color: 'white'}}>Send to Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#7BC9FF',
          padding: 5,
          borderWidth: 2,
          borderRadius: 5,
          elevation: 5,
        }}
        onPress={() => props.navigation.goBack()}>
        <Text style={{textAlign: 'center', fontWeight: '700', color: 'black'}}>
          Go Back
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

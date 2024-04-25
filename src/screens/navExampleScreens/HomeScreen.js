import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function HomeScreen(props) {
  //   useEffect(() => {
  //     if (props?.route?.params?.post) {
  //       // Post updated, do something with `route.params.post`
  //       // For example, send the post to the server
  //     }
  //   }, [props?.route?.params?.post]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: '#5BBCFF',
          padding: 5,
          borderWidth: 2,
          borderRadius: 5,
          elevation: 5,
        }}
        onPress={() => {
          props.navigation.navigate('DetailsScreen', {
            itemId: 86,
            otherParam: 'Sending Data From Home To Details Screen',
          });
        }}>
        <Text>Go To Details Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#8DECB4',
          padding: 5,
          borderWidth: 2,
          borderRadius: 5,
          elevation: 5,
        }}
        onPress={() => {
          props.navigation.navigate('CreatePostScreen');
        }}>
        <Text>Go To Create Post Screen</Text>
      </TouchableOpacity>
      <View
        style={{
          margin: 10,
          padding: 10,
          borderWidth: 2,
          backgroundColor: 'plum',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 15,
          }}>
          Post Received : {props?.route?.params?.post}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

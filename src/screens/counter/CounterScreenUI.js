import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import CustomButton from '../../common/components/button/CustomButton';

export default function CounterScreenUI(props) {
  return (
    <View>
      <View style={styles.wrapper}>
        <CustomButton
          container={{backgroundColor: 'red'}}
          handlePress={props?.handlePress}
          operation={'-'}
          text={'DECREMENT'}
          disabled={props?.currNumber <= 0}
        />
        <Text style={styles.text}>{props?.currNumber}</Text>
        <CustomButton
          container={{backgroundColor: 'green'}}
          handlePress={props?.handlePress}
          operation={'+'}
          text={'INCREMENT'}
          disabled={props?.currNumber >= 10}
        />
      </View>

      <View style={styles.commentContainer}>
        <Text style={styles.text}>Enter Your Comment</Text>
        <TextInput
          style={styles.input}
          multiline={true}
          value={props?.comment}
          onChangeText={text => props?.setComment(text)}
        />
        <Text>{props?.comment}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: 'yellow',
    width: '90%',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  commentContainer: {
    marginVertical: 10,
    padding: 10,
  },
  input: {
    height: 70,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    textAlignVertical: 'top', // for android only
  },
});

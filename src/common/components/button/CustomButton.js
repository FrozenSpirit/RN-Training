import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomButton(props) {
  return (
    <TouchableOpacity
      style={{...styles.container, ...props?.container}}
      onPress={() => props.handlePress(props?.operation)}
      activeOpacity={props?.disabled ? 0.15 : 0.7}
      disabled={props?.disabled}>
      <Text style={{...styles.text, ...props?.textStyle}}>
        {props.text ? props.text : 'Custom Button'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    height: 40,
    padding: 7,
    justifyContent: 'center',
    borderRadius: 5,
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
  },
});

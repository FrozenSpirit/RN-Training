import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Card(props) {
  return (
    <View style={styles.cardContainer} key={props?.key}>
      <Text style={styles.title}>{props?.title}</Text>
      <Text style={styles.body}>{props?.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#f5f5f5',
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    elevation: 5,
    gap: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    borderBottomWidth: 2,
    color: 'black',
  },
  body: {fontSize: 13, fontWeight: '500', color: 'black'},
});

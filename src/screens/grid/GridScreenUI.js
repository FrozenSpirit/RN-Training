import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function GridScreenUI(props) {
  const Item = ({title, value}) => {
    if (value.empty === true) {
      return <View style={styles.invisibleBox} />;
    }
    return (
      <View style={styles.box}>
        <Text style={styles.boxText}>{title} </Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.wrapper}>
        <FlatList
          data={props?.formatData(props?.data, props?.numOfCols)}
          numColumns={props?.numOfCols}
          renderItem={({item}) => <Item title={item.title} value={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'yellow',
    width: '90%',
  },
  invisibleBox: {
    flex: 0.5,
    backgroundColor: 'transparent',
    margin: 5,
    padding: 5,
  },
  box: {flex: 0.5, backgroundColor: 'orange', margin: 5, padding: 5},
  boxText: {fontSize: 32, backgroundColor: 'green', textAlign: 'center'},
});

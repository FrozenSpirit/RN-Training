import {FlatList, Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import GridScreenUI from './GridScreenUI';
import Header from '../../common/components/header/Header';

export default function GridScreen() {
  const data = [
    {id: 1, title: 'A'},
    {id: 2, title: 'B'},
    {id: 3, title: 'C'},
    {id: 4, title: 'D'},
    {id: 5, title: 'E'},
    {id: 6, title: 'F'},
    {id: 7, title: 'G'},
    {id: 8, title: 'H'},
    {id: 9, title: 'I'},
    {id: 10, title: 'J'},
    // {id: 12, title: 'K'},
    // {id: 13, title: 'L'},
  ];
  let numOfCols = 3;
  const Item = ({title, value}) => {
    if (value?.empty === true) {
      return <View key={value.id} style={styles.invisibleBox} />;
    }
    return (
      <View key={value.id} style={styles.box}>
        {/* <Text style={styles.boxText}>{title}</Text> */}
        <Image
          style={{width: 100, height: 100}}
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
        />
      </View>
    );
  };

  function formatData(data, numColumns) {
    const numOfFullRows = Math.floor(data.length / numColumns);
    // console.log(numOfFullRows);
    let numOfElementsLeftLastRow = data.length - numColumns * numOfFullRows;
    // console.log(numOfElementsLeftLastRow);
    while (numOfElementsLeftLastRow !== numColumns) {
      data.push({title: `blank-${numOfElementsLeftLastRow}`, empty: true});
      numOfElementsLeftLastRow = numOfElementsLeftLastRow + 1;
    }

    return data;
  }

  return (
    <View style={styles.container}>
      <Header title={'Grid Layout'} />
      <View style={styles.wrapper}>
        <FlatList
          data={formatData(data, numOfCols)}
          numColumns={numOfCols}
          renderItem={({item}) => <Item title={item.title} value={item} />}
          keyExtractor={item => item.id}
        />
      </View>
      {/* <GridScreenUI data={data} numOfCols={numOfCols} formatData={formatData} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    paddingVertical: 20,
    alignItems: 'center',
  },
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

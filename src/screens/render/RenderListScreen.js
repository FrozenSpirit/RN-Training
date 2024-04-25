import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../common/components/header/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import Card from '../../common/components/card/Card';

export default function RenderListScreen() {
  const [data, setData] = useState();

  function fetchData(limit = 1) {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
      .then(response => response.json())
      .then(json => setData(json));
  }

  useEffect(() => {
    fetchData(10);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title="Render Screen" />

      {/* <StatusBar backgroundColor={'red'} /> */}

      <View style={{backgroundColor: '#FB9AD1', flex: 1}}>
        <Text style={styles.headerText}> Rendering using Map</Text>
        <ScrollView style={{paddingHorizontal: 5}}>
          {data?.map((item, index) => {
            return <Card key={index} title={item.title} body={item.body} />;
          })}
        </ScrollView>
      </View>

      <View style={{flex: 1, backgroundColor: '#8576FF'}}>
        <Text style={[styles.headerText]}>
          {' '}
          Rendering using FlatListComponent
        </Text>
        <FlatList
          style={{paddingHorizontal: 5}}
          data={data}
          // horizontal
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Card title={item.title} body={item.body} key={item.id} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '700',
    paddingVertical: 10,
    backgroundColor: '#A3FFD6',
  },
});

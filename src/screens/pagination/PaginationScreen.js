import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../common/components/header/Header';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function PaginationScreen(props) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [page]);

  function fetchData() {
    setIsLoading(true);
    setTimeout(() => {
      fetch(
        `https://jsonplaceholder.typicode.com/todos?_start=${
          page - 10
        }&_end=${page}`,
      )
        .then(resp => resp.json())
        .then(newData => {
          setData([...data, ...newData]);
        })
        .finally(() => setIsLoading(true));
    }, 5000);
  }

  function loadNextPage() {
    setPage(page + 10);
  }

  const renderCard = ({item, index}) => {
    return (
      <View style={styles.card}>
        <View style={{width: 45}}>
          <Text style={styles.cardId}>{item.id}</Text>
        </View>
        <Text style={styles.cardText}>{item.title}</Text>
      </View>
    );
  };

  const rederActivityIndicator = () => {
    return (
      <View style={{padding: 10, marginTop: 10}}>
        <ActivityIndicator size="large" color="#FFF7FC" />
        <Text
          style={{
            textAlign: 'center',
            paddingVertical: 10,
            color: 'black',
            fontWeight: '500',
            fontSize: 18,
          }}>
          Loading...
        </Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#E59BE9'}}>
      <View style={{flex: 0.06, backgroundColor: 'pink'}}>
        <Header
          title={'Flatlist Pagination'}
          headerStyle={{
            flex: 1,
            backgroundColor: '#D6589F',
          }}
        />
      </View>

      <TouchableOpacity
        style={{
          marginVertical: 5,
          alignItems: 'center',
        }}
        onPress={() => props.navigation.goBack()}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            textAlign: 'center',
            color: 'black',
            width: '50%',
            backgroundColor: 'white',
            padding: 10,
            borderWidth: 2,
          }}>
          Navigate
        </Text>
      </TouchableOpacity>

      <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={renderCard}
        onEndReached={loadNextPage}
        onEndReachedThreshold={0.3}
        ListFooterComponent={rederActivityIndicator}
        style={{flex: 1, paddingHorizontal: 10}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFEBB2',
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginVertical: 10,
    borderRadius: 5,
    padding: 10,
    elevation: 10,
  },
  cardId: {
    fontWeight: '600',
    color: 'black',
    fontSize: 18,
    backgroundColor: 'cyan',
    width: 45,
    height: 45,
    borderRadius: 100,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderWidth: 1,
  },
  cardText: {
    fontWeight: '500',
    color: 'black',
    fontSize: 15,
    width: '80%',
  },
});

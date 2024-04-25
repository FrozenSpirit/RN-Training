import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';

const Header = props => {
  const [isConnected, setisConnected] = useState(false);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      // console.log('Network State===>', state.isInternetReachable);
      setisConnected(state.isInternetReachable);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {}, [props?.title]);
  return (
    <View
      style={{
        ...styles.header,
        ...props.headerStyle,
      }}>
      <Text style={styles.headerTextStyle}>{props?.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    // flex: 0.07,
    height: 50,
    backgroundColor: '#a3c1ad',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTextStyle: {
    color: '#f2f2f2',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
export default Header;

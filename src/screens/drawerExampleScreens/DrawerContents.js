import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icons from '../../assets/icons/Icon';
import {TouchableOpacity} from 'react-native-gesture-handler';

const DrawerList = [
  {
    icon: {name: 'home', color: 'blue'},
    label: 'HomeScreen',
    navigateTo: 'HomeScreen',
  },
  {
    icon: {name: 'user-md', color: 'purple'},
    label: 'Profile',
    navigateTo: 'ProfileScreen',
  },
  {
    icon: {name: 'github-alt', color: 'orange'},
    label: 'User',
    navigateTo: 'UserScreen',
  },
  {
    icon: {name: 'cogs', color: 'black'},
    label: 'Settings',
    navigateTo: 'SettingScreen',
  },
  {
    icon: {name: 'gamepad', color: 'plum'},
    label: 'Bottom Navigation',
    navigateTo: 'BottomNav',
  },
];

const DrawerLayout = ({icon, label, navigateTo}) => {
  const navigation = useNavigation();
  return (
    <DrawerItem
      //   style={{backgroundColor: '#F5EFE6', borderWidth: 1}}
      icon={() => (
        <Icons type={'fa'} name={icon.name} size={25} color={icon.color} />
      )}
      label={label}
      labelStyle={{fontSize: 16, color: 'black'}}
      onPress={() => navigation.navigate(navigateTo)}
    />
  );
};

const DrawerItems = props => {
  return DrawerList.map((item, index) => {
    return <DrawerLayout key={index} {...item} />;
  });
};

function DrawerContents() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, borderWidth: 1}}>
      <DrawerContentScrollView style={{borderBottomWidth: 1, flex: 1}}>
        <TouchableOpacity
          style={{padding: 5, flexDirection: 'row'}}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('ProfileScreen')}>
          <View style={{}}>
            <View
              style={{
                height: 70,
                width: 70,
                borderWidth: 1,
                borderRadius: 100,
                // backgroundColor: '#5BBCFF',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {/* <Text style={{fontSize: 25, fontWeight: '600', color: 'black'}}>
                DV
              </Text> */}
              <Image
                style={{height: '100%', width: '100%', borderRadius: 100}}
                source={require('../../assets/images/darthvader.jpeg')}
              />
            </View>
          </View>
          <View style={{justifyContent: 'center', marginLeft: 10}}>
            <Text style={{color: 'black', fontWeight: '500', fontSize: 17}}>
              Darth Vader
            </Text>
            <Text>darthvader@gmail.com</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            paddingVertical: 5,
            borderBottomWidth: 1,
          }}>
          <DrawerItems />
        </View>
      </DrawerContentScrollView>
      <View>
        <DrawerItem
          icon={() => (
            <Icons type={'fa'} name={'sign-out'} size={25} color={'black'} />
          )}
          label={'Sign Out'}
          labelStyle={{fontSize: 16, color: 'black'}}
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </View>
  );
}

export default DrawerContents;

const styles = StyleSheet.create({});

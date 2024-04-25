import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../common/components/header/Header';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function KeyboardAwareScrollScreen() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.06}}>
        <Header
          title={'Keyboard Aware Scroll View'}
          headerStyle={{
            flex: 1,
            backgroundColor: '#8B93FF',
          }}
        />
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: '#F7EEDD',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => setVisible(!visible)}
          style={{
            backgroundColor: '#41C9E2',
            paddingVertical: 10,
            paddingHorizontal: 7,
            borderRadius: 5,
          }}
          activeOpacity={0.5}>
          <Text style={{color: 'white', fontSize: 18, fontWeight: '600'}}>
            Open Modal
          </Text>
        </TouchableOpacity>
      </View>
      {/* <Text>KeyboardAwareScrollScreen</Text> */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setVisible(!visible);
        }}>
        <View style={{flex: 1, backgroundColor: '#FFF455', padding: 10}}>
          <TouchableOpacity
            onPress={() => setVisible(!visible)}
            style={{
              backgroundColor: '#FFC700',
              width: '10%',
              alignSelf: 'flex-end',
              borderRadius: 5,
              borderWidth: 2,
              elevation: 5,
              backfaceVisibility: 'hidden',
            }}>
            <Text
              style={{
                padding: 10,
                fontSize: 18,
                textAlign: 'center',
                fontWeight: 500,
                color: 'black',
              }}>
              X
            </Text>
          </TouchableOpacity>

          <KeyboardAwareScrollView>
            <View
              style={{
                gap: 10,
                flex: 1,
              }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                return (
                  <View
                    style={{padding: 5, gap: 5, marginVertical: 5}}
                    key={index}>
                    <Text
                      style={{fontSize: 19, fontWeight: 600, color: 'black'}}>
                      Username
                    </Text>
                    <TextInput
                      style={{
                        borderWidth: 1,
                        backgroundColor: '#DFF5FF',
                        borderRadius: 5,
                        color: 'black',
                        padding: 10,
                        fontSize: 15,
                        fontWeight: '500',
                      }}
                    />
                  </View>
                );
              })}
            </View>
          </KeyboardAwareScrollView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({});

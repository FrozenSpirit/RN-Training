import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ShapeScreen() {
  return (
    <View style={styles.container}>
      <Text>ShapeScreen</Text>
      <View style={styles.circleShapeView} />
      <View style={styles.ovalShapeView} />
      <View style={styles.squareShapeView} />
      <View style={styles.rectangleShapeView} />
      <View style={styles.triangleShapeView} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  circleShapeView: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: '#FF00FF',
  },
  ovalShapeView: {
    width: 100,
    height: 100,
    backgroundColor: '#ED2525',
    borderRadius: 100,
    transform: [{scaleX: 2}],
  },
  squareShapeView: {height: 100, width: 100, backgroundColor: 'green'},
  rectangleShapeView: {height: 100, width: 100 * 2, backgroundColor: 'blue'},
  triangleShapeView: {
    width: 0,
    height: 0,
    borderLeftWidth: 60,
    borderRightWidth: 60,
    borderBottomWidth: 120,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'orange',
  },
});

import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
  setData: async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
      console.log('setting value', value);
    } catch (error) {
      console.error('Error saving data:', error);
      // Handle errors here (e.g., show an alert)
    }
  },

  getData: async key => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      console.log('getting value', JSON.parse(jsonValue));
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error('Error retrieving data:', error);
      // Handle errors here (e.g., show an alert)
    }
  },
};

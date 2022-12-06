import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
  return (
    <View>
      <Text>Hello, world!</Text>
      <Icon name="favorite" size={30} color={'red'} />
    </View>
  );
};

export default HomeScreen;

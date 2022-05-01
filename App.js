import React from 'react';
import Route from './Route/Route';
import {View, StatusBar} from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor="black" />
      <Route />
    </View>
  );
}

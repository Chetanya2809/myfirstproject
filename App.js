import React from 'react';
import  Route  from './Route/Route'
import {View , StatusBar} from 'react-native';
import OnBoardingScreen from './DemoProjectAjio/OnBoardingScreen';

export default function App() {
  return (
    <View style={{flex:1}}>
      <StatusBar barStyle='dark-content' backgroundColor='#c9d9e0' />
    <Route/>
    </View>
  );
}

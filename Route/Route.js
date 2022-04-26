import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Main from './Main';
import OnBoardingScreen from '../DemoProjectAjio/OnBoardingScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack= createNativeStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        >
        {/* <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} /> */}
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import OnBoardingScreen from '../DemoProjectAjio/OnBoardingScreen';
import Main from './Main';
import Notification from '../DemoProjectAjio/Notification';
import Screen1 from '../DemoProjectAjio/Screen1';
import Men from '../DemoProjectAjio/Mens';
import Women from '../DemoProjectAjio/Women';
import Kids from '../DemoProjectAjio/Kids';
import ItemView from '../DemoProjectAjio/ItemView';
import Jewellery from '../DemoProjectAjio/Jewellery';
import Footwear from '../DemoProjectAjio/Footwear';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Women" component={Women} />
        <Stack.Screen name="Men" component={Men} />
        <Stack.Screen name="Kids" component={Kids} />
        <Stack.Screen name="ItemView" component={ItemView} />
        <Stack.Screen name="Jewellery" component={Jewellery} />
        <Stack.Screen name="Footwear" component={Footwear} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

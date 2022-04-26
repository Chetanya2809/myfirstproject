import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Button} from 'react-native';

const Tab = createBottomTabNavigator();

export default function Bottom({navigation}) {
  function Home1() {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 250,
        }}>
        <Text>Home</Text>
        <Button
          title="GO To Home Screen"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }

  function StoringItem1() {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 250,
        }}>
        <Text>StoringItem</Text>
        <Button
          title="GO To Home Screen"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }

  function Account1() {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 250,
        }}>
        <Text>Account</Text>
        <Button
          title="GO To Home Screen"
          onPress={() => navigation.navigate('Home')}
        />
        <Button title="GO Back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home1} />
      <Tab.Screen name="StoringItem" component={StoringItem1} />
      <Tab.Screen name="Account" component={Account1} />
    </Tab.Navigator>
  );
}

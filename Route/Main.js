import React from 'react';
import {Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../DemoProjectAjio/HomeScreen';
import StoringItem from '../DemoProjectAjio/StoringItem';
import Account from '../DemoProjectAjio/Account';
import Wishlist from '../DemoProjectAjio/Wishlist';
import Bag from '../DemoProjectAjio/Bag';

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
      <Tab.Navigator
      screenOptions={{headerShown:false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor:'black'
      }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Image
                  style={{height: 20, width: 20}}
                  source={
                    focused
                      ? require('../src/assests/Images/Home.png')
                      : require('../src/assests/Images/lighthome.png')
                  }
                />
              );
            },
           
          }}
        />
        <Tab.Screen
          name="StoringItem"
          component={StoringItem}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Image
                  style={{height: 20, width: 20}}
                  source={
                    focused
                      ? require('../src/assests/Images/darkstore.png')
                      : require('../src/assests/Images/store.png')
                  }
                />
              );
            },
            tabBarActiveTintColor: 'black',
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Image
                  style={{height: 20, width: 20}}
                  source={
                    focused
                      ? require('../src/assests/Images/darkuser.png')
                      : require('../src/assests/Images/user.png')
                  }
                />
              );
            },
            tabBarActiveTintColor: 'black',
          }}
        />
        <Tab.Screen
          name="Wishlist"
          component={Wishlist}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Image
                  style={{height: 20, width: 20}}
                  source={
                    focused
                      ? require('../src/assests/Images/darkheart.png')
                      : require('../src/assests/Images/heart.png')
                  }
                />
              );
            },
            tabBarActiveTintColor: 'black',
          }}
        />
        <Tab.Screen
          name="Bag"
          component={Bag}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Image
                  style={{height: 20, width: 20}}
                  source={
                    focused
                      ? require('../src/assests/Images/darkbag.png')
                      : require('../src/assests/Images/bag.png')
                  }
                />
              );
            },
            tabBarActiveTintColor: 'black',
          }}
        />
      </Tab.Navigator>

  );
}

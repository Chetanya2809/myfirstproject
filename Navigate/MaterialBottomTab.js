import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import TopTabNavigation from '../TopTabNavigation';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <TopTabNavigation navigation={navigation} header={'home'}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!</Text>
      </View>
    </View>
  );
}

function SettingsScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <TopTabNavigation navigation={navigation} header={'Settings'}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings!</Text>
      </View>
    </View>
  );
}

function Notes({navigation}) {
  return (
    <View style={{flex: 1}}>
      <TopTabNavigation navigation={navigation} header={'Notes'}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Notes!</Text>
      </View>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();
export default function App() {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator 
        shifting={true}
        activeColor='black'
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                tabBarColor:'orange',
              tabBarIcon: ({focused, color, size}) => {
                return (
                  <Image
                    style={
                      focused
                        ? {height: 25, width: 25}
                        : {height: 20, width: 20}
                    }
                    source={{
                      uri: focused
                        ? 'https://cdn-icons-png.flaticon.com/128/1946/1946436.png'
                        : 'https://cdn-icons-png.flaticon.com/512/1946/1946488.png',
                    }}
                  />
                );
              },
              tabBarLabel: 'MyHome',
              
            }}
          />

          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
            tabBarColor:'cornflowerblue',
              tabBarIcon: ({focused}) => {
                return (
                  <Image
                    style={
                      focused
                        ? {height: 25, width: 25}
                        : {height: 25, width: 25}
                    }
                    source={{
                      uri: focused
                        ? 'https://cdn-icons-png.flaticon.com/512/3524/3524659.png'
                        : 'https://cdn-icons-png.flaticon.com/512/3524/3524636.png',
                    }}
                  />
                );
              },
            }}
          />

          <Tab.Screen
            name="Notes"
            component={Notes}
            options={{
                tabBarColor:'coral',
              tabBarIcon: ({focused}) => {
                return (
                  <Image
                    style={
                      focused
                        ? {height: 25, width: 25}
                        : {height: 25, width: 25}
                    }
                    source={{
                      uri: focused
                        ? 'https://cdn-icons-png.flaticon.com/128/768/768869.png'
                        : 'https://cdn-icons-png.flaticon.com/128/768/768818.png',
                    }}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

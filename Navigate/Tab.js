import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TopTabNavigation from '../TopTabNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack=createNativeStackNavigator()

function HomeScreen() {
  return (
    // <View style={{flex: 1}}>
    //   <TopTabNavigation navigation={navigation} 
    //   header='Home'

      <HomeStack.Navigator>
          <HomeStack.Screen
          name='InitialHome'
          component={InitialHome}
          />
          <HomeStack.Screen
          name='Home1'
          component={Home1}
          />
          <HomeStack.Screen
          name='Home2'
          component={Home2}
          />
      </HomeStack.Navigator>
    //</View>
  );
}

function InitialHome({navigation}){
    return(
        <Text 
        style={{fontSize:30,color:'red',alignSelf:'center'}}
        onPress={()=>{
            navigation.navigate("Home1")
        }}>
            Go To Home1 Screen
        </Text>
    )
}
function Home1({navigation}){
return(
    <Text 
    style={{fontSize:30,color:'red',alignSelf:'center'}}
    onPress={()=>{
        navigation.navigate("Home2")
    }}>
        Go To Home2 Screen
    </Text>
)
}

function Home2(){
    return(
        <Text style={{fontSize:30,color:'red',alignSelf:'center'}}>
            I am Home2 Screen
        </Text>
    )
}

function SettingsScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <TopTabNavigation navigation={navigation} 
        header='Settings'
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings!</Text>
      </View>
    </View>
  );
}

function Notes({navigation}) {
  return (
    <View style={{flex: 1}}>
      <TopTabNavigation navigation={navigation} 
        header='Notes'
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Notes!</Text>
      </View>
    </View>
  );
}

 const Tab = createBottomTabNavigator();
//const Tab = createMaterialBottomTabNavigator();
export default function App() {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator
          shifting={true}
          screenOptions={{
            // tabBarActiveBackgroundColor:'#EA5C2B',
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'purple',
            tabBarLabelStyle: {fontSize: 15},
            headerShown: false,

            tabBarStyle: {
              backgroundColor: '#FFB72B',
              position: 'absolute',
              //   tabBarBackground: () => (
              //     <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
              //   ),
            },
            tabBarOptions: {
              backgroundColor: 'green',
            },
            tabBarShowLabel: true,
            // tabBarLabelStyle: {
            //     fontSize: 30,
            //   },
            //tabBarLabel:'Settings'.toLowerCase(),
            tabBarHideOnKeyboard: false,
          }}>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
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
              // color:'red'
              //tabBarBadge: 2,
              tabBarLabel: 'MyHome',
              //headerTitleAlign:'center'

              // tabBarLabelPosition:'beside-icon'
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarIcon: ({focused}) => {
                return (
                  <Image
                    style={
                      focused
                        ? {height: 30, width: 30}
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
              tabBarIcon: ({focused}) => {
                return (
                  <Image
                    style={
                      focused
                        ? {height: 30, width: 30}
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

// import * as React from 'react';
// import { Button, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//       <Button
//         title="Go to Settings"
//         onPress={() => navigation.navigate('Settings')}
//       />
//     </View>
//   );
// }

// function SettingsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen}
//         options={{tabBarIcon:({focused})=>{
//             return(

//             )

//         }}}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

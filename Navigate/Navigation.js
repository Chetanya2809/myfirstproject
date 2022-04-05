import React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './Details';
import HomeScreen from './Home'

console.log('NavigationContainer',NavigationContainer)
const Stack = createNativeStackNavigator();
console.log("In Stack ",Stack)


function App(){
    return(
        <NavigationContainer>
           <Stack.Navigator>
           <Stack.Screen name="Home" component={HomeScreen} />
           <Stack.Screen name="Details" component={DetailsScreen} options={{title:'Title'}}/>
      </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;

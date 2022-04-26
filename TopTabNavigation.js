import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function TopTabNavigation(props) {
    
  return (
    <SafeAreaView style={Styles.main}>
        <View >
      <TouchableOpacity style={{marginTop:2, marginLeft:10}} onPress={()=>{}} >
        <Image
          style={{height: 22, width: 22,marginTop:4}}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/130/130882.png',
          }}
        />
      </TouchableOpacity>
      </View>
      <View>
      <Text style={Styles.text}>{props.header}</Text>
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  main: {
   // marginTop: '14%',
    //marginLeft: '2%',
    //marginRight: '2%',
   // height: 40,
    flexDirection: 'row',
  },
  text: {
    marginLeft: '43%',
    fontSize: 20,
    alignSelf:"center",
marginTop:3
  },

});


// import * as React from 'react';
// import { Button, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
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
      <TouchableOpacity style={{marginTop:2, marginLeft:10}} onPress={()=>{
        props.navigation.goBack();
      }} >
        <Image
          style={{height: 22, width: 22,marginTop:4}}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/130/130882.png',
          }}
        />
      </TouchableOpacity>
      </View>
      <View style={{}}>
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

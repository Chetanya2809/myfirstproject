import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Image
} from 'react-native';
import React from 'react';

export default function OnBoardingScreen({navigation}) {
  setTimeout(() => {
    navigation.replace('Main');
  },3000);
  return (
    <View style={styles.con}>
        {/* <Text style={styles.textStyle}> AJIO</Text> */}
        <Image
        style={{height:85,width:300}}
        source={require('../src/assests/Images/Ajio-Logo.png')}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  textStyle:{
      fontWeight:'bold',
      fontSize:50,
      color:'white',
      fontFamily:'Times New Roman'
  },
  spanText:{
      color:'white',
      alignSelf:'center',
      padding:10
  }
});

import {View, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('screen');

export default function OnBoardingScreen({navigation}) {
  setTimeout(() => {
    navigation.replace('Main');
  }, 3000);
  return (
    <View style={styles.con}>
      <Image
        style={styles.image}
        source={require('../src/assests/Images/AjioLogo.jpeg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 90,
    color: 'white',
    fontFamily: 'Times New Roman',
    letterSpacing: 2,
  },
  spanText: {
    color: 'white',
    alignSelf: 'center',
    padding: 10,
  },
  image: {
    height: height / 2,
    width: width / 0.5,
    marginBottom: 80,
  },
});

import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('screen');

export default function Bag({navigation}) {
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.mainview}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={{height: 20, width: 20}}
            source={require('../src/assests/Images/cross.png')}
          />
        </TouchableOpacity>
        <Image
          style={{height: 29, width: 29}}
          source={require('../src/assests/Images/love.png')}
        />
      </View>
      {/* <ScrollView> */}
      <Text style={styles.bagtext}>Bag</Text>
      <Image
        style={styles.hdfc}
        source={require('../src/assests/Images/HDFC.webp')}
      />
      <View style={styles.innerview}>
        <View style={styles.innerview1}>
          <View style={styles.roundview}>
            <Image
              style={{height: 35, width: 35}}
              source={require('../src/assests/Images/shopbag.png')}
            />
          </View>
          <Text style={styles.emptytext}>Your bag is empty</Text>
        </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
  },
  mainview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: Platform.OS === 'ios' ? 0 : 15,
  },
  bagtext: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: Platform.OS === 'ios' ? 10 : 0,
  },
  hdfc: {
    width: '100%',
    height: 100,
    marginVertical: Platform.OS === 'ios' ? 0 : 10,
  },
  innerview: {
    backgroundColor: '#c9d9e090',
    marginTop: Platform.OS === 'ios' ? 10 : 0,
    height: height / 1,
  },
  roundview: {
    height: 70,
    width: 70,
    borderWidth: 3,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptytext: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  innerview1: {
    marginTop: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

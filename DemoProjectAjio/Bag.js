import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

export default function Bag({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity onPress={() => {navigation.goBack()}}>
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
      <ScrollView>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginHorizontal: 10,
            marginVertical: 5,
          }}>
          Bag
        </Text>
        <Image
          style={{width: '100%', height: 100}}
          source={require('../src/assests/Images/HDFC.webp')}
        />
        <View
          style={{
            backgroundColor: '#c9d9e090',
            justifyContent: 'center',
            alignItems: 'center',
            height: 560,
          }}>
          <View
            style={{
              height: 70,
              width: 70,
              borderWidth: 3,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#c9d9e0',
            }}>
            <Image
              style={{height: 35, width: 35}}
              source={require('../src/assests/Images/shopbag.png')}
            />
          </View>
          <Text style={{fontWeight: 'bold', marginTop: 10, fontSize: 20}}>
            Your bag is empty
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

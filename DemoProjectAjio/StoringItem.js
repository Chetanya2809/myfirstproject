import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import HeaderHome from '../DemoProjectAjio/HeaderHome';
import styles from '../MainStyleSheet/StoringStyleSheet';

export default function StoringItem(props) {
  return (
    <SafeAreaView style={styles.safearea}>
      <HeaderHome name={'Stores'} />
      <ScrollView bounces={false}>
        <View style={styles.container}>
          <Text style={styles.text1}>THE ULTIMATE FASHION DESTINATION</Text>
          <Text style={styles.text2}>
            The hottest brands and styles - all a click away!
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 0.5, backgroundColor: '#f10464', height: 7}} />
          <View style={{flex: 0.5, backgroundColor: '#097bc8'}} />
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <Image
            style={styles.luxe}
            source={require('../src/assests/Images/luxe1.png')}
          />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 0.5, backgroundColor: '#f10464', height: 7}} />
          <View style={{flex: 0.5, backgroundColor: '#097bc8'}} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 2,
          }}>
          <TouchableOpacity activeOpacity={0.7}>
            <Image
              style={{height: 280, width: 195}}
              source={require('../src/assests/Images/sonam.webp')}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <Image
              style={{height: 280, width: 190}}
              source={require('../src/assests/Images/boy.jpeg')}
            />
          </TouchableOpacity>
        </View>

        <Image
          style={{height: 300, width: '100%', marginTop: 4}}
          source={require('../src/assests/Images/sneakerHood.jpeg')}
        />
        <View style={styles.careview}>
          <Text style={styles.caretext}>AJIO CARES</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

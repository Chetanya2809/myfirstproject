import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('screen');

export default function ItemView({navigation, route}) {
  return (
    <View style={styles.container}>
      <View style={styles.headview}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={styles.backimage}
            source={require('../src/assests/Images/back.png')}
          />
        </TouchableOpacity>
        <View style={styles.headview1}>
          <TouchableOpacity>
            <Image
              style={styles.image}
              source={require('../src/assests/Images/Search.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.image}
              source={require('../src/assests/Images/bag.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView bounces={false}>
        <View style={{backgroundColor: 'white', height: 400, width: 400}}>
          <Image style={styles.itemimage} source={{uri: route.params.image}} />
        </View>
        <View style={styles.view1}>
          <Text style={styles.titletext}>{route.params.title} </Text>
          <Text style={styles.pricetext}>₹{route.params.price} </Text>
          <Text style={{color: 'grey'}}>Price inclusive off all taxes.</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.color}>Color</Text>
          <View style={styles.round}>
            <Image
              resizeMode="cover"
              style={{height: '90%', width: '90%', borderRadius: 30}}
              source={require('../src/assests/Images/blackImg.png')}
            />
          </View>
        </View>
        <View style={styles.view3}>
          <Text style={styles.view3text}>
            Rating {route.params.rating.rate}
          </Text>
          <Image
            style={{height: height / 20, width: width / 4, marginRight: 13}}
            source={require('../src/assests/Images/rating.jpeg')}
          />
        </View>
        <View style={styles.view4}>
          <Text style={styles.view4text}>Description</Text>
          <View style={{width: width / 1.1}}>
            <Text style={styles.view5text}>{route.params.description} </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    backgroundColor: 'white',
    borderTopWidth: 0.5,
    borderTopColor: 'grey',
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#c9d9e060',
    paddingVertical: Platform.OS === 'ios' ? 37 : 0,
  },
  headview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.3,
    paddingVertical: 8,
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  backimage: {
    height: 25,
    width: 25,
    left: 10,
  },
  image: {
    height: 25,
    width: 25,
    marginRight: Platform.OS === 'ios' ? 15 : 20,
  },
  headview1: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  itemimage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  titletext: {
    color: 'grey',
    fontSize: 20,
  },
  pricetext: {
    fontSize: 20,
    paddingVertical: Platform.OS === 'ios' ? 4 : 0,
  },
  view2: {
    marginTop: 7,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  color: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: Platform.OS === 'ios' ? 8 : 10,
  },
  round: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 18,
    borderWidth: 1,
    width: width / 8,
    borderRadius: 30,
    overflow: 'hidden',
  },
  view3: {
    backgroundColor: 'white',
    marginTop: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: height / 15,
  },
  view3text: {
    fontSize: Platform.OS === 'ios' ? 20 : 17,
    fontWeight: '600',
  },
  view4: {
    backgroundColor: 'white',
    marginTop: 10,
    padding: 10,
  },
  view4text: {
    fontSize: Platform.OS === 'ios' ? 20 : 17,
    fontWeight: '500',
  },
  view5text: {
    fontSize: 13,
    paddingVertical: 10,
  },
});

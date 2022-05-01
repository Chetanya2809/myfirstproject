import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';

const data = [
  {
    image: require('../src/assests/Images/women1.webp'),
  },
  {
    image: require('../src/assests/Images/women2.webp'),
  },
  {
    image: require('../src/assests/Images/women3.webp'),
  },
  {
    image: require('../src/assests/Images/women4.webp'),
  },
  {
    image: require('../src/assests/Images/women5.jpeg'),
  },
  {
    image: require('../src/assests/Images/women6.jpeg'),
  },
];
const {height, width} = Dimensions.get('screen');

export default function Women({navigation}) {
  const _renderItem = ({item}) => {
    return (
      <View style={styles.renderview}>
        <Image style={styles.renderImage} source={item.image} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperview}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <View style={styles.backarrowview}>
            <Image
              style={styles.backarrow}
              source={require('../src/assests/Images/back.png')}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.text}>Women's</Text>
      </View>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={_renderItem}
        bounces={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  upperview: {
    flexDirection: 'row',
    paddingVertical: Platform.OS === 'ios' ? 0 : 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
  renderview: {
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    left: Platform.OS === 'ios' ? 2 : 10,
  },
  renderImage: {
    height: height / 3,
    width: Platform.OS === 'ios' ? width / 2.2 : width / 2.3,
    borderRadius: 20,
  },
  text: {
    fontSize: Platform.OS === 'ios' ? 25 : 20,
    fontWeight: '500',
    color: 'magenta',
    left: 10,
  },
  backarrow: {
    height: 25,
    width: 25,
  },
  backarrowview: {
    backgroundColor: 'white',
    width: width / 9,
    height: height / 32,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

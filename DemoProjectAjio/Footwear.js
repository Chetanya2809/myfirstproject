import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';

const data = [
  {
    image: require('../src/assests/Images/foot1.jpeg'),
  },
  {
    image: require('../src/assests/Images/foot2.jpeg'),
  },
  {
    image: require('../src/assests/Images/foot3.jpeg'),
  },
  {
    image: require('../src/assests/Images/foot4.jpeg'),
  },
  {
    image: require('../src/assests/Images/foot5.jpeg'),
  },
  {
    image: require('../src/assests/Images/foot6.jpeg'),
  },
];

const {height, width} = Dimensions.get('screen');

export default function Men({navigation}) {
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
        <Text style={styles.text}>Footwear</Text>
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

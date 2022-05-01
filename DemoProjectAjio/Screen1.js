import {
  View,
  Text,
  FlatList,
  Button,
  Image,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';

const {height, width} = Dimensions.get('screen');

export default function Wishlist({navigation}) {
  const [data, setdata] = useState([]);
  const [val, setdata1] = useState(6);
  const [loading, setLoading] = useState(true);
  const flatref = useRef();

  const getApi = () => {
    axios.get(`https://fakestoreapi.com/products`).then(response => {
      console.log('response', response.data);
      setdata(response.data.slice(0, val));
      console.log('resssss', response.data);
    });
  };

  useEffect(() => {
    return navigation.addListener('tabPress', e => {
      flatref.current.scrollToIndex({index: 0});
    });
  });

  useEffect(() => {
    getApi();
  }, []);

  const _onEndReached = () => {
    return axios.get(`https://fakestoreapi.com/products`).then(response => {
      console.log('second', response);
      setdata([...data, ...response.data.slice(val, val + 6)]);
      console.log('dfxgchjkvbkl', data);
      setdata1(val + 6);
    });
  };

  const listempty = () => {
    return (
      <View style={styles.emptyview}>
        <Text style={styles.emptyviewtext}> Loading...</Text>
      </View>
    );
  };

  const keyExtractor = item => item.id;

  const _renderItem = ({item}) => {
    return (
      <View style={styles.rendermainview}>
        <TouchableOpacity
          onPress={() => {
            let index = data.findIndex(x => x == item);
            console.log('index', index);
            navigation.navigate('ItemView', {...data[index]});
          }}>
          <Image style={styles.image1} source={{uri: item.image}} />
        </TouchableOpacity>
        <Text numberOfLines={1} style={{paddingVertical: 10}}>
          {item.title}
        </Text>
        <Text>{`$ ${item.price}`} </Text>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <>
        {val <= 18 ? (
          <View style={styles.footer}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={data}
              style={styles.loadMoreBtn}>
              {loading ? (
                <ActivityIndicator color="black" style={{marginLeft: 8}} />
              ) : null}
            </TouchableOpacity>
          </View>
        ) : null}
      </>
    );
  };

  return (
    <SafeAreaView style={styles.maincontainer}>
      <View style={styles.mainview}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={styles.uparrow}
            source={require('../src/assests/Images/back.png')}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        ref={flatref}
        bounces={false}
        contentContainerStyle={{alignItems: 'center', marginTop: 10}}
        numColumns={2}
        data={data}
        renderItem={_renderItem}
        onEndReached={_onEndReached}
        keyExtractor={keyExtractor}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,

    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyview: {
    justifyContent: 'center',
  },
  emptyviewtext: {
    fontSize: 24,
    fontWeight: '400',
    letterSpacing: 2,
  },
  rendermainview: {
    height: height / 3.0,
    width: width * 0.45,
    marginHorizontal: 10,
    // marginVertical: 3,
  },
  image1: {
    height: 220,
    width: width * 0.44,
    borderRadius: 20,
    resizeMode: 'contain',
  },
  blockview: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  touch1: {
    top: 5,
  },
  dltimage: {
    height: 20,
    width: 20,
    marginTop: 5,
  },
  touch2: {
    marginLeft: 6,
    marginTop: 5,
    backgroundColor: 'black',
    height: 30,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  touch2text: {
    color: 'white',
  },
  maincontainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainview: {
    flexDirection: 'row',
    marginTop: 10,
  },
  mainviewtext1: {
    fontSize: 20,
    fontWeight: '500',
    // marginTop: 20,
    left: 10,
  },
  uparrow: {
    height: 30,
    width: 30,
    left: 16,
  },
});

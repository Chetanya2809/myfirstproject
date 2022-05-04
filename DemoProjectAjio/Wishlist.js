import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native'
const {height, width} = Dimensions.get('screen');

const tempArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 12, 12, 13]
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
    console.log('val', val);
    return axios.get(`https://fakestoreapi.com/products`).then(response => {
      console.log('second', response);
      setdata([...data, ...response.data.slice(val, val + 6)]);
      console.log('dfxgchjkvbkl', data);
      setdata1(val + 6);
    });
  };

  const keyExtractor = item => item.id;

 const _ListEmptyComponent=()=>{
   return(
    tempArr.map(()=><ContentLoader viewBox="0 0 380 70">
    <Rect x="30" y="17" rx="4" ry="4" width="300" height="13" />
    <Rect x="30" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>)
    )
 }

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
        <View style={styles.blockview}>
          <TouchableOpacity style={styles.touch1}>
            <Image
              source={require('../src/assests/Images/delete.png')}
              resizeMode={'contain'}
              style={styles.dltimage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touch2}>
            <Text style={styles.touch2text}>{'Add to Bag'}</Text>
          </TouchableOpacity>
        </View>
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
        <Text style={styles.mainviewtext1}>Wishlist</Text>
        <TouchableOpacity
          onPress={() => {
            flatref.current.scrollToIndex({
              index: 0,
            });
          }}>
          <Image
            style={styles.uparrow}
            source={require('../src/assests/Images/up-arrow.png')}
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
        ListEmptyComponent={_ListEmptyComponent}
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
    height: height / 2.6,
    width: width * 0.45,
    marginHorizontal: 10,
    marginVertical: 3,
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

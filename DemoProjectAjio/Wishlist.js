import {
  View,
  Text,
  FlatList,
  Button,
  Image,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function Wishlist() {
  const [data, setdata] = useState([]);

  const {height, width} = Dimensions.get('screen');

  const getApi = () => {
    axios.get(`https://fakestoreapi.com/products`).then(response => {
      console.log('response', response.data);
      setdata(response.data);
    });
  };

  useEffect(() => {
    getApi();
  }, []);

  const _renderItem = ({item}) => {
    return (
      <View
        style={{
          height: height / 2.8,
          width: width * 0.45,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.20,
          shadowRadius: 1.41,
          
          elevation: 2,
          marginHorizontal:10,
          alignItems:'center',
          justifyContent:'center'
        }}>
        <View>
          <Image
            style={{
              height: 220,
              width: width*0.45,
              borderRadius: 30,
              resizeMode: 'stretch',
            }}
            source={{uri: item.image}}
          />
          <Text numberOfLines={1}>{item.title}</Text>
          <Text>{`$ ${item.price}`} </Text>
          <View style={{flexDirection:'row',marginLeft:10}}>
            <TouchableOpacity style={{top:5}}>
          <Image
          source={require('../src/assests/Images/delete.png')}
          resizeMode={'contain'}
          style={{height:20,width:20,marginTop:5}}
          />
          </TouchableOpacity>
            <TouchableOpacity style={{marginTop:5,backgroundColor:'black',height:30,width:130,alignItems:'center',justifyContent:'center'
          ,borderRadius:10
          }}>
              <Text style={{color:'white'}}>{'Add to Bag'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={{fontSize: 20, fontWeight: '500'}}>Wishlist</Text>
      <FlatList
        contentContainerStyle={{alignItems: 'center', marginTop: 10}}
        numColumns={2}
        data={data}
        renderItem={_renderItem}
      />
    </SafeAreaView>
  );
}

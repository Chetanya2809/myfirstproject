import {Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {FlatList} from 'react-native-gesture-handler';

export default function SearchModal(props) {
  const data = ['man', 'women', 'cap', 'Winter - Wear', 'Shoes', 'Jewellery'];
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          marginHorizontal: 10,
          height: 30,
          padding: 4,
          paddingHorizontal: 10,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}>
        <Text>{item}</Text>
      </View>
    );
  };
  return (
    <Modal
      backdropColor="white"
      backdropOpacity={1}
      style={{
        backgroundColor: '#c9d9e090',
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'flex-start',
        // marginBottom: '-10%',
      }}
      isVisible={props.visibleModal1}>
      <View style={{backgroundColor: 'white'}}>
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            marginTop: Platform.OS === 'ios' ? 10 : -40,
            padding: Platform.OS === 'ios' ? 10 : 20,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              props.setVisibleModal1(!props.visibleModal1);
            }}>
            <Image
              style={{height: 20, width: 20, left: 2, marginTop: 3}}
              source={require('../src/assests/Images/cross.png')}
            />
          </TouchableOpacity>
          <View
            style={{
              padding: Platform.OS === 'ios' ? 5 : 0,
              flexDirection: 'row',
              borderRadius: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#c9d9e090',
              marginLeft: 'auto',
              right: 5,
            }}>
            <TextInput
              // autoFocus
              style={{
                padding: 5,
                width: '80%',
              }}
              placeholder="Search by product, Brand & more.."
            />
            <Image
              style={{
                height: 20,
                width: 20,
                alignSelf: 'center',
                marginStart: Platform.OS === 'ios' ? 5 : 10,
              }}
              source={require('../src/assests/Images/loupe.png')}
            />
          </View>
        </View>
      </View>
      <Text
        style={{
          marginTop: 15,
          fontSize: 20,
          fontWeight: '400',
          marginBottom: 15,
          left: 10,
        }}>
        Shop by
      </Text>

      <FlatList data={data} renderItem={renderItem} horizontal={true} />
    </Modal>
  );
}

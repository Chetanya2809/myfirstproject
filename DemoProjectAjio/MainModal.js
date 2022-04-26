import {View, Text, Image, TouchableOpacity, FlatList, StatusBar} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

function MainModal(props) {
  const data = [
    {
      image: require('../src/assests/Images/women.png'),
      name: 'Women',
      icon: require('../src/assests/Images/right-arrow.png'),
    },
    {
        image: require('../src/assests/Images/man.png'),
        name: 'Men',
        icon: require('../src/assests/Images/right-arrow.png'),
      },
      {
        image: require('../src/assests/Images/kids.png'),
        name: 'Kids',
        icon: require('../src/assests/Images/right-arrow.png'),
      },
      {
        image: require('../src/assests/Images/kitchen.png'),
        name: 'Home & Kitchen',
        icon: require('../src/assests/Images/right-arrow.png'),
      },
      {
        image: require('../src/assests/Images/beauty.png'),
        name: 'Beauty',
        icon: require('../src/assests/Images/right-arrow.png'),
      },
      {
        image: require('../src/assests/Images/new.png'),
        name: 'Spring Summer 22 Collection',
        // icon: require('../src/assests/Images/right-arrow.png'),
      },
      {
        image: require('../src/assests/Images/shops.png'),
        name: 'stores',
      },
      {
        image: require('../src/assests/Images/watch.png'),
        name: 'Watches',
        icon: require('../src/assests/Images/right-arrow.png'),
      },
      {
        image: require('../src/assests/Images/jewellery.png'),
        name: 'Jewellery',
        icon: require('../src/assests/Images/right-arrow.png'),
      },
      {
        image: require('../src/assests/Images/jacket.png'),
        name: 'Winter Wear',
        icon: require('../src/assests/Images/right-arrow.png'),
      },
  ];

  const _renderItem = ({item}) => {
    return (
        <View>
      <TouchableOpacity
      activeOpacity={0.8}
      >
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            height: 60,
            alignItems: 'center',
            marginHorizontal:20,
            marginVertical:1,
            paddingHorizontal:10,
            borderRadius:10
          }}>
          <Image style={{height: 27, width: 27}} source={item.image} />
          <Text style={{fontSize: 17, marginStart: 20}}>{item.name}</Text>
          <Image
            style={{height: 16, width: 17, marginLeft: 'auto'}}
            source={item.icon}
          />
        </View>
      </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
        <StatusBar backgroundColor={'white'} />
      <Modal
        backdropColor="white"
        backdropOpacity={1}
        style={{
          backgroundColor: '#c9d9e090',
          width: '100%',
          flex: 1,
          alignSelf: 'center',
          justifyContent: 'flex-start',
          marginBottom: '-10%',
        }}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        isVisible={props.visibleModal}>
        <View style={{backgroundColor:'white'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              marginTop:Platform.OS==='ios'? 10:-25,
              padding:20

            }}>
            <TouchableOpacity
              onPress={() => {
                props.setVisibleModal(!props.visibleModal);
              }}>
              <Image
                style={{height: 18, width: 18, left: 10, marginTop: 3}}
                source={require('../src/assests/Images/cross.png')}
              />
            </TouchableOpacity>
            <Text style={{fontSize: 20}}>AJIO</Text>
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <TouchableOpacity onPress={()=>{
                  props.setVisibleModal(!props.visibleModal)
              }}>
                <Image
                  style={{height: 20, width: 20, marginRight: 3}}
                  source={require('../src/assests/Images/lighthome.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{height: 20, width: 20, marginLeft: 5}}
                  source={require('../src/assests/Images/Search.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          </View>
          <Text
            style={{
              marginTop: 15,
              fontSize: 20,
              fontWeight: '400',
              marginBottom: 15,
            }}>
            Shop by
          </Text>
          <View>
            <FlatList
            bounces={false}
            data={data} renderItem={_renderItem} />
          </View>
      </Modal>
    </View>
  );
}

export default MainModal;

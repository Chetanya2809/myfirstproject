import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StatusBar,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import SearchModal from './SearchModal';

function MainModal(props, {navigation}) {
  // const [visibleModal1, setVisibleModal1] = useState(false);
  const [searchVis, setSearchVis] = useState(false);
  const data = [
    {
      image: require('../src/assests/Images/women.png'),
      name: 'Women',
      icon: require('../src/assests/Images/right-arrow.png'),
      navig: 'Women',
    },
    {
      image: require('../src/assests/Images/man.png'),
      name: 'Men',
      icon: require('../src/assests/Images/right-arrow.png'),
      navig: 'Men',
    },
    {
      image: require('../src/assests/Images/kids.png'),
      name: 'Kids',
      icon: require('../src/assests/Images/right-arrow.png'),
      navig: 'Kids',
    },
    {
      image: require('../src/assests/Images/kitchen.png'),
      name: 'Footwear',
      icon: require('../src/assests/Images/right-arrow.png'),
      navig: 'Footwear',
    },
    {
      image: require('../src/assests/Images/beauty.png'),
      name: 'Beauty',
      icon: require('../src/assests/Images/right-arrow.png'),
      navig: '',
    },
    {
      image: require('../src/assests/Images/new.png'),
      name: 'Spring Summer 22 Collection',
      navig: '',
    },
    {
      image: require('../src/assests/Images/shops.png'),
      name: 'stores',
      navig: '',
    },
    {
      image: require('../src/assests/Images/watch.png'),
      name: 'Watches',
      icon: require('../src/assests/Images/right-arrow.png'),
      navig: '',
    },
    {
      image: require('../src/assests/Images/jewellery.png'),
      name: 'Jewellery',
      icon: require('../src/assests/Images/right-arrow.png'),
      navig: 'Jewellery',
    },
    {
      image: require('../src/assests/Images/jacket.png'),
      name: 'Winter Wear',
      icon: require('../src/assests/Images/right-arrow.png'),
      navig: '',
    },
  ];

  const _renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            props.setVisibleModal(false);
            props.navigation.navigate(item.navig);
          }}
          activeOpacity={0.8}>
          <View style={styles.renderView}>
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
        onRequestClose={() => {
          props.setVisibleModal(!props.visibleModal);
        }}
        backdropColor="white"
        backdropOpacity={1}
        style={styles.modalStyle}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        isVisible={props.visibleModal}>
        <View style={{backgroundColor: 'white'}}>
          <View style={styles.view1}>
            <TouchableOpacity
              onPress={() => {
                props.setVisibleModal(!props.visibleModal);
              }}>
              <Image
                style={{height: 18, width: 18}}
                source={require('../src/assests/Images/cross.png')}
              />
            </TouchableOpacity>
            <Text style={{fontSize: 20, marginLeft: 30}}>AJIO</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => {
                  props.setVisibleModal(!props.visibleModal);
                }}>
                <Image
                  style={{height: 22, width: 22, marginRight: 3}}
                  source={require('../src/assests/Images/lighthome.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  console.log('clicked');
                  setSearchVis(!searchVis);
                }}>
                <Image
                  style={{height: 22, width: 22, marginLeft: 5}}
                  source={require('../src/assests/Images/Search.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={styles.shopby}>Shop by</Text>
        <View>
          <FlatList bounces={false} data={data} renderItem={_renderItem} />
        </View>
        <SearchModal
          visibleModal1={searchVis}
          setVisibleModal1={setSearchVis}
        />
      </Modal>
    </View>
  );
}

export default MainModal;

const styles = StyleSheet.create({
  renderView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 60,
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  modalStyle: {
    backgroundColor: '#c9d9e090',
    width: '100%',
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    marginBottom: '-10%',
  },
  view1: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginTop: Platform.OS === 'ios' ? 15 : -25,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  shopby: {
    paddingVertical: 15,
    fontSize: Platform.OS === 'ios' ? 25 : 20,
    fontWeight: '400',
    paddingHorizontal: 20,
  },
});

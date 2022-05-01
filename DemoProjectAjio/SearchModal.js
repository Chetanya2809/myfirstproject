import {
  Text,
  FlatList,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';

export default function SearchModal(props) {
  const data = ['man', 'women', 'cap', 'Winter - Wear', 'Shoes', 'Jewellery'];

  const renderItem = ({item}) => {
    return (
      <View style={styles.render}>
        <Text>{item}</Text>
      </View>
    );
  };
  return (
    <Modal
      onRequestClose={() => {
        props.setVisibleModal1(!props.visibleModal1);
      }}
      backdropColor="white"
      backdropOpacity={1}
      style={styles.modalstyle}
      isVisible={props.visibleModal1}>
      <View style={{backgroundColor: 'white'}}>
        <View style={styles.view1}>
          <TouchableOpacity
            onPress={() => {
              props.setVisibleModal1(!props.visibleModal1);
            }}>
            <Image
              style={styles.cross}
              source={require('../src/assests/Images/cross.png')}
            />
          </TouchableOpacity>
          <View style={styles.view2}>
            <TextInput
              // autoFocus
              style={styles.textinput}
              placeholder="Search by product, Brand & more.."
            />
            <Image
              style={styles.loupe}
              source={require('../src/assests/Images/loupe.png')}
            />
          </View>
        </View>
      </View>
      <Text style={styles.shopby}>Shop by</Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </Modal>
  );
}

const styles = StyleSheet.create({
  render: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    height: 30,
    padding: 4,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  modalstyle: {
    backgroundColor: '#c9d9e090',
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'flex-start',
  },
  view1: {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? 10 : -40,
    padding: Platform.OS === 'ios' ? 10 : 20,
    alignItems: 'center',
  },
  view2: {
    padding: Platform.OS === 'ios' ? 5 : 0,
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#c9d9e090',
    marginLeft: 'auto',
    right: 5,
  },
  textinput: {
    padding: 5,
    width: '80%',
  },
  loupe: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    marginStart: Platform.OS === 'ios' ? 5 : 10,
  },
  shopby: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 20,
    left: 10,
  },
  cross:{
    height: 20, width: 20, left: 2, marginTop: 3
  }
});

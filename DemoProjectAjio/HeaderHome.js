import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  Keyboard
} from 'react-native';
import React, {useState} from 'react';
import styles from '../MainStyleSheet/HomeStyleSheet';
import MainModal from './MainModal';
import SearchModal from './SearchModal'

export default function HomeHeader(props) {
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleModal1, setVisibleModal1] = useState(false);
  return (
    <View style={{backgroundColor: '#c9d9e090', bottom: 2}}>
      <View style={styles.main1}>
        <TouchableOpacity
          onPress={() => {
            setVisibleModal(!visibleModal);
          }}
           >
          <Image
            style={styles.image1}
            source={require('../src/assests/Images/hamburger.png')}
          />
        </TouchableOpacity>
        <MainModal
          visibleModal={visibleModal}
          setVisibleModal={setVisibleModal}
        />
       
        <Text style={styles.text}>{props.name} </Text>
        <TouchableOpacity>
          <Image
            style={styles.image2}
            source={require('../src/assests/Images/bell.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inpview}>
        <TouchableOpacity>
        <Image
          style={styles.search}
          source={require('../src/assests/Images/loupe.png')}
        />
        </TouchableOpacity>
        <TextInput
        onFocus={()=>{
          setVisibleModal1(!visibleModal1)
          Keyboard.dismiss()
        }}
          style={styles.inp}
          placeholder={'Search by Product, Brand & more...'}
        />
        <SearchModal
         visibleModal1={visibleModal1}
         setVisibleModal1={setVisibleModal1}
        />
      </View>
    </View>
  );
}

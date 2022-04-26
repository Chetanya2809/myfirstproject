import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  ImageBackground,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState, useRef} from 'react';
import styles from '../MainStyleSheet/AccountStyleSheet';
import PhoneInput from 'react-native-phone-number-input';
// import PhoneInput from "react-native-phone-number-input";

export default function Account() {
  const [modalVisible, setModalVisible] = useState(false);
  const [num, setNum] = useState('');
  return (
    <View style={styles.container}>
      <Modal animationType="slide" visible={modalVisible}>
        <ImageBackground
          style={{height: 170, opacity: 0.5}}
          source={require('../src/assests/Images/Bg.png')}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
                alignSelf: 'flex-end',
                marginRight: 20,
                marginTop: 50,
              }}
              source={require('../src/assests/Images/cross.png')}
            />
          </TouchableOpacity>
        </ImageBackground>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{height: 80, width: 80}}
            source={require('../src/assests/Images/AjioLogo.webp')}
          />
          <Text style={{fontSize: 20, marginTop: 15}}>Login or Signup</Text>
          <TextInput
            style={{
              fontSize: 18,
              height: 50,
              width: 300,
              backgroundColor: '#c9d9e0',
              marginTop: 40,
              paddingHorizontal: 55,
            }}
            clearButtonMode={'always'}
            placeholder="Enter Mobile Number"
            placeholderTextColor={'grey'}
            color="black"
          />
          <View style={{marginTop: 10}}>
            <View
              style={{
                backgroundColor: '#343434',
                borderRadius: 30,
                padding: 10,
                alignSelf: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  Alert.alert(num);
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 1}}>
              <Text style={{fontSize: 16, fontWeight: '600', marginTop: 10}}>
                Use E-mail ID
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={{alignSelf: 'center', marginTop: 250}}>
          Or continue with social account
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 18,
            justifyContent: 'space-between',
            paddingHorizontal: 140,
          }}>
          <Image
            style={{height: 30, width: 30}}
            source={require('../src/assests/Images/facebook.png')}
          />
          <Image
            style={{height: 30, width: 30}}
            source={require('../src/assests/Images/google.png')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 15,
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 10, color: 'grey'}}>
            By Signing up/Loggin in, I agree to
          </Text>
          <Text style={{fontSize: 10, color: 'blue'}}>Terms & Conditions</Text>
        </View>
      </Modal>

      <View style={styles.headview}>
        <Text style={styles.headtext}>My Account</Text>
      </View>
      <ScrollView bounces={false}>
        <View style={styles.uprbox}>
          <View style={styles.round}>
            <Image
              source={require('../src/assests/Images/loginUser.png')}
              style={styles.roundimg}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}>
            <View style={styles.box}>
              <Text style={styles.boxtext}>Sign in / Join</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.box1}>
            <Text style={styles.box1text}>Customer Care</Text>
            <Image
              style={styles.box1img}
              source={require('../src/assests/Images/right-arrow.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.box2}>
            <View>
              <Text style={styles.box2text}>Invite Friends & Earn </Text>
              <Text style={styles.box2text2}>
                You get ₹100 for every friend{' '}
              </Text>
            </View>
            <Image
              style={styles.box2img}
              source={require('../src/assests/Images/right-arrow.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.box3}>
            <Text style={styles.box3text}>Notifications</Text>
            <Image
              style={styles.box3img}
              source={require('../src/assests/Images/right-arrow.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.box4}>
            <Text style={styles.box4text}>Return Creation Demo</Text>
            <Image
              style={styles.box4img}
              source={require('../src/assests/Images/right-arrow.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.box5}>
            <Text style={styles.box5text}>How To Return</Text>
            <Image
              style={styles.box5img}
              source={require('../src/assests/Images/right-arrow.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.box5}>
            <Text style={styles.box5text}>How Do I Redeem My Coupon?</Text>
            <Image
              style={styles.box5img}
              source={require('../src/assests/Images/right-arrow.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.box5}>
            <Text style={styles.box5text}>Terms & Conditions</Text>
            <Image
              style={styles.box5img}
              source={require('../src/assests/Images/right-arrow.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.box5}>
            <Text style={styles.box5text}>Promotions Terms & Conditions</Text>
            <Image
              style={styles.box5img}
              source={require('../src/assests/Images/right-arrow.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.box5}>
            <Text style={styles.box5text}>Returns & Refunds Policy</Text>
            <Image
              style={styles.box5img}
              source={require('../src/assests/Images/right-arrow.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.box5}>
            <Text style={styles.box5text}>We Respect Your Privacy</Text>
            <Image
              style={styles.box5img}
              source={require('../src/assests/Images/right-arrow.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.box5}>
            <Text style={styles.box5text}>Fees & Payments</Text>
            <Image
              style={styles.box5img}
              source={require('../src/assests/Images/right-arrow.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.box5}>
            <Text style={styles.box5text}>Who We Are</Text>
            <Image
              style={styles.box5img}
              source={require('../src/assests/Images/right-arrow.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.box5}>
            <Text style={styles.box5text}>Join Our Team</Text>
            <Image
              style={styles.box5img}
              source={require('../src/assests/Images/right-arrow.png')}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: 'white',
            height: 50,
            marginTop: 1,
          }}>
          <Text style={{color: 'lightgrey', marginVertical: 12}}>
            Version 7.13.0 Build 1708
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

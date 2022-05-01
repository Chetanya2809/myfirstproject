import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';

export default function Notification({navigation}) {
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.mainview}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={styles.backarrow}
            source={require('../src/assests/Images/back.png')}
          />
        </TouchableOpacity>
        <Text style={styles.noti}>Notifications</Text>
      </View>
      <View style={styles.innerview}>
        <Image
          style={styles.gif}
          source={require('../src/assests/Images/emptybag.gif')}
        />
      </View>
      <Text style={styles.text}>No Notification Yet</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: Platform.OS === 'ios' ? '#c9d9e090' : 'white',
  },
  mainview: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Platform.OS === 'ios' ? 0 : 10,
  },
  backarrow: {
    height: 30,
    width: 30,
    left: 10,
  },
  noti: {
    fontSize: 25,
    fontWeight: '600',
    left: 100,
  },
  innerview: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gif: {
    height: '60%',
    width: '80%',
  },
  text: {
    fontSize: Platform.OS === 'ios' ? 40 : 20,
    alignSelf: 'center',
    letterSpacing: 2,
    fontFamily: 'SavoyeLetPlain',
  },
});

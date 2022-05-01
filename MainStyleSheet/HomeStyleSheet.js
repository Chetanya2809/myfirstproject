import {StyleSheet, Platform, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  safeview: {
    backgroundColor: '#c9d9e090',
    flex: 1,
  },
  main1: {
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 50 : 55,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image1: {
    height: 20,
    width: 20,
  },
  image2: {
    height: 18,
    width: 18,
  },
  text: {
    fontWeight: 'bold',
    letterSpacing: 2,
    fontSize: 20,
    marginRight: 60,
  },
  inp: {
    borderRadius: 8,
    width: '90%',
    marginLeft: 10,
  },
  inpview: {
    padding: Platform.OS === 'ios' ? 10 : 0,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'white',
    alignItems: 'center',
  },
  search: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    marginStart: Platform.OS === 'ios' ? 5 : 10,
  },
  images: {
    height: 80,
    width: 65,
  },
  imagetext: {
    color: 'black',
    fontSize: 7,
  },
  imgtextview: {
    backgroundColor: 'white',
    borderBottomEndRadius: 2,
    borderTopEndRadius: 2,
    top: 57,
    height: 13,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 52,
  },
  Image1: {
    height: height / 1.88,
    width: '100%',
  },
  off1: {
    height: 100,
    width: '100%',
  },
  trendimage: {
    height: 100,
    width: '100%',
  },
  slider1: {
    height: 100,
    width: '100%',
  },
  slider2: {
    height: height / 3.4,
    width: width / 1,
    backgroundColor: 'white',
  },
});

export default styles;

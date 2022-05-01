import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  innerlogoutview: {
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 300,
    borderRadius: 10,
  },
  logoutview: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 100,
    marginTop: 1,
    paddingVertical: 10,
  },
  view4: {
    flexDirection: 'row',
    paddingVertical: 15,
    justifyContent: 'center',
  },
  contitext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  view3: {
    backgroundColor: '#343434',
    borderRadius: 30,
    padding: 10,
    alignSelf: 'center',
  },
  textinput: {
    fontSize: 15,
    height: 50,
    backgroundColor: '#c9d9e090',
    marginTop: 40,
    paddingHorizontal: 70,
  },
  view2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cross: {
    height: 20,
    width: 20,
    alignSelf: 'flex-end',
    marginRight: 20,
    marginVertical: Platform.OS === 'ios' ? 45 : 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#c9d9e090',
  },
  headtext: {
    fontSize: 20,
    marginTop: Platform.OS === 'ios' ? 50 : 35,
    fontWeight: '500',
    marginLeft: 20,
  },
  headview: {
    backgroundColor: 'white',
    height: 85,
  },
  uprbox: {
    height: 160,
    backgroundColor: '#c9d9e090',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  round: {
    backgroundColor: 'black',
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  roundimg: {
    alignSelf: 'center',
    marginTop: 20,
    height: 35,
    width: 35,
  },
  box: {
    backgroundColor: 'black',
    width: 255,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  boxtext: {
    color: 'white',
    fontSize: 18,
  },
  box1: {
    height: 55,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  box1text: {
    fontSize: 18,
    fontWeight: '300',
  },
  box1img: {
    height: 15,
    width: 15,
  },
  box2: {
    marginTop: 1,
    height: 60,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  box2text: {
    fontSize: 18,
    fontWeight: '300',
  },
  box2img: {
    height: 15,
    width: 15,
  },
  box2text2: {
    fontSize: 12,
    color: 'grey',
  },
  box3: {
    marginTop: 5,
    height: 55,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  box3text: {
    fontSize: 18,
    fontWeight: '300',
  },
  box3img: {
    height: 15,
    width: 15,
  },
  box3text3: {
    fontSize: 12,
    color: 'grey',
  },
  box4: {
    marginTop: 6,
    height: 55,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  box4text: {
    fontSize: 18,
    fontWeight: '300',
  },
  box4img: {
    height: 15,
    width: 15,
  },
  box4text4: {
    fontSize: 12,
    color: 'grey',
  },
  box5: {
    marginTop: 1,
    height: 55,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  box5text: {
    fontSize: 18,
    fontWeight: '300',
  },
  box5img: {
    height: 15,
    width: 15,
  },
  box5text5: {
    fontSize: 12,
    color: 'grey',
  },
});

export default styles;

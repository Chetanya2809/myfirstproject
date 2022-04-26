import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useRef} from 'react';
import styles from '../MainStyleSheet/HomeStyleSheet';
import HomeHeader from './HeaderHome';
import {SliderBox} from 'react-native-image-slider-box';
import SliderImages from './SliderImages';

function HomeScreen({navigation}) {
  const data = [
    {
      key: require('../src/assests/Images/luxe.png'),
    },
    {
      key: require('../src/assests/Images/men.jpeg'),
      text: 'MEN',
    },
    {
      key: require('../src/assests/Images/women.jpeg'),
      text: 'WOMEN',
    },
    {
      key: require('../src/assests/Images/child.jpeg'),
      text: 'KIDS',
    },
    {
      key: require('../src/assests/Images/jewel.jpeg'),
      text: 'JEWELLERY',
    },
    {
      key: require('../src/assests/Images/footwear.jpeg'),
      text: 'FOOTWEAR',
    },
    {
      key: require('../src/assests/Images/accesories.jpeg'),
      text: 'ACCESSORIES',
    },
    {
      key: require('../src/assests/Images/bedsheet.jpeg'),
      text: 'HOME',
    },
    {
      key: require('../src/assests/Images/watch.jpeg'),
      text: 'WATCHES',
    },
  ];


  const __renderItem = ({item}) => {
    return (
        <TouchableOpacity>
          <Image style={{width: 165, height: 220}} source={item} />
        </TouchableOpacity>
    );
  };

  const _renderItem = ({item}) => {
    return (
        <TouchableOpacity>
          <ImageBackground style={{width: 65, height: 80}} source={item.key}>
            {item.text ? (
              <View style={styles.imgtextview}>
                <Text style={styles.imagetext}>{item.text}</Text>
              </View>
            ) : null}
          </ImageBackground>
        </TouchableOpacity>
    ); 
  };

  return (
    <SafeAreaView style={{backgroundColor: '#c9d9e090', flex: 1}}>
      <HomeHeader name={'AJIO'} navigation = {navigation}/>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <FlatList
          horizontal
          data={data}
          renderItem={_renderItem}
          bounces={false}
          showsHorizontalScrollIndicator={false}
        />
        {/* <Carousel
              ref={(c) => { const _carousel = c; }}
              data={data}
              renderItem={_renderItem}
              sliderWidth={350}
              itemWidth={60}
              initialNumToRender={1}

        /> */}
        <TouchableOpacity>
          <Image
            style={styles.Image1}
            source={require('../src/assests/Images/Image1.webp')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.off1}
            source={require('../src/assests/Images/HDFC-Off.webp')}
          />
        </TouchableOpacity>

        <SliderBox
          style={{height: 100, width: '100%'}}
          sliderBoxHeight={500}
          autoplay={true}
          circleLoop={true}
          dotStyle={{width: 30, height: 3}}
          dotColor="#9e753c"
          images={SliderImages.images}
        />

        <Image
          style={styles.off1}
          source={require('../src/assests/Images/deals.webp')}
        />
        <Image
          style={styles.trendimage}
          source={require('../src/assests/Images/trendsetter.webp')}
        />
        <SliderBox
          resizeMode={'contain'}
          style={{height: 250, width: '100%', backgroundColor: 'white'}}
          sliderBoxHeight={500}
          autoplay={true}
          circleLoop={true}
          dotStyle={{width: 30, height: 3}}
          dotColor="#9e753c"
          images={SliderImages.images1}
        />

        <ScrollView
          bounces={false}
          horizontal={true}
          style={{flexDirection: 'row'}}
          showsHorizontalScrollIndicator={false}>
          <Image
            style={{height: 95, width: 360}}
            source={require('../src/assests/Images/mobikwik.webp')}
          />
          <Image
            style={{height: 95, width: 360}}
            source={require('../src/assests/Images/paytm.webp')}
          />
        </ScrollView>

        <Image
          style={styles.off1}
          source={require('../src/assests/Images/blockbuster.webp')}
        />

        <FlatList
        bounces={false}
          horizontal
          data={SliderImages.images2}
          renderItem={__renderItem}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
export default HomeScreen;

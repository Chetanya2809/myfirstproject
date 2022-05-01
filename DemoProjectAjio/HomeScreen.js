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
import React, {useRef, useEffect} from 'react';
import styles from '../MainStyleSheet/HomeStyleSheet';
import HomeHeader from './HeaderHome';
import {SliderBox} from 'react-native-image-slider-box';
import SliderImages from './SliderImages';
import {useNavigation} from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();
  const data = [
    {
      key: require('../src/assests/Images/luxe.png'),
      navig: '',
    },
    {
      key: require('../src/assests/Images/men.jpeg'),
      text: 'MEN',
      navig: 'Men',
    },
    {
      key: require('../src/assests/Images/women.jpeg'),
      text: 'WOMEN',
      navig: 'Women',
    },
    {
      key: require('../src/assests/Images/child.jpeg'),
      text: 'KIDS',
      navig: 'Kids',
    },
    {
      key: require('../src/assests/Images/jewel.jpeg'),
      text: 'JEWELLERY',
      navig: 'Jewellery',
    },
    {
      key: require('../src/assests/Images/footwear.jpeg'),
      text: 'FOOTWEAR',
      navig: 'Footwear',
    },
    {
      key: require('../src/assests/Images/accesories.jpeg'),
      text: 'ACCESSORIES',
      navig: '',
    },
    {
      key: require('../src/assests/Images/bedsheet.jpeg'),
      text: 'HOME',
      navig: '',
    },
    {
      key: require('../src/assests/Images/watch.jpeg'),
      text: 'WATCHES',
      navig: '',
    },
  ];

  const scrollRef = useRef();
  useEffect(() => {
    return navigation.addListener('tabPress', e => {
      scrollRef.current.scrollTo({y: 0});
    });
  });

  const __renderItem = ({item}) => {
    return (
      <TouchableOpacity>
        <Image style={{width: 165, height: 220}} source={item} />
      </TouchableOpacity>
    );
  };

  const _renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(item.navig);
        }}
        activeOpacity={0.8}>
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
    <SafeAreaView style={styles.safeview}>
      <HomeHeader name={'AJIO'} navigation={navigation} />
      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <FlatList
          horizontal
          data={data}
          renderItem={_renderItem}
          bounces={false}
          showsHorizontalScrollIndicator={false}
        />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Screen1');
          }}>
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
          style={styles.slider1}
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
          style={styles.slider2}
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

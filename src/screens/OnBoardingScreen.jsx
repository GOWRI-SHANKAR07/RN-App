import { View, Text, Image, StyleSheet, AsyncStorage } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'
import Svg, { SvgUri } from 'react-native-svg';
import SVGImage1 from '../../assets/images/image.svg'
import SVGImage2 from '../../assets/images/shop.svg'
import SVGImage3 from '../../assets/images/shop_success.svg'



const OnBoardingScreen = () => {

  // completed onboarding
  const completedOnboarding = async () => {
    // flip board
    await AsyncStorage.setItem('hasOnboarded', JSON.stringify({
      hasOnboarded: true
    }));
  }


  return (
    <Onboarding
      pages={[
        {
          title: 'Welcome to Our Shopping App',
          subtitle: 'Discover a wide range of products at great prices.',
          image: <SVGImage1 width={200} height={200} />,
          backgroundColor: '#fff',
        },
        {
          title: 'Browse and Shop',
          subtitle: 'Explore categories and find your favorite items.',
          image: <SVGImage2 width={200} height={200} />,
          backgroundColor: '#6AC3FB',
        },
        {
          title: 'Secure Payment',
          subtitle: 'Shop with confidence using our secure payment options.',
          image: <SVGImage3 width={200} height={200} />,
          backgroundColor: '#67C23A',
        },
      ]}
    />
  )
}

export default OnBoardingScreen

const styles = StyleSheet.create({
  imgCont: {
    width: 50,
    height: 50,
  }
})
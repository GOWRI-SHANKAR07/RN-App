import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OnBoardingScreen from './src/screens/OnBoardingScreen'
import Svg, { SvgUri } from 'react-native-svg';
import SVGImage from './assets/images/image.svg'

function App() {
  return (
    <OnBoardingScreen />
  )
}

export default App

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
})
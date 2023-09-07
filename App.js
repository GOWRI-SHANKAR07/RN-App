import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackScreens from './src/Stack/StackScreens';

function App() {
  return (
    <SafeAreaView style={styles.conatiner}>
      <StackScreens />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  }
})
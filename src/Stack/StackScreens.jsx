import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import LottieScreen from '../screens/LottieScreen';

// stack
const Stack = createNativeStackNavigator();

const StackScreens = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}    
            initialRouteName='Onboarding'
                >
                <Stack.Screen name='Home' component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackScreens
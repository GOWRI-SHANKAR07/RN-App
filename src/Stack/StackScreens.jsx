import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BarChart } from '../components/BarCharts';
import DonutScreen from '../screens/DonutScreen';
import MorphingCircle from '../components/MorphingCircle';

// stack
const Stack = createNativeStackNavigator();

const StackScreens = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName='Morphing'
            >
                <Stack.Screen name='Bar' component={BarChart} />
                <Stack.Screen name='Donut' component={DonutScreen} />
                <Stack.Screen name='Morphing' component={MorphingCircle} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackScreens
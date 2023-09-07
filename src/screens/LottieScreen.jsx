import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { Text } from 'react-native-svg';

const LottieScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Hello</Text>
            <LottieView
                style={{ width: 400, height: 500 }}
                source={require('../../assets/Lottie/dev.json')}
                autoPlay
                loop
            />
        </View>
    );
};

export default LottieScreen;

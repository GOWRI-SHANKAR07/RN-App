import {
  Easing,
  runTiming,
  useFont,
  useValue,
} from "@shopify/react-native-skia";
import React from "react";
import { PixelRatio, Pressable, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import DonutChart from "../components/DonetChart";
import { styles } from "../styles/DonetChart";

const radius = PixelRatio.roundToNearestPixel(130);
const STROKE_WIDTH = 12;

export const DonutScreen = () => {
  const targetPercentage = 88 / 100;
  const animationState = useValue(0);

  const animateChart = () => {
    animationState.current = 0;
    runTiming(animationState, targetPercentage, {
      duration: 1250,
      easing: Easing.inOut(Easing.cubic),
    });
  };

  const font = useFont(require("../../assets/fonts/Roboto-Medium.ttf"), 60);
  const smallerFont = useFont(require("../../assets/fonts/Roboto-Medium.ttf"), 25);

  if (!font || !smallerFont) {
    return <View />;
  }

  return (
    <View style={styles.screenCont}>
      <View style={styles.ringChartContainer}>
        <DonutChart
          backgroundColor="white"
          radius={radius}
          strokeWidth={STROKE_WIDTH}
          percentageComplete={animationState}
          targetPercentage={targetPercentage}
          font={font}
          smallerFont={smallerFont}
        />
      </View>
      <TouchableOpacity onPress={animateChart} style={styles.button}>
        <Text style={styles.buttonText}>Animate !</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DonutScreen;
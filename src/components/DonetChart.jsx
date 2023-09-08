import React from "react";

import {
    Canvas,
    Path,
    SkFont,
    Skia,
    SkiaMutableValue,
    Text,
    useFont,
} from "@shopify/react-native-skia";
import { StyleSheet, View } from "react-native";
import { styles } from "../styles/DonetChart";

function DonutChart({
    strokeWidth,
    radius,
    percentageComplete,
    font,
    targetPercentage,
    smallerFont,
}) {
    const innerRadius = radius - strokeWidth / 2;
    const targetText = `${targetPercentage * 100}`;

    const path = Skia.Path.Make();
    path.addCircle(radius, radius, innerRadius);

    const width = 100;
    const titleWidth = 50;

    return (
        <View style={styles.container}>
            <Canvas style={styles.container}>
                <Path
                    path={path}
                    color="#00A8E8"
                    style="stroke"
                    strokeJoin="round"
                    strokeWidth={strokeWidth}
                    strokeCap="round"
                    start={0}
                    end={percentageComplete}
                />
                <Text
                    x={innerRadius - width / 4}
                    y={radius + strokeWidth}
                    text={targetText}
                    font={font}
                    opacity={percentageComplete}
                    color="black"
                />
                <Text
                    x={innerRadius - titleWidth / 2}
                    y={radius + 45}
                    text={"Power"}
                    font={smallerFont}
                    opacity={percentageComplete}
                    color="black"
                />
            </Canvas>
        </View>
    );
}

export default DonutChart;
import React from "react";
import { View, Text } from "react-native";

// @ts-ignore
import { spline } from "@georgedoescode/spline";

import {
    Canvas,
    LinearGradient,
    Path,
    useClockValue,
    useComputedValue,
    useValue,
    vec,
} from "@shopify/react-native-skia";
import { createNoise2D } from "simplex-noise";
import { styles } from "../styles/MorphingCircle";

function createPoints() {
    const points = [];
    // no of points
    const numPoints = 6;
    // spacing around circle
    const angleStep = (Math.PI * 2) / numPoints;
    // radius of circle
    const radius = 110;

    for (let i = 1; i <= numPoints; i++) {
        const theta = i * angleStep;
        const x = 130 + Math.cos(theta) * radius;
        const y = 130 + Math.sin(theta) * radius;

        // store the point
        points.push({
            x: x,
            y: y,
            originX: x,
            originY: y,
            // more on this in a moment!
            noiseOffsetX: Math.random() * 1000,
            noiseOffsetY: Math.random() * 1000,
        });
    }
    return points;
}

function map(
    n,
    start1,
    end1,
    start2,
    end2,
) {
    return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}


const MorphingCircle = () => {
    const clock = useClockValue();
    const points = useValue(createPoints());
    const hueNoiseOffset = useValue(0);
    const noise = createNoise2D();
    const noiseStep = 0.005;

    const animate = () => {
        const newPoints = [];

        for (let i = 0; i < points.current.length; i++) {
            const point = points.current[i];

            // return a pseudo random value between -1 / 1 based on this point's current x, y positions in "time"
            const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
            const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
            // map this noise value to a new value, somewhere between it's original location -20 and it's original location + 20
            const x = map(nX, -1, 1, point.originX - 20, point.originX + 20);
            const y = map(nY, -1, 1, point.originY - 20, point.originY + 20);

            // update the point's current coordinates
            point.x = x;
            point.y = y;

            // progress the point's x, y values through "time"
            point.noiseOffsetX += noiseStep;
            point.noiseOffsetY += noiseStep;

            newPoints.push(point);
        }

        points.current = newPoints;
    };

    const path = useComputedValue(() => {
        animate();
        return spline(points.current, 1, true);
    }, [clock]);

    const colorNoise = useComputedValue(() => {
        hueNoiseOffset.current += noiseStep / 2;
        const hueNoise = noise(hueNoiseOffset.current, hueNoiseOffset.current);
        const newValue = map(hueNoise, -1, 1, 0, 360);
        return vec(256, newValue);
    }, [clock]);

    return (
        <View style={styles.container}>
        <Canvas style={styles.canvas}>
          <Path path={path}>
            <LinearGradient
              start={vec(0, 0)}
              end={colorNoise}
              colors={["#14aed5", "#76dc00"]}
            />
          </Path>
        </Canvas>
        <Text style={styles.txt}>Spritle</Text>
      </View>
    )
}

export default MorphingCircle
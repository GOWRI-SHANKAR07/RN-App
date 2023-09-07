import {Canvas, Circle, Group, LinearGradient, vec} from "@shopify/react-native-skia";
 
const width = 256;
const height = 256;
 
const HomeScreen = () => {
  const r = width/2;
  return (
    <Canvas style={{ width, height, justifyContent: "center", alignItems: "center" }}>
      <Circle cx={r} cy={r} r={r}>
        <LinearGradient
          start={vec(0,  200)}
          end={vec(2 * r, 2 * r)}
          colors={["#00ff87", "#60efff"]}
        />
      </Circle>
      <Group>
        <LinearGradient
          start={vec(50 * r, 20 * r)}
          end={vec(4 * r, 4 * r)}
          colors={["#0", "#60efff"]}
        />
        <Circle cx={3 * r} cy={3 * r} r={r} />
      </Group>
    </Canvas>
  );
};

export default HomeScreen;
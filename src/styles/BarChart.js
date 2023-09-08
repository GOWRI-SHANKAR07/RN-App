const { StyleSheet } = require("react-native");

const CanvasHeight = 350;
const CanvasWidth = 350;

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      backgroundColor: "white",
    },
    canvas: {
      height: CanvasHeight,
      width: CanvasWidth,
    },
    labelTxt: {
        color: '#000',
    }
  });

export { styles };
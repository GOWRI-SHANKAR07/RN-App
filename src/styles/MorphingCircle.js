const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    canvas: {
      height: 275,
      width: 275,
    },
    txt: {
        color: '#fff',
        bottom: 170,
        fontSize: 30,
    }
  });

export { styles };
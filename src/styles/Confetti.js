const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    title: {
      position: "absolute",
      top: "45%",
      textAlign: "center",
      width: "100%",
      fontSize: 40,
      color: "black",
      fontWeight: "bold",
    },
    button: {
      height: 60,
      backgroundColor: "purple",
      position: "absolute",
      left: 30,
      right: 30,
      bottom: 20,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
    },
    buttonText: {
      color: "white",
      fontSize: 20,
    },
  });

  export { styles };
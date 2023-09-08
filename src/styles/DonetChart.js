
const { StyleSheet, PixelRatio } = require("react-native");

const radius = PixelRatio.roundToNearestPixel(130);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    screenCont: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    ringChartContainer: {
        width: radius * 2,
        height: radius * 2,
    },
    button: {
        marginTop: 40,
        backgroundColor: "#00A8E8",
        paddingHorizontal: 60,
        paddingVertical: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 20,
    },
});

export { styles };
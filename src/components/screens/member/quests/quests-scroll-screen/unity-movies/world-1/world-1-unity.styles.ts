import { Colours, Style } from "@styles/index";
import { Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { CIRCLE_SIZE } from "../../assets/level/level.styles";

const styles = StyleSheet.create({
    bigText: {
        fontSize: 20,
        marginTop: 8
    },
    center: {
        textAlign: "center"
    },
    smallText: {
        fontSize: 14,
        marginTop: 16
    } as TextStyle,
    textWrapper: {
        bottom: 120,
        left: 0,
        position: "absolute",
        width: Style.DEVICE_WIDTH
    } as ViewStyle,
    bubble: {
        alignItems: "center",
        borderRadius: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        justifyContent: "center",
        marginLeft: -CIRCLE_SIZE / 2,
        position: "absolute",
        left: Style.DEVICE_WIDTH / 2,
        right: 0,
        top: isIphoneX() || Platform.OS === "android" ? 120 : Style.SCALE_Y_UP_AND_DOWN(100),
        zIndex: 3,
        width: CIRCLE_SIZE,
        backgroundColor: Colours.darkHotPink
    } as ViewStyle,
    orangeBubble: {
        position: "absolute",
        height: Style.DEVICE_HEIGHT,
        width: Style.DEVICE_WIDTH,
        left: 0,
        right: 0,
        top: isIphoneX() ? -50 : -75
    } as ViewStyle,
    treesWrapper: {
        zIndex: 2,
        position: "absolute",
        height: Style.DEVICE_HEIGHT,
        width: Style.DEVICE_WIDTH,
        top: -20,
        bottom: 0,
        left: 0,
        right: 0
    } as ViewStyle,
    wrapper: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgb(133,226,236)",
        height: Style.DEVICE_HEIGHT + 80
    } as ViewStyle
});

export default styles;

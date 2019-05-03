import { Style } from "@styles/index";
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

export default StyleSheet.create({
    background: {
        height: Style.DEVICE_HEIGHT,
        width: Style.DEVICE_WIDTH
    } as ImageStyle,
    bigText: {
        fontSize: 20,
        marginTop: 8
    },
    center: {
        paddingHorizontal: Style.SCALE_UP_AND_DOWN(30),
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
    wrapper: {
        flex: 1
    } as ViewStyle
});

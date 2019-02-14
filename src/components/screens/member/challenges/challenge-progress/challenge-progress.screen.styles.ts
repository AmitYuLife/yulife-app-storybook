import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
    backgroundImage: {
        bottom: 0,
        left: 0,
        position: "absolute",
        right: 0,
        width: "100%"
    } as ImageStyle,
    instruction: {
        fontSize: Style.SCALE_UP_AND_DOWN(13),
        lineHeight: Style.SCALE_UP_AND_DOWN(20)
    } as TextStyle,
    instructionBold: {
        color: "rgb(51,51,51)",
        fontSize: Style.SCALE_UP_AND_DOWN(13),
        lineHeight: Style.SCALE_UP_AND_DOWN(20)
    } as TextStyle,
    instructionWrapper: {
        marginLeft: Style.SCALE_UP_AND_DOWN(16),
        marginTop: Style.SCALE_UP_AND_DOWN(Style.isAndroid() ? -24 : -34),
        width: Style.SCALE_UP_AND_DOWN(280)
    } as ViewStyle,
    navBarWrapper: {
        alignItems: "center",
        bottom: Style.SCALE_UP_AND_DOWN(19),
        position: "absolute",
        width: Style.DEVICE_WIDTH
    } as ViewStyle,
    progressBarWrapper: {
        marginTop: Style.SCALE_UP_AND_DOWN(6)
    } as ViewStyle,
    wrapper: {
        flex: 1
    } as ViewStyle
});

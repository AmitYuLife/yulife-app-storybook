import { ImageStyle, Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../styles";

export default StyleSheet.create({
    innerWrapper: {
        width: Style.SCALE_UP_AND_DOWN(266),
        minHeight: Style.SCALE_UP_AND_DOWN(112),
        paddingHorizontal: Style.SCALE_UP_AND_DOWN(16),
        paddingVertical: Style.SCALE_UP_AND_DOWN(14),
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    } as ViewStyle,
    caretWrapper: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center"
    } as ViewStyle,
    caretTop: {
        top: Style.SCALE_UP_AND_DOWN(-20),
        left: 0,
        right: 0
    } as ViewStyle,
    caretBottom: {
        bottom: Style.SCALE_UP_AND_DOWN(-20),
        left: 0,
        right: 0,
        transform: [{ rotate: "180deg" }]
    } as ViewStyle,
    caretLeft: {
        top: 0,
        left: Style.SCALE_UP_AND_DOWN(-20),
        bottom: 0,
        transform: [{ rotate: "270deg" }]
    } as ViewStyle,
    caretRight: {
        top: 0,
        right: Style.SCALE_UP_AND_DOWN(-20),
        bottom: 0,
        transform: [{ rotate: "90deg" }]
    } as ViewStyle,
    caret: {
        height: Style.SCALE_UP_AND_DOWN(30),
        width: Style.SCALE_UP_AND_DOWN(30)
    } as ImageStyle,
    outerWrapper: {
        width: "100%",
        position: "absolute",
        right: 0,
        left: 0,
        zIndex: 2,
        justifyContent: "center",
        alignItems: "center"
    } as ViewStyle,
    textWrapper: {
        paddingRight: Style.SCALE_UP_AND_DOWN(40)
    } as ViewStyle,
    headerText: {
        fontSize: Style.SCALE_UP_AND_DOWN(20),
        paddingBottom: Style.SCALE_UP_AND_DOWN(12),
        color: "rgb(108, 59, 38)"
    } as TextStyle,
    bodyText: {
        fontSize: Style.SCALE_UP_AND_DOWN(14),
        lineHeight: Style.SCALE_UP_AND_DOWN(20),
        color: "rgb(108, 59, 38)"
    } as TextStyle,
    buttonWrapper: {
        position: "absolute",
        right: Style.SCALE_UP_AND_DOWN(16),
        top: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center"
    } as ViewStyle,
    button: {
        height: Style.SCALE_UP_AND_DOWN(25),
        width: Style.SCALE_UP_AND_DOWN(25)
    } as ViewStyle,
    image: {
        height: Style.SCALE_UP_AND_DOWN(25),
        width: Style.SCALE_UP_AND_DOWN(25)
    } as ImageStyle,
    zIndexWrapper: {
        zIndex: 2
    } as ViewStyle,
    popupWrapper: {
        ...StyleSheet.absoluteFillObject
    } as ViewStyle,
    bgBlur: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: Platform.OS === "android" ? "rgba(255,255,255,0.6)" : "transparent",
        zIndex: 2
    } as ViewStyle,
    navBarWrapper: {
        bottom: Style.SCALE_UP_AND_DOWN(17),
        position: "absolute"
    } as ViewStyle
});

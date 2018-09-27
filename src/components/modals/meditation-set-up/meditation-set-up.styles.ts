import { ImageStyle, Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "../../../styles";

export default StyleSheet.create({
    backWrapper: {
        flex: 1,
        height: Style.SCALE_UP_AND_DOWN(50),
        justifyContent: "center",
        width: Style.SCALE_UP_AND_DOWN(50)
    } as ViewStyle,
    backgroundImage: {
        height: Style.isShortAndroid() ? 600 : Style.DEVICE_HEIGHT * 0.775,
        width: "100%"
    } as ImageStyle,
    backgroundImageWrapper: {
        ...StyleSheet.absoluteFillObject,
        bottom: Style.SCALE_UP_AND_DOWN(Style.isShortAndroid() ? -50 : 0),
        justifyContent: "flex-end"
    } as ViewStyle,
    closeWrapper: {
        alignItems: "flex-end",
        flex: 1,
        height: Style.SCALE_UP_AND_DOWN(50),
        justifyContent: "center",
        width: Style.SCALE_UP_AND_DOWN(50)
    } as ViewStyle,
    ctaWrapper: {
        alignItems: "center",
        bottom: Style.SCALE_UP_AND_DOWN(Style.isShortAndroid() ? 48 : 68),
        left: 0,
        position: "absolute",
        right: 0
    } as ViewStyle,
    heading: {
        fontSize: Style.SCALE_UP_AND_DOWN(35)
    } as TextStyle,
    headingWrapper: {
        alignItems: "center",
        marginTop: Style.SCALE_UP_AND_DOWN(Style.isShortAndroid() ? 54 : 74),
        width: "100%"
    } as ViewStyle,
    screenWrapper: {
        flexDirection: "column",
        height: Style.DEVICE_HEIGHT,
        width: Style.DEVICE_WIDTH
    } as ViewStyle,
    scrollView: {
        bottom: 0,
        left: 0,
        position: "absolute",
        right: 0
    } as ViewStyle,
    subheading: {
        fontSize: Style.SCALE_UP_AND_DOWN(15)
    } as TextStyle,
    subheadingWrapper: {
        alignItems: "center",
        marginTop: Style.SCALE_UP_AND_DOWN(Style.isShortAndroid() ? 0 : 20),
        width: "100%"
    } as ViewStyle,
    topBar: {
        flexDirection: "row",
        marginTop: Style.SCALE_UP_AND_DOWN(Platform.OS === "android" ? 0 : isIphoneX() ? 30 : 20),
        paddingHorizontal: Style.SCALE_UP_AND_DOWN(15),
        position: "absolute"
    } as ViewStyle,
    wrapper: {
        flex: 1
    } as ViewStyle
});

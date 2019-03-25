import { Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
    contentContainerStyle: {
        width: Style.DEVICE_WIDTH
    } as ViewStyle,
    contentContainerWithKeyboard: {
        paddingTop: Style.SCALE_UP_AND_DOWN(16)
    } as ViewStyle,
    contentWrapper: {
        marginTop: Style.SCALE_UP_AND_DOWN(30),
        paddingHorizontal: Style.SCALE_UP_AND_DOWN(15)
    } as ViewStyle,
    ctaWrapper: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: Style.SCALE_UP_AND_DOWN(25),
        width: "100%"
    } as ViewStyle,
    formWrapper: {
        flex: 1,
        justifyContent: "center",
        marginTop: Style.SCALE_UP_AND_DOWN(20),
        paddingHorizontal: Style.SCALE_UP_AND_DOWN(44)
    } as ViewStyle,
    heading: {
        fontSize: Style.SCALE_UP_AND_DOWN(20),
        marginBottom: Style.SCALE_UP_AND_DOWN(15)
    } as TextStyle,
    kAV: {
        flex: 1
    } as ViewStyle,
    linksWrapper: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: Style.SCALE_UP_AND_DOWN(16),
        width: "100%"
    } as ViewStyle,
    paragraph: {
        fontSize: Style.SCALE_UP_AND_DOWN(16),
        lineHeight: Style.SCALE_UP_AND_DOWN(23)
    } as TextStyle,
    rewardTabsWrapper: {
        alignItems: "center"
    } as ViewStyle,
    textInput: {
        paddingHorizontal: 0
    } as ViewStyle,
    topBarWrapper: {
        backgroundColor: "white",
        left: 0,
        paddingBottom: Style.SCALE_UP_AND_DOWN(8),
        paddingTop: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 45 : Platform.OS === "android" ? 0 : 25),
        position: "absolute",
        right: 0,
        top: 0
    } as ViewStyle,
    wrapper: {
        flex: 1
    } as ViewStyle
});

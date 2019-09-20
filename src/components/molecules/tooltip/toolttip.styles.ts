import { Style } from "@styles/index";
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

export default StyleSheet.create({
    shadow: {
        backgroundColor: "rgb(157, 157, 157)",
        borderRadius: 8,
        position: "absolute",
        left: 0,
        right: 0,
        height: 40,
        bottom: Style.SCALE_UP_AND_DOWN(-4),
        width: Style.SCALE_UP_AND_DOWN(288)
    } as ViewStyle,
    giraffe: {
        position: "absolute",
        alignSelf: "center",
        top: Style.SCALE_UP_AND_DOWN(-40)
    } as ImageStyle,
    tooltipWrapper: {
        position: "absolute",
        justifyContent: "center"
    } as ViewStyle,
    tooltip: {
        width: Style.SCALE_UP_AND_DOWN(288),
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 8
    } as ViewStyle,
    welcomePadding: {
        marginTop: Style.SCALE_UP_AND_DOWN(100),
        padding: Style.SCALE_UP_AND_DOWN(24)
    } as ViewStyle,
    genericPadding: {
        padding: Style.SCALE_UP_AND_DOWN(16)
    } as ViewStyle,
    heading: {
        fontSize: Style.SCALE_UP_AND_DOWN(20),
        marginBottom: Style.SCALE_UP_AND_DOWN(16)
    } as TextStyle,
    genericHeading: {
        lineHeight: Style.SCALE_UP_AND_DOWN(16)
    } as TextStyle,
    description: {
        fontSize: Style.SCALE_UP_AND_DOWN(16),
        lineHeight: Style.SCALE_UP_AND_DOWN(24),
        marginBottom: Style.SCALE_UP_AND_DOWN(8)
    } as TextStyle,
    welcomeMarginBottomThirty: {
        marginBottom: Style.SCALE_UP_AND_DOWN(30)
    } as TextStyle,
    welcomeMarginBottomTwenty: {
        marginBottom: Style.SCALE_UP_AND_DOWN(20)
    } as TextStyle,
    buttonWrapper: {
        alignItems: "center"
    } as ViewStyle,
    buttonInsideWrapper: {
        flexDirection: "row",
        alignItems: "center"
    } as ViewStyle,
    generalTooltipCTA: {
        color: "#E30D76",
        fontSize: Style.SCALE_UP_AND_DOWN(16),
        lineHeight: Style.SCALE_UP_AND_DOWN(24)
    } as TextStyle,
    check: {
        height: Style.SCALE_UP_AND_DOWN(16),
        width: Style.SCALE_UP_AND_DOWN(16),
        marginLeft: Style.SCALE_UP_AND_DOWN(8)
    } as ImageStyle,
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "#000000",
        opacity: 0.2
    } as ViewStyle,
    darkerOverlay: {
        opacity: 0.6
    } as ViewStyle,
    caret: {
        height: Style.SCALE_UP_AND_DOWN(24),
        width: Style.SCALE_UP_AND_DOWN(24)
    } as ImageStyle,
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
    wrapper: {
        position: "absolute",
        justifyContent: "center",
        top: 0,
        bottom: 0
    } as ViewStyle
});

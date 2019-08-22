import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
    face: {
        marginTop: Style.SCALE_UP_AND_DOWN(27)
    } as ImageStyle,
    footer: {
        fontSize: Style.SCALE_UP_AND_DOWN(25),
        lineHeight: Style.SCALE_UP_AND_DOWN(22),
        marginBottom: Style.SCALE_UP_AND_DOWN(100),
        marginTop: Style.SCALE_UP_AND_DOWN(97),
        textAlign: "center",
        width: "100%",
        color: "rgb(85,85,85)"
    } as TextStyle,
    heading: {
        color: "rgb(51,51,51)",
        fontSize: Style.SCALE_UP_AND_DOWN(40),
        marginBottom: Style.SCALE_UP_AND_DOWN(16),
        marginTop: Style.SCALE_UP_AND_DOWN(6)
    } as TextStyle,
    level: {
        color: "#333333",
        fontSize: Style.SCALE_UP_AND_DOWN(14),
        marginTop: Style.SCALE_UP_AND_DOWN(-10),
        textAlign: "center"
    } as TextStyle,
    ratingWrapper: {
        alignItems: "center",
        marginTop: Style.SCALE_UP_AND_DOWN(40)
    } as ViewStyle,
    levelWrapper: {
        alignItems: "center",
        marginTop: Style.SCALE_UP_AND_DOWN(5),
        marginBottom: Style.SCALE_UP_AND_DOWN(24),
        width: Style.SCALE_UP_AND_DOWN(137),
        overflow: "visible"
    } as ViewStyle,
    levelLineWrapper: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: Style.SCALE_UP_AND_DOWN(3),
        overflow: "visible"
    } as ViewStyle,
    wrapper: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center"
    } as ViewStyle,
    secondaryText: {
        fontSize: Style.SCALE_UP_AND_DOWN(20),
        lineHeight: Style.SCALE_UP_AND_DOWN(24)
    } as TextStyle,
    cta: {
        position: "absolute",
        bottom: Style.SCALE_UP_AND_DOWN(96)
    } as ViewStyle
});

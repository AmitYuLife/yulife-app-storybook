import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
    face: {
        marginTop: Style.SCALE_UP_AND_DOWN(27)
    } as ImageStyle,
    footer: {
        fontSize: Style.SCALE_UP_AND_DOWN(15),
        lineHeight: Style.SCALE_UP_AND_DOWN(22),
        marginBottom: Style.SCALE_UP_AND_DOWN(100),
        marginTop: Style.SCALE_UP_AND_DOWN(97),
        textAlign: "center",
        width: Style.SCALE_UP_AND_DOWN(100)
    } as TextStyle,
    footerGray: {
        color: "rgb(170,170,170)"
    } as TextStyle,
    footerWhite: {
        color: "rgb(255,255,255)"
    } as TextStyle,
    heading: {
        color: "rgb(51,51,51)",
        fontSize: Style.SCALE_UP_AND_DOWN(40)
    } as TextStyle,
    level: {
        color: "rgb(201, 201, 201)",
        fontSize: Style.SCALE_UP_AND_DOWN(14),
        marginTop: Style.SCALE_UP_AND_DOWN(-10),
        textAlign: "center"
    } as TextStyle,
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
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
    } as ViewStyle
});

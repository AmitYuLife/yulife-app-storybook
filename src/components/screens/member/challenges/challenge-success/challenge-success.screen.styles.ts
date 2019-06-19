import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
    ctaWrapper: {
        marginTop: Style.SCALE_UP_AND_DOWN(50)
    } as ViewStyle,
    footer: {
        color: "rgb(170,170,170)",
        fontSize: Style.SCALE_UP_AND_DOWN(15),
        textAlign: "center"
    } as TextStyle,
    footerWrapper: {
        marginTop: Style.SCALE_UP_AND_DOWN(10)
    } as ViewStyle,
    level: {
        color: "rgb(168, 105, 22)",
        fontSize: Style.SCALE_UP_AND_DOWN(14),
        marginTop: Style.SCALE_UP_AND_DOWN(-10),
        textAlign: "center"
    } as TextStyle,
    levelWrapper: {
        alignItems: "center",
        marginBottom: Style.SCALE_UP_AND_DOWN(20)
    } as ViewStyle,
    plusPointsWrapper: {
        alignItems: "center",
        marginBottom: Style.SCALE_UP_AND_DOWN(-8)
    } as ViewStyle,
    score: {
        bottom: Style.SCALE_UP_AND_DOWN(20),
        color: "rgb(168, 105, 22)",
        fontSize: Style.SCALE_UP_AND_DOWN(25),
        left: 0,
        position: "absolute",
        right: 0,
        textAlign: "center"
    } as TextStyle,
    wrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    } as ViewStyle
});

import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
    alarm: {
        height: 70,
        width: 70
    } as ViewStyle,
    base: {
        bottom: -2,
        height: 70,
        width: 70,
        position: "absolute"
    } as ViewStyle,
    ctaWrapper: {
        marginTop: Style.SCALE_UP_AND_DOWN(37)
    } as ViewStyle,
    headingWrapper: {
        marginTop: Style.SCALE_UP_AND_DOWN(19)
    } as ViewStyle,
    text: {
        fontSize: Style.SCALE_UP_AND_DOWN(35)
    } as TextStyle,
    wrapper: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
    } as ViewStyle
});

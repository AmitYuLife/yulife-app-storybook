import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colours, Style } from "../../../../../styles";

export default StyleSheet.create({
    arrowWrapper: {
        backgroundColor: "white",
        position: "absolute",
        width: 15,
        paddingVertical: 8
    } as ViewStyle,
    arrowLeft: {
        left: 0
    } as ViewStyle,
    arrowRight: {
        right: 0
    } as ViewStyle,
    arrowButton: {
        alignItems: "center",
        justifyContent: "center"
    } as ViewStyle,
    arrowButtonText: {
        color: Colours.heavyPink,
        fontWeight: "900"
    } as TextStyle,
    nameWrapper: {
        flex: 1,
        paddingLeft: Style.SCALE_UP_AND_DOWN(10)
    } as ViewStyle,
    rankWrapper: {
        marginLeft: Style.SCALE_UP_AND_DOWN(10),
        width: Style.SCALE_UP_AND_DOWN(40)
    } as ViewStyle,
    stepsWrapper: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-end",
        marginRight: Style.SCALE_UP_AND_DOWN(30),
        width: Style.SCALE_UP_AND_DOWN(80)
    } as ViewStyle,
    text: {
        color: "white",
        fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
        fontSize: Style.SCALE_UP_AND_DOWN(15)
    } as TextStyle,
    textRight: {
        textAlign: "right"
    } as TextStyle,
    wrapper: {
        alignItems: "center",
        backgroundColor: Colours.heavyPink,
        flexDirection: "row",
        paddingVertical: Style.SCALE_UP_AND_DOWN(6)
    } as ViewStyle
});

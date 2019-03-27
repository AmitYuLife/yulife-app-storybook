import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colours, Style } from "../../../../../styles";

export default StyleSheet.create({
    arrow: {
        height: Style.SCALE_UP_AND_DOWN(7),
        width: Style.SCALE_UP_AND_DOWN(11)
    } as ImageStyle,
    arrowWrapper: {
        paddingRight: Style.SCALE_UP_AND_DOWN(5)
    } as ViewStyle,
    nameWrapper: {
        flex: 1,
        paddingLeft: Style.SCALE_UP_AND_DOWN(10)
    } as ViewStyle,
    rankWrapper: {
        paddingLeft: Style.SCALE_UP_AND_DOWN(10),
        width: Style.SCALE_UP_AND_DOWN(40)
    } as ViewStyle,
    stepsWrapper: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingRight: Style.SCALE_UP_AND_DOWN(15),
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
        marginHorizontal: Style.SCALE_UP_AND_DOWN(15),
        paddingVertical: Style.SCALE_UP_AND_DOWN(6)
    } as ViewStyle,
    yucoinWrapper: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-end",
        width: Style.SCALE_UP_AND_DOWN(65)
    } as ViewStyle
});

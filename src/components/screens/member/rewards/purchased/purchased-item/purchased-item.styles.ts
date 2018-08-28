import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../../../styles";

export default StyleSheet.create({
    contentWrapper: {
        flex: 1,
        flexDirection: "column"
    } as ViewStyle,
    cost: {
        fontSize: Style.SCALE_UP_AND_DOWN(14)
    } as TextStyle,
    dateWrapper: {
        flexDirection: "column",
        width: Style.SCALE_UP_AND_DOWN(80)
    } as ViewStyle,
    day: {
        fontSize: Style.SCALE_UP_AND_DOWN(22),
        lineHeight: Style.SCALE_UP_AND_DOWN(22)
    } as TextStyle,
    month: {
        fontSize: Style.SCALE_UP_AND_DOWN(14)
    } as TextStyle,
    reward: {
        fontSize: Style.SCALE_UP_AND_DOWN(20),
        lineHeight: Style.SCALE_UP_AND_DOWN(22)
    } as TextStyle,
    statusBase: {
        fontSize: Style.SCALE_UP_AND_DOWN(14)
    } as TextStyle,
    statusDeclined: {
        color: "rgb(255,102,102)"
    } as TextStyle,
    statusPending: {
        color: "rgb(51,51,51)"
    } as TextStyle,
    statusWrapper: {
        justifyContent: "flex-end",
        marginLeft: "auto"
    } as ViewStyle,
    wrapper: {
        borderBottomColor: "rgb(238,238,238)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        height: Style.SCALE_UP_AND_DOWN(74),
        paddingBottom: Style.SCALE_UP_AND_DOWN(16),
        paddingTop: Style.SCALE_UP_AND_DOWN(19),
        width: "100%"
    } as ViewStyle
});

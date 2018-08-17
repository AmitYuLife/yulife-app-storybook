import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Style } from "../../../../../../styles";

export default StyleSheet.create({
    wrapper: {
        width: "100%",
        flexDirection: "row",
        height: Style.SCALE_UP_AND_DOWN(74),
        paddingBottom: Style.SCALE_UP_AND_DOWN(16),
        paddingTop: Style.SCALE_UP_AND_DOWN(19),
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "rgb(238,238,238)",
    } as ViewStyle,
    dateWrapper: {
        width: Style.SCALE_UP_AND_DOWN(80),
        flexDirection: "column",
    } as ViewStyle,
    contentWrapper: {
        flex: 1,
        flexDirection: "column",
    } as ViewStyle,
    statusWrapper: {
        justifyContent: "flex-end",
        marginLeft: "auto",
    } as ViewStyle,
    day: {
        fontSize: Style.SCALE_UP_AND_DOWN(22),
        lineHeight: Style.SCALE_UP_AND_DOWN(22),
    } as TextStyle,
    month: {
        fontSize: Style.SCALE_UP_AND_DOWN(14),
    } as TextStyle,
    reward: {
        fontSize: Style.SCALE_UP_AND_DOWN(20),
        lineHeight: Style.SCALE_UP_AND_DOWN(22),
    } as TextStyle,
    cost: {
        fontSize: Style.SCALE_UP_AND_DOWN(14),
    } as TextStyle,
    statusBase: {
        fontSize: Style.SCALE_UP_AND_DOWN(14),
    },
    statusDeclined: {
        color: "rgb(255,102,102)",
    },
    statusPending: {
        color: "rgb(51,51,51)",
    },
});

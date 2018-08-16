import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../styles";

export default StyleSheet.create({
    unlockedContainer: {
        height: Style.SCALE_UP_AND_DOWN(150),
        width: Style.SCALE_UP_AND_DOWN(155),
        paddingLeft: Style.SCALE_UP_AND_DOWN(15),
        paddingTop: Style.SCALE_UP_AND_DOWN(20),
        backgroundColor: "#FFFFFF",
        opacity: 0.92,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    } as ViewStyle,
    voucherText: {
        color: "rgb(51,51,51)",
        fontSize: Style.SCALE_UP_AND_DOWN(15),
        marginBottom: Style.SCALE_UP_AND_DOWN(4),
        marginTop: Style.SCALE_UP_AND_DOWN(14),
    } as TextStyle,
    costText: {
        color: "rgb(51,51,51)",
        fontSize: Style.SCALE_UP_AND_DOWN(14),
    } as TextStyle,
});

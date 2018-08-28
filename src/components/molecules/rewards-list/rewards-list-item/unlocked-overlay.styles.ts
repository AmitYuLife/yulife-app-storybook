import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../styles";

export default StyleSheet.create({
    costText: {
        color: "rgb(51,51,51)",
        fontSize: Style.SCALE_UP_AND_DOWN(14)
    } as TextStyle,
    unlockedContainer: {
        alignItems: "flex-start",
        backgroundColor: "#FFFFFF",
        flexDirection: "column",
        height: Style.SCALE_UP_AND_DOWN(150),
        justifyContent: "flex-start",
        opacity: 0.92,
        paddingLeft: Style.SCALE_UP_AND_DOWN(15),
        paddingTop: Style.SCALE_UP_AND_DOWN(20),
        width: Style.SCALE_UP_AND_DOWN(155)
    } as ViewStyle,
    voucherText: {
        color: "rgb(51,51,51)",
        fontSize: Style.SCALE_UP_AND_DOWN(15),
        marginBottom: Style.SCALE_UP_AND_DOWN(4),
        marginTop: Style.SCALE_UP_AND_DOWN(14)
    } as TextStyle
});

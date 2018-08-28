import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../styles";

export default StyleSheet.create({
    lockedContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        opacity: 0.92,
        width: Style.DEVICE_WIDTH
    } as ViewStyle,
    lockedWhiteSpace: {
        backgroundColor: "#bebebe",
        height: Style.SCALE_UP_AND_DOWN(150),
        opacity: 0.92,
        padding: Style.SCALE_UP_AND_DOWN(20),
        width: Style.SCALE_UP_AND_DOWN(155)
    } as ViewStyle,
    voucherText: {
        color: "white",
        fontSize: Style.SCALE_UP_AND_DOWN(15),
        marginTop: Style.SCALE_UP_AND_DOWN(14)
    } as TextStyle
});

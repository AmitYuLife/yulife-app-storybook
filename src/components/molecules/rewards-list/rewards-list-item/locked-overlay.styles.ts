import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Style } from "../../../../styles";

export default StyleSheet.create({
    lockedContainer: {
        width: Style.DEVICE_WIDTH,
        opacity: 0.92,
        flexDirection: "row",
        justifyContent: "space-between",
    } as ViewStyle,
    lockedWhiteSpace: {
        height: Style.SCALE_UP_AND_DOWN(150),
        width: Style.SCALE_UP_AND_DOWN(155),
        padding: Style.SCALE_UP_AND_DOWN(20),
        backgroundColor: "#bebebe",
        opacity: 0.92,
    } as ViewStyle,
    voucherText: {
        color: "white",
        fontSize: Style.SCALE_UP_AND_DOWN(15),
        marginTop: Style.SCALE_UP_AND_DOWN(14),
    } as TextStyle,
});

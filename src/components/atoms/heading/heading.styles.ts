import { StyleSheet, TextStyle } from "react-native";
import { Style } from "../../../styles";

export default StyleSheet.create({
    base: {
        color: "#000",
        fontFamily: Style.FONT_FAMILY_PRIMARY,
        textAlign: "center",
    } as TextStyle,
    bold: {
        fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    } as TextStyle,
    default: {
        fontSize: Style.SCALE_UP_AND_DOWN(30),
    } as TextStyle,
    large: {
        fontSize: Style.SCALE_UP_AND_DOWN(56),
    } as TextStyle,
    small: {
        fontSize: Style.SCALE_UP_AND_DOWN(25),
    } as TextStyle,
});

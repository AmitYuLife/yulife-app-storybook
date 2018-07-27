import { StyleSheet, TextStyle } from "react-native";
import { Colours, Style } from "../../../styles";

export default StyleSheet.create({
    base: {
        color: Colours.darkGray,
        fontSize: Style.SCALE_UP_AND_DOWN(15),
    } as TextStyle,
    weightBold: {
        fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    } as TextStyle,
    weightNormal: {
        fontFamily: Style.FONT_FAMILY_PRIMARY,
    } as TextStyle,
});

import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../styles";

export default StyleSheet.create({
    wrapper: {
        alignItems: "center",
        width: "100%",
        paddingBottom: Style.SCALE_UP_AND_DOWN(13),
        paddingTop: Style.SCALE_UP_AND_DOWN(11),
        backgroundColor: "#FFFFFF"
    } as ViewStyle,
    icon: {
        height: Style.SCALE_UP_AND_DOWN(24),
        width: Style.SCALE_UP_AND_DOWN(24)
    } as ImageStyle,
    base: {
        color: "#E30D76",
        fontFamily: Style.FONT_FAMILY_PRIMARY,
        textAlign: "center",
        fontSize: Style.SCALE_UP_AND_DOWN(16),
        marginLeft: Style.SCALE_UP_AND_DOWN(9)
    } as TextStyle
});

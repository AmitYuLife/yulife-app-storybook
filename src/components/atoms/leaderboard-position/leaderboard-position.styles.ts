import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../styles";

export default StyleSheet.create({
    base: {
        color: "#000",
        fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
        textAlign: "center"
    } as TextStyle,
    first: {
        left: Style.DEVICE_WIDTH / 2 - 50,
        top: Style.SCALE_UP_AND_DOWN(120)
    } as ViewStyle,
    image: {
        height: Style.SCALE_UP_AND_DOWN(55),
        width: Style.SCALE_UP_AND_DOWN(55)
    } as ImageStyle,
    name: {
        fontSize: Style.SCALE_UP_AND_DOWN(18),
        marginTop: Style.SCALE_UP_AND_DOWN(6)
    } as TextStyle,
    position: {
        fontSize: Style.SCALE_UP_AND_DOWN(25)
    } as TextStyle,
    second: {
        left: Style.SCALE_UP_AND_DOWN(50),
        top: Style.SCALE_UP_AND_DOWN(172)
    } as ViewStyle,
    third: {
        right: Style.SCALE_UP_AND_DOWN(50),
        top: Style.SCALE_UP_AND_DOWN(172)
    } as ViewStyle,
    wrapper: {
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-around",
        position: "absolute",
        width: Style.SCALE_UP_AND_DOWN(100)
    } as ViewStyle
});

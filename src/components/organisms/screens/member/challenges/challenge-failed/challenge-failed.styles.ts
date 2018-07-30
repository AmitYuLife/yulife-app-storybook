import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../../../styles";

export default StyleSheet.create({
    face: {
        marginTop: Style.SCALE_UP_AND_DOWN(27),
    } as ImageStyle,
    footer: {
        color: "rgb(170,170,170)",
        fontSize: Style.SCALE_UP_AND_DOWN(15),
        lineHeight: Style.SCALE_UP_AND_DOWN(22),
        marginBottom: Style.SCALE_UP_AND_DOWN(100),
        marginTop: Style.SCALE_UP_AND_DOWN(97),
        textAlign: "center",
        width: Style.SCALE_UP_AND_DOWN(100),
    } as TextStyle,
    heading: {
        color: "rgb(51,51,51)",
        fontSize: Style.SCALE_UP_AND_DOWN(40),
    } as TextStyle,
    wrapper: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    } as ViewStyle,
});

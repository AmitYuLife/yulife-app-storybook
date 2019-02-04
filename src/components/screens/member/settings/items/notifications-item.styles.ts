import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";

const styles = StyleSheet.create({
    nameWrapper: {
        flex: 1,
        paddingLeft: Style.SCALE_UP_AND_DOWN(10)
    } as ViewStyle,
    stepsWrapper: {
        paddingRight: Style.SCALE_UP_AND_DOWN(10),
        width: Style.SCALE_UP_AND_DOWN(80)
    } as ViewStyle,
    text: {
        fontFamily: Style.FONT_FAMILY_PRIMARY,
        fontSize: Style.SCALE_UP_AND_DOWN(16)
    } as TextStyle,
    textRight: {
        textAlign: "right"
    } as TextStyle,
    textSmall: {
        fontSize: Style.SCALE_UP_AND_DOWN(14)
    } as TextStyle,
    wrapper: {
        alignItems: "center",
        backgroundColor: "white",
        flexDirection: "row",
        paddingVertical: Style.SCALE_UP_AND_DOWN(14)
    } as ViewStyle,
    yucoinWrapper: {
        width: Style.SCALE_UP_AND_DOWN(50)
    } as ViewStyle
});

export default styles;

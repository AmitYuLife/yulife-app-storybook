import { Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colours, Style } from "../../../../../styles";

const styles = StyleSheet.create({
    nameWrapper: {
        flex: 1,
        paddingLeft: Style.SCALE_UP_AND_DOWN(10)
    } as ViewStyle,
    text: {
        fontFamily: Style.FONT_FAMILY_PRIMARY,
        fontSize: Style.SCALE_UP_AND_DOWN(16)
    } as TextStyle,
    textGrey: {
        color: "#AAA"
    } as TextStyle,
    textSmall: {
        fontFamily: Style.FONT_FAMILY_PRIMARY,
        fontSize: Style.SCALE_UP_AND_DOWN(14)
    } as TextStyle,
    wrapper: {
        alignItems: "center",
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: Style.SCALE_UP_AND_DOWN(14)
    } as ViewStyle
});

export const trackColor = { false: Colours.checkMilestone.unfilledCircle, true: Colours.heavyPink };
export const thumbColor = Platform.OS === "android" ? "white" : null;

export default styles;

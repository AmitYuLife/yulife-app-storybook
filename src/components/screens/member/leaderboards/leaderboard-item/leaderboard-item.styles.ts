import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colours, Style } from "../../../../../styles";

export const LEADERBOARD_ITEM_HEIGHT = Style.SCALE_Y_UP_AND_DOWN(50);

export default StyleSheet.create({
    nameWrapper: {
        flex: 1,
        paddingLeft: Style.SCALE_UP_AND_DOWN(10)
    } as ViewStyle,
    rankWrapper: {
        paddingLeft: Style.SCALE_UP_AND_DOWN(10),
        width: Style.SCALE_UP_AND_DOWN(36)
    } as ViewStyle,
    stepsWrapper: {
        paddingRight: Style.SCALE_UP_AND_DOWN(10),
        width: Style.SCALE_UP_AND_DOWN(80)
    } as ViewStyle,
    text: {
        fontFamily: Style.FONT_FAMILY_SECONDARY,
        fontSize: Style.SCALE_UP_AND_DOWN(14)
    } as TextStyle,
    textHighlighted: {
        color: Colours.heavyPink,
        fontFamily: Style.FONT_FAMILY_SECONDARY_BOLD
    } as ViewStyle,
    textRight: {
        textAlign: "right"
    } as TextStyle,
    wrapper: {
        alignItems: "center",
        backgroundColor: "white",
        borderBottomColor: "rgb(244,237,140)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        height: LEADERBOARD_ITEM_HEIGHT,
        paddingVertical: Style.SCALE_UP_AND_DOWN(14)
    } as ViewStyle,
    yucoinWrapper: {
        width: Style.SCALE_UP_AND_DOWN(50)
    } as ViewStyle
});

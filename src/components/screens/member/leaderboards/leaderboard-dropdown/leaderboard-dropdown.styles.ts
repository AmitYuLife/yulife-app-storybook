import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colours, Style } from "../../../../../styles";
import { LEADERBOARD_ITEM_HEIGHT } from "../leaderboard-item/leaderboard-item.styles";

export default StyleSheet.create({
    leaderboardList: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: "rgb(255, 252, 221)"
    } as ViewStyle,
    button: {
        height: LEADERBOARD_ITEM_HEIGHT,
        borderBottomColor: "rgb(255, 222, 219)",
        borderBottomWidth: 1,
        marginHorizontal: Style.SCALE_UP_AND_DOWN(15),
        justifyContent: "center"
    } as ViewStyle,
    activeText: {
        color: Colours.darkHotPink
    } as TextStyle,
    text: {
        fontSize: Style.SCALE_UP_AND_DOWN(18),
        lineHeight: Style.SCALE_UP_AND_DOWN(20)
    } as TextStyle
});

import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";
import { commonStyles } from "../challenge-failed/challenge-failed.screen.styles";

export default StyleSheet.create({
    ...commonStyles,
    level: {
        color: "rgb(168, 105, 22)",
        fontSize: Style.SCALE_UP_AND_DOWN(14),
        marginTop: Style.SCALE_UP_AND_DOWN(-10),
        textAlign: "center"
    } as TextStyle,
    plusPointsWrapper: {
        alignItems: "center",
        marginBottom: Style.SCALE_UP_AND_DOWN(-8)
    } as ViewStyle,
    score: {
        bottom: Style.SCALE_UP_AND_DOWN(20),
        color: "rgb(168, 105, 22)",
        fontSize: Style.SCALE_UP_AND_DOWN(25),
        left: 0,
        position: "absolute",
        right: 0,
        textAlign: "center"
    } as TextStyle
});

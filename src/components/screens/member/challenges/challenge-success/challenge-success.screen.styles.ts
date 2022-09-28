import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";
import { commonStyles } from "../challenge-failed/challenge-failed.screen.styles";

export const SCORE_COLOR = "rgb(168, 105, 22)";
export const LEVEL_COLOR = "rgb(168, 105, 22)";
export const LINE_COLOR = "rgb(251, 207, 39)";
export default StyleSheet.create({
  ...commonStyles,
  level: {
    color: LEVEL_COLOR,
    fontSize: Style.SCALE_UP_AND_DOWN(14),
    marginTop: Style.SCALE_UP_AND_DOWN(-10),
    textAlign: "center",
  } as TextStyle,
  plusPointsWrapper: {
    alignItems: "center",
    marginBottom: Style.SCALE_UP_AND_DOWN(48),
  } as ViewStyle,
  score: {
    bottom: Style.SCALE_UP_AND_DOWN(24),
    color: SCORE_COLOR,
    fontSize: Style.SCALE_UP_AND_DOWN(25),
    left: 0,
    position: "absolute",
    right: 0,
    textAlign: "center",
  } as TextStyle,
});

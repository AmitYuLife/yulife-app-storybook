import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../styles";

const TOP_BAR_INNER = Style.adjust(28);
export const TOP_BAR_PAD = Style.adjust(8);

export const TOP_BAR_HEIGHT = TOP_BAR_INNER + TOP_BAR_PAD;

export default StyleSheet.create({
  middleLabel: {
    fontSize: Style.SCALE_UP_AND_DOWN(20),
  } as TextStyle,
  textWhite: {
    color: "#FFFFFF",
  },
  wrapper: {
    alignItems: "center",
    flexDirection: "row",
    height: TOP_BAR_HEIGHT,
    justifyContent: "center",
    paddingTop: TOP_BAR_PAD,
    width: "100%",
  } as ViewStyle,
});

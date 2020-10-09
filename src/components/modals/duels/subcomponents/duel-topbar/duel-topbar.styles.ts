import { StyleSheet, ViewStyle, Platform } from "react-native";
import { Style } from "@styles";
import { TOP_BAR_PAD } from "@organisms/top-bar/top-bar.styles";

const TOP_BAR_INNER = Style.adjust(28);

const TOP_BAR_HEIGHT = TOP_BAR_INNER + TOP_BAR_PAD;

export default StyleSheet.create({
  wrapper: {
    alignItems: "center",
    flexDirection: "row",
    height: TOP_BAR_HEIGHT,
    justifyContent: "center",
    marginTop: Platform.OS === "ios" ? Style.getSafeAreaStart() : 0,
    paddingTop: TOP_BAR_PAD,
    width: "100%",
  } as ViewStyle,
  close: {
    padding: Style.SCALE_UP_AND_DOWN(10),
    position: "absolute",
    top: 0,
    left: 10,
  } as ViewStyle,
  info: {
    position: "absolute",
    right: 20,
  } as ViewStyle,
});

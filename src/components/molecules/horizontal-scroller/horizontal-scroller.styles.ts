import { ViewStyle, TextStyle, StyleSheet } from "react-native";
import { Style } from "@styles";

export const ITEM_WIDTH = Style.DEVICE_WIDTH / 5;
export const HEIGHT = 80;
export const ITEM_LABEL_SIZE = 24;
export const HALF_SCREEN = Style.DEVICE_WIDTH / 2;
export const HIGHLIGHT_RADIUS = 33;
export const HIGHLIGHT_CIRCUMFERENCE = HIGHLIGHT_RADIUS * 2;

export const PUSH_LEFT_TO_CENTER = 30;

const styles = StyleSheet.create({
  wrapper: {
    height: HEIGHT + 1,
    overflow: "hidden",
  } as ViewStyle,
  contentContainer: {
    paddingLeft: ITEM_WIDTH * 2,
    paddingRight: ITEM_WIDTH * 2,
  } as ViewStyle,
  scrollView: {
    width: "100%",
    height: HEIGHT,
    alignSelf: "center",
    marginRight: PUSH_LEFT_TO_CENTER,
  } as ViewStyle,
  itemWrapper: {
    height: HEIGHT,
    width: ITEM_WIDTH,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  itemLabel: {
    fontSize: ITEM_LABEL_SIZE,
    color: "#888",
  } as TextStyle,
  itemLabelActiveWrapper: {
    justifyContent: "center",
    alignItems: "center",
    ...StyleSheet.absoluteFillObject,
  } as TextStyle,
  itemLabelActive: {
    fontSize: ITEM_LABEL_SIZE,
    color: "#8E4D13",
  } as TextStyle,
});

export default styles;

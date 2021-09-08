import { Colours, Style } from "@styles";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export const ITEM_WIDTH = Style.DEVICE_WIDTH / 5;
const HIGHLIGHT_RADIUS = 33;
export const HIGHLIGHT_CIRCUMFERENCE = HIGHLIGHT_RADIUS * 2;
export const OVERLAY_TITLE_WRAPPER_HEIGHT = 20;
const HEIGHT = 112;
const ITEM_LABEL_SIZE = 24;

export const styles = StyleSheet.create({
  wrapper: {
    height: HEIGHT + 1,
    overflow: "hidden",
  } as ViewStyle,
  contentContainer: {
    paddingLeft: ITEM_WIDTH * 2,
    paddingRight: ITEM_WIDTH * 2,
  } as ViewStyle,
  itemWrapper: {
    height: HEIGHT,
    width: ITEM_WIDTH,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  itemLabel: {
    fontSize: ITEM_LABEL_SIZE,
    color: Colours.neutral.n800,
  } as TextStyle,
  itemLabelActiveWrapper: {
    justifyContent: "center",
    alignItems: "center",
    ...StyleSheet.absoluteFillObject,
  } as TextStyle,
  itemLabelActive: {
    fontSize: ITEM_LABEL_SIZE,
  } as TextStyle,
});

const WIDTH = 78;

export const highlightStyles = StyleSheet.create({
  overlayWrapper: {
    position: "absolute",
    top: 0,
    left: Style.DEVICE_WIDTH / 2 - WIDTH / 2 + 4,
    width: WIDTH,
    height: HIGHLIGHT_CIRCUMFERENCE,
  } as ViewStyle,
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    justifyContent: "center",
    opacity: 1,
    borderWidth: 1,
    width: WIDTH,
    height: 80,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  } as ViewStyle,
  highlightLabelWrapper: {
    position: "absolute",
    top: 20,
    left: 30,
    width: HIGHLIGHT_CIRCUMFERENCE,
    height: HIGHLIGHT_CIRCUMFERENCE,
    justifyContent: "center",
    alignItems: "center",
  } as TextStyle,
  overlayTitleWrapper: {
    position: "absolute",
    left: 0,
    top: 0,
    width: WIDTH,
    height: OVERLAY_TITLE_WRAPPER_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingTop: 2,
  } as ViewStyle,
});

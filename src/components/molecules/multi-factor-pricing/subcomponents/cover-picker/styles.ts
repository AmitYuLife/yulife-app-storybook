import { Colours, Style } from "@styles";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

const BASE_WIDTH = Style.DEVICE_WIDTH - 90;
export const ITEM_WIDTH = BASE_WIDTH / 5;
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
  itemWrapper: {
    height: HEIGHT,
    width: ITEM_WIDTH,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  itemLabel: {
    fontSize: ITEM_LABEL_SIZE,
    color: Colours.neutral.n600,
  } as TextStyle,
  itemLabelActiveWrapper: {
    justifyContent: "center",
    alignItems: "center",
    ...StyleSheet.absoluteFillObject,
  } as TextStyle,
  itemLabelActive: {
    fontSize: ITEM_LABEL_SIZE,
  } as TextStyle,
  flatList: {
    width: BASE_WIDTH,
    height: HEIGHT,
  },
  contentContainer: {
    paddingLeft: ITEM_WIDTH * 2,
    paddingRight: ITEM_WIDTH * 2,
  } as ViewStyle,
  loadingWrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  loading: {
    marginBottom: Style.adjust(40),
  } as ViewStyle,
});

const HIGHLIGHT_WIDTH = 72;

export const highlightStyles = StyleSheet.create({
  overlayWrapper: {
    position: "absolute",
    top: 4,
    left: BASE_WIDTH / 2 - HIGHLIGHT_WIDTH / 2,
    width: HIGHLIGHT_WIDTH,
    height: HIGHLIGHT_CIRCUMFERENCE,
  } as ViewStyle,
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    justifyContent: "center",
    width: HIGHLIGHT_WIDTH,
    height: 72,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderWidth: 1,
  } as ViewStyle,
  highlightLabelWrapper: {
    position: "absolute",
    top: 18,
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
    width: HIGHLIGHT_WIDTH,
    height: OVERLAY_TITLE_WRAPPER_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingTop: 2,
  } as ViewStyle,
});

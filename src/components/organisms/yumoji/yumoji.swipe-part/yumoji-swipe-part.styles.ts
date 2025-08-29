import { ViewStyle } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";

export const ITEM_WIDTH = Style.DEVICE_WIDTH / 2;
export const styles = StyleSheet.create({
  loader: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  } as ViewStyle,
  loadingWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colours.neutral.n50,
  } as ViewStyle,
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Style.adjust(16),
  } as ViewStyle,
  flatList: {
    marginStart: -(ITEM_WIDTH + ITEM_WIDTH / 2),
    marginEnd: -(ITEM_WIDTH / 2),
    flex: 1,
  } as ViewStyle,
  flatListItem: {
    width: ITEM_WIDTH,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  pad: {
    width: ITEM_WIDTH,
  } as ViewStyle,
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
});

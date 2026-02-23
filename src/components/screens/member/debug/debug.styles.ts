import { Colours } from "@styles";
import { ImageStyle, ViewStyle } from "react-native";
import { Style } from "../../../../styles";

import { StyleSheet } from "@styles";
export default StyleSheet.create({
  arrow: {
    transform: [{ rotate: "180deg" }],
  } as ImageStyle,
  itemWrapper: {
    borderBottomColor: Colours.debug.bottomBorder,
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: Style.SCALE_UP_AND_DOWN(15),
    paddingVertical: Style.SCALE_UP_AND_DOWN(15),
  } as ViewStyle,
  searchInput: {
    borderBottomColor: Colours.debug.bottomBorder,
    borderBottomWidth: 1,
    marginHorizontal: Style.SCALE_UP_AND_DOWN(15),
    paddingVertical: Style.SCALE_UP_AND_DOWN(15),
  } as ViewStyle,
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  textWrapper: {
    marginStart: Style.adjust(5),
  } as ViewStyle,
  starWrapper: {
    // Bigger box to click
    alignItems: "center",
    justifyContent: "center",
    width: Style.adjust(24),
    height: Style.adjust(24),
  } as ViewStyle,
  wrapper: {
    flex: 1,
  } as ViewStyle,
});

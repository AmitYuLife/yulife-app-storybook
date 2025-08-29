import colours from "@styles/colours";
import { TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../../../styles";

import { StyleSheet } from "@styles";
export default StyleSheet.create({
  contentWrapper: {
    flex: 1,
    flexDirection: "column",
  } as ViewStyle,
  dateWrapper: {
    flexDirection: "column",
    width: Style.adjust(48),
  } as ViewStyle,
  reward: {
    paddingEnd: Style.adjust(10),
  } as TextStyle,
  statusWrapper: {
    justifyContent: "flex-end",
    marginStart: "auto",
  } as ViewStyle,
  wrapper: {
    padding: Style.adjust(16),
    borderBottomColor: colours.neutral.n100,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    height: Style.adjust(74),
    width: "100%",
  } as ViewStyle,
});

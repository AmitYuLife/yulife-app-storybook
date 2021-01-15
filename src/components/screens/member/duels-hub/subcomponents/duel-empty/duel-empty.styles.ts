import { Colours, Style } from "@styles";
import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from "react-native";

export default StyleSheet.create({
  wrapper: {
    backgroundColor: Colours.neutral.n50,
    borderWidth: 2,
    borderColor: Colours.neutral.n100,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "flex-end",
    margin: 12,
    marginBottom: Style.adjust(40),
    overflow: "hidden",
  } as ViewStyle,
  textWrapper: {
    flex: 1,
    padding: 24,
    paddingLeft: 0,
    flexDirection: "row",
  } as ViewStyle,
  text: {
    fontSize: Style.adjust(20),
    lineHeight: Style.adjust(24),
    color: Colours.neutral.n500,
    paddingLeft: 24,
  } as TextStyle,
  image: {
    paddingLeft: 24,
    marginBottom: -Style.adjust(24),
  } as ImageStyle,
});

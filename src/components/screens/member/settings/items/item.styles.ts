import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from "react-native";
import { Colours, Style } from "../../../../../styles";

const styles = StyleSheet.create({
  nameWrapper: {
    flex: 1,
    paddingLeft: Style.adjust(10),
  } as ViewStyle,
  text: {
    textTransform: "capitalize",
    fontSize: Style.adjust(16),
    color: Colours.neutral.n800,
  } as TextStyle,
  textSmall: {
    color: Colours.neutral.n400,
    fontSize: Style.adjust(12),
    marginTop: 5,
  } as TextStyle,
  active: {
    color: Colours.primary.p600,
  } as TextStyle,
  infoButton: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  image: {
    width: Style.adjust(16),
    height: Style.adjust(16),
    marginLeft: Style.adjust(8),
  } as ImageStyle,
  switchWrapper: {
    alignItems: "flex-end",
    flex: 1,
    justifyContent: "center",
  } as ViewStyle,
  wrapper: {
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: Style.adjust(14),
  } as ViewStyle,
});

export default styles;

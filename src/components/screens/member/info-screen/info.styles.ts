import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../styles";

export default StyleSheet.create({
  buttonWrapper: {
    marginTop: Style.adjust(40),
  } as ViewStyle,
  subheading: {
    color: "#333333",
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(32),
  } as TextStyle,
  heading: {
    color: "#333333",
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(32),
    marginBottom: Style.adjust(32),
  } as TextStyle,
  image: {
    height: Style.adjust(40),
    width: Style.adjust(160),
    marginBottom: Style.adjust(32),
  } as ImageStyle,
  wrapper: {
    backgroundColor: "rgba(255,255,255,0.9)",
    paddingHorizontal: Style.adjust(24),
    flex: 1,
    justifyContent: "center",
  } as ViewStyle,
});

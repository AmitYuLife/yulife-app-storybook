import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../../styles";

export default StyleSheet.create({
  buttonWrapper: {
    marginTop: Style.SCALE_UP_AND_DOWN(40),
  } as ViewStyle,
  subheading: {
    color: "#333333",
    fontSize: Style.SCALE_UP_AND_DOWN(16),
    lineHeight: Style.SCALE_UP_AND_DOWN(32),
  } as TextStyle,
  heading: {
    color: "#333333",
    fontSize: Style.SCALE_UP_AND_DOWN(16),
    lineHeight: Style.SCALE_UP_AND_DOWN(32),
    marginBottom: Style.SCALE_UP_AND_DOWN(32),
  } as TextStyle,
  image: {
    height: Style.SCALE_UP_AND_DOWN(40),
    width: Style.SCALE_UP_AND_DOWN(160),
    marginBottom: Style.SCALE_UP_AND_DOWN(32),
  } as ImageStyle,
  wrapper: {
    backgroundColor: "rgba(255,255,255,0.9)",
    paddingHorizontal: Style.SCALE_UP_AND_DOWN(24),
    flex: 1,
    justifyContent: "center",
  } as ViewStyle,
});

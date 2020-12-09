import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from "react-native";
import { Style, Colours } from "@styles";

export default StyleSheet.create({
  imageWrapper: {
    height: Style.adjust(320),
    width: Style.adjust(320),
    alignSelf: "center",
  } as ViewStyle,
  wrapper: {
    flex: 1,
    width: Style.DEVICE_WIDTH,
    justifyContent: "center",
  } as ViewStyle,
  image: {
    height: Style.adjust(320),
    width: Style.adjust(320),
  } as ImageStyle,
  title: {
    alignSelf: "center",
    marginTop: Style.adjust(Style.isShortToMediumAndroid() ? 17 : 34),
    fontSize: Style.adjust(24),
    letterSpacing: 0.8,
    color: Colours.neutral.n800,
  } as TextStyle,
  subTitle: {
    alignSelf: "center",
    alignContent: "center",
    textAlign: "center",
    marginTop: Style.adjust(18),
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    width: 280,
    letterSpacing: 0.8,
    color: Colours.neutral.n800,
  } as TextStyle,
});

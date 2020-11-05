import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from "react-native";
import { Style } from "@styles";

export default StyleSheet.create({
  imageWrapper: {
    height: 320,
    width: 320,
    marginTop: Style.DEVICE_HEIGHT * 0.1,
    alignSelf: "center",
  } as ViewStyle,
  image: {
    height: 320,
    width: 320,
  } as ImageStyle,
  title: {
    alignSelf: "center",
    marginTop: Style.adjust(Style.isShortToMediumAndroid() ? 17 : 34),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: 24,
    letterSpacing: 0.8,
    color: "#000000",
  } as TextStyle,
  subTitle: {
    alignSelf: "center",
    alignContent: "center",
    textAlign: "center",
    marginTop: 18,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: 16,
    lineHeight: 24,
    width: 280,
    letterSpacing: 0.8,
    color: "#5A5A5C",
  } as TextStyle,
});

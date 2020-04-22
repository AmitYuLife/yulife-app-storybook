import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "../../../../styles";

export default StyleSheet.create({
  close: {
    height: Style.SCALE_UP_AND_DOWN(13),
    width: Style.SCALE_UP_AND_DOWN(13),
  } as ImageStyle,
  closeWrapper: {
    alignItems: "center",
    height: Style.SCALE_UP_AND_DOWN(56),
    justifyContent: "center",
    position: "absolute",
    right: 0,
    top: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 40 : 10),
    width: Style.SCALE_UP_AND_DOWN(46),
  } as ViewStyle,
  iconWrapper: {
    width: Style.SCALE_UP_AND_DOWN(56),
  } as ViewStyle,
  itemWrapper: {
    alignItems: "center",
    flexDirection: "row",
    height: Style.SCALE_UP_AND_DOWN(48),
  } as ViewStyle,
  logo: {} as ImageStyle,
  logoWrapper: {
    marginBottom: Style.SCALE_UP_AND_DOWN(30),
    width: Style.SCALE_UP_AND_DOWN(56),
  } as ViewStyle,
  text: {
    borderColor: "transparent",
    borderWidth: 1,
    color: "#333333",
    fontSize: Style.SCALE_UP_AND_DOWN(16),
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    width: "100%",
  } as TextStyle,
  textWrapper: {
    paddingRight: Style.SCALE_UP_AND_DOWN(8),
  } as ViewStyle,
  debugText: {
    color: "rgb(51,51,51)",
    fontSize: Style.SCALE_UP_AND_DOWN(17),
  } as TextStyle,
  versionText: {
    color: "rgb(201,201,201)",
    fontSize: Style.SCALE_UP_AND_DOWN(10),
    textAlign: "center",
  } as TextStyle,
  versionTextWrapper: {
    alignItems: "center",
    bottom: Style.SCALE_UP_AND_DOWN(10),
    justifyContent: "center",
    position: "absolute",
    width: "100%",
  } as ViewStyle,
  wrapper: {
    backgroundColor: "white",
    flex: 1,
    paddingLeft: Style.SCALE_UP_AND_DOWN(105),
    paddingTop: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 130 : 90),
  } as ViewStyle,
});

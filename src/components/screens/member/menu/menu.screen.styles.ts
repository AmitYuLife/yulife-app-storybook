import { ImageStyle, StyleSheet, TextStyle, ViewStyle, Platform } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "../../../../styles";
import deviceInfoModule from "react-native-device-info";
import media from "@styles/media";

const CLOSE_WRAPPER_TOP_MARGIN = media.select(
  [
    {
      condition:
        Platform.OS === "ios" &&
        [media.DEVICES.iPhone12.height, media.DEVICES.iPhone12ProMax.height].includes(Style.DEVICE_HEIGHT),
      value: Style.getSafeAreaStart() + 16,
    },
  ],
  Style.getSafeAreaStart()
);

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
    top: CLOSE_WRAPPER_TOP_MARGIN,
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
    bottom: Platform.OS === "ios" && deviceInfoModule.hasNotch() ? 44 : Style.SCALE_UP_AND_DOWN(10),
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

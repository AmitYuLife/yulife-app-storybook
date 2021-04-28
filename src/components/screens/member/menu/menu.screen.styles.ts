import { ImageStyle, StyleSheet, TextStyle, ViewStyle, Platform } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "../../../../styles";
import deviceInfoModule from "react-native-device-info";
import media from "@styles/media";

export const CLOSE_WRAPPER_TOP_MARGIN = media.select(
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

const getPaddingTop = () => {
  if (isIphoneX()) {
    return 130;
  }

  if (Style.isXShort()) {
    return 40;
  }

  if (Style.isShortToMedium()) {
    return 80;
  }

  return 90;
};

export default StyleSheet.create({
  iconWrapper: {
    width: Style.adjust(56),
  } as ViewStyle,
  itemWrapper: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: Style.adjust(Style.isShortToMedium() ? 20 : 24),
  } as ViewStyle,
  logo: {} as ImageStyle,
  logoWrapper: {
    marginBottom: Style.adjust(16),
    width: Style.adjust(56),
  } as ViewStyle,
  text: {
    borderColor: "transparent",
    borderWidth: 1,
    color: "#333333",
    fontSize: Style.adjust(16),
    width: "100%",
  } as TextStyle,
  textWrapper: {
    paddingRight: Style.adjust(8),
  } as ViewStyle,
  debugText: {
    color: "rgb(51,51,51)",
    fontSize: Style.adjust(17),
  } as TextStyle,
  versionText: {
    color: "rgb(201,201,201)",
    fontSize: Style.adjust(10),
    textAlign: "center",
  } as TextStyle,
  versionTextWrapper: {
    alignItems: "center",
    bottom: Platform.OS === "ios" && deviceInfoModule.hasNotch() ? 44 : Style.adjust(10),
    justifyContent: "center",
    position: "absolute",
    width: "100%",
  } as ViewStyle,
  wrapper: {
    backgroundColor: "white",
    flex: 1,
    paddingLeft: Style.adjust(105),
    paddingTop: Style.adjust(getPaddingTop()),
  } as ViewStyle,
});

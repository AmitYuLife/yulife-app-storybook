import { StyleSheet, ViewStyle, Platform } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "../../../../../styles";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  listWrapper: {
    flex: 1,
    paddingHorizontal: Style.SCALE_UP_AND_DOWN(15),
  } as ViewStyle,
  navBarWrapper: {
    height: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 25 : 15),
    paddingBottom: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 0 : 25),
    alignItems: "center",
  } as ViewStyle,
  rewardTabsWrapper: {
    alignItems: "center",
    marginTop: 8,
  } as ViewStyle,
  footer: {
    height: Style.SCALE_UP_AND_DOWN(72),
  } as ViewStyle,
  topbarWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    top: Platform.select({ ios: Style.getSafeAreaStart(), android: 0 }),
  } as ViewStyle,
});

import { Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Colours, Style } from "../../../../../styles";

export default StyleSheet.create({
  activityIndicator: {
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
  contentWrapper: {
    alignItems: "center",
    paddingHorizontal: Style.SCALE_UP_AND_DOWN(15),
  } as ViewStyle,
  dateLabelWrapper: {
    flex: 1,
  } as ViewStyle,
  dateRowWrapper: {
    flexDirection: "row",
    marginTop: Style.SCALE_UP_AND_DOWN(12),
  } as ViewStyle,
  dateWrapper: {
    marginLeft: "auto",
  } as ViewStyle,
  divider: {
    borderColor: Colours.darkGray,
    borderWidth: StyleSheet.hairlineWidth,
    marginTop: Style.SCALE_UP_AND_DOWN(12),
    width: "100%",
  } as ViewStyle,
  loyaltyProgramme: {
    fontSize: Style.SCALE_UP_AND_DOWN(16),
    lineHeight: Style.SCALE_UP_AND_DOWN(20),
    marginLeft: "auto",
  } as TextStyle,
  rewardName: {
    fontSize: Style.SCALE_UP_AND_DOWN(20),
    lineHeight: Style.SCALE_UP_AND_DOWN(20),
  } as TextStyle,
  rewardNameWrapper: {
    alignItems: "flex-end",
    flexDirection: "row",
    width: "100%",
  } as ViewStyle,
  textSizeDefault: {
    fontSize: Style.SCALE_UP_AND_DOWN(16),
  } as TextStyle,
  topBarWrapper: {
    backgroundColor: "white",
    left: 0,
    paddingBottom: Style.SCALE_UP_AND_DOWN(8),
    paddingTop: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 40 : Platform.OS === "android" ? 0 : 20),
    position: "absolute",
    right: 0,
    top: 0,
  } as ViewStyle,
  wrapper: {
    flex: 1,
  } as ViewStyle,
});

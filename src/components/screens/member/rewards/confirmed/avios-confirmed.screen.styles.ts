import { StyleSheet, TextStyle, ViewStyle } from "react-native";
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
  wrapper: {
    flex: 1,
  } as ViewStyle,
});

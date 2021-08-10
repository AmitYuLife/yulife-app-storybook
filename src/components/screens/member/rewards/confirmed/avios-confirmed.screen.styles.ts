import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colours, Style } from "@styles";

export default StyleSheet.create({
  activityIndicator: {
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
  contentWrapper: {
    alignItems: "center",
    paddingHorizontal: Style.adjust(15),
  } as ViewStyle,
  dateLabelWrapper: {
    flex: 1,
  } as ViewStyle,
  dateRowWrapper: {
    flexDirection: "row",
    marginTop: Style.adjust(12),
  } as ViewStyle,
  dateWrapper: {
    marginLeft: "auto",
  } as ViewStyle,
  divider: {
    borderColor: Colours.darkGray,
    borderWidth: StyleSheet.hairlineWidth,
    marginTop: Style.adjust(12),
    width: "100%",
  } as ViewStyle,
  loyaltyProgramme: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(20),
    marginLeft: "auto",
  } as TextStyle,
  rewardName: {
    fontSize: Style.adjust(20),
    lineHeight: Style.adjust(20),
  } as TextStyle,
  rewardNameWrapper: {
    alignItems: "flex-end",
    flexDirection: "row",
    width: "100%",
  } as ViewStyle,
  textSizeDefault: {
    fontSize: Style.adjust(16),
  } as TextStyle,
  wrapper: {
    flex: 1,
  } as ViewStyle,
});

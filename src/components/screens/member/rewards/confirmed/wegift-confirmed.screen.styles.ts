import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colours, Style } from "@styles";

const imageDimensions = {
  height: Style.SCALE_UP_AND_DOWN(165),
  width: Style.SCALE_UP_AND_DOWN(265),
};

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
    marginTop: Style.SCALE_UP_AND_DOWN(15),
  } as ViewStyle,
  dateWrapper: {
    marginLeft: "auto",
  } as ViewStyle,
  divider: {
    borderColor: Colours.darkGray,
    borderWidth: StyleSheet.hairlineWidth,
    marginTop: Style.SCALE_UP_AND_DOWN(15),
    width: "100%",
  } as ViewStyle,
  image: {
    ...imageDimensions,
    resizeMode: "contain",
  } as ImageStyle,
  imageWrapper: {
    marginBottom: Style.SCALE_UP_AND_DOWN(50),
    marginTop: Style.SCALE_UP_AND_DOWN(100),
    ...imageDimensions,
  } as ViewStyle,
  rewardName: {
    color: Colours.darkGray,
    fontSize: Style.SCALE_UP_AND_DOWN(20),
  } as TextStyle,
  rewardNameWrapper: {
    width: "100%",
  } as ViewStyle,
  textSizeDefault: {
    fontSize: Style.SCALE_UP_AND_DOWN(16),
  } as TextStyle,
  wrapper: {
    flex: 1,
  } as ViewStyle,
});

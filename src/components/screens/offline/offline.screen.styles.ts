import { Colours } from "@styles";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { Style } from "../../../styles";

import { StyleSheet } from "@styles";
export default StyleSheet.create({
  contentWrapper: {
    alignItems: "center",
    justifyContent: "center",
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
  image: {
    height: Style.DEVICE_HEIGHT,
    width: Style.DEVICE_WIDTH,
  } as ImageStyle,
  heading: {
    color: Colours.darkestGray,
    fontSize: Style.SCALE_UP_AND_DOWN(35),
    textAlign: "center",
  } as TextStyle,
  subheading: {
    color: Colours.gray,
    fontSize: Style.SCALE_UP_AND_DOWN(16),
    marginStart: Style.SCALE_UP_AND_DOWN(35),
    marginEnd: Style.SCALE_UP_AND_DOWN(35),
    marginTop: Style.SCALE_UP_AND_DOWN(20),
    textAlign: "center",
  } as TextStyle,
  wrapper: {
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
  buttonWrapper: {
    marginTop: Style.SCALE_UP_AND_DOWN(22),
  } as ViewStyle,
});

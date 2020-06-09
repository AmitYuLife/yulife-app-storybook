import { ImageStyle, StyleSheet, ViewStyle } from "react-native";
import { Style } from "../../../../styles";

export default StyleSheet.create({
  activityIndicator: {
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
  imageBackground: {
    ...StyleSheet.absoluteFillObject,
    height: Style.SCALE_UP_AND_DOWN(150),
    width: Style.SCALE_UP_AND_DOWN(375),
  } as ImageStyle,
  overlayWrapper: {
    marginRight: "auto",
  } as ViewStyle,
  wrapper: {
    height: Style.SCALE_UP_AND_DOWN(150),
    width: Style.SCALE_UP_AND_DOWN(375),
  } as ViewStyle,
  wrapperLoading: {
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
});

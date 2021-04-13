import { StyleSheet, ViewStyle } from "react-native";
import { Style } from "../../../../styles";

export default StyleSheet.create({
  activityIndicator: {
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
  imageBackground: {
    ...StyleSheet.absoluteFillObject,
    height: Style.adjust(150),
    width: Style.DEVICE_WIDTH,
  },
  overlayWrapper: {
    marginRight: "auto",
  } as ViewStyle,
  wrapper: {
    height: Style.adjust(150),
    width: Style.DEVICE_WIDTH,
  } as ViewStyle,
  wrapperLoading: {
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
});

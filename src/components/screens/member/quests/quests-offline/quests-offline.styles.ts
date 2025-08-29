import { ImageStyle, ViewStyle } from "react-native";
import { Style, StyleSheet } from "@styles";

const styles = StyleSheet.create({
  background: {
    height: Style.DEVICE_HEIGHT,
    width: Style.DEVICE_WIDTH,
  } as ImageStyle,
  backgroundWrapper: {
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
  headingWrapper: {
    alignItems: "center",
    justifyContent: "center",
    padding: Style.adjust(15),
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
  navBarWrapper: {
    alignItems: "center",
    bottom: Style.adjust(17),
    position: "absolute",
  } as ViewStyle,
  wrapper: {
    alignItems: "center",
    flex: 1,
    height: "100%",
  } as ViewStyle,
});

export default styles;

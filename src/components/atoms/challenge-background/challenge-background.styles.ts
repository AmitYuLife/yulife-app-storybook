import { ImageStyle, StyleSheet, ViewStyle } from "react-native";

export default StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
  image: {
    position: "absolute",
    bottom: 0,
  } as ImageStyle,
});

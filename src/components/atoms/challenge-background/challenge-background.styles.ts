import { ImageStyle, ViewStyle } from "react-native";

import { StyleSheet } from "@styles";
export default StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
  image: {
    position: "absolute",
    bottom: 0,
  } as ImageStyle,
});

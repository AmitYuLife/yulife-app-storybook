import { ImageStyle, StyleSheet } from "react-native";
import { Style } from "@styles/index";

export default StyleSheet.create({
  backgroundImage: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    width: "100%",
    height: Style.DEVICE_HEIGHT,
  } as ImageStyle,
});

import { ImageStyle } from "react-native";
import { Style } from "@styles/index";

import { StyleSheet } from "@styles";
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

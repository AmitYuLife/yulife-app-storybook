import { ImageStyle } from "react-native";
import { Style } from "@styles/index";

import { StyleSheet } from "@styles";
export default StyleSheet.create({
  backgroundImage: {
    top: 0,
    start: 0,
    position: "absolute",
    end: 0,
    width: "100%",
    height: Style.DEVICE_HEIGHT,
  } as ImageStyle,
});

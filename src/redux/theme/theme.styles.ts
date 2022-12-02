import { Style } from "@styles";
import { ImageStyle, Platform, StyleSheet, TextStyle } from "react-native";

export default StyleSheet.create({
  backgroundImageWrapper: {
    width: "100%",
  },

  footerGray: {
    color: "rgb(170,170,170)",
  } as TextStyle,
  footerWhite: {
    color: "rgb(255,255,255)",
  } as TextStyle,
  backgroundImage: {
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    width: "100%",
  } as ImageStyle,
  challengeSuccess: {
    height: Style.SCALE_UP_AND_DOWN(262),
    marginBottom: Platform.OS === "ios" && Style.DEVICE_HEIGHT < 700 ? -20 : 0,
  },
});

import { Colours, Style } from "@styles/index";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { ImageStyle } from "react-native-fast-image";
import { isIphoneX } from "react-native-iphone-x-helper";
import { MAP_SLICE_HEIGHT } from "../../assets";
import { CIRCLE_SIZE } from "../../assets/level/level.styles";

const styles = StyleSheet.create({
  bigText: {
    fontSize: 20,
    marginTop: 8,
  },
  center: {
    textAlign: "center",
  },
  smallText: {
    fontSize: 14,
    marginTop: 16,
  } as TextStyle,
  textWrapper: {
    bottom: 120,
    left: 0,
    position: "absolute",
    width: Style.DEVICE_WIDTH,
  } as ViewStyle,
  image: {
    height: MAP_SLICE_HEIGHT,
    width: "100%",
  } as ImageStyle,
  bubble: {
    alignItems: "center",
    borderRadius: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    justifyContent: "center",
    marginLeft: -CIRCLE_SIZE / 2,
    position: "absolute",
    left: Style.DEVICE_WIDTH / 2,
    right: 0,
    top: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 122 : 127),
    zIndex: 3,
    width: CIRCLE_SIZE,
    backgroundColor: Colours.darkHotPink,
  } as ViewStyle,
  orangeBubble: {
    position: "absolute",
    alignItems: "center",
    height: Style.SCALE_UP_AND_DOWN(250),
    width: Style.DEVICE_WIDTH,
    top: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 170 : 120),
  } as ViewStyle,
  treesWrapper: {
    zIndex: 2,
    height: Style.SCALE_UP_AND_DOWN(150),
    width: Style.SCALE_UP_AND_DOWN(150),
    alignItems: "center",
    position: "absolute",
    top: Style.SCALE_UP_AND_DOWN(-40),
  } as ViewStyle,
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgb(133,226,236)",
    height: Style.DEVICE_HEIGHT + 80,
  } as ViewStyle,
});

export default styles;

import { StyleSheet } from "react-native";
import { Style } from "../../../../../../../styles";

export const CIRCLE_SIZE = Style.SCALE_UP_AND_DOWN(50);
export const LEVEL_SIZE = CIRCLE_SIZE + Style.SCALE_UP_AND_DOWN(12);
export const HIGH_DENSITY_REPOSITION_VALUE = Style.PIXEL_RATIO >= 3 ? Style.SCALE_UP_AND_DOWN(10) : 0;

const styles = StyleSheet.create({
  bubble: {
    position: "absolute",
    width: LEVEL_SIZE,
    height: LEVEL_SIZE,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: -Style.SCALE_UP_AND_DOWN(6) + HIGH_DENSITY_REPOSITION_VALUE,
    marginLeft: -LEVEL_SIZE / 2 + HIGH_DENSITY_REPOSITION_VALUE,
    overflow: "hidden",
  },
  bubbleText: {
    position: "absolute",
    width: LEVEL_SIZE,
    height: LEVEL_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
  notificationImage: {
    position: "absolute",
    top: Style.SCALE_UP_AND_DOWN(4),
    right: Style.SCALE_UP_AND_DOWN(4),
  },
  text: {
    color: "#ffffff",
    fontSize: Style.SCALE_UP_AND_DOWN(19),
    lineHeight: Style.SCALE_UP_AND_DOWN(19),
  },
  textPending: {
    color: "#ffffff",
    fontSize: Style.SCALE_UP_AND_DOWN(11),
    lineHeight: Style.SCALE_UP_AND_DOWN(11),
    textAlign: "center",
  },
  column: {
    flexDirection: "column",
  },
  stars: { flexDirection: "row", justifyContent: "center", alignItems: "center" },
});

export default styles;

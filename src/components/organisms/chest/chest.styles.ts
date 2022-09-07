import { Style } from "@styles";
import { StyleSheet, ViewStyle } from "react-native";

const CENTER_X = Style.DEVICE_WIDTH / 2;

export const cardPositions = {
  startY: Style.adjust(230),
  endY: Style.adjust(155),
  endYMiddle: Style.adjust(139),
  xPositionsTwoCards: [CENTER_X - Style.adjust(108), CENTER_X + Style.adjust(12)],
  xPositionsThreeCards: [CENTER_X - Style.adjust(147), CENTER_X - Style.adjust(53), CENTER_X + Style.adjust(43)],
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
  } as ViewStyle,
  cardList: {
    width: Style.DEVICE_WIDTH,
  } as ViewStyle,
  cardWrapper: {
    position: "absolute",
  } as ViewStyle,
  chestLottieWrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
  } as ViewStyle,
  chestLottie: {
    width: Style.DEVICE_WIDTH,
  } as ViewStyle,
});

export default styles;

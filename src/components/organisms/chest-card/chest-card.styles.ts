import { Style, StyleSheet } from "@styles";
import { ViewStyle, ImageStyle } from "react-native";

export const CARD_WIDTH = Style.adjust(106);
export const CARD_HEIGHT = Style.adjust(144);

const styles = StyleSheet.create({
  cardOuter: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT + 4,
    borderRadius: Style.adjust(8),
  } as ViewStyle,
  cardInner: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: Style.adjust(8),
  } as ViewStyle,
  stars: {
    position: "absolute",
    top: 0,
    left: 0,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  } as ViewStyle,
  shine: {
    position: "absolute",
    top: 0,
    left: 0,
    width: CARD_WIDTH,
    height: Style.adjust(116),
  } as ViewStyle,
  icon: {
    paddingTop: Style.adjust(24),
    paddingHorizontal: Style.adjust(23),
    paddingBottom: Style.adjust(8),
  } as ImageStyle,
  tooltipIcon: {
    position: "absolute",
    top: Style.adjust(10),
    right: Style.adjust(10),
  } as ViewStyle,
});

export default styles;

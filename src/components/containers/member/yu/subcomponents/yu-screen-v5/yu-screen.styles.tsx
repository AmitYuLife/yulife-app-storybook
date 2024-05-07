import { StyleSheet } from "react-native";
import { Colours, Style } from "@styles";

export const HERO_HEADER_SCROLL_AMOUNT = Style.adjust(220);
export const ANIMATION_START_Y = Style.adjust(30);
export const FOOTER_HEIGHT = Style.adjust(80);
export const FOOTER_HIDE_BACKGROUND_HEIGHT = Style.adjust(1000);

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
  },
  innerWrapper: {
    flex: 1,
    alignItems: "center",
    ...StyleSheet.absoluteFillObject,
  },
  scrollView: {
    width: Style.DEVICE_WIDTH,
  },
  footerPadding: {
    width: Style.DEVICE_WIDTH,
    height: FOOTER_HEIGHT + FOOTER_HIDE_BACKGROUND_HEIGHT,
    marginBottom: -FOOTER_HIDE_BACKGROUND_HEIGHT,
    backgroundColor: Colours.neutral.white,
  },
});

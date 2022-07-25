import { Style } from "@styles";
import { StyleSheet } from "react-native";

export const CARD_WIDTH = Style.adjust(260);
const CARD_HEIGHT = Style.adjust(308);
const CARD_VERTICAL_MARGINS = Style.adjust(8);
const BUTTON_HORIZONTAL_MARGIN = Style.adjust(16);
const BUTTON_WIDTH = CARD_WIDTH - BUTTON_HORIZONTAL_MARGIN * 2;
export const BUTTON_HEIGHT = Style.adjust(40);
export const CARD_BACKGROUND_IMAGE_HEIGHT = CARD_HEIGHT - CARD_VERTICAL_MARGINS * 2;

export const styles = StyleSheet.create({
  carouselCardWrapper: {
    marginLeft: Style.adjust(16),
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: Style.adjust(16),
    overflow: "hidden",
  },
  carouselCard: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  carouselCardButton: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: Style.adjust(8),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonWrapper: {
    width: BUTTON_WIDTH,
  },
});

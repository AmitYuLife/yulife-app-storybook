import { Style } from "@styles";
import { StyleSheet } from "react-native";

export const CARD_WIDTH_NARROW = Style.adjust(260);
export const CARD_WIDTH_FULL = Style.DEVICE_WIDTH - Style.adjust(48); // wide
const CARD_HEIGHT = Style.adjust(316);
export const BUTTON_HORIZONTAL_MARGIN = Style.adjust(24);
export const BUTTON_HEIGHT = Style.adjust(40);

export const styles = StyleSheet.create({
  carouselCardWrapper: {
    marginLeft: Style.adjust(16),
    height: CARD_HEIGHT,
    borderRadius: Style.adjust(8),
    overflow: "hidden",
  },
  backgroundImageWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
  },
  backgroundImageLeft: {
    position: "absolute",
  },
  backgroundImageRight: {
    position: "absolute",
    right: 0,
  },
  carouselCardButton: {
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
    marginTop: "auto",
  },
  buttonWrapper: {
    marginTop: Style.adjust(16),
    marginBottom: Style.adjust(-8),
  },
  contentWrapper: {
    marginTop: "auto",
    marginBottom: Style.adjust(8),
    marginHorizontal: Style.adjust(8),
    padding: Style.adjust(16),
    borderRadius: Style.adjust(8),
  },
  descriptionWrapper: {
    marginTop: Style.adjust(8),
  },
});

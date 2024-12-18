import { StyleSheet } from "react-native";
import { Colours, Style, TOP_BAR } from "@styles";

export const FOOTER_HEIGHT = Style.adjust(80);
export const FOOTER_HIDE_BACKGROUND_HEIGHT = Style.adjust(1000);

export const PLATFORM_SIZE = {
  width: Style.DEVICE_WIDTH,
  height: (Style.DEVICE_WIDTH / 375) * 165,
};
export const INITIAL_SCROLL = Style.adjust(20);
export const COLLAPSED_HEADER_HEIGHT = Style.adjust(142) + TOP_BAR.PADDING_TOP;
export const FULL_HEADER_HEIGHT = Style.adjust(220) + PLATFORM_SIZE.height * 0.9 + TOP_BAR.PADDING_TOP;
export const MIN_SECTIONS_HEIGHT = Style.DEVICE_HEIGHT - COLLAPSED_HEADER_HEIGHT - FOOTER_HEIGHT + Style.adjust(10);

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  topbarWrapper: {
    left: 0,
    top: TOP_BAR.PADDING_TOP,
    position: "absolute",
    right: 0,
  },
  gradientWrapper: {
    position: "absolute",
    bottom: Style.adjust(-7),
  },
  sectionTopWrapper: {
    ...StyleSheet.absoluteFillObject,
    height: COLLAPSED_HEADER_HEIGHT,
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
  headerScaffold: {
    height: INITIAL_SCROLL,
  },
  info: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingTop: TOP_BAR.PADDING_TOP + Style.adjust(68),
    paddingLeft: Style.adjust(24),
  },
  yumojiPromptWrapper: {
    position: "absolute",
    top: 0,
    left: Style.adjust(24),
    right: Style.adjust(24),
    paddingTop: TOP_BAR.PADDING_TOP + Style.adjust(128),
  },
  sections: {
    backgroundColor: Colours.neutral.white,
  },
  bottomPad: {
    backgroundColor: Colours.neutral.white,
  },
  footerPadding: {
    width: Style.DEVICE_WIDTH,
    height: FOOTER_HEIGHT + FOOTER_HIDE_BACKGROUND_HEIGHT,
    marginBottom: -FOOTER_HIDE_BACKGROUND_HEIGHT,
    backgroundColor: Colours.neutral.white,
  },
});

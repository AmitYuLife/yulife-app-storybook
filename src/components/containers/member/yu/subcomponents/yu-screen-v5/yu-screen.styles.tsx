import { Colours, Style, TOP_BAR, StyleSheet } from "@styles";
export const FOOTER_HEIGHT = Style.adjust(100);
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
    start: 0,
    top: TOP_BAR.PADDING_TOP,
    position: "absolute",
    end: 0,
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
    start: 0,
    end: 0,
    paddingTop: TOP_BAR.PADDING_TOP + Style.adjust(68),
    paddingStart: Style.adjust(24),
  },
  yumojiPromptWrapper: {
    position: "absolute",
    top: 0,
    start: Style.adjust(24),
    end: Style.adjust(24),
    paddingTop: TOP_BAR.PADDING_TOP + Style.adjust(128),
  },
  sections: {
    backgroundColor: Colours.neutral.white,
    paddingHorizontal: Style.adjust(24),
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

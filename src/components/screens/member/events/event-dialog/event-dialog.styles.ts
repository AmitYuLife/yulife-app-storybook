import { StyleSheet, ViewStyle, Platform } from "react-native";
import { Style, Colours } from "@styles";
import { PADDING_TOP } from "@styles/top-bar.styles";

const STATUS_BAR_COVER_HEIGHT = Platform.select({
  ios: PADDING_TOP + Style.adjust(12),
  android: 0,
});
export const HEADER_HEIGHT = Style.DEVICE_WIDTH / 2.2;
export const CONTENT_MARGIN_TOP = Platform.select({
  ios: HEADER_HEIGHT,
  android: HEADER_HEIGHT + Style.adjust(12),
});

export const FAQ_ICON_DIMENSION = 30;

export const FAQ_VERTICAL_PADDING = 15;

export const FAQ_HORIZONTAL_PADDING = 18;

export default StyleSheet.create({
  wrapper: { flexGrow: 1 },
  statusBarCover: {
    width: Style.DEVICE_WIDTH,
    height: STATUS_BAR_COVER_HEIGHT,
  } as ViewStyle,
  headerImageContainer: {
    position: "absolute",
    top: PADDING_TOP,
  },
  headerImageWrapper: {
    marginTop: Style.adjust(12),
  },
  faqImageWrapper: {
    position: "absolute",
    top: PADDING_TOP,
    right: 0,
  },
  faqImageContainer: {
    paddingVertical: FAQ_VERTICAL_PADDING,
    paddingHorizontal: FAQ_HORIZONTAL_PADDING,
  },
  scrollView: {
    flex: 1,
  },
  contentWrapper: {
    marginTop: CONTENT_MARGIN_TOP,
    backgroundColor: Colours.neutral.n50,
    paddingVertical: Style.adjust(24),
    borderTopLeftRadius: Style.adjust(8),
    borderTopRightRadius: Style.adjust(8),
    minHeight: "100%",
    paddingHorizontal: Style.adjust(24),
  },
  rewardsWrapper: {
    marginHorizontal: Style.adjust(-24),
  },
  progressText: { flexDirection: "row", paddingVertical: Style.adjust(8) },
  progressTextIcon: { marginRight: Style.adjust(4) },
  about: { marginTop: Style.adjust(40), marginBottom: Style.adjust(24) },
  bannerWrapper: { marginBottom: Style.adjust(24) },
  banner: { paddingVertical: 0 },
  ctaPadding: { height: Style.adjust(60) },
  ctaWrapper: {
    position: "absolute",
    bottom: 0,
    width: Style.DEVICE_WIDTH,
    padding: Style.adjust(32),
    paddingTop: 0,
  },
});

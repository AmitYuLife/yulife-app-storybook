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

export const SMOOTH_GRADIENT_COLORS = [
  "rgba(250, 250, 254, 0)",
  Colours.neutral.n50,
  Colours.neutral.n50,
  Colours.neutral.n50,
];

export default StyleSheet.create({
  wrapper: { flexGrow: 1 },
  eventEndedBadgeWrapper: {
    display: "flex",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: Style.DEVICE_WIDTH,
    transform: [{ translateY: -Style.adjust(12) }],
  },
  eventEndedBadge: {
    borderRadius: Style.adjust(4),
    paddingVertical: Style.adjust(4),
    paddingHorizontal: Style.adjust(20),
    backgroundColor: Colours.primary.p600,
  },
  eventEndedBadgeSpacer: {
    height: Style.adjust(10),
  },
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
    paddingTop: Style.adjust(20),
    paddingBottom: Style.adjust(30),
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
  aboutForVersus: { marginTop: Style.adjust(12), marginBottom: Style.adjust(24) },
  bannerWrapper: { marginBottom: Style.adjust(24) },
  banner: { paddingVertical: 0 },
  hintContainer: { marginBottom: Style.adjust(20) },
  ctaPadding: { height: Style.adjust(60) },
  ctaWrapper: {
    position: "absolute",
    bottom: 0,
    width: Style.DEVICE_WIDTH,
    padding: Style.adjust(32),
    paddingTop: Style.adjust(50),
  },
  taskContainer: {
    marginTop: Style.adjust(24),
  },
  tasksWrapper: {
    marginTop: Style.adjust(16),
  },
  task: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: Style.adjust(16),
  },
  taskTitle: {
    marginLeft: Style.adjust(16),
  },
});

import { StyleSheet, ViewStyle, Platform } from "react-native";
import { Style, Colours } from "@styles";
import { PADDING_TOP } from "@styles/top-bar.styles";

const STATUS_BAR_COVER_HEIGHT = Platform.select({
  ios: PADDING_TOP + Style.adjust(12),
  android: 0,
});

export const CONTENT_MARGIN_TOP = Platform.select({
  ios: Style.DEVICE_WIDTH / 3,
  android: Style.DEVICE_WIDTH / 3 + Style.adjust(12),
});

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
  scrollView: {
    flex: 1,
  },
  contentWrapper: {
    marginTop: CONTENT_MARGIN_TOP,
    backgroundColor: Colours.neutral.white,
    paddingVertical: Style.adjust(24),
    borderTopLeftRadius: Style.adjust(8),
    borderTopRightRadius: Style.adjust(8),
    minHeight: "100%",
  },
  progressText: { flexDirection: "row", paddingHorizontal: Style.adjust(24), paddingVertical: Style.adjust(8) },
  progressTextIcon: { marginRight: Style.adjust(4) },
  progressBar: { paddingHorizontal: Style.adjust(24) },
  ctaPadding: {
    height: Platform.select({ ios: Style.adjust(28), android: Style.adjust(60) }),
  },
  ctaWrapper: {
    position: "absolute",
    bottom: 0,
    width: Style.DEVICE_WIDTH,
    padding: Style.adjust(32),
    paddingTop: 0,
  },
  testContentWrapper: {
    height: 800,
    padding: Style.adjust(24),
  },
  testContent: {
    height: "100%",
    backgroundColor: Colours.neutral.n100,
    borderRadius: Style.adjust(8),
    justifyContent: "center",
    alignItems: "center",
  },
});

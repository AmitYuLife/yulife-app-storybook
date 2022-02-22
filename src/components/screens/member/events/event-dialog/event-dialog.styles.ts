import { StyleSheet, ViewStyle, Platform } from "react-native";
import { Style, Colours } from "@styles";
import { PADDING_TOP, PADDING_BOTTOM } from "@styles/top-bar.styles";

export default StyleSheet.create({
  wrapper: { flexGrow: 1 },
  statusBarCover: {
    width: Style.DEVICE_WIDTH,
    height: PADDING_TOP + Style.adjust(12),
  } as ViewStyle,
  headerImageWrapper: {
    position: "absolute",
    top: PADDING_TOP + Style.adjust(12),
  },
  scrollView: {
    flex: 1,
  },
  contentWrapper: {
    marginTop: Style.DEVICE_WIDTH / 4 + PADDING_TOP + PADDING_BOTTOM + Style.adjust(12),
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

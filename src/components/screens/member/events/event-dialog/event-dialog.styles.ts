import { StyleSheet, ViewStyle } from "react-native";
import { Style, Colours } from "@styles";
import { PADDING_TOP } from "@styles/top-bar.styles";

export default StyleSheet.create({
  wrapper: { flexGrow: 1 },
  statusBarCover: {
    position: "absolute",
    width: Style.DEVICE_WIDTH,
    height: PADDING_TOP + Style.adjust(12),
    zIndex: 2,
  } as ViewStyle,
  headerImageWrapper: {
    position: "absolute",
    top: Style.DEVICE_WIDTH / 10,
  },
  scrollView: {
    marginTop: Style.DEVICE_WIDTH / 4,
    overflow: "visible",
    flex: 1,
  },
  contentWrapper: {
    backgroundColor: Colours.neutral.white,
    paddingVertical: Style.adjust(24),
    borderTopLeftRadius: Style.adjust(8),
    borderTopRightRadius: Style.adjust(8),
    minHeight: "100%",
  },
  progressText: { flexDirection: "row", paddingHorizontal: Style.adjust(24), paddingVertical: Style.adjust(8) },
  progressTextIcon: { marginRight: Style.adjust(4) },
  progressBar: { paddingHorizontal: Style.adjust(24) },
  ctaWrapper: {
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

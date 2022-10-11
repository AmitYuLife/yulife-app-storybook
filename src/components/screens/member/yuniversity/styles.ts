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
export const TITLE_HEIGHT = Platform.select({
  ios: Style.adjust(32),
  android: Style.adjust(44),
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
    backgroundColor: Colours.neutral.n50,
    paddingVertical: Style.adjust(24),
    borderTopLeftRadius: Style.adjust(8),
    borderTopRightRadius: Style.adjust(8),
    minHeight: "100%",
    paddingHorizontal: Style.adjust(16),
  },
  categoryHeaderWrapper: {
    marginBottom: Style.adjust(16),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  courseWrapper: {
    marginBottom: Style.adjust(16),
  },
});

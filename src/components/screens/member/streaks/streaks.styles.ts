import { Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style, TOP_BAR } from "@styles";

export default StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    justifyContent: "flex-end",
    position: "absolute",
    left: Style.adjust(24),
    right: Style.adjust(24),
    bottom: 0,
    alignItems: "center",
    paddingBottom: Platform.select({
      ios: 0,
      android: Style.adjust(24),
    }),
  } as ViewStyle,
  bottomPad: {
    height: TOP_BAR.TOP_BAR_WITH_PAD,
    width: Style.DEVICE_WIDTH,
  },
  bottomPadLarge: {
    height:
      TOP_BAR.TOP_BAR_WITH_PAD +
      Platform.select({
        ios: Style.adjust(88),
        android: Style.adjust(112),
      }),
    width: Style.DEVICE_WIDTH,
  },
  buttonPrimaryWrapper: {
    marginTop: Style.adjust(32),
  } as ViewStyle,
  buttonSecondaryWrapper: {
    marginTop: Style.adjust(16),
  } as ViewStyle,
  headingWrapper: {
    marginBottom: Style.adjust(16),
  } as ViewStyle,
  streakLabel: {
    fontSize: Style.adjust(15),
    lineHeight: Style.adjust(15),
    textAlign: "center",
  } as TextStyle,
  streakLabelLast: {
    fontSize: Style.adjust(Style.isShortAndroid() ? 11 : 12),
    lineHeight: Style.adjust(11),
    marginTop: 0,
  } as TextStyle,
  streakWrapperLast: {
    marginRight: 0,
  } as ViewStyle,
  streakCountContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Style.adjust(15),
    top: TOP_BAR.PADDING_TOP + Style.adjust(4),
  },
});

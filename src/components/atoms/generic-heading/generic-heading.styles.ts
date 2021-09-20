import { StyleSheet, TextStyle, ViewStyle, Platform } from "react-native";
import { Colours, Style, TOP_BAR } from "@styles";
import media from "@styles/media";

export const TOP_BAR_HEIGHT = TOP_BAR.HEIGHT + TOP_BAR.PADDING_TOP + TOP_BAR.PADDING_BOTTOM;

const rightIconTextFontSize = media.select(
  [
    {
      condition: Platform.OS === "ios" && Style.DEVICE_HEIGHT >= media.DEVICES.iPhone12ProMax.height,
      value: Style.adjust(18),
    },
  ],
  Style.adjust(20)
);

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    flexDirection: "row",
    height: TOP_BAR_HEIGHT,
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: Style.adjust(16),
  } as ViewStyle,
  leftIconWrapper: {
    alignSelf: "center",
    flex: 0.2,
  } as ViewStyle,
  centerWrapper: { flexDirection: "row", flex: 0.9, justifyContent: "center" } as ViewStyle,
  relative: { position: "relative" } as ViewStyle,
  logoBetaWrapper: { position: "absolute", left: 24 } as ViewStyle,
  headingBetaWrapper: { position: "absolute", right: -38 } as ViewStyle,
  heading: {
    color: Colours.products.fib.n900,
    letterSpacing: 1,
    fontSize: Style.adjust(20),
    lineHeight: Style.adjust(24),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  } as TextStyle,
  rightIconWrapper: { flex: 0.2, alignSelf: "center" } as ViewStyle,
  rightIconTouchable: { alignSelf: "flex-end" },
  rightIconText: {
    fontSize: rightIconTextFontSize,
    lineHeight: Style.adjust(22),
    letterSpacing: 1,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    flexWrap: "nowrap",
    marginLeft: Style.adjust(-16),
  } as TextStyle,
  buttonSave: {
    paddingTop: Style.adjust(2),
  } as ViewStyle,
});

export default styles;

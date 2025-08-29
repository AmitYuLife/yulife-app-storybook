import { TextStyle, ViewStyle, Platform } from "react-native";
import { Style, TOP_BAR, Colours, StyleSheet } from "@styles";
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
    paddingHorizontal: Style.adjust(16),
    position: "relative",
    width: "100%",
    justifyContent: "space-between",
  } as ViewStyle,
  rightSection: {
    height: Style.adjust(32),
    justifyContent: "center",
    minWidth: Style.adjust(32),
  },
  centerSection: {
    position: "absolute",
    start: 0,
    end: 0,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    pointerEvents: "none",
  } as ViewStyle,
  centerTextWrapper: {
    // Allow 16px padding + 32px icon + 16px padding for each side = 128px
    maxWidth: Style.DEVICE_WIDTH - Style.adjust(128),
  },
  leftSection: {
    height: Style.adjust(32),
    justifyContent: "center",
    minWidth: Style.adjust(32),
  },
  rightIconCoinsTextColour: {
    color: Colours.neutral.white,
  },
  rightIconText: {
    fontSize: rightIconTextFontSize,
    lineHeight: Style.adjust(22),
    letterSpacing: 1,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    flexWrap: "nowrap",
    marginStart: Style.adjust(-16),
  } as TextStyle,
  buttonSave: {
    paddingTop: Style.adjust(2),
  } as ViewStyle,
});

export default styles;

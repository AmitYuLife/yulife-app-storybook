import { StyleSheet, TextStyle, ViewStyle, Platform } from "react-native";
import { Style, TOP_BAR, Colours } from "@styles";
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
  rightIconTouchable: { alignSelf: "flex-end", height: Style.adjust(32) },
  leftIconTouchable: { height: Style.adjust(32) },
  rightIconCoinsWrapper: {
    bottom: Platform.select({ ios: Style.adjust(8), android: Style.adjust(2) }),
    right: Style.adjust(3),
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
    marginLeft: Style.adjust(-16),
  } as TextStyle,
  buttonSave: {
    paddingTop: Style.adjust(2),
  } as ViewStyle,
});

export default styles;

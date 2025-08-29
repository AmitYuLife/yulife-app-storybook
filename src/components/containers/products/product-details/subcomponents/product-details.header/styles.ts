import { Colours, Style, TOP_BAR, StyleSheet } from "@styles";
import { ViewStyle } from "react-native";

export const defaultFundingTheme = {
  backgroundColor: Colours.primary.p400,
  borderColor: Colours.primary.p600,
};

const styles = StyleSheet.create({
  wrapper: {
    overflow: "hidden",
    flex: 1,
    paddingBottom: Style.adjust(16),
    paddingTop: TOP_BAR.PADDING_TOP,
  },
  backgroundImage: {
    position: "absolute",
  },
  title: {
    maxWidth: Style.adjust(315),
    minHeight: Style.adjust(120),
    marginTop: Style.adjust(86),
    marginBottom: Style.adjust(24),
    marginHorizontal: Style.adjust(32),
  } as ViewStyle,
  inner: {
    paddingTop: Style.adjust(54),
    paddingBottom: Style.adjust(8),
    paddingHorizontal: Style.adjust(24),
    flexDirection: "row",
    flex: 1,
  } as ViewStyle,
  leftSide: {
    justifyContent: "center",
    maxWidth: Style.adjust(184),
  } as ViewStyle,
  logo: {
    marginEnd: Style.adjust(8),
  },
  rightSide: {
    marginStart: "auto",
  } as ViewStyle,
  yuCoinPowerWrapper: {
    position: "absolute",
    start: 0,
    end: 0,
  } as ViewStyle,
  yuCoinTopHalfBackground: {
    position: "absolute",
    top: 0,
    start: 0,
    end: 0,
  } as ViewStyle,
  yuCoinBottomHalfBackground: {
    position: "absolute",
    height: 16,
    bottom: 0,
    start: 0,
    end: 0,
  } as ViewStyle,
});

export default styles;

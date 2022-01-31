import { Style } from "@styles";
import { StyleSheet, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    overflow: "hidden",
    flex: 1,
    paddingBottom: Style.adjust(16),
  },
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
    marginRight: Style.adjust(8),
  },
  rightSide: {
    marginLeft: "auto",
  } as ViewStyle,
  yuCoinPowerWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
  } as ViewStyle,
  yuCoinTopHalfBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  } as ViewStyle,
  yuCoinBottomHalfBackground: {
    position: "absolute",
    height: 16,
    bottom: 0,
    left: 0,
    right: 0,
  } as ViewStyle,
});

export default styles;

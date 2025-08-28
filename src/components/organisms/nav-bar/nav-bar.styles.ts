import { Colours, NAV_BAR } from "@styles/index";
import { StyleSheet, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colours.neutral.white,
    borderRadius: NAV_BAR.BORDER_RADIUS,
    height: NAV_BAR.HEIGHT,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  } as ViewStyle,
  outerWrapper: {
    position: "absolute",
    left: NAV_BAR.OUTER_PADDING,
    right: NAV_BAR.OUTER_PADDING,
    bottom: NAV_BAR.getPositionBottom(),
  } as ViewStyle,
  shadow: {
    width: "100%",
    position: "absolute",
    height: NAV_BAR.HEIGHT,
    borderRadius: NAV_BAR.BORDER_RADIUS,
    backgroundColor: Colours.neutral.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  elevation: {
    elevation: 2,
  } as ViewStyle,
});

export function getLabelAdjustment(index: number) {
  switch (index) {
    case 0:
      return { marginStart: 12 };
    case 1:
      return null;
    case 2:
      return null;
    case 3:
      return { marginEnd: 12 };
    default:
      return null;
  }
}

export default styles;

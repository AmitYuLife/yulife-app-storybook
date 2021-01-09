import { Style, Colours } from "@styles/index";
import { StyleSheet, ViewStyle, Platform } from "react-native";
import deviceInfoModule from "react-native-device-info";

const BORDER_RADIUS = Style.adjust(8);
const OUTER_PADDING = Style.adjust(16);
const NAV_BAR_HEIGHT = Style.adjust(58);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colours.neutral.white,
    borderRadius: BORDER_RADIUS,
    height: NAV_BAR_HEIGHT,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    overflow: "hidden",
  } as ViewStyle,
  outerWrapper: {
    position: "absolute",
    left: OUTER_PADDING,
    right: OUTER_PADDING,
    // ios box shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  } as ViewStyle,
  elevation: {
    elevation: 2,
  } as ViewStyle,
});

export const getPositionBottom = (options = { additionalBottom: 0 }) => {
  const { additionalBottom } = options;
  if (Platform.OS === "ios" && deviceInfoModule.hasNotch()) {
    return 30 + additionalBottom;
  }

  return Style.adjust(20) + additionalBottom;
};

export function getLabelAdjustment(index: number) {
  switch (index) {
    case 0:
      return { marginLeft: 12 };
    case 1:
      return null;
    case 2:
      return null;
    case 3:
      return { marginRight: 12 };
    default:
      return null;
  }
}

export default styles;

import { Style } from "@styles/index";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  labelsWrapper: {
    flexDirection: "row",
    height: Style.SCALE_UP_AND_DOWN(51),
    position: "absolute",
    bottom: 0,
    width: "100%",
  } as ViewStyle,
  text: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.SCALE_UP_AND_DOWN(12),
    textAlign: "center",
    width: "100%",
  } as TextStyle,
  textWrapper: {
    alignItems: "center",
    height: Style.SCALE_UP_AND_DOWN(60),
    flex: 1,
    justifyContent: "flex-end",
  } as ViewStyle,
  wrapper: {
    backgroundColor: "#fff",
    borderRadius: Style.SCALE_UP_AND_DOWN(8),
    height: Style.SCALE_UP_AND_DOWN(58),
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: Style.SCALE_UP_AND_DOWN(20),
    flexDirection: "row",
    width: "100%",
    overflow: "hidden",
  } as ViewStyle,
  outerWrapper: {
    position: "absolute",
    left: Style.SCALE_UP_AND_DOWN(10),
    right: Style.SCALE_UP_AND_DOWN(10),
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

import { Style } from "@styles";
import { StyleSheet, ViewStyle } from "react-native";

export const BORDER_RADIUS = 12;

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: BORDER_RADIUS,
    overflow: "hidden",
    marginHorizontal: Style.adjust(24),
    paddingBottom: Style.adjust(16),
  },
  inner: {
    paddingTop: Style.adjust(24),
    paddingBottom: Style.adjust(8),
    paddingHorizontal: Style.adjust(24),
    flexDirection: "row",
  } as ViewStyle,
  leftSide: {
    justifyContent: "center",
  } as ViewStyle,
  logo: {
    marginRight: Style.adjust(8),
  },
});

export default styles;

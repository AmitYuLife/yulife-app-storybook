import { Style } from "@styles";
import { StyleSheet, ViewStyle, ImageStyle } from "react-native";

const styles = StyleSheet.create({
  cardOuter: {
    width: Style.adjust(106),
    height: Style.adjust(148),
    borderRadius: Style.adjust(8),
    marginHorizontal: Style.adjust(4),
  } as ViewStyle,
  cardInner: {
    width: Style.adjust(106),
    height: Style.adjust(144),
    borderRadius: Style.adjust(8),
  } as ViewStyle,
  stars: {
    position: "absolute",
    top: 0,
    left: 0,
    width: Style.adjust(106),
    height: Style.adjust(144),
  } as ViewStyle,
  shine: {
    position: "absolute",
    top: 0,
    left: 0,
    width: Style.adjust(106),
    height: Style.adjust(116),
  } as ViewStyle,
  icon: {
    paddingTop: Style.adjust(24),
    paddingHorizontal: Style.adjust(23),
    paddingBottom: Style.adjust(8),
  } as ImageStyle,
  tooltipIcon: {
    position: "absolute",
    top: Style.adjust(8),
    right: Style.adjust(8),
  } as ViewStyle,
});

export default styles;

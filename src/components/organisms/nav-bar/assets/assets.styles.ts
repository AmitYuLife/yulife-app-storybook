import { Colours, Style, StyleSheet } from "@styles";
import { TextStyle } from "react-native";

export const NAV_BAR_ICON_SIZE = Style.adjust(24);
const styles = StyleSheet.create({
  wrapper: {
    width: Style.adjust(61),
    height: Style.adjust(43),
    alignItems: "center",
    flexDirection: "column",
  },
  text: {
    position: "absolute",
    alignSelf: "center",
    bottom: -3,
  } as TextStyle,
  notification: {
    position: "absolute",
    width: Style.adjust(10),
    height: Style.adjust(10),
    backgroundColor: "#F86F63",
    borderRadius: 100,
    right: 14,
    top: -1,
    borderWidth: 1,
    borderColor: Colours.neutral.white,
  },
});

export default styles;

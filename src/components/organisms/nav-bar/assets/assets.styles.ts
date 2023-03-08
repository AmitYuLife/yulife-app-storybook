import { Style } from "@styles/index";
import { StyleSheet, TextStyle } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: Style.adjust(10),
    position: "absolute",
    alignSelf: "center",
    bottom: Style.adjust(5),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  } as TextStyle,
});

export default styles;

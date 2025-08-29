import { ImageStyle, ViewStyle } from "react-native";
import { Style } from "../../../styles";

import { StyleSheet } from "@styles";
export default StyleSheet.create({
  contentWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Style.adjust(18),
  } as ViewStyle,
  image: {
    marginBottom: Style.adjust(22),
  } as ImageStyle,
  wrapper: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  } as ViewStyle,
});

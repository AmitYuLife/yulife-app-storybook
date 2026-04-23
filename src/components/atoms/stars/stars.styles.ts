import { ViewStyle } from "react-native";
import { Style } from "../../../styles";

import { StyleSheet } from "@styles";

export const getStyles = (scale: number) =>
  StyleSheet.create({
    starMidWrapper: {
      marginTop: Style.adjust(-4 * scale),
    } as ViewStyle,
    wrapper: {
      alignItems: "center",
      flexDirection: "row",
      height: Style.adjust(60 * scale),
      justifyContent: "space-around",
      marginBottom: Style.adjust(4 * scale),
      width: Style.adjust(180 * scale),
    } as ViewStyle,
  });

export default getStyles(1);

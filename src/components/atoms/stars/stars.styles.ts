import { ViewStyle } from "react-native";
import { Style } from "../../../styles";

import { StyleSheet } from "@styles";

export const getStyles = (scale: number) =>
  StyleSheet.create({
    starMidWrapper: {
      marginTop: Style.SCALE_UP_AND_DOWN(-4 * scale),
    } as ViewStyle,
    wrapper: {
      alignItems: "center",
      flexDirection: "row",
      height: Style.SCALE_UP_AND_DOWN(60 * scale),
      justifyContent: "space-around",
      marginBottom: Style.SCALE_UP_AND_DOWN(4 * scale),
      width: Style.SCALE_UP_AND_DOWN(180 * scale),
    } as ViewStyle,
  });

export default getStyles(1);

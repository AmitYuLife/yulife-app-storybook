import { ViewStyle } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colours.neutral.n100,
    opacity: 0.4,
  } as ViewStyle,
  headingWrapper: {
    alignItems: "center",
    justifyContent: "center",
    padding: Style.adjust(15),
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
  navBarWrapper: {
    alignItems: "center",
    bottom: Style.adjust(17),
    position: "absolute",
  } as ViewStyle,
  wrapper: {
    alignItems: "center",
    flex: 1,
    height: "100%",
  } as ViewStyle,
});

export default styles;

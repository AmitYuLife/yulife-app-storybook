import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style, Colours } from "@styles";

const styles = StyleSheet.create({
  heading: {
    fontSize: Style.SCALE_UP_AND_DOWN(14),
    color: Colours.neutral.n400,
    textTransform: "capitalize",
  } as TextStyle,
  headingWrapper: {
    alignItems: "center",
    backgroundColor: Colours.neutral.n50,
    borderTopColor: Colours.neutral.n100,
    borderTopWidth: 1,
    borderBottomColor: Colours.neutral.n100,
    borderBottomWidth: 1,
    paddingBottom: Style.SCALE_UP_AND_DOWN(7),
    paddingTop: Style.SCALE_UP_AND_DOWN(7),
  } as ViewStyle,
});

export default styles;

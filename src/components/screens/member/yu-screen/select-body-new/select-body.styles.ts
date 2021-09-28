import { StyleSheet, ViewStyle } from "react-native";
import { Style, Colours } from "@styles";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colours.neutral.white,
    paddingHorizontal: Style.adjust(16),
  } as ViewStyle,
  elementWrapper: {
    flex: 1,
    paddingBottom: Style.adjust(117),
    justifyContent: "center",
  } as ViewStyle,
  title: {
    alignSelf: "center",
    justifyContent: "flex-end",
    marginBottom: Style.adjust(24),
  } as ViewStyle,
  selectorWrapper: {
    flexDirection: "row",
    alignSelf: "stretch",
    width: "100%",
    justifyContent: "space-around",
  } as ViewStyle,
  bodySelected: {
    borderColor: Colours.primary.p600,
    backgroundColor: Colours.primary.p50,
  },
  buttonsWrapper: {
    alignItems: "center",
    left: 0,
    position: "absolute",
    right: 0,
    bottom: Style.adjust(40),
  } as ViewStyle,
});

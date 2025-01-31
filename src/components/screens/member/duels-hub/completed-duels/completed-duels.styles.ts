import { StyleSheet, ViewStyle } from "react-native";
import { Style, Colours } from "@styles";
import { DUEL_ENTRY_HEIGHT } from "../subcomponents/duel-entry/duel-entry";

export default StyleSheet.create({
  wrapper: {
    width: Style.DEVICE_WIDTH,
    backgroundColor: Colours.neutral.white,
  } as ViewStyle,
  skeletonWrapper: {
    flex: 1,
    marginVertical: Style.adjust(16),
    overflow: "hidden",
  } as ViewStyle,
  list: {
    marginTop: Style.adjust(12),
    paddingHorizontal: Style.adjust(24),
    paddingBottom: Style.adjust(100),
  } as ViewStyle,
  sectionheaderWrapper: {
    height: DUEL_ENTRY_HEIGHT,
    justifyContent: "center",
  } as ViewStyle,
  buttonWrapperStyle: {
    marginTop: Style.adjust(24),
  } as ViewStyle,
  contentContainerStyle: {
    paddingBottom: Style.adjust(65),
  },
});

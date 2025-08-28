import { StyleSheet, ViewStyle, ImageStyle } from "react-native";
import { Colours, Style } from "@styles";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colours.neutral.white,
    justifyContent: "center",
    marginBottom: Style.adjust(24),
  } as ViewStyle,
  nameWrapper: {
    flex: 1,
    paddingEnd: Style.adjust(16),
  } as ViewStyle,
  container: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  infoButton: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  image: {
    width: Style.adjust(16),
    height: Style.adjust(16),
    marginStart: Style.adjust(8),
  } as ImageStyle,
  switchWrapper: {
    alignItems: "flex-end",
    flex: 1,
    justifyContent: "center",
  } as ViewStyle,
  seperator: {
    backgroundColor: Colours.neutral.n100,
    height: 1,
    width: "100%",
    marginBottom: 24,
  } as ViewStyle,
  reminderTime: {
    flexDirection: "row",
    marginTop: Style.adjust(24),
  },
  timer: {
    position: "absolute",
    right: 0,
    bottom: 0,
  } as ViewStyle,
  disabled: {
    opacity: 0.5,
  } as ViewStyle,
});

export default styles;

import { Colours, Style } from "@styles";
import { Platform, StyleSheet, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  scrollView: {
    flex: 1,
    height: Style.DEVICE_HEIGHT,
  } as ViewStyle,
  scrollViewWrapper: {
    backgroundColor: Colours.neutral.white,
    borderTopLeftRadius: Style.adjust(16),
    borderTopRightRadius: Style.adjust(16),
    flex: 1,
  } as ViewStyle,
  closeWrapper: {
    position: "absolute",
    top: Platform.select({
      android: 0,
      ios: Style.getSafeAreaStart() + Style.adjust(16),
    }),
    right: 0,
    paddingHorizontal: Style.adjust(16),
    paddingTop: Style.adjust(16),
    paddingBottom: Style.adjust(16),
  } as ViewStyle,
  topPad: {
    height: Style.adjust(320),
  } as ViewStyle,
  contentWrapper: {
    width: Style.DEVICE_WIDTH,
    paddingHorizontal: Style.adjust(24),
  } as ViewStyle,
  scrollTopPad: {
    height: Style.adjust(22),
  } as ViewStyle,
  scrollBottomPad: {
    height: Style.adjust(40),
  } as ViewStyle,
});

export default styles;

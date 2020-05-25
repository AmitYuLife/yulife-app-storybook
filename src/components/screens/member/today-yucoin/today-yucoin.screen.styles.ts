import { StyleSheet, ViewStyle, Platform } from "react-native";
import { Style } from "../../../../styles";

function getCloseTop() {
  const base = Style.getSafeAreaStart();
  if (Style.isAnyIphoneX()) {
    return base + 12;
  } else if (Style.defaultShrinkThreshold) {
    return base - 14;
  } else {
    return base + Style.adjust(-12);
  }
}

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
  } as ViewStyle,
  contentWrapper: {
    alignSelf: "center",
    width: 305,
  } as ViewStyle,
  wrapper: {
    backgroundColor: "rgba(255,255,255,0.9)",
    flex: 1,
  } as ViewStyle,
  scrollView: {
    flex: 1,
  } as ViewStyle,
  close: {
    right: 0,
    top: Platform.select({
      ios: getCloseTop(),
      android: 8
    }),
    padding: Style.adjust(16),
  } as ViewStyle,
  heading: {
    marginTop: Platform.select({
      ios: Style.isAnyIphoneX() ? 44 : Style.adjust(20),
      android: 0
    })
  } as ViewStyle,
  reduceBottomPadding: {
    paddingBottom: 10
  } as ViewStyle,
});

export default styles;

import { StyleSheet, ViewStyle, Platform } from "react-native";
import { Style } from "../../../../styles";

function getCloseTop() {
  const base = Style.getSafeAreaStart();
  if (Style.isAnyIphoneX()) {
    return base + 12;
  }

  if (Style.defaultShrinkThreshold) {
    return base - 2;
  }

  return base + 2;
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
    backgroundColor: "#FAFAFE",
    flex: 1,
  } as ViewStyle,
  scrollView: {
    flex: 1,
  } as ViewStyle,
  close: {
    right: 0,
    top: Platform.select({
      ios: getCloseTop(),
      android: 8,
    }),
    padding: Style.adjust(16),
  } as ViewStyle,
  heading: {
    marginTop: Platform.select({
      ios: Style.isAnyIphoneX() ? 44 : Style.adjust(20),
      android: 0,
    }),
  } as ViewStyle,
  reduceBottomPadding: {
    paddingBottom: 10,
  } as ViewStyle,
  activeBuffs: {
    position: "absolute",
    top: Style.adjust(36),
    right: Style.adjust(146),
    shadowColor: "#000000",
    shadowOffset: { width: Style.adjust(2), height: Style.adjust(2) },
    shadowOpacity: 0.16,
    shadowRadius: 7,
    elevation: 2,
  },
});

export default styles;

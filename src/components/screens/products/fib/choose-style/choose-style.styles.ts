import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Style, Colours } from "../../../../../styles";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: "100%",
  } as ViewStyle,
  backgroundWrapper: {
    flexGrow: 1,
    flex: 1,
  } as ViewStyle,
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  worldTextWrapper: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    marginTop: Style.isAnyIphoneX() ? 100 : 60,
  } as ViewStyle,
  armorWrapper: {
    marginTop: Style.isThinIOS() ? 35 : 0,
    position: "absolute",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  } as ViewStyle,
  armorImage: {
    width: "100%",
    height: "50%",
  },
  chooseStyleTextWrapper: {
    marginBottom: Style.isShortAndroid() || Style.isShortAndLowScaledPixelAndroid() ? 16 : 24,
    justifyContent: "center",
  } as ViewStyle,
  buttonWrapper: {
    bottom: Style.isShortAndroid() || Style.isShortAndLowScaledPixelAndroid() ? 24 : 32,
    justifyContent: "center",
    width: "100%",
    marginTop: 32,
  } as ViewStyle,
  descriptionWrapper: {
    marginVertical: Style.isShortAndroid() || Style.isShortAndLowScaledPixelAndroid() ? 8 : 24,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignContent: "center",
  } as ViewStyle,
  topRoundedView: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: Style.isShortAndroid() || Style.isShortAndLowScaledPixelAndroid() ? 16 : 24,
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: Colours.neutral.white,
  } as ViewStyle,
  selectorWrapper: {
    backgroundColor: Colours.neutral.white,
    width: "100%",
  } as ViewStyle,
  stylesWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Style.isShortAndroid() || Style.isShortAndLowScaledPixelAndroid() ? 40 : 20,
  },
  titleText: {
    fontSize: Style.adjust(24),
    lineHeight: Style.adjust(32),
    letterSpacing: Style.adjust(1),
    color: Colours.neutral.n700,
    textAlign: "center",
  } as TextStyle,
  text: {
    fontSize: Style.adjust(16),
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    lineHeight: Style.adjust(24),
    letterSpacing: Style.adjust(0.6),
    color: Colours.neutral.n700,
    textAlign: "center",
  } as TextStyle,
});

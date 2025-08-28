import { ImageStyle } from "@atoms";
import { StyleSheet, ImageStyle as RnImageStyle, ViewStyle } from "react-native";
import { Style } from "@styles";

const AVATAR_SM = Style.adjust(42);
const AVATAR_MD = Style.adjust(54);

const EMPTY_AVATAR_SM = Style.adjust(45);
const EMPTY_AVATAR_MD = Style.adjust(56);

export const emptyStyles = StyleSheet.create({
  wrapper: {
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "center",
  } as ViewStyle,
  small: {
    height: AVATAR_SM,
    width: AVATAR_SM,
    marginEnd: Style.adjust(10),
  } as ViewStyle,
  medium: {
    height: AVATAR_MD,
    width: AVATAR_MD,
  } as ViewStyle,
  imageSmall: {
    width: EMPTY_AVATAR_SM,
    height: Style.adjust(105),
  } as RnImageStyle,
  imageMedium: {
    width: EMPTY_AVATAR_MD,
    height: Style.adjust(115),
  } as RnImageStyle,
});

export const filledStyles = StyleSheet.create({
  wrapper: {
    alignSelf: "center",
    overflow: "hidden",
    justifyContent: "flex-start",
  } as ViewStyle,
  small: {
    height: AVATAR_SM,
    width: AVATAR_SM,
    marginEnd: Style.adjust(10),
  } as ViewStyle,
  medium: {
    height: AVATAR_MD,
    width: AVATAR_MD,
    paddingTop: Style.adjust(5),
  } as ViewStyle,
  imageSmall: {
    width: AVATAR_SM,
    height: Style.adjust(90),
  } as ImageStyle,
  imageMedium: {
    width: AVATAR_MD,
    height: Style.adjust(122),
  } as ImageStyle,
});

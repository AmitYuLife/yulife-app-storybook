import { StyleSheet, ImageStyle as RnImageStyle, ViewStyle } from "react-native";
import { ImageStyle } from "react-native-fast-image";
import { Style } from "@styles";

const AVATAR_SIZE = Style.adjust(48);

export const emptyStyles = StyleSheet.create({
  wrapper: {
    height: AVATAR_SIZE,
    width: AVATAR_SIZE,
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "flex-end",
    marginRight: Style.adjust(10),
  } as ViewStyle,
  image: {
    width: Style.adjust(45),
    height: Style.adjust(105),
  } as RnImageStyle,
});

export const filledStyles = StyleSheet.create({
  wrapper: {
    alignSelf: "flex-end",
    height: AVATAR_SIZE,
    width: AVATAR_SIZE,
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
    marginRight: Style.adjust(10),
  } as ViewStyle,
  image: {
    width: AVATAR_SIZE,
    height: Style.adjust(122),
  } as ImageStyle,
});

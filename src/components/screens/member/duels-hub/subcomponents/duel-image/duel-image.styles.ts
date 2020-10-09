import { StyleSheet, ImageStyle as RnImageStyle, ViewStyle } from "react-native";
import { ImageStyle } from "react-native-fast-image";
import { Style } from "@styles";

const AVATAR_WIDTH = Style.adjust(42);

export const emptyStyles = StyleSheet.create({
  wrapper: {
    height: "100%",
    width: AVATAR_WIDTH,
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
    height: AVATAR_WIDTH,
    width: AVATAR_WIDTH,
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
    marginRight: Style.adjust(10),
  } as ViewStyle,
  image: {
    width: AVATAR_WIDTH,
    height: Style.adjust(90),
  } as ImageStyle,
});

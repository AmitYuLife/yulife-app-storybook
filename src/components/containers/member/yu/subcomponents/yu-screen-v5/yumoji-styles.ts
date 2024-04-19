import { Style } from "@styles";
import { StyleSheet } from "react-native";

const AVATAR_HEIGHT_TO_WIDTH_RATIO = 328 / 160;
export const AVATAR_WIDTH = Style.DEVICE_WIDTH / 2;
export const AVATAR_HEIGHT = AVATAR_WIDTH * AVATAR_HEIGHT_TO_WIDTH_RATIO;

export const styles = StyleSheet.create({
  yumojiWrapper: {
    alignItems: "center",
    marginTop: Style.adjust(15),
  },
});

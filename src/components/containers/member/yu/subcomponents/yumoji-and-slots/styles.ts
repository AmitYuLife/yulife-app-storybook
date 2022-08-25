import { Style } from "@styles";
import { StyleSheet } from "react-native";

const AVATAR_HEIGHT_TO_WIDTH_RATIO = 328 / 160;
export const AVATAR_WIDTH = Style.DEVICE_WIDTH / 2;
export const AVATAR_HEIGHT = AVATAR_WIDTH * AVATAR_HEIGHT_TO_WIDTH_RATIO;
export const yumojiWrapperWidth = Style.DEVICE_WIDTH / 2.1;
const AVATAR_MARGIN_TOP = Style.adjust(28);
const ALLOWANCE = Style.adjust(64);
const TOTAL_HEIGHT = AVATAR_HEIGHT + AVATAR_MARGIN_TOP + ALLOWANCE;

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    minHeight: TOTAL_HEIGHT,
  },
  yumojiWrapper: {
    position: "absolute",
    left: Style.adjust(8),
    width: yumojiWrapperWidth,
    alignItems: "center",
    bottom: 0,
    top: 0,
    justifyContent: "center",
  },
  slotsWrapper: {
    width: Style.DEVICE_WIDTH / 1.9,
    marginLeft: "auto",
    marginRight: Style.adjust(16),
    marginTop: Style.adjust(32),
  },
});

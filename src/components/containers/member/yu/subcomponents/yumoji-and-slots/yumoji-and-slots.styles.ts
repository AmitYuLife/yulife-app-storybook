import { Colours, Style } from "@styles";
import { StyleSheet } from "react-native";
import { ITEM_SLOT_WIDTH } from "../constants";

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
    marginLeft: "auto",
    marginRight: Style.adjust(16),
    marginTop: Style.adjust(32),
  },
  slotsFlexFiller: {
    paddingRight: Style.adjust(5),
    width: "100%",
    marginTop: Style.adjust(16),
    alignItems: "flex-end",
  },
  slotFlexFillerInner: {
    flex: 1,
    borderColor: Colours.neutral.n100,
    borderRadius: Style.adjust(8),
    paddingTop: Style.adjust(28),
    paddingBottom: Style.adjust(32),
    paddingHorizontal: Style.adjust(24),
    backgroundColor: "#FCFEFC",
    width: ITEM_SLOT_WIDTH,
    borderWidth: StyleSheet.hairlineWidth,
  },
  spanningProductSlotImageWrapper: {
    alignItems: "center",
    marginTop: Style.adjust(16),
  },
});

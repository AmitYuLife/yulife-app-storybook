import { Colours, Style } from "@styles";
import { StyleSheet } from "react-native";

export const CARD_WIDTH = Style.adjust(270);

export const smokingTipsStyles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(40),
  },
  card: {
    flexDirection: "row",
    paddingVertical: Style.adjust(16),
    paddingLeft: Style.adjust(12),
    paddingRight: Style.adjust(16),
    gap: Style.adjust(8),
    width: CARD_WIDTH,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: Colours.neutral.n150,
  },
  textWrapper: {
    gap: Style.adjust(4),
    flexShrink: 1,
  },
  separator: {
    width: Style.adjust(16),
  },
  contentContainer: {
    paddingHorizontal: Style.adjust(24),
  },
});

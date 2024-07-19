import { Colours, Style } from "@styles";
import { StyleSheet } from "react-native";

export const SMOKING_FLAT_LIST_ITEM_WIDTH = Style.adjust(130);
export const SMOKING_FLAT_LIST_SEPARATOR_WIDTH = Style.adjust(8);

export const styles = StyleSheet.create({
  flatList: {
    paddingHorizontal: Style.adjust(20),
    paddingVertical: Style.adjust(24),
  },
  card: {
    width: SMOKING_FLAT_LIST_ITEM_WIDTH,
    height: Style.adjust(130),
    padding: Style.adjust(8),
    borderRadius: Style.adjust(16),
    backgroundColor: Colours.secondary.s100S3,
    justifyContent: "space-between",
  },
  cardCompleted: {
    backgroundColor: "#824FFF",
  },
  checkmark: {
    position: "absolute",
    top: Style.adjust(8),
    right: Style.adjust(8),
  },
  id: {
    paddingHorizontal: Style.adjust(4),
    minWidth: Style.adjust(24),
    height: Style.adjust(24),
    backgroundColor: "#824FFF",
    borderRadius: Style.adjust(12),
    position: "absolute",
    top: Style.adjust(8),
    right: Style.adjust(8),
  },
  separator: {
    width: SMOKING_FLAT_LIST_SEPARATOR_WIDTH,
  },
});

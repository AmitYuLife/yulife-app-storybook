import { Colours, Style } from "@styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  flatList: {
    paddingHorizontal: Style.adjust(20),
    paddingVertical: Style.adjust(24),
  },
  milestone: {
    width: Style.adjust(64),
    height: Style.adjust(64),
    padding: Style.adjust(8),
    borderRadius: Style.adjust(32),
    borderWidth: 2,
    borderColor: Colours.neutral.n400,
    backgroundColor: Colours.neutral.n50,
    justifyContent: "center",
  },
  milestoneCompleted: {
    borderColor: Colours.primary.p400,
    backgroundColor: Colours.primary.p40,
  },
  id: {
    borderRadius: Style.adjust(12),
  },
  separator: {
    width: Style.adjust(8),
  },
});

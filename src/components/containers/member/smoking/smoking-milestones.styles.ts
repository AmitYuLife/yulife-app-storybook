import { StyleSheet } from "react-native";
import { Style } from "@styles";

export const styles = StyleSheet.create({
  flatList: {
    paddingHorizontal: Style.adjust(20),
    paddingVertical: Style.adjust(16),
  },
  milestone: {
    width: Style.adjust(64),
    height: Style.adjust(64),
    justifyContent: "center",
    opacity: 0.3,
  },
  milestoneCompleted: {
    opacity: 1,
  },
  separator: {
    width: Style.adjust(8),
  },
  popupDescription: {
    marginTop: Style.adjust(24),
  },
  popupLabel: {
    marginTop: Style.adjust(24),
  },
});

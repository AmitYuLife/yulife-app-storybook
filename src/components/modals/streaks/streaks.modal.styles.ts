import { Style } from "@styles";
import { StyleSheet } from "react-native";

export const streaksModalStyles = StyleSheet.create({
  sectionWrapper: {
    width: Style.DEVICE_WIDTH - Style.adjust(48),
    marginTop: Style.adjust(8),
  },
  rewardMilestoneSection: {
    marginTop: Style.adjust(32),
    alignItems: "center",
  },
  hintWrapper: {
    marginTop: Style.adjust(32),
  },
});

import { StyleSheet } from "react-native";
import { Style } from "@styles";

const TIP_CARD_WIDTH = Style.DEVICE_WIDTH * 0.8;

export const styles = StyleSheet.create({
  flatList: {
    paddingHorizontal: Style.adjust(24),
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
    width: Style.adjust(16),
  },
  popupDescription: {
    marginTop: Style.adjust(24),
  },
  popupLabel: {
    marginTop: Style.adjust(24),
  },
  tipsContainer: {
    alignItems: "center",
    marginBottom: Style.adjust(15),
  },
  tipCardStyles: {
    width: TIP_CARD_WIDTH,
  },
});

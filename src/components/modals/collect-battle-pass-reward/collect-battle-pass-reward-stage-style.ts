import { Style } from "@styles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  rewardIcon: {
    alignItems: "center",
    position: "absolute",
    top: Style.adjust(-40),
    left: 0,
    right: 0,
  },
  descriptionStage1: {
    paddingHorizontal: Style.adjust(45),
    top: Style.adjust(-30),
  },
  descriptionStage2: {
    paddingHorizontal: Style.adjust(55),
  },
  selectReward: {
    marginTop: Style.adjust(140),
  },
  rewardOptions: {
    marginTop: Style.adjust(80),
    marginHorizontal: Style.adjust(32),
  },
  rewardOption: {
    marginBottom: Style.adjust(16),
  },
  rewardTitle: {
    marginTop: Style.adjust(16),
  },
  lottie: {
    alignItems: "center",
  },
});

import { HealthSmokingStateTip } from "@redux/health-smoking/health-smoking.types";
import { CARD_WIDTH, smokingTipsStyles } from "./smoking-tips.styles";
import { Platform } from "react-native";

export const VIEWABILITY_CONFIG = {
  waitForInteraction: false,
  minimumViewTime: 400,
  viewAreaCoveragePercentThreshold: 80,
};

export const DECELERATION_RATE = Platform.select({
  ios: 0.8,
  android: 0.9,
});

export const keyExtractor = (item: HealthSmokingStateTip) => `${item.id}`;

export const SNAP_TO_INTERVAL = CARD_WIDTH + smokingTipsStyles.separator.width;

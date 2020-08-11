import { LEADERBOARD_ITEM_HEIGHT } from ".";
import { Style } from "@styles";
import { TOP_PADDING_HEIGHT } from "../../../helpers/constants";
import { TOP_BAR_HEIGHT } from "@components/organisms/top-bar/top-bar.styles";

function getOpacityThreshold(rank: number) {
  let opacityThreshold = -Style.DEVICE_HEIGHT;
  const DEFINE_THIS_VALUE = 40;

  opacityThreshold += TOP_PADDING_HEIGHT;
  opacityThreshold += LEADERBOARD_ITEM_HEIGHT * rank;
  opacityThreshold += TOP_BAR_HEIGHT;
  opacityThreshold += Style.getSafeAreaStart();
  opacityThreshold += DEFINE_THIS_VALUE;

  return opacityThreshold;
}

export function getAnimationValues({ rank, reverse }: { rank: number; reverse?: boolean }) {
  const opacityThreshold = getOpacityThreshold(rank);
  const inputRange = [-Number.MAX_SAFE_INTEGER, opacityThreshold, opacityThreshold + 1];
  const outputRange = reverse ? [0, 0, 1] : [1, 1, 0];

  return {
    inputRange,
    outputRange,
    opacityThreshold,
  };
}

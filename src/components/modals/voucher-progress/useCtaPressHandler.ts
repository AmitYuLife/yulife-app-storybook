import { useCallback } from "react";
import { onClosePress } from "./closePressHandler";
import { runOnJS, SharedValue, withDelay, withSequence, withTiming } from "react-native-reanimated";
import { VoucherProgressModalProps } from "./types";
import { VoidFunction } from "@utils";

export const useCtaPressHandler = (
  rewardsCount: number,
  activeRewardIndex: number,
  nextReward: VoucherProgressModalProps["rewards"][number],
  changeActiveReward: VoidFunction,
  animatedLottieOpacity: SharedValue<number>,
  animatedWrapperOpacity: SharedValue<number>
) => {
  return useCallback(() => {
    if (rewardsCount - 1 === activeRewardIndex) {
      onClosePress();
    } else {
      animatedLottieOpacity.value = withSequence(
        withTiming(0, { duration: 0 }),
        withTiming(nextReward?.reward?.status === "claimed" ? 0 : 1, { duration: 1000 })
      );
      animatedWrapperOpacity.value = withSequence(
        withTiming(0, { duration: 128 }, (finished) => {
          if (!finished) {
            return;
          }

          runOnJS(changeActiveReward)();
        }),
        withDelay(300, withTiming(1, { duration: 1000 }))
      );
    }
  }, [rewardsCount, activeRewardIndex, nextReward]);
};

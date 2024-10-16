import { useEffect } from "react";
import { withSequence, withTiming, withDelay, SharedValue } from "react-native-reanimated";
import { VoucherProgressModalProps } from "./types";

export const useActiveRewardChangeAnimation = (
  { reward }: VoucherProgressModalProps["rewards"][number],
  activeRewardIndex: number,
  animatedLottieProgress: SharedValue<number>,
  animatedTitleOpacity: SharedValue<number>,
  gameNameOpacity: SharedValue<number>,
  rayOpacity: SharedValue<number>
) => {
  useEffect(() => {
    animatedLottieProgress.value = withSequence(withTiming(0, { duration: 0 }), withTiming(1, { duration: 5000 }));

    animatedTitleOpacity.value = withSequence(
      withTiming(0, { duration: 0 }),
      withDelay(reward.status === "claimed" ? 0 : 3500, withTiming(1, { duration: 1000 }))
    );
    gameNameOpacity.value = withSequence(
      withTiming(0, { duration: 0 }),
      withDelay(3500, withTiming(reward.status === "claimed" ? 0 : 1, { duration: 1000 }))
    );
    rayOpacity.value = withSequence(
      withTiming(0, { duration: 0 }),
      withTiming(reward.status === "claimed" ? 1 : 0, { duration: 300 })
    );
  }, [activeRewardIndex, reward.status]);
};

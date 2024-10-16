import { useEffect } from "react";
import { VoucherProgressModalProps } from "./types";
import { Easing, SharedValue, withDelay, withSequence, withTiming } from "react-native-reanimated";

export const useProgressBarWidthAnimation = (
  { current, max }: VoucherProgressModalProps["rewards"][number],
  activeRewardIndex: number,
  animatedProgressBarOpacity: SharedValue<number>,
  animatedProgressBarWidth: SharedValue<number>
) => {
  useEffect(() => {
    if (!max) {
      return;
    }

    animatedProgressBarOpacity.value = withSequence(
      withTiming(0, { duration: 0 }),
      withDelay(16, withTiming(1, { duration: 300 }))
    );
    animatedProgressBarWidth.value = withSequence(
      withTiming(Math.max(0, current - 1) / max, { duration: 0 }),
      withDelay(
        3000,
        withTiming(Math.min(0.95, current / max), {
          duration: 1000,
          easing: Easing.out(Easing.linear),
        })
      )
    );
  }, [current, max, activeRewardIndex]);
};

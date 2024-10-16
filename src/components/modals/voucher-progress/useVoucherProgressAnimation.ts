import { StyleSheet } from "react-native";
import { useSharedValue, useAnimatedStyle, useAnimatedProps } from "react-native-reanimated";
import { VoucherProgressModalProps } from "./types";
import { useActiveRewardChangeAnimation } from "./useActiveRewardChangeAnimation";
import { useProgressBarWidthAnimation } from "./useProgressBarWidthAnimation";
import { Colours } from "@styles";

export const useVoucherProgressAnimation = (activeReward: VoucherProgressModalProps["rewards"][number], activeRewardIndex: number) => {
  const animatedWrapperOpacity = useSharedValue(1);
  const wrapperOpacityStyle = useAnimatedStyle(() => ({ flex: 1, opacity: animatedWrapperOpacity.value }));
  const animatedProgressBarWidth = useSharedValue(Math.max(0, activeReward.current - 1) / activeReward.max);
  const animatedProgressBarOpacity = useSharedValue(0);
  const progressBarWidthStyle = useAnimatedStyle(() => ({
    ...styles.progress,
    width: `${animatedProgressBarWidth.value * 100}%`,
  }));
  const progressBarOpacityStyle = useAnimatedStyle(() => ({ opacity: animatedProgressBarOpacity.value }));
  const animatedGameNameOpacity = useSharedValue(0);
  const gameNameOpacityStyle = useAnimatedStyle(() => ({ opacity: animatedGameNameOpacity.value }));
  const animatedRayOpacity = useSharedValue(0);
  const rayOpacityStyle = useAnimatedStyle(() => ({ opacity: animatedRayOpacity.value }));
  const animatedLottieOpacity = useSharedValue(1);
  const lottieOpacityStyle = useAnimatedStyle(() => ({ opacity: animatedLottieOpacity.value }));
  const animatedLottieProgress = useSharedValue(0);
  const lottieProgressProps = useAnimatedProps(() => ({ progress: animatedLottieProgress?.value ?? 0 }));
  const animatedTitleOpacity = useSharedValue(0);
  const titleOpacityStyle = useAnimatedStyle(() => ({ opacity: animatedTitleOpacity.value }));

  useProgressBarWidthAnimation(activeReward, activeRewardIndex, animatedProgressBarOpacity, animatedProgressBarWidth);
  useActiveRewardChangeAnimation(
    activeReward,
    activeRewardIndex,
    animatedLottieProgress,
    animatedTitleOpacity,
    animatedGameNameOpacity,
    animatedRayOpacity
  );

  return {
    animatedLottieOpacity,
    animatedWrapperOpacity,
    wrapperOpacityStyle,
    gameNameOpacityStyle,
    rayOpacityStyle,
    lottieOpacityStyle,
    lottieProgressProps,
    progressBarWidthStyle,
    titleOpacityStyle,
    progressBarOpacityStyle,
  };
};

const styles = StyleSheet.create({
  progress: {
    left: 16,
    top: 4,
    right: 16,
    bottom: 0,
    height: 8,
    borderRadius: 8,
    backgroundColor: Colours.primary.p400,
    position: "absolute",
  },
});

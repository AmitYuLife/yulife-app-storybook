import { memo, useEffect } from "react";
import {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  withDelay,
} from "react-native-reanimated";
import { Box } from "@atoms";
import { INITIAL_DELAY, PEAK_DELAY, RAMP_TIMING } from "./animation-constants";

export const BorderOpacityAnimation = memo(() => {
  const opacity = useSharedValue(0);
  const scaleX = useSharedValue(1);
  const scaleY = useSharedValue(1);

  useEffect(() => {
    scaleX.value = withDelay(
      INITIAL_DELAY,
      withRepeat(
        withSequence(
          withTiming(1.01, { duration: RAMP_TIMING }),
          withDelay(PEAK_DELAY, withTiming(1, { duration: RAMP_TIMING }))
        ),
        2,
        true
      )
    );

    scaleY.value = withDelay(
      INITIAL_DELAY,
      withRepeat(
        withSequence(
          withTiming(1.01, { duration: RAMP_TIMING }),
          withDelay(PEAK_DELAY, withTiming(1, { duration: RAMP_TIMING }))
        ),
        2,
        true
      )
    );

    opacity.value = withDelay(
      INITIAL_DELAY,
      withRepeat(
        withSequence(
          withTiming(1, { duration: RAMP_TIMING }),
          withDelay(PEAK_DELAY, withTiming(0, { duration: RAMP_TIMING }))
        ),
        2,
        true
      )
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value ?? 0,
      transform: [{ scaleX: scaleX.value ?? 1 }, { scaleY: scaleY.value ?? 1 }],
    } as const;
  });

  return (
    <Box position="absolute" top={-4} left={-4} right={-4} bottom={-4} pointerEvents="none">
      <Box
        forceAnimated={true}
        width={"100%"}
        position={"absolute"}
        top={0}
        bottom={0}
        left={0}
        right={0}
        borderWidth={16}
        borderColor="#FFF3B2"
        br={12}
        style={animatedStyles}
      />
    </Box>
  );
});

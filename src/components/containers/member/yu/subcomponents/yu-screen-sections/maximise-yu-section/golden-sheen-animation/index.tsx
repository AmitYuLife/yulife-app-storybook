import { memo } from "react";
import { Box } from "@atoms";
import { MAX_YU_OVERACHIEVER_GRADIENT, MAX_YU_SHEEN_X_OFFSET } from "../constants";
import SheenSvg from "./sheen-svg";
import { Style } from "@styles";
import { StyleSheet, View } from "react-native";
import { withTiming, withSequence, withRepeat, Easing, useAnimatedStyle } from "react-native-reanimated";
import LinearGradient from "react-native-linear-gradient";

const GoldenSheenAnimation = memo(() => {
  const animatedShineStyle = useAnimatedStyle(() => {
    const forward = withTiming(Style.DEVICE_WIDTH + MAX_YU_SHEEN_X_OFFSET, {
      duration: 1600,
      easing: Easing.linear,
    });
    const reset = withTiming(0, { duration: 16 });
    const positionWait = withTiming(0, { duration: 3200 });

    const position = withRepeat(withSequence(reset, forward, reset, positionWait), -1, false);

    return { transform: [{ translateX: position }] };
  });

  return (
    <Box
      flex={1}
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      justifyContent="center"
      alignItems="center"
      width={Style.DEVICE_WIDTH}
      pointerEvents="none"
    >
      <View style={[styles.wrapper]}>
        <LinearGradient
          style={styles.linearGradient}
          start={MAX_YU_OVERACHIEVER_GRADIENT.start}
          end={MAX_YU_OVERACHIEVER_GRADIENT.end}
          colors={MAX_YU_OVERACHIEVER_GRADIENT.colors}
        />
        <Box forceAnimated={true} style={[styles.shine, animatedShineStyle]}>
          <SheenSvg />
        </Box>
      </View>
    </Box>
  );
});

export default memo(GoldenSheenAnimation);

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    overflow: "hidden",
  },
  linearGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: Style.adjust(8),
  },
  shine: {
    left: -MAX_YU_SHEEN_X_OFFSET,
  },
});

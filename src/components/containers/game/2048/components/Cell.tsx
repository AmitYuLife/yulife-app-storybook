import { memo } from "react";
import { Image } from "expo-image";
import Animated, {
  BaseAnimationBuilder,
  LinearTransition,
  useAnimatedStyle,
  useDerivedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { StyleSheet } from "@styles";
import { ANIMATION_DURATION, EASING, MARGIN, theme, TILES } from "../constants";
import { GameValue } from "../game";
import { GameSkin } from "../types";

const TIMING = { duration: ANIMATION_DURATION, easing: EASING };

type CellProps = {
  x: number;
  y: number;
  cellWidth: number;
  margin?: number;
  value: GameValue;
  skin: GameSkin;
  entering: BaseAnimationBuilder;
  exiting: BaseAnimationBuilder;
};

const Cell = ({ x, y, cellWidth, margin = MARGIN, value, skin, entering, exiting }: CellProps) => {
  const scale = useDerivedValue(() => withSequence(withTiming(1.15, TIMING), withTiming(1, TIMING)), [value]);

  const animatedTransformStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const positionStyle = {
    top: 2 * margin + x * (cellWidth + 2 * margin),
    start: 2 * margin + y * (cellWidth + 2 * margin),
    width: cellWidth,
    height: cellWidth,
  };

  return (
    <Animated.View
      entering={entering}
      exiting={exiting}
      layout={LinearTransition.duration(TIMING.duration).easing(TIMING.easing)}
      style={[styles.container, positionStyle]}
    >
      <Animated.View style={animatedTransformStyle}>
        <Image
          cachePolicy="memory"
          source={TILES[skin][value]}
          contentFit="contain"
          style={{
            width: cellWidth,
            height: cellWidth,
            backgroundColor: theme.backgroundPrimary,
          }}
        />
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default memo(Cell);

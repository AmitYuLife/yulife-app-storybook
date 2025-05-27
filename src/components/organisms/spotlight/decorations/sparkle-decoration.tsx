import { memo, useEffect } from "react";
import {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { Box } from "@atoms";
import { toArray } from "@utils/array";
import { Colours } from "@styles";
import { isUndefined, pick, random } from "lodash";
import { QuadStarIcon } from "@atoms/icon/quad-star-icon";

type SparkleProps = {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;

  size?: number;
  color?: string;

  /**
   * Time in milliseconds for how long the animation should take
   */
  duration?: number;

  /**
   * Time in milliseconds for how long the fade out animation should occur.
   * Fade out finishes at the end of the full animation duration.
   */
  fadeOutDuration?: number;

  /**
   * Single number - that number is the delay
   * Array of 2 numbers - A random number is picked between the numbers
   * Default - No delay
   */
  initialDelay?: number | [number, number]; // Duration between from-to ms

  /**
   * Single number - that number is the delay
   * Array of 2 numbers - A random number is picked between the numbers
   * Default - No delay
   */
  delay?: number | [number, number]; // Duration between from-to ms
};

const Sparkle = (props: SparkleProps) => {
  const {
    size = 10,
    color = Colours.neutral.white,
    duration = 1000,
    fadeOutDuration = 400,
    initialDelay = 0,
    delay = 0,
  } = props;

  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);

  const animateSparkle = (firstRun = false) => {
    const animationDelay = firstRun && !isUndefined(initialDelay) ? initialDelay : delay;
    const startDelay = getDelay(...toArray(animationDelay));

    scale.value = withDelay(
      startDelay,
      withSequence(
        withTiming(1.5, { duration, easing: Easing.out(Easing.ease) }),
        withTiming(0, { duration: 0 }, () => {
          runOnJS(animateSparkle)(false);
        })
      )
    );

    opacity.value = withDelay(
      startDelay,
      withSequence(
        withTiming(1, { duration: duration - fadeOutDuration }),
        withTiming(0, { duration: fadeOutDuration })
      )
    );
  };

  useEffect(() => {
    animateSparkle(true);
  }, [initialDelay, delay, duration]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  return (
    <Box
      forceAnimated={true}
      position="absolute"
      style={animatedStyle}
      {...pick(props, ["top", "left", "right", "bottom"])}
    >
      <QuadStarIcon size={size} color={color} />
    </Box>
  );
};

export type SparkleDecorationProps = {
  stars: SparkleProps[];
};

type FullSparkleDecorationProps = SparkleDecorationProps & {
  contentWidth: number;
  contentHeight: number;
};

const SparkleDecoration = ({ contentWidth, contentHeight, stars = [] }: FullSparkleDecorationProps) => {
  const sparkles = stars.map((s, i) => <Sparkle key={i} {...s} />);

  return (
    <Box w={contentWidth} h={contentHeight}>
      {sparkles}
    </Box>
  );
};

const getDelay = (delayFrom?: number, delayTo?: number): number => {
  if (isUndefined(delayFrom)) {
    return 0;
  }

  if (isUndefined(delayTo)) {
    return delayFrom;
  }

  return random(delayFrom, delayTo);
};

export default memo(SparkleDecoration);

import { cloneElement, ReactElement, useCallback, useEffect, useMemo, useState } from "react";
import { Easing, runOnJS, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";
import { random, sample } from "lodash";
import { toArray } from "@utils/array";
import { Box } from "@atoms";

const getRandomAngle = () => Math.random() * 2 * Math.PI;

/**
 * These properties will be passed down to the particleInstance
 */
export type ParticleInstanceProps = {
  color: string;
  size: number;
};

export type ParticleProps = {
  particleInstance: ReactElement;

  /**
   * Single number - size which is also passed down to the particle instance
   * Array of 2 numbers - A random number is picked between the numbers as the particle size
   */
  size: number | number[];

  /**
   * Max distance from the center the particle can shoot
   */
  radius: number;

  /**
   * Min distance from the center the particle will shoot
   */
  minDistance?: number;

  /**
   * A random color is picked from the array to be passed down to the particle instance
   */
  colors: string[];

  /**
   * Initial delay in milliseconds for the first animation to start
   */
  delay: number;

  /**
   * Single number - milliseconds in which the shooting animation finishes
   * Array of 2 numbers - A random number is picked between the numbers as the shooting speed
   */
  shootingSpeed: number | [number, number];

  /**
   * Degrees to rotate the particle over the animation
   */
  maxRotation?: number;

  /**
   * Fade out start [0-1]. 0 - from the start, 0.5 in the middle of the animation
   */
  fadeOutStartFraction?: number;
};

export const Particle = ({
  particleInstance,
  size: sizeProp,
  radius,
  colors,
  delay,
  shootingSpeed,
  minDistance: minDistanceProp,
  maxRotation = 0,
  fadeOutStartFraction = 0,
}: ParticleProps) => {
  const progress = useSharedValue(0);
  const angle = useSharedValue(0);
  const distance = useSharedValue(0);
  const rotation = useSharedValue(0);

  const [color, setColor] = useState(toArray(colors)[0]);
  const [size, setSize] = useState(toArray(sizeProp)[0]);

  const getRandomDistance = useCallback(() => {
    const minDistance = Math.max(Math.min(minDistanceProp || 0, radius || 0), 1);
    return Math.random() * ((radius || 0) / 2 - minDistance) + minDistance;
  }, [minDistanceProp, radius]);

  const reset = useCallback(() => {
    angle.value = getRandomAngle();
    distance.value = getRandomDistance();
    progress.value = 0;

    setColor(sample(colors));
    setSize(sample(toArray(sizeProp)));

    const duration = Array.isArray(shootingSpeed)
      ? random(shootingSpeed[0], shootingSpeed[1] ?? shootingSpeed[0])
      : shootingSpeed;

    progress.value = withTiming(1, { duration, easing: Easing.out(Easing.quad) }, (finished) => {
      if (finished) {
        runOnJS(reset)(); // loop animation
      }
    });

    rotation.value = 0; // reset rotation
    if (maxRotation > 0) {
      rotation.value = withRepeat(
        withTiming(maxRotation, { duration, easing: Easing.linear }),
        -1 // infinite repeat
      );
    }
  }, [colors, getRandomDistance, maxRotation, shootingSpeed, sizeProp]);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Wrong reanimated type
  const animatedStyle = useAnimatedStyle(() => {
    const translateX = Math.cos(angle.value) * distance.value * progress.value;
    const translateY = Math.sin(angle.value) * distance.value * progress.value;

    const opacity = getOpacityWorklet(progress.value, fadeOutStartFraction);
    const rotate = `${rotation.value}deg`;

    return {
      transform: [{ translateX }, { translateY }, { rotate }],
      opacity,
    };
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      reset();
    }, delay);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const particleInstanceProps: ParticleInstanceProps = useMemo(() => {
    return {
      color,
      size,
    };
  }, [color, size]);

  return (
    <Box
      forceAnimated={true}
      position="absolute"
      top={radius / 2 - size / 2}
      left={radius / 2 - size / 2}
      width={size}
      height={size}
      style={animatedStyle}
    >
      {cloneElement(particleInstance, particleInstanceProps)}
    </Box>
  );
};

const getOpacityWorklet = (progress: number, fadeOutStartFraction: number): number => {
  "worklet";

  const clampedFraction = Math.max(0, Math.min(fadeOutStartFraction, 1));

  if (clampedFraction === 1) {
    return 1;
  }

  if (clampedFraction === 0) {
    return 1 - progress;
  }

  if (progress < clampedFraction) {
    return 1;
  }

  return 1 - (progress - clampedFraction) / (1 - clampedFraction);
};

import { Box } from "@atoms";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { Image, useWindowDimensions } from "react-native";
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
  cancelAnimation,
} from "react-native-reanimated";
import FoodParticle from "./subcomponents/food-particle";
import HeartParticle, { HEART_ANIMATION_DURATION } from "./subcomponents/heart-particle";
import Pressable from "../pressable/pressable";

interface ISwimmingFishProps {
  size?: number;
  delay?: number;
  duration?: number;
  invert?: boolean;
  startY?: number;
  endY?: number;
  interactive?: boolean;
}

interface IFoodParticleData {
  id: number;
  x: number;
  y: number;
}

interface IHeartParticleData {
  id: number;
}

const FISH_ASSET = require("./assets/clownfish.webp");
const EAT_DURATION = 800;
const PAUSE_DURATION = 500;

const SwimmingFish = ({
  size = 60,
  invert,
  delay = 0,
  duration = 10000,
  startY = 0,
  endY = 0,
  interactive = false,
}: ISwimmingFishProps) => {
  const { width } = useWindowDimensions();
  const [foodParticles, setFoodParticles] = useState<IFoodParticleData[]>([]);
  const [heartParticles, setHeartParticles] = useState<IHeartParticleData[]>([]);

  const fishX = useSharedValue(-size);
  const fishY = useSharedValue(startY);
  const fishScaleX = useSharedValue(1);

  const foodQueueRef = useRef<IFoodParticleData[]>([]);
  const isEatingRef = useRef(false);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const midPoint = width / 2;

  const emitHearts = useCallback(() => {
    const newHeart: IHeartParticleData = { id: Date.now() };
    setHeartParticles((prev) => [...prev, newHeart]);
    setTimeout(() => {
      setHeartParticles((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, HEART_ANIMATION_DURATION + 500);
  }, []);

  const resumePathFromCurrentPosition = useCallback(() => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }

    const currentX = fishX.value;
    const goingRight = currentX >= midPoint;

    const targetX = goingRight ? width : -size;
    const distanceToEdge = Math.abs(targetX - currentX);
    const totalDistance = width + size;
    const timeToEdge = (distanceToEdge / totalDistance) * duration;
    const targetY = goingRight ? endY : startY;

    fishScaleX.value = withTiming(goingRight ? 1 : -1, { duration: 100 });
    fishX.value = withTiming(targetX, { duration: timeToEdge, easing: Easing.linear });
    fishY.value = withTiming(targetY, { duration: timeToEdge / 2, easing: Easing.linear });

    resumeTimeoutRef.current = setTimeout(() => {
      if (isEatingRef.current) {
        return;
      }

      const xA = goingRight ? width : -size;
      const xB = goingRight ? -size : width;
      const yA = goingRight ? endY : startY;
      const yB = goingRight ? startY : endY;
      const scaleA = goingRight ? -1 : 1;
      const scaleB = goingRight ? 1 : -1;
      const yHoldFirst = goingRight ? PAUSE_DURATION + duration / 2 : PAUSE_DURATION;
      const yHoldMid = goingRight ? PAUSE_DURATION : duration / 2 + PAUSE_DURATION + duration / 2;

      fishX.value = withRepeat(
        withSequence(
          withTiming(xA, { duration: PAUSE_DURATION }),
          withTiming(xB, { duration, easing: Easing.linear }),
          withTiming(xB, { duration: PAUSE_DURATION }),
          withTiming(xA, { duration, easing: Easing.linear })
        ),
        -1,
        false
      );

      fishY.value = withRepeat(
        withSequence(
          withTiming(yA, { duration: yHoldFirst }),
          withTiming(yB, { duration: duration / 2, easing: Easing.linear }),
          withTiming(yB, { duration: yHoldMid }),
          withTiming(yA, { duration: duration / 2, easing: Easing.linear }),
          ...(goingRight ? [withTiming(yA, { duration: duration / 2 })] : [])
        ),
        -1,
        false
      );

      fishScaleX.value = withRepeat(
        withSequence(
          withTiming(scaleA, { duration: 0 }),
          withTiming(scaleA, { duration: duration + PAUSE_DURATION }),
          withTiming(scaleB, { duration: 0 }),
          withTiming(scaleB, { duration: duration + PAUSE_DURATION })
        ),
        -1,
        false
      );
    }, timeToEdge + 50);
  }, [duration, endY, fishScaleX, fishX, fishY, midPoint, size, startY, width]);

  const processNextFood = useCallback(() => {
    if (foodQueueRef.current.length === 0) {
      isEatingRef.current = false;
      resumePathFromCurrentPosition();
      return;
    }

    const nextFood = foodQueueRef.current.shift()!;
    const { x: foodX, y: foodY, id: foodId } = nextFood;

    cancelAnimation(fishX);
    cancelAnimation(fishY);
    cancelAnimation(fishScaleX);

    const shouldFaceRight = foodX > fishX.value;
    const targetX = foodX - size / 2;
    const targetY = foodY - size / 2 + 15;

    fishScaleX.value = withTiming(shouldFaceRight ? 1 : -1, { duration: 100 });
    fishX.value = withTiming(targetX, { duration: EAT_DURATION, easing: Easing.out(Easing.cubic) });
    fishY.value = withTiming(targetY, { duration: EAT_DURATION, easing: Easing.out(Easing.cubic) });

    setTimeout(() => {
      setFoodParticles((prev) => prev.filter((f) => f.id !== foodId));
      emitHearts();
      processNextFood();
    }, EAT_DURATION + 200);
  }, [emitHearts, fishScaleX, fishX, fishY, resumePathFromCurrentPosition, size]);

  const handlePress = useCallback(
    (event: { nativeEvent: { locationX: number; locationY: number } }) => {
      const { locationX, locationY } = event.nativeEvent;
      const newFood: IFoodParticleData = { id: Date.now(), x: locationX, y: locationY };

      setFoodParticles((prev) => [...prev, newFood]);
      foodQueueRef.current.push(newFood);

      if (!isEatingRef.current) {
        isEatingRef.current = true;
        if (resumeTimeoutRef.current) {
          clearTimeout(resumeTimeoutRef.current);
          resumeTimeoutRef.current = null;
        }

        cancelAnimation(fishX);
        cancelAnimation(fishY);
        cancelAnimation(fishScaleX);
        processNextFood();
      }
    },
    [fishScaleX, fishX, fishY, processNextFood]
  );

  useEffect(() => {
    const timeout = setTimeout(resumePathFromCurrentPosition, delay);
    return () => {
      clearTimeout(timeout);
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  const containerStyle = useAnimatedStyle(() => ({
    width: size,
    height: size,
    transform: [
      {
        translateY: withRepeat(
          withSequence(
            withTiming(0, { duration: duration * 0.4, easing: Easing.inOut(Easing.bezierFn(0.12, -0.05, 0.74, 0.42)) }),
            withTiming(-30, {
              duration: duration * 0.4,
              easing: Easing.inOut(Easing.bezierFn(0.12, -0.05, 0.74, 0.42)),
            })
          ),
          -1,
          true
        ),
      },
    ],
  }));

  const rotateContainerStyle = useAnimatedStyle(() => ({
    width: size,
    height: size,
    transform: [
      {
        rotateZ: withRepeat(
          withSequence(
            withTiming("6deg", { duration: duration * 0.15 }),
            withTiming("-6deg", { duration: duration * 0.15 })
          ),
          -1,
          true
        ),
      },
    ],
  }));

  const fishStyles = useAnimatedStyle(() => ({
    width: size,
    height: size,
    // @ts-expect-error - bad reanimated types
    transform: [{ translateX: fishX.value }, { translateY: fishY.value }, { scaleX: fishScaleX.value }],
  }));

  return (
    <Pressable onPress={interactive ? handlePress : undefined} flex={1} w="100%" h="100%">
      <Box flex={1} width="100%" height="100%">
        {foodParticles.map((food) => (
          <FoodParticle key={food.id} x={food.x} y={food.y} />
        ))}
        <Box transform={[{ scaleX: invert ? -1 : 1 }]}>
          <Box style={containerStyle} forceAnimated={true}>
            <Box w="100%" h="100%" pointerEvents="none" style={fishStyles} forceAnimated={true}>
              {heartParticles.map((heart) => (
                <HeartParticle key={heart.id} />
              ))}
              <Box style={rotateContainerStyle} forceAnimated={true}>
                <Image style={{ width: size, height: size }} source={FISH_ASSET} resizeMode="contain" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Pressable>
  );
};

export default memo(SwimmingFish);

import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Stack, TextTemplate } from "@atoms";
import { GenericHeadingPad } from "@organisms";
import { Style } from "@styles";
import Animated, {
  useFrameCallback,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  withSequence,
} from "react-native-reanimated";
import { random } from "lodash";
import colours from "@styles/colours";

interface IBattlePassYuCoinCounterProps {
  step: number;
}

const TEXT_TOUCH_VELOCITY = 280;
const SCALE_TRANSITION_TIME = 300;
const LAST_TOUCH_TIMEOUT = 800;

const BattlePassYuCoinCounter = ({ step }: IBattlePassYuCoinCounterProps) => {
  const lastStep = useRef(0);
  const [amount, setAmount] = useState<number>(0);
  const lastTouchTimeoutRef = useRef(null);
  const exitingTimeoutRef = useRef(null);

  const floatX = useSharedValue(0);
  const floatY = useSharedValue(0);
  const velocityY = useSharedValue(0);
  const positionY = useSharedValue(0);
  const pulseScale = useSharedValue(0);
  const isExiting = useSharedValue(false);

  const clearTimeouts = useCallback(() => {
    if (lastTouchTimeoutRef.current) {
      clearTimeout(lastTouchTimeoutRef.current);
    }

    if (exitingTimeoutRef.current) {
      clearTimeout(exitingTimeoutRef.current);
    }
  }, []);

  const onPress = useCallback(
    (spentAmount: number) => {
      pulseScale.value = withSequence(
        withTiming(1.2, { duration: SCALE_TRANSITION_TIME }),
        withTiming(1, { duration: SCALE_TRANSITION_TIME })
      );
      isExiting.value = false;

      setAmount((prev) => prev + Number(spentAmount));
      clearTimeouts();

      if (amount <= 0) {
        velocityY.value = TEXT_TOUCH_VELOCITY;
      }

      lastTouchTimeoutRef.current = setTimeout(() => {
        lastTouchTimeoutRef.current = null;
        isExiting.value = true;

        exitingTimeoutRef.current = setTimeout(() => {
          lastTouchTimeoutRef.current = null;

          if (isExiting.value) {
            setAmount(0);
            positionY.value = 0;
            isExiting.value = false;
            return;
          }
        }, SCALE_TRANSITION_TIME);
      }, LAST_TOUCH_TIMEOUT);
    },
    [amount, clearTimeouts, isExiting, positionY, pulseScale, velocityY]
  );

  useEffect(() => {
    if (lastStep.current !== step) {
      onPress(step - lastStep.current);
      lastStep.current = step;
    }
  }, [onPress, step]);

  useEffect(() => {
    const interval = setInterval(() => {
      floatX.value = random(-5, 5);
      floatY.value = random(-8, 0);
    }, 400);

    return () => {
      clearInterval(interval);
    };
  }, [floatX, floatY]);

  useFrameCallback(() => {
    velocityY.value *= 0.1;
    positionY.value += velocityY.value;
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Wrong reanimated type
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withSpring(positionY.value) }, { scale: pulseScale.value }],
    };
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Wrong reanimated type
  const floatStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: withTiming(amount > 0 && !isExiting.value ? 1 : 0, { duration: SCALE_TRANSITION_TIME }) },
        { translateX: withTiming(floatX.value, { duration: 1200 }) },
        { translateY: withTiming(floatY.value, { duration: 1200 }) },
      ],
    };
  });

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <View style={{ height: Style.adjust(40), width: Style.adjust(80) }}>
        {amount > 0 ? (
          <Animated.View style={[animatedStyle, styles.extraText]} pointerEvents="box-none">
            <Animated.View style={[floatStyle]}>
              <Stack direction="row">
                <TextTemplate color={colours.neutral.n200} type="l1b" textAlign="center">
                  -{amount}
                </TextTemplate>
              </Stack>
            </Animated.View>
          </Animated.View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  extraText: { position: "absolute", left: 0, top: Style.adjust(-35) },
});

export default memo(BattlePassYuCoinCounter);

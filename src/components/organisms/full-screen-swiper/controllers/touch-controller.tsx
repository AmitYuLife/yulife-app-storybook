import React, { useCallback, useRef } from "react";
import { GestureResponderEvent, ViewStyle } from "react-native";
import { Style, StyleSheet } from "@styles";
import { TouchableOpacityWithDelay } from "@components/molecules";

// Moving less than this distance when moving between parts of screen (left & right)
// will still use the press out as a navigate command
const MOVE_SENSITIVITY = 7;

// Fraction of the screen distance which is still allowed between pressIn and pressOut
// to take a navigate action
const NAVIGATE_ACTION_MAX_PRESS_DISTANCE = 0.1;

interface IProps {
  handleChangeActiveIndex: (num: number) => void;
  onlyAllowForward?: boolean;

  /**
   * Fraction of full screen width to treat as LEFT
   */
  leftFraction?: number;

  pausingThreshold: number;
  pause?: () => void;
  resume?: () => void;

  enableSwiping?: boolean;
  swipeMinimumDistance?: number;
  invertSwipingDirection?: boolean;
}

export const TouchController = ({
  handleChangeActiveIndex,
  onlyAllowForward,
  leftFraction = 0.3,
  pausingThreshold,
  pause,
  resume,
  enableSwiping,
  swipeMinimumDistance = 30,
  invertSwipingDirection,
}: IProps) => {
  const pressInOptions = useRef<{ timestamp: number; posX: number; vecX: number } | null>(null);

  const onPressIn = useCallback(
    (e: GestureResponderEvent) => {
      const posX = e.nativeEvent.locationX;
      const pressInFraction = posX / Style.DEVICE_WIDTH;
      const vecX = pressInFraction >= leftFraction ? 1 : -1;

      pressInOptions.current = {
        timestamp: Date.now(),
        posX,
        vecX: onlyAllowForward ? 1 : vecX,
      };
      pause();
    },
    [leftFraction, onlyAllowForward, pause]
  );

  const onPressOut = useCallback(
    (e: GestureResponderEvent) => {
      resume();

      if (!pressInOptions.current) {
        return;
      }

      const pressOutPosX = e.nativeEvent.locationX;
      const pressOutFraction = pressOutPosX / Style.DEVICE_WIDTH;
      const pressOutVecXCalc = pressOutFraction >= leftFraction ? 1 : -1;
      const pressOutVecX = onlyAllowForward ? 1 : pressOutVecXCalc;

      const timeSincePressIn = Date.now() - pressInOptions.current.timestamp;
      const pressInPosX = pressInOptions.current.posX;
      const pressInVecX = pressInOptions.current.vecX;

      if (timeSincePressIn >= pausingThreshold) {
        // Don't navigate, user was pausing
        return;
      }

      const touchDistanceX = pressOutPosX - pressInPosX;
      const absTouchDistanceX = Math.abs(touchDistanceX);
      const isSwiping = absTouchDistanceX >= swipeMinimumDistance;

      if (enableSwiping && isSwiping) {
        const swipeVecX = touchDistanceX > 0 ? -1 : 1;
        handleChangeActiveIndex(invertSwipingDirection ? -swipeVecX : swipeVecX);
        return;
      }

      if (pressInVecX !== pressOutVecX && MOVE_SENSITIVITY) {
        // User moved away too far to another vector zone
        return;
      }

      const pressInFraction = pressInPosX / Style.DEVICE_WIDTH;

      const pressInOutTooFarAway = Math.abs(pressInFraction - pressOutFraction) > NAVIGATE_ACTION_MAX_PRESS_DISTANCE;
      if (pressInOutTooFarAway) {
        // User pressed in, moved and released. We'll be treating that as an invalid navigate action
        return;
      }

      handleChangeActiveIndex(pressOutVecX);
    },
    [
      resume,
      leftFraction,
      onlyAllowForward,
      pausingThreshold,
      handleChangeActiveIndex,
      enableSwiping,
      swipeMinimumDistance,
      invertSwipingDirection,
    ]
  );

  return (
    <TouchableOpacityWithDelay
      style={styles.controller}
      onPress={() => {
        /* Do nothing */
      }}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
  controller: {
    position: "absolute",
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
    top: 0,
    left: 0,
  } as ViewStyle,
});

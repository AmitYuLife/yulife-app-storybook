import React, { useEffect, useState, useRef, useMemo } from "react";
import { View, ViewStyle, Animated } from "react-native";
import { Colours, Style, StyleSheet, templateTextStyles } from "@styles";
import Svg, { Rect, Text, Defs, Mask, TextProps } from "react-native-svg";
import { WEEKLY_PROGRESS_BAR } from "@ids";
import { GoldenAnimation } from "./golden-animation";
import { DETOX_ENABLED } from "@services/socket";
import { addCommasToNumber } from "@utils";

interface IProgressBarProps {
  currentPosition: number;
  maxLength: number;
  hideType?: "unrendered" | "invisible";
  marginHorizontal?: number;
  childrenWidth?: number;
  children?: React.ReactNode;
  style?: ViewStyle;
  isDisabled?: boolean;
  isCompleted?: boolean;
  height?: number;
  onAnimationEnd?: (result: { finished: boolean }) => void;
  wrapperWidth?: number;
  animation?: "idle" | "ease";
  unfilledBackgroundColor?: string;
  unfilledStrokeWidth?: number;
  unfilledStrokeColor?: string;
  showCurrentAndTargetProgress?: boolean;
}

export const PROGRESS_BAR_DEFAULT_HEIGHT = Style.adjust(14);

export default function ProgressBar(props: IProgressBarProps) {
  const {
    currentPosition: _currentPosition,
    maxLength: _maxLength,
    hideType,
    childrenWidth = 0,
    marginHorizontal = Style.adjust(48),
    style,
    isDisabled,
    isCompleted,
    height = PROGRESS_BAR_DEFAULT_HEIGHT,
    onAnimationEnd,
    showCurrentAndTargetProgress = false,
  } = props;
  const { currentPosition, maxLength } = useMemo(() => {
    if (_maxLength < 100) {
      return { currentPosition: _currentPosition * 10, maxLength: _maxLength * 10 || 1 };
    }

    return { currentPosition: _currentPosition, maxLength: _maxLength };
  }, [_currentPosition, _maxLength]);

  const [position, setPosition] = useState(currentPosition);
  const animatedValue = useRef(new Animated.Value(currentPosition)).current;

  useEffect(() => {
    animatedValue.addListener((e) => setPosition(Math.floor(e.value)));

    return () => {
      animatedValue.removeAllListeners();
      animatedValue.stopAnimation();
    };
  }, []);

  useEffect(() => {
    if (position !== currentPosition) {
      animatedValue.stopAnimation();
      Animated.timing(animatedValue, {
        duration: 350,
        toValue: currentPosition,
        useNativeDriver: true,
      }).start(onAnimationEnd);
    }
  }, [currentPosition]);

  const data = useMemo(() => {
    const wrapperWidth = props.wrapperWidth ?? Style.DEVICE_WIDTH - marginHorizontal;
    const svgWidth = wrapperWidth - childrenWidth;
    const safeCurrentPosition = position > maxLength ? maxLength : position;
    const currentProgressPercent = safeCurrentPosition / maxLength;
    const currentProgressUI = currentProgressPercent > 0 ? Math.max(svgWidth * currentProgressPercent, 14) : 0;
    const shineWidth = currentProgressUI - 10;
    const safeShineWidth = shineWidth < 10 ? 0 : shineWidth;
    const borderRadius = Math.round(height / 2);

    return {
      wrapperWidth,
      svgWidth,
      currentProgressUI,
      safeShineWidth,
      borderRadius,
      marginTop: style?.marginTop ?? Style.adjust(16),
    };
  }, [position, maxLength, childrenWidth, marginHorizontal, height]);

  const svgProps = useMemo(
    () => ({
      fill: isCompleted ? Colours.status.su400 : isDisabled ? Colours.neutral.n100 : Colours.metallic.m100,
    }),
    [isCompleted, isDisabled]
  );
  const TEXT_COMMON_PROPS: TextProps = useMemo(
    () => ({
      x: data.svgWidth / 2,
      y: height / 2 + 5,
      textAnchor: "middle",
      fontSize: templateTextStyles.b2b.fontSize as number,
      fontWeight: "bold",
    }),
    [data.svgWidth, height]
  );

  const PROGRESSION_TEXT = useMemo(
    () => `${addCommasToNumber(currentPosition)} / ${addCommasToNumber(maxLength)}`,
    [currentPosition, maxLength]
  );

  // Generate unique mask IDs to prevent Android conflicts
  const uniqueId = useMemo(() => Math.random().toString(36).substring(2, 11), []);
  const filledMaskId = `filledMask-${uniqueId}`;
  const unfilledMaskId = `unfilledMask-${uniqueId}`;
  const MASK_COMMON_PROPS = useMemo(
    () => ({
      width: data.svgWidth,
      height: height,
      fill: "black",
    }),
    [data.svgWidth, height]
  );

  if (hideType === "unrendered") {
    return null;
  }

  if (hideType === "invisible") {
    return <View style={{ height }} />;
  }

  const fillColour = isCompleted ? Colours.status.su400 : Colours.primary.p600;

  return (
    <View
      style={[styles.wrapper, { width: data.wrapperWidth, height, marginTop: data.marginTop }, style]}
      testID={WEEKLY_PROGRESS_BAR(currentPosition, maxLength, fillColour)}
    >
      <Svg width={data.svgWidth} height={height} viewBox={`0 0 ${data.svgWidth} ${height}`} style={styles.container}>
        {!showCurrentAndTargetProgress ? null : (
          <Defs>
            <Mask id={filledMaskId} x="0" y="0" width={data.svgWidth} height={height} maskUnits="userSpaceOnUse">
              <Rect {...MASK_COMMON_PROPS} />
              <Rect x="0" y="0" width={data.currentProgressUI} height={height - 1} fill="white" />
            </Mask>
            <Mask id={unfilledMaskId} x="0" y="0" width={data.svgWidth} height={height} maskUnits="userSpaceOnUse">
              <Rect {...MASK_COMMON_PROPS} />
              <Rect
                x={data.currentProgressUI}
                y="0"
                width={Math.max(0, data.svgWidth - data.currentProgressUI)}
                height={height - 1}
                fill="white"
              />
            </Mask>
          </Defs>
        )}

        <Rect
          width={data.svgWidth - 1}
          height={height - 1}
          rx={data.borderRadius}
          x={0.5}
          y={0.5}
          fill={props.unfilledBackgroundColor ?? svgProps.fill}
          stroke={props.unfilledStrokeColor ?? "transparent"}
          strokeWidth={props.unfilledStrokeWidth ?? 0}
        />

        <Rect width={data.currentProgressUI} rx={data.borderRadius} height={height} fill={fillColour} />

        {!showCurrentAndTargetProgress ? null : (
          <>
            <Text fill="#ffffff" mask={`url(#${filledMaskId})`} {...TEXT_COMMON_PROPS}>
              {PROGRESSION_TEXT}
            </Text>
            <Text fill="#A0A09B" mask={`url(#${unfilledMaskId})`} {...TEXT_COMMON_PROPS}>
              {PROGRESSION_TEXT}
            </Text>
          </>
        )}
      </Svg>

      {!props.animation || DETOX_ENABLED ? null : <GoldenAnimation type={props.animation} />}
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
  } as ViewStyle,
  container: {
    backgroundColor: "transparent",
  },
});

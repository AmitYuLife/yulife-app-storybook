import React, { useEffect, useState, useRef, useMemo } from "react";
import { View, ViewStyle, Animated } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import Svg, { Rect } from "react-native-svg";
import { WEEKLY_PROGRESS_BAR } from "@ids";
import { GoldenAnimation } from "./golden-animation";
import { DETOX_ENABLED } from "@services/socket";

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
  } = props;
  const { currentPosition, maxLength } = useMemo(() => {
    if (_maxLength < 100) {
      return { currentPosition: _currentPosition * 10, maxLength: _maxLength * 10 ?? 1 };
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
      <Svg width={data.svgWidth} height={height} viewBox={`0 0 ${data.svgWidth} ${height}`}>
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
        <Rect width={data.currentProgressUI} height={height} rx={data.borderRadius} fill={fillColour} />
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
});

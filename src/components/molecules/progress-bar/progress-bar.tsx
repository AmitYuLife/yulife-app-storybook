import React, { useEffect, useState, useRef, useMemo } from "react";
import { StyleSheet, View, ViewStyle, Animated } from "react-native";
import { Colours, Style } from "@styles";
import Svg, { Rect } from "react-native-svg";
import { WEEKLY_PROGRESS_BAR } from "@ids";

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
}

export const PROGRESS_BAR_DEFAULT_HEIGHT = 14;

export default function ProgressBar(props: IProgressBarProps) {
  const {
    currentPosition,
    maxLength,
    hideType,
    childrenWidth = 0,
    marginHorizontal = Style.adjust(48),
    style,
    isDisabled,
    isCompleted,
    height = PROGRESS_BAR_DEFAULT_HEIGHT,
  } = props;

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
      }).start();
    }
  }, [currentPosition]);

  const data = useMemo(() => {
    const wrapperWidth = Style.DEVICE_WIDTH - marginHorizontal;
    const svgWidth = wrapperWidth - childrenWidth;
    const safeCurrentPosition = position > maxLength ? maxLength : position;
    const currentProgressPercent = safeCurrentPosition / maxLength;
    const currentProgressUI = currentProgressPercent > 0 ? Math.max(svgWidth * currentProgressPercent, 14) : 0;
    const shineWidth = currentProgressUI - 10;
    const safeShineWidth = shineWidth < 10 ? 0 : shineWidth;

    return {
      wrapperWidth,
      svgWidth,
      currentProgressUI,
      safeShineWidth,
    };
  }, [position, maxLength, childrenWidth, marginHorizontal]);

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
      style={[styles.wrapper, { width: data.wrapperWidth, height }, style]}
      testID={WEEKLY_PROGRESS_BAR(currentPosition, maxLength, fillColour)}
    >
      <Svg width={data.svgWidth} height={height} viewBox={`0 0 ${data.svgWidth} ${height}`}>
        <Rect width={data.svgWidth - 1} height={height - 1} rx={10} x={0.5} y={0.5} fill={svgProps.fill} />
        <Rect width={data.currentProgressUI} height={height} rx={10} fill={fillColour} />
      </Svg>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    marginTop: Style.adjust(16),
  } as ViewStyle,
});

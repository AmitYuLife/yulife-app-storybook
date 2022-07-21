import React, { useEffect, useState, useRef, useMemo } from "react";
import { StyleSheet, View, ViewStyle, Animated } from "react-native";
import { Colours, Style } from "@styles";
import Svg, { Rect } from "react-native-svg";

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
}

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
      fill: isDisabled ? Colours.neutral.n100 : Colours.metallic.m100,
      stroke: Colours.metallic.m200,
    }),
    [isDisabled]
  );

  if (hideType === "unrendered") {
    return null;
  }

  if (hideType === "invisible") {
    return <View style={styles.emptyWrapper} />;
  }

  const fillColour = isCompleted ? Colours.status.su400 : Colours.primary.p400;

  return (
    <View style={[styles.wrapper, { width: data.wrapperWidth }, style]}>
      <Svg width={data.svgWidth} height={14} viewBox={`0 0 ${data.svgWidth} 14`}>
        <Rect
          width={data.svgWidth - 1}
          height={13}
          rx={7}
          x={0.5}
          y={0.5}
          fill={svgProps.fill}
          stroke={svgProps.stroke}
        />
        <Rect width={data.currentProgressUI} height={14} rx={7} fill={fillColour} />
      </Svg>
      {props.children}
    </View>
  );
}

const PROGRESS_BAR_HEIGHT = Style.adjust(18);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    height: PROGRESS_BAR_HEIGHT,
    alignSelf: "center",
    alignItems: "center",
    marginTop: Style.adjust(16),
  } as ViewStyle,
  emptyWrapper: {
    height: PROGRESS_BAR_HEIGHT,
  } as ViewStyle,
});

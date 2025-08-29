import React, { useCallback, useEffect, useState, useRef, useMemo } from "react";
import { View, ViewStyle, Animated } from "react-native";
import { Style, StyleSheet } from "@styles";
import Svg, { Rect } from "react-native-svg";
import { ProgressStepItem, IProgressStepItemProps } from "./progress-step-item";
import { ContentItemProgressStepsFragment as IContentItemProgressSteps } from "@graphql/__generated";
import { defaultTheme } from "./progress-steps-configuration";
import { mapServerStyles } from "@components/sdui";

interface IProps {
  hideType?: "unrendered" | "invisible";
  marginHorizontal?: number;
  childrenWidth?: number;
  children?: React.ReactNode;
  style?: ViewStyle;
  wrapperStyles?: ViewStyle;
}

export type IProgressStepsProps = Pick<
  IContentItemProgressSteps,
  "currentStep" | "numberOfSteps" | "theme" | "wrapperStyles"
> &
  IProps;

const TOTAL_WIDTH = 1000;
const ANIMATION_TIME = 300;

export const ProgressSteps = (props: IProgressStepsProps) => {
  const {
    currentStep,
    numberOfSteps,
    hideType,
    childrenWidth = 0,
    marginHorizontal = Style.adjust(48),
    style,
    theme,
  } = props;
  const wrapperStyles = mapServerStyles(props.wrapperStyles);

  const { barColour, barBorderColour, stepBackgroundColour, stepTextColour } = theme || defaultTheme;

  const currentStepInternal = useMemo(() => currentStep - 1, [currentStep]);

  const widthPerStep = useMemo(() => TOTAL_WIDTH / (numberOfSteps - 1), [numberOfSteps]);

  const calculateWidth = useCallback((step: number) => widthPerStep * step, [widthPerStep]);

  const [position, setPosition] = useState(calculateWidth(currentStepInternal));
  const animatedValue = useRef(new Animated.Value(calculateWidth(currentStepInternal))).current;

  useEffect(() => {
    animatedValue.addListener((e) => setPosition(Math.floor(e.value)));

    return () => {
      animatedValue.stopAnimation();
      animatedValue.removeAllListeners();
    };
  }, []);

  useEffect(() => {
    const newPosition = calculateWidth(currentStepInternal);
    if (position !== newPosition) {
      animatedValue.stopAnimation();
      Animated.timing(animatedValue, {
        duration: ANIMATION_TIME,
        toValue: newPosition,
        useNativeDriver: true,
      }).start();
    }
  }, [currentStepInternal]);

  const data = useMemo(() => {
    const wrapperWidth = Style.DEVICE_WIDTH - marginHorizontal;
    const svgTotalWidth = wrapperWidth - childrenWidth;
    const svgWidth = svgTotalWidth - PROGRESS_BAR_HEIGHT;
    const svgWidthPerSegment = svgWidth / (numberOfSteps - 1);
    const safeCurrentPosition = position > TOTAL_WIDTH ? TOTAL_WIDTH : position;
    const currentProgressPercent = safeCurrentPosition / TOTAL_WIDTH;
    const currentProgressUI = svgWidth * currentProgressPercent;
    const shineWidth = currentProgressUI - 10;
    const safeShineWidth = shineWidth < 10 ? 0 : shineWidth;

    return {
      wrapperWidth,
      svgTotalWidth,
      svgWidth,
      currentProgressUI,
      safeShineWidth,
      steps: [...Array(numberOfSteps).keys()],
      svgWidthPerSegment,
    };
  }, [position, numberOfSteps, childrenWidth, marginHorizontal]);

  const steps = useMemo<Array<IProgressStepItemProps>>(
    () =>
      [...Array(numberOfSteps).keys()].map((step) => ({
        active: currentStepInternal >= step,
        id: step,
        text: step + 1,
        x: data.svgWidthPerSegment * step,
        diameter: PROGRESS_BAR_HEIGHT,
        animationDelay: ANIMATION_TIME,
        stepBackgroundColour,
        stepTextColour,
      })),
    [currentStepInternal, data, numberOfSteps]
  );

  if (hideType === "unrendered") {
    return null;
  }

  if (hideType === "invisible") {
    return <View style={styles.emptyWrapper} />;
  }

  return (
    <View style={[styles.wrapper, { width: data.wrapperWidth }, style, wrapperStyles]}>
      <Svg width={data.svgTotalWidth} height={PROGRESS_BAR_HEIGHT} viewBox={`0 0 ${data.svgTotalWidth} 24`}>
        <Rect
          width={data.svgWidth}
          strokeWidth={1}
          stroke={barBorderColour.inactive}
          height={6}
          y={9}
          fill={barColour.inactive}
          rx={3}
          x={PROGRESS_BAR_HEIGHT / 2}
        />
        <Rect
          width={data.currentProgressUI}
          strokeWidth={1}
          stroke={barBorderColour.active}
          height={6}
          y={9}
          rx={4}
          fill={barColour.active}
          x={PROGRESS_BAR_HEIGHT / 2}
        />
      </Svg>
      {props.children}
      {steps.map((stepProps) => (
        <ProgressStepItem key={stepProps.id} {...stepProps} />
      ))}
    </View>
  );
};

const PROGRESS_BAR_HEIGHT = Style.adjust(24);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    height: PROGRESS_BAR_HEIGHT,
    alignSelf: "center",
    alignItems: "center",
    marginTop: Style.adjust(16),
    position: "relative",
  } as ViewStyle,
  emptyWrapper: {
    height: PROGRESS_BAR_HEIGHT,
  } as ViewStyle,
});

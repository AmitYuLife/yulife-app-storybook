import { useEffect, useRef, Fragment, memo, useMemo } from "react";
import Svg, { Path, Rect, Circle, G } from "react-native-svg";
import { ViewStyle, StyleSheet, Animated, Easing } from "react-native";

import { Colours } from "@styles";
import { EVENT_PROGRESS_BAR } from "@ids";
import { DETOX_ENABLED } from "@services/socket";
import { Pulse } from "@atoms";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type ProgressBarValues = {
  starScale: number;
  tickScale: number;
  rectHeight: number;
  rectYOffset: number;
  defaultWidth: number;
  circleRadius: number;
  adjustedHeight: number;
  rectBorderRadius: number;
  starVerticalCenter: number;
  tickVerticalCenter: number;
  circleVerticalCenter: number;
  starHorizontalOffset: number;
  tickHorizontalOffset: number;
  circleHorizontalOffset: number;
};

const FULL_PROGRESS_BAR_VALUES: ProgressBarValues = {
  starScale: 1,
  tickScale: 1,
  rectYOffset: 6,
  rectHeight: 14,
  circleRadius: 12,
  defaultWidth: 327,
  adjustedHeight: 26,
  rectBorderRadius: 8,
  starVerticalCenter: 6,
  tickVerticalCenter: 7.5,
  circleVerticalCenter: 13,
  starHorizontalOffset: -17,
  circleHorizontalOffset: -11,
  tickHorizontalOffset: -18.5,
};

const COMPACT_PROGRESS_BAR_VALUES: ProgressBarValues = {
  rectHeight: 8,
  rectYOffset: 7,
  starScale: 0.85,
  tickScale: 0.85,
  circleRadius: 10,
  defaultWidth: 232,
  adjustedHeight: 22,
  rectBorderRadius: 4,
  starVerticalCenter: 5,
  tickVerticalCenter: 6.5,
  circleVerticalCenter: 11,
  starHorizontalOffset: -14,
  tickHorizontalOffset: -15,
  circleHorizontalOffset: -9,
};

interface ProgressBarMilestone {
  value: number;
  rewardClaimed?: boolean;
  shouldAttractAttention?: boolean;
}

export interface IProgressBarProps {
  max: number;
  width?: number;
  current: number;
  testID?: string;
  style?: ViewStyle;
  isDisabled?: boolean;
  type?: "full" | "compact";
  milestones?: ProgressBarMilestone[];
  showPulse?: boolean;
}

const ProgressBar = ({
  isDisabled,
  width,
  current,
  max,
  milestones = [],
  type = "full",
  style,
  showPulse,
}: IProgressBarProps) => {
  const progressBarValues = useMemo(
    () => (type === "full" ? FULL_PROGRESS_BAR_VALUES : COMPACT_PROGRESS_BAR_VALUES),
    [type]
  );

  const {
    rectHeight,
    rectYOffset,
    defaultWidth,
    circleRadius,
    adjustedHeight,
    rectBorderRadius,
    circleVerticalCenter,
    circleHorizontalOffset,
  } = progressBarValues;

  const color = isDisabled ? Colours.neutral.n200 : Colours.primary.p400;
  const fullWidth = useMemo(() => width || defaultWidth, [width, defaultWidth]);

  // these extra pixels are so that rounded edges and pulse animations are not cut off outside the viewBox
  const adjustedWidth = useMemo(() => fullWidth + 22, [fullWidth]);
  const svgStyle = useMemo(() => ({ top: -1, left: -1, marginVertical: -11 }), []);
  const svgHeight = adjustedHeight + 30;

  const progress = useMemo(() => (current > max ? max : current) / max, [current, max]);
  const viewBox = useMemo(() => `0 0 ${adjustedWidth} ${adjustedHeight}`, [adjustedWidth, adjustedHeight]);
  const progressWidth = useMemo(
    () => Math.max(progress * fullWidth, rectBorderRadius * 2),
    [progress, fullWidth, rectBorderRadius]
  );

  return (
    <Svg
      width={adjustedWidth}
      height={svgHeight}
      viewBox={viewBox}
      style={StyleSheet.flatten([svgStyle, style])}
      testID={EVENT_PROGRESS_BAR(progress)}
    >
      {!showPulse ? null : (
        <Pulse x={fullWidth + circleHorizontalOffset} y={circleVerticalCenter} radius={25} innerRadius={10} />
      )}
      {/* progress bar border */}
      <Rect
        x={1}
        y={rectYOffset}
        width={fullWidth}
        height={rectHeight}
        rx={rectBorderRadius}
        fill={Colours.neutral.white}
        stroke={Colours.neutral.n200}
      />
      {/* milestone circle borders */}
      {milestones.map(({ value }, index) => {
        if (value === 0) {
          return null;
        }

        const ratio = value / max;
        const circleCenter = ratio * fullWidth + circleHorizontalOffset;
        return (
          <Circle
            strokeWidth={1}
            r={circleRadius}
            cx={circleCenter}
            cy={circleVerticalCenter}
            stroke={Colours.neutral.n200}
            key={`progress-milestone-border-${value}-${index}`}
          />
        );
      })}
      {/* progress bar white fill */}
      <Rect
        x={1}
        y={rectYOffset}
        height={rectHeight}
        width={fullWidth - 1}
        rx={rectBorderRadius}
        fill={Colours.neutral.white}
      />
      {/* progress bar pink progress */}
      {progress <= 0 ? null : (
        <Rect
          x={1}
          fill={color}
          stroke={color}
          y={rectYOffset}
          height={rectHeight}
          width={progressWidth}
          rx={rectBorderRadius}
        />
      )}
      {/* milestone circle fills and stars */}
      {milestones.map(({ value, shouldAttractAttention, rewardClaimed }, index) => {
        if (value === 0) {
          return null;
        }

        const milestoneMet = current >= value;
        const ratio = value / max;

        return (
          <RewardMilestone
            key={`${value}-${index}`}
            ratio={ratio}
            fullWidth={fullWidth}
            isDisabled={isDisabled}
            milestoneMet={milestoneMet}
            rewardClaimed={rewardClaimed}
            progressBarValues={progressBarValues}
            shouldAttractAttention={shouldAttractAttention}
          />
        );
      })}
    </Svg>
  );
};

export default memo(ProgressBar);

interface IRewardMilestoneProps {
  ratio: number;
  fullWidth: number;
  isDisabled?: boolean;
  milestoneMet: boolean;
  rewardClaimed?: boolean;
  shouldAttractAttention: boolean;
  progressBarValues: ProgressBarValues;
}

const RewardMilestone = memo(
  ({
    ratio,
    fullWidth,
    isDisabled,
    milestoneMet,
    rewardClaimed,
    progressBarValues,
    shouldAttractAttention,
  }: IRewardMilestoneProps) => {
    const {
      starScale,
      tickScale,
      circleRadius,
      starVerticalCenter,
      tickVerticalCenter,
      circleVerticalCenter,
      starHorizontalOffset,
      tickHorizontalOffset,
      circleHorizontalOffset,
    } = progressBarValues;

    const activeStarColor = milestoneMet ? Colours.forest.fp103 : Colours.neutral.n900;

    const checkColor = isDisabled ? Colours.neutral.n700 : Colours.neutral.white;
    const barColor = isDisabled ? Colours.neutral.n200 : Colours.primary.p400;
    const starColor = isDisabled ? Colours.neutral.n700 : activeStarColor;

    const anim = useRef(new Animated.Value(0));
    const circleBorderColor = milestoneMet ? barColor : null;
    const circleCenter = ratio * fullWidth + circleHorizontalOffset;
    const circleFillColor = milestoneMet ? barColor : Colours.neutral.white;
    const starX = ratio * fullWidth + starHorizontalOffset;
    const tickX = ratio * fullWidth + tickHorizontalOffset;

    useEffect(() => {
      if (!DETOX_ENABLED) {
        const animation = Animated.loop(
          Animated.sequence(
            [1, 0].map((toValue) =>
              Animated.timing(anim.current, {
                duration: 1500,
                easing: Easing.in((n: number) => n),
                toValue,
                useNativeDriver: true,
              })
            )
          )
        );

        animation.start();

        return () => {
          animation.stop();
        };
      }
    }, []);

    const interpolation = {
      inputRange: [0, 1],
      outputRange: [circleRadius, circleRadius + 5],
    };

    return (
      <Fragment key={`progress-milestone-fill-${ratio}`}>
        {!shouldAttractAttention ? null : (
          <AnimatedCircle
            opacity={0.5}
            strokeWidth={1}
            cx={circleCenter}
            fill={circleFillColor}
            cy={circleVerticalCenter}
            stroke={circleBorderColor}
            r={anim.current.interpolate(interpolation)}
          />
        )}
        <Circle
          strokeWidth={1}
          r={circleRadius}
          cx={circleCenter}
          fill={circleFillColor}
          cy={circleVerticalCenter}
          stroke={circleBorderColor}
        />
        {rewardClaimed ? (
          <G scale={tickScale} x={tickX} y={tickVerticalCenter} fill={"transparent"}>
            <Path d="M13 1L4.66253 9L1 5.4" stroke={checkColor} />
          </G>
        ) : (
          <G scale={starScale} x={starX} y={starVerticalCenter}>
            <Path
              d="M5.99935 0.75L7.32065 4.91281L11.625 4.90353L8.13717 7.4675L9.47674 11.625L5.99935 9.04512L2.52326 11.625L3.86283 7.4675L0.375 4.90353L4.67935 4.91281L5.99935 0.75Z"
              fill={starColor}
            />
          </G>
        )}
      </Fragment>
    );
  }
);

import React, { Fragment, memo, useMemo } from "react";
import { Colours } from "@styles";
import Svg, { Path, Rect, Circle, G } from "react-native-svg";
import { ViewStyle, StyleSheet, Animated, Easing } from "react-native";
import { DETOX_ENABLED } from "@services/socket";
import { EVENT_PROGRESS_BAR } from "@ids";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type ProgressBarValues = {
  defaultWidth: number;
  adjustedHeight: number;
  rectYOffset: number;
  rectHeight: number;
  rectBorderRadius: number;
  circleHorizontalOffset: number;
  circleVerticalCenter: number;
  circleRadius: number;
  starScale: number;
  starHorizontalOffset: number;
  starVerticalCenter: number;
  tickScale: number;
  tickHorizontalOffset: number;
  tickVerticalCenter: number;
};

const FULL_PROGRESS_BAR_VALUES: ProgressBarValues = {
  defaultWidth: 327,
  adjustedHeight: 26,
  rectYOffset: 6,
  rectHeight: 14,
  rectBorderRadius: 8,
  circleHorizontalOffset: -11,
  circleVerticalCenter: 13,
  circleRadius: 12,
  starScale: 1,
  starHorizontalOffset: -17,
  starVerticalCenter: 6,
  tickScale: 1,
  tickHorizontalOffset: -18.5,
  tickVerticalCenter: 7.5,
};

const COMPACT_PROGRESS_BAR_VALUES: ProgressBarValues = {
  defaultWidth: 232,
  adjustedHeight: 22,
  rectYOffset: 7,
  rectHeight: 8,
  rectBorderRadius: 4,
  circleHorizontalOffset: -9,
  circleVerticalCenter: 11,
  circleRadius: 10,
  starScale: 0.85,
  starHorizontalOffset: -14,
  starVerticalCenter: 5,
  tickScale: 0.85,
  tickHorizontalOffset: -15,
  tickVerticalCenter: 6.5,
};

interface ProgressBarMilestone {
  value: number;
  rewardClaimed?: boolean;
  shouldAttractAttention?: boolean;
}

export interface IProgressBarProps {
  width?: number;
  current: number;
  max: number;
  milestones?: ProgressBarMilestone[];
  type?: "full" | "compact";
  style?: ViewStyle;
  testID?: string;
}

const ProgressBar = ({ width, current, max, milestones = [], type = "full", style }: IProgressBarProps) => {
  const progressBarValues = useMemo(
    () => (type === "full" ? FULL_PROGRESS_BAR_VALUES : COMPACT_PROGRESS_BAR_VALUES),
    [type]
  );

  const {
    defaultWidth,
    adjustedHeight,
    rectYOffset,
    rectHeight,
    rectBorderRadius,
    circleHorizontalOffset,
    circleVerticalCenter,
    circleRadius,
  } = progressBarValues;

  const fullWidth = useMemo(() => width || defaultWidth, [width, defaultWidth]);

  // these extra pixels are so that rounded edges are not cut off outside the viewBox
  const adjustedWidth = useMemo(() => fullWidth + 10, [fullWidth]);
  const svgStyle = useMemo(() => ({ top: -1, left: -1 }), []);

  const progress = useMemo(() => current / max, [current, max]);
  const viewBox = useMemo(() => `0 0 ${adjustedWidth} ${adjustedHeight}`, [adjustedWidth, adjustedHeight]);
  const progressWidth = useMemo(
    () => Math.max(progress * fullWidth, rectBorderRadius * 2),
    [progress, fullWidth, rectBorderRadius]
  );

  const svgHeight = adjustedHeight + 8;

  return (
    <Svg
      width={adjustedWidth}
      height={svgHeight}
      viewBox={viewBox}
      style={StyleSheet.flatten([svgStyle, style])}
      testID={EVENT_PROGRESS_BAR(progress)}
    >
      {/* progress bar border */}
      <Rect
        stroke={Colours.neutral.n200}
        fill={Colours.neutral.white}
        x={1}
        y={rectYOffset}
        width={fullWidth}
        height={rectHeight}
        rx={rectBorderRadius}
      />
      {/* milestone circle borders */}
      {milestones.map(({ value }) => {
        const ratio = value / max;
        const circleCenter = ratio * fullWidth + circleHorizontalOffset;
        return (
          <Circle
            key={`progress-milestone-border-${value}`}
            cx={circleCenter}
            cy={circleVerticalCenter}
            r={circleRadius}
            strokeWidth={1}
            stroke={Colours.neutral.n200}
          />
        );
      })}
      {/* progress bar white fill */}
      <Rect
        fill={Colours.neutral.white}
        x={1}
        y={rectYOffset}
        width={fullWidth - 1}
        height={rectHeight}
        rx={rectBorderRadius}
      />
      {/* progress bar pink progress */}
      {progress <= 0 ? null : (
        <Rect
          stroke={Colours.primary.p400}
          fill={Colours.primary.p400}
          x={1}
          y={rectYOffset}
          width={progressWidth}
          height={rectHeight}
          rx={rectBorderRadius}
        />
      )}
      {/* milestone circle fills and stars */}
      {milestones.map(({ value, shouldAttractAttention, rewardClaimed }) => {
        const milestoneMet = current >= value;
        const ratio = value / max;

        return (
          <RewardMilestone
            key={value}
            shouldAttractAttention={shouldAttractAttention}
            milestoneMet={milestoneMet}
            rewardClaimed={rewardClaimed}
            ratio={ratio}
            fullWidth={fullWidth}
            progressBarValues={progressBarValues}
          />
        );
      })}
    </Svg>
  );
};

export default memo(ProgressBar);

type RewardMilestoneProps = {
  shouldAttractAttention: boolean;
  milestoneMet: boolean;
  rewardClaimed?: boolean;
  ratio: number;
  fullWidth: number;
  progressBarValues: ProgressBarValues;
};

const RewardMilestone = memo(
  ({
    shouldAttractAttention,
    milestoneMet,
    rewardClaimed,
    ratio,
    fullWidth,
    progressBarValues,
  }: RewardMilestoneProps) => {
    const {
      circleHorizontalOffset,
      circleVerticalCenter,
      circleRadius,
      starScale,
      starHorizontalOffset,
      starVerticalCenter,
      tickScale,
      tickHorizontalOffset,
      tickVerticalCenter,
    } = progressBarValues;

    const anim = React.useRef(new Animated.Value(0));
    const circleCenter = ratio * fullWidth + circleHorizontalOffset;
    const circleBorderColor = milestoneMet ? Colours.primary.p400 : null;
    const circleFillColor = milestoneMet ? Colours.primary.p400 : Colours.neutral.white;
    const starColor = milestoneMet ? Colours.forest.fp103 : Colours.neutral.n400;
    const starX = ratio * fullWidth + starHorizontalOffset;
    const tickX = ratio * fullWidth + tickHorizontalOffset;

    React.useEffect(() => {
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
            cx={circleCenter}
            cy={circleVerticalCenter}
            r={anim.current.interpolate(interpolation)}
            strokeWidth={1}
            stroke={circleBorderColor}
            fill={circleFillColor}
            opacity={0.5}
          />
        )}
        <Circle
          cx={circleCenter}
          cy={circleVerticalCenter}
          r={circleRadius}
          strokeWidth={1}
          stroke={circleBorderColor}
          fill={circleFillColor}
        />
        {rewardClaimed ? (
          <G scale={tickScale} x={tickX} y={tickVerticalCenter} fill={"transparent"}>
            <Path d="M13 1L4.66253 9L1 5.4" stroke="white" />
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

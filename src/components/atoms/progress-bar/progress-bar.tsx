import React, { Fragment, memo, useMemo } from "react";
import { Colours, Style } from "@styles";
import Svg, { Path, Rect, Circle, G } from "react-native-svg";
import { ViewStyle, StyleSheet } from "react-native";

const FULL_PROGRESS_BAR_VALUES = {
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
};

const COMPACT_PROGRESS_BAR_VALUES = {
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
};

interface IProgressBarProps {
  width?: number;
  current: number;
  max: number;
  milestones?: number[];
  type?: "full" | "compact";
  style?: ViewStyle;
}

const ProgressBar = ({ width, current, max, milestones = [], type = "full", style }: IProgressBarProps) => {
  const {
    defaultWidth,
    adjustedHeight,
    rectYOffset,
    rectHeight,
    rectBorderRadius,
    circleHorizontalOffset,
    circleVerticalCenter,
    circleRadius,
    starScale,
    starHorizontalOffset,
    starVerticalCenter,
  } = useMemo(() => (type === "full" ? FULL_PROGRESS_BAR_VALUES : COMPACT_PROGRESS_BAR_VALUES), [type]);

  const fullWidth = useMemo(() => width || defaultWidth, [width, defaultWidth]);

  // these extra pixels are so that rounded edges are not cut off outside the viewBox
  const adjustedWidth = useMemo(() => fullWidth + 2, [fullWidth]);
  const svgStyle = useMemo(() => ({ top: -1, left: -1 }), []);

  const progress = useMemo(() => current / max, [current, max]);
  const viewBox = useMemo(() => `0 0 ${adjustedWidth} ${adjustedHeight}`, [adjustedWidth, adjustedHeight]);
  const progressWidth = useMemo(() => Math.max(progress * fullWidth, rectBorderRadius * 2), [
    progress,
    fullWidth,
    rectBorderRadius,
  ]);

  return (
    <Svg
      width={Style.adjust(adjustedWidth)}
      height={Style.adjust(adjustedHeight)}
      viewBox={viewBox}
      style={StyleSheet.flatten([svgStyle, style])}
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
      {milestones.map((milestone) => {
        const ratio = milestone / max;
        const circleCenter = ratio * fullWidth + circleHorizontalOffset;
        return (
          <Circle
            key={`progress-milestone-border-${milestone}`}
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
      {milestones.map((milestone) => {
        const milestoneMet = current >= milestone;
        const ratio = milestone / max;
        const circleCenter = ratio * fullWidth + circleHorizontalOffset;
        const circleBorderColor = milestoneMet ? Colours.primary.p400 : null;
        const circleFillColor = milestoneMet ? Colours.primary.p400 : Colours.neutral.white;
        const starColor = milestoneMet ? Colours.forest.fp103 : Colours.neutral.n400;
        const starX = ratio * fullWidth + starHorizontalOffset;
        return (
          <Fragment key={`progress-milestone-fill-${milestone}`}>
            <Circle
              cx={circleCenter}
              cy={circleVerticalCenter}
              r={circleRadius}
              strokeWidth={1}
              stroke={circleBorderColor}
              fill={circleFillColor}
            />
            <G scale={starScale} x={starX} y={starVerticalCenter}>
              <Path
                d="M5.99935 0.75L7.32065 4.91281L11.625 4.90353L8.13717 7.4675L9.47674 11.625L5.99935 9.04512L2.52326 11.625L3.86283 7.4675L0.375 4.90353L4.67935 4.91281L5.99935 0.75Z"
                fill={starColor}
              />
            </G>
          </Fragment>
        );
      })}
    </Svg>
  );
};

export default memo(ProgressBar);

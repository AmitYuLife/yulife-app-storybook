import { CSSProperties, memo, useMemo } from "react";
import { Colours } from "../../tokens/colours";

export interface IProgressBarProps {
  progress: number;
  height?: number;
  backgroundColor?: string;
  fillColor?: string;
  borderRadius?: number;
  style?: CSSProperties;
}

const ProgressBar = ({
  progress,
  height = 8,
  backgroundColor = Colours.neutral.n100,
  fillColor = Colours.primary.p600,
  borderRadius = 4,
  style,
}: IProgressBarProps) => {
  const clampedProgress = Math.min(1, Math.max(0, progress));

  const containerStyle = useMemo(
    (): CSSProperties => ({
      width: "100%",
      height: `${height}px`,
      backgroundColor,
      borderRadius: `${borderRadius}px`,
      overflow: "hidden",
      ...style,
    }),
    [height, backgroundColor, borderRadius, style]
  );

  const fillStyle = useMemo(
    (): CSSProperties => ({
      width: `${clampedProgress * 100}%`,
      height: "100%",
      backgroundColor: fillColor,
      borderRadius: `${borderRadius}px`,
      transition: "width 0.3s ease",
    }),
    [clampedProgress, fillColor, borderRadius]
  );

  return (
    <div
      style={containerStyle}
      role="progressbar"
      aria-valuenow={Math.round(clampedProgress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div style={fillStyle} />
    </div>
  );
};

export default memo(ProgressBar);

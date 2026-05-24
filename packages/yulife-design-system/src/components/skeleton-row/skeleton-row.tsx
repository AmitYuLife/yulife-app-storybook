import { CSSProperties, memo } from "react";
import { Colours } from "../../tokens/colours";

export interface ISkeletonRowProps {
  width?: number;
  height?: number;
  borderRadius?: number;
  style?: CSSProperties;
}

const pulse: CSSProperties = { animation: "yu-pulse 1.5s ease-in-out infinite" };

const SkeletonRow = ({ width = 200, height = 16, borderRadius = 8, style }: ISkeletonRowProps) => {
  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "12px",
    ...style,
  };

  const avatarStyle: CSSProperties = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: Colours.neutral.n100,
    flexShrink: 0,
    ...pulse,
  };

  const barStyle: CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
    borderRadius: `${borderRadius}px`,
    backgroundColor: Colours.neutral.n100,
    ...pulse,
  };

  return (
    <div style={containerStyle} aria-hidden={true}>
      <div style={avatarStyle} />
      <div style={barStyle} />
    </div>
  );
};

export default memo(SkeletonRow);

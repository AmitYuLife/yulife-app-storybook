import { CSSProperties, memo, useMemo } from "react";
import { Colours } from "../../tokens/colours";

export interface ILoadingProps {
  size?: number;
  color?: string;
  style?: CSSProperties;
}

const Loading = ({ size = 32, color = Colours.primary.p600, style }: ILoadingProps) => {
  const computedStyle = useMemo(
    (): CSSProperties => ({
      width: `${size}px`,
      height: `${size}px`,
      border: `3px solid ${Colours.neutral.n100}`,
      borderTopColor: color,
      borderRadius: "50%",
      animation: "yu-spin 0.8s linear infinite",
      ...style,
    }),
    [size, color, style]
  );

  return <div style={computedStyle} role="status" aria-label="Loading" />;
};

export default memo(Loading);

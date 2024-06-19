import { Style } from "@styles";
import * as React from "react";
import { memo } from "react";
import Svg, { Path } from "react-native-svg";

interface ICheckIconProps {
  size?: number;
  fill?: string;
  strokeWidth?: number;
  stroke?: string;
}

export const CheckIcon = memo(({ size = Style.adjust(16), fill, strokeWidth, stroke }: ICheckIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.24 3.769a.333.333 0 01-.01.471l-8.337 8a.333.333 0 01-.464-.002l-3.663-3.6a.333.333 0 01.467-.476l3.432 3.373L13.77 3.76a.333.333 0 01.471.01z"
      fill={fill || "#5C5757"}
      strokeWidth={strokeWidth}
      stroke={stroke}
    />
  </Svg>
));

import React, { memo } from "react";
import { Colours, Style } from "@styles";
import Svg, { Path } from "react-native-svg";

interface ICheckIconProps {
  color?: string;
  size?: number;
}

export const CheckIcon = memo(({ color = Colours.primary.p600, size = Style.adjust(24) }: ICheckIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.68 5.27a1 1 0 01.05 1.41l-11.11 12a1 1 0 01-1.48 0l-4.88-5.4a1 1 0 111.48-1.35l4.15 4.59 10.38-11.2a1 1 0 011.41-.05z"
      fill={color}
    />
  </Svg>
));

import { Colours, Style } from "@styles";
import * as React from "react";
import { memo } from "react";
import Svg, { Path } from "react-native-svg";

interface IChevronProps {
  color?: string;
  size?: number;
  // TODO: support more directions by rotating
  direction?: "right";
}

export const ChevronIcon = memo(({ color = Colours.primary.p600, size = 24 }: IChevronProps) => {
  return (
    <Svg width={Style.adjust(size)} height={Style.adjust(size)} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9.354 5.646a.5.5 0 10-.708.708L14.293 12l-5.647 5.646a.5.5 0 00.708.708l6-6a.5.5 0 000-.708l-6-6z"
        fill={color}
      />
    </Svg>
  );
});

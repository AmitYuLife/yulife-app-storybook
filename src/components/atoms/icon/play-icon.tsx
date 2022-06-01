import { Colours, Style } from "@styles";
import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  colour?: string;
  width?: number;
  height?: number;
}

export const PlayIcon = memo(({ colour = Colours.neutral.white, width = 16, height = 16 }: Props) => (
  <Svg width={Style.adjust(width)} height={Style.adjust(height)} viewBox="0 0 16 16" fill="none">
    <Path
      d="m12.918 8.277-7.066 4.71a.334.334 0 0 1-.519-.277V3.29a.333.333 0 0 1 .518-.278l7.067 4.71a.334.334 0 0 1 0 .555Z"
      fill={colour}
    />
  </Svg>
));

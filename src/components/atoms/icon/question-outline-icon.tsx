import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";
import { Style } from "@styles";

interface IProps {
  width?: number;
  height?: number;
  colour?: string;
}

export const QuestionOutlineIcon = memo(({ width = 24, height = 24, colour = "#5C5757" }: IProps) => (
  <Svg width={Style.adjust(width)} height={Style.adjust(height)} fill="none" viewBox="0 0 24 24">
    <Path
      stroke={colour}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
    <Path
      stroke={colour}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 16v.5"
    />
  </Svg>
));

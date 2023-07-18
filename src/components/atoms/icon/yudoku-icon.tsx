import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";
import { Style } from "@styles";

interface IProps {
  width?: number;
  height?: number;
  colour?: string;
}

export const YudokuIcon = memo(({ width = 24, height = 24, colour = "#5C5757" }: IProps) => (
  <Svg width={Style.adjust(width)} height={Style.adjust(height)} fill="none" viewBox="0 0 24 24">
    <Path
      fill={colour}
      fillRule="evenodd"
      d="M.5 4.002A2.5 2.5 0 0 1 3 1.5h18a2.5 2.5 0 0 1 2.5 2.502v15.996A2.5 2.5 0 0 1 21 22.5H3a2.5 2.5 0 0 1-2.5-2.502V4.002Zm12 17.497H21a1.5 1.5 0 0 0 1.5-1.5V12.5h-10v9Zm-1-8.999v9H3a1.5 1.5 0 0 1-1.5-1.502V12.5h10Zm1-1h10V4.002A1.5 1.5 0 0 0 21 2.5h-8.5V11.5Zm-1-9v9h-10V4.002A1.5 1.5 0 0 1 3 2.5h8.5Z"
      clipRule="evenodd"
    />
    <Path
      fill={colour}
      d="M6.5 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM17.5 18.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
    />
  </Svg>
));

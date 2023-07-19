import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";
import { Style } from "@styles";

interface IProps {
  width?: number;
  height?: number;
  colour?: string;
}

export const DropdownSolidIcon = memo(({ width = 24, height = 24, colour = "#5C5757" }: IProps) => (
  <Svg width={Style.adjust(width)} height={Style.adjust(height)} fill="none" viewBox="0 0 24 24">
    <Path fill={colour} d="M12 19.5 23.25 5.25H.75L12 19.5Z" />
  </Svg>
));

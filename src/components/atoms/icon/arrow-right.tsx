import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";
import { Colours, Style } from "@styles";

interface IProps {
  color?: string;
}

export const ArrowRight = memo(({ color = Colours.primary.p600 }: IProps) => (
  <Svg width={Style.adjust(24)} height={Style.adjust(24)} viewBox="0 0 24 24">
    <Path d="M8 20l8-8-8-8" stroke={color} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
));

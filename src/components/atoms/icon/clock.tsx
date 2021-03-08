import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { IconProps } from "./types";
import { Style } from "@styles";

export const Clock = ({ height = Style.adjust(24), width = Style.adjust(24) }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 24 24">
    <Circle cx={12} cy={12} r={11} strokeWidth={1} stroke="#6E6E70" strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M12 5.25v8h6" strokeWidth={1} stroke="#6E6E70" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

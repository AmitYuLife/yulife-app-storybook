import React, { memo } from "react";
import Svg, { Circle } from "react-native-svg";
import { Style } from "@styles";

interface IProps {
  width?: number;
  height?: number;
  selected: boolean;
}
const Radio = ({ width = Style.adjust(24), height = Style.adjust(24), selected }: IProps) => (
  <Svg viewBox="0 0 24 24" width={width} height={height} fill="none">
    <Circle cx={12} cy={12} r={11.5} fill="#fff" stroke={selected ? "#E30D76" : "#ABABAD"} />
    {!selected ? null : <Circle cx={12} cy={12} r={8} fill="#E30D76" />}
  </Svg>
);

export default memo(Radio);

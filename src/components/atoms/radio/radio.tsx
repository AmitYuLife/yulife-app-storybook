import React, { memo } from "react";
import Svg, { Circle } from "react-native-svg";
import { Style } from "@styles";
import { useTheme } from "@app/modules/themes/hooks/useTheme";

interface IProps {
  width?: number;
  height?: number;
  selected: boolean;
}
const Radio = ({ width = Style.adjust(24), height = Style.adjust(24), selected }: IProps) => {
  const { theme } = useTheme();
  return (
    <Svg viewBox="0 0 24 24" width={width} height={height} fill="none">
      <Circle cx={12} cy={12} r={11.5} fill="#fff" stroke={selected ? theme.colors.primary.p600 : "#ABABAD"} />
      {!selected ? null : <Circle cx={12} cy={12} r={8} fill={theme.colors.primary.p600} />}
    </Svg>
  );
};

export default memo(Radio);

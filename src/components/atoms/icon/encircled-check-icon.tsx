import React, { memo } from "react";
import { Style } from "@styles";
import Svg, { Path } from "react-native-svg";

interface IStarIconProps {
  color?: string;
  size?: number;
}

export const EncircledCheckIcon = memo(({ color = "#E30D76", size = Style.adjust(16) }: IStarIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM15.5365 6.29022C15.3402 6.0908 15.0177 6.08454 14.8135 6.2755L7.99116 12.6538L5.19098 9.97204C4.98898 9.77858 4.66652 9.78119 4.4678 9.97817C4.2658 10.1784 4.26877 10.5026 4.47409 10.6993L7.62843 13.7203C7.82634 13.9098 8.14071 13.9116 8.34084 13.7245L15.5214 7.01121C15.729 6.81711 15.7362 6.49294 15.5365 6.29022Z"
      fill={color}
    />
  </Svg>
));

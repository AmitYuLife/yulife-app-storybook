import { Colours, Style } from "@styles";
import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";

interface IProps {
  color?: string;
  width?: number;
  height?: number;
}

export const CopyIcon = memo(
  ({ color = Colours.primary.p600, width = Style.adjust(24), height = Style.adjust(24) }: IProps) => (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.255 6.162a.5.5 0 00-.5.5v14.792a.5.5 0 00.5.5h14.793a.5.5 0 00.5-.5v-1.178a.5.5 0 111 0v1.178a1.5 1.5 0 01-1.5 1.5H2.255a1.5 1.5 0 01-1.5-1.5V6.662a1.5 1.5 0 011.5-1.5h1.698a.5.5 0 110 1H2.255z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.452 2.545a1.5 1.5 0 011.5-1.5h14.793a1.5 1.5 0 011.5 1.5v14.793a1.5 1.5 0 01-1.5 1.5H6.952a1.5 1.5 0 01-1.5-1.5V2.545zm1.5-.5a.5.5 0 00-.5.5v14.793a.5.5 0 00.5.5h14.793a.5.5 0 00.5-.5V2.545a.5.5 0 00-.5-.5H6.952z"
        fill={color}
      />
    </Svg>
  )
);

import React, { memo } from "react";
import Svg, { Path, Mask, G } from "react-native-svg";
import { Style } from "@styles";

interface Props {
  height?: number;
  width?: number;
}

export const FlagJP = memo(({ width = Style.adjust(32), height = Style.adjust(24) }: Props) => (
  <Svg width={width} height={height} viewBox="0 0 32 24" fill="none">
    <Mask id="a" width={width} height={height} x={0} y={0} maskUnits="userSpaceOnUse">
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#F7FCFF" fillRule="evenodd" d="M0 0v24h32V0H0Z" clipRule="evenodd" />
      <Mask id="b" width={width} height={height} x={0} y={0} maskUnits="userSpaceOnUse">
        <Path fill="#fff" fillRule="evenodd" d="M0 0v24h32V0H0Z" clipRule="evenodd" />
      </Mask>
      <G mask="url(#b)">
        <Path
          fill="#E31D1C"
          fillRule="evenodd"
          d="M16 19.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"
          clipRule="evenodd"
        />
      </G>
    </G>
  </Svg>
));

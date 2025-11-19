import React, { memo } from "react";
import Svg, { Path, Mask, G } from "react-native-svg";
import { Style } from "@styles";

interface Props {
  height?: number;
  width?: number;
}

export const FlagKSA = memo(({ width = Style.adjust(32), height = Style.adjust(24) }: Props) => (
  <Svg width={width} height={height} viewBox="0 0 32 24" fill="none">
    <Mask id="a" width={width} height={height} x={0} y={0} maskUnits="userSpaceOnUse">
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#006C35" fillRule="evenodd" d="M0 0v24h32V0H0Z" clipRule="evenodd" />
      <Mask id="b" width={width} height={height} x={0} y={0} maskUnits="userSpaceOnUse">
        <Path fill="#fff" fillRule="evenodd" d="M0 0v24h32V0H0Z" clipRule="evenodd" />
      </Mask>
      <G mask="url(#b)">
        {/* Simplified representation of Arabic calligraphy (Shahada) - flowing curves */}
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M6 8c0-1 1-2 2-2h2c1 0 2 1 2 2v.5c0 .5-.5 1-1 1H7c-.5 0-1-.5-1-1V8Zm4 0c0-1 1-2 2-2h2c1 0 2 1 2 2v.5c0 .5-.5 1-1 1h-2c-.5 0-1-.5-1-1V8Zm4 0c0-1 1-2 2-2h2c1 0 2 1 2 2v.5c0 .5-.5 1-1 1h-2c-.5 0-1-.5-1-1V8Z"
          clipRule="evenodd"
        />
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M7 10.5c0-.8.7-1.5 1.5-1.5h1c.8 0 1.5.7 1.5 1.5v.5c0 .3-.2.5-.5.5H7.5c-.3 0-.5-.2-.5-.5v-.5Zm3 0c0-.8.7-1.5 1.5-1.5h1c.8 0 1.5.7 1.5 1.5v.5c0 .3-.2.5-.5.5h-2c-.3 0-.5-.2-.5-.5v-.5Zm3 0c0-.8.7-1.5 1.5-1.5h1c.8 0 1.5.7 1.5 1.5v.5c0 .3-.2.5-.5.5h-2c-.3 0-.5-.2-.5-.5v-.5Zm3 0c0-.8.7-1.5 1.5-1.5h1c.8 0 1.5.7 1.5 1.5v.5c0 .3-.2.5-.5.5h-2c-.3 0-.5-.2-.5-.5v-.5Z"
          clipRule="evenodd"
        />
        {/* Sword representation */}
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M13.5 15h5l1-2h-7l1 2Zm-1.5 2.5h8v1.5h-8v-1.5Zm-1 2h10v1h-10v-1Z"
          clipRule="evenodd"
        />
      </G>
    </G>
  </Svg>
));

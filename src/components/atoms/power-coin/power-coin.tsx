import React, { memo } from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, Text } from "react-native-svg";
import { Style } from "@styles";

interface IPowerCoinProps {
  width?: number;
  height?: number;
  yucoin: string | number;
}

const PowerCoin = ({ width = 26, height = 27, yucoin }: IPowerCoinProps) => (
  <Svg width={Style.adjust(width)} height={Style.adjust(height)} fill="none" viewBox="0 0 26 27">
    <G filter="url(#a)">
      <Path fill="url(#b)" d="M13 26c7.18 0 13-5.82 13-13S20.18 0 13 0 0 5.82 0 13s5.82 13 13 13Z" />
    </G>
    <Text
      y={17}
      x={13}
      fontSize={14}
      textAnchor="middle"
      fontWeight="bold"
      fontFamily={Style.FONT_FAMILY_PRIMARY_BOLD}
      fill="#DB8200"
    >
      {yucoin}
    </Text>
    <Path
      fill="#F8CB31"
      d="M13 2.999c3.22 0 6.17 1.126 8.494 3.007A10.991 10.991 0 0 0 13 2.002c-3.419 0-6.474 1.56-8.493 4.008A13.447 13.447 0 0 1 13 3Z"
    />
    <Path
      fill="url(#c)"
      d="M13 23.002c3.22 0 6.17-1.127 8.494-3.007A10.982 10.982 0 0 1 13 24.003c-3.419 0-6.474-1.56-8.493-4.008A13.468 13.468 0 0 0 13 23.002Z"
    />
    <Path
      fill="#fff"
      d="m4.921 4.875.552 1.862 1.84.62-1.84.532L4.92 9.75 4.277 7.89l-1.84-.532 1.84-.62.644-1.862ZM20.343 18.687l.368 1.241 1.227.414-1.227.354-.368 1.241-.43-1.24-1.226-.355 1.227-.414.43-1.24Z"
    />

    <Defs>
      <LinearGradient id="b" x1={12.696} x2={13.309} y1={-0.241} y2={26.387} gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFF48E" />
        <Stop offset={1} stopColor="#FFED44" />
      </LinearGradient>
      <LinearGradient id="c" x1={2716.77} x2={2719.92} y1={1115.11} y2={287.708} gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFF48E" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.4} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default memo(PowerCoin);

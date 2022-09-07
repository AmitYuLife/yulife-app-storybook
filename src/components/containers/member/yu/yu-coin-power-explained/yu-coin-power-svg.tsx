import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop, Rect } from "react-native-svg";

interface Props {
  height?: number;
  width: number;
}

export const HEIGHT_WIDTH_MULTIPLIER = 58 / 375;

export const calculteHeightFromWidth = (width: number) => Math.ceil(width * HEIGHT_WIDTH_MULTIPLIER);

export const YuCoinPowerSVG = ({ height, width }: Props) => {
  const localHeight = height || calculteHeightFromWidth(width);
  return (
    <Svg width={width} height={localHeight} viewBox="0 0 375 58" fill="none">
      <Rect y="56" width="375" height="2" fill="#EDB720" />
      <Path d="M0 0H375V56H0V0Z" fill="url(#paint0_linear_4419_454071)" />
      <Path d="M168 0H50V56H142.498L168 0Z" fill="url(#paint1_linear_4419_454071)" />
      <Defs>
        <LinearGradient
          id="paint0_linear_4419_454071"
          x1="383.38"
          y1="-5.81812e-06"
          x2="-7.40277"
          y2="67.6887"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFF48C" />
          <Stop offset="1" stopColor="#FFEE47" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_4419_454071"
          x1="185.474"
          y1="28"
          x2="-69.9164"
          y2="40.2057"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0.00621742" stopColor="#FFE24A" />
          <Stop offset="0.527287" stopColor="#FFEA7A" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

import React from "react";
import Svg, { G, ClipPath, Defs, LinearGradient, Stop, Path } from "react-native-svg";
import { LEADERBOARD_PEDESTAL } from "@ids";
import { Style } from "@styles";

const VIEWBOX_MIN_X = 15;
const VIEWBOX_MIN_Y = 80;
const VIEWBOX_WIDTH = 340;
const SVG_WIDTH = VIEWBOX_WIDTH + VIEWBOX_MIN_X;
const multiplier = Style.DEVICE_WIDTH / SVG_WIDTH;
const VIEWBOX_HEIGHT = 220 * multiplier;
const SVG_HEIGHT = VIEWBOX_HEIGHT + VIEWBOX_MIN_Y;
export const pedestalStyles = {
  VIEWBOX_MIN_X,
  VIEWBOX_MIN_Y,
  VIEWBOX_WIDTH,
  VIEWBOX_HEIGHT,
  SVG_WIDTH,
  SVG_HEIGHT,
  multiplier,
};

export const PodiumAsset = ({ cropAmount = 0 }: { cropAmount: number }) => {
  return (
    <Svg
      style={{ marginTop: -cropAmount }}
      height={SVG_HEIGHT}
      width={SVG_WIDTH * multiplier}
      viewBox={`${VIEWBOX_MIN_X} ${VIEWBOX_MIN_Y} ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
      testID={LEADERBOARD_PEDESTAL}
    >
      <Defs>
        <LinearGradient
          id="prefix__c"
          x1={188.32}
          y1={337.22}
          x2={187.97}
          y2={129.33}
          gradientTransform="matrix(1 0 0 -1 0 368)"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0} stopColor="#fff" stopOpacity={0} />
          <Stop offset={0.66} stopColor="#fff" />
        </LinearGradient>
        <LinearGradient
          id="prefix__a"
          x1={3.22}
          y1={304.12}
          x2={105.3}
          y2={72.96}
          gradientTransform="matrix(1 0 0 -1 0 368)"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0} stopColor="#fff" stopOpacity={0} />
          <Stop offset={1} stopColor="#fff" />
        </LinearGradient>
        <LinearGradient
          id="prefix__d"
          x1={284.45}
          y1={301.79}
          x2={395.25}
          y2={59.16}
          gradientTransform="matrix(1 0 0 -1 0 368)"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0} stopColor="#fff" stopOpacity={0} />
          <Stop offset={1} stopColor="#fff" />
        </LinearGradient>
        <ClipPath id="prefix__b">
          <Path fill="none" d="M0 0h375v366H0z" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#prefix__b)">
        <Path fill="#fff" d="M0 0h375v366H0z" />
        <Path d="M375.29-11.8H-.29v409.92h375.58z" fill="#e1f3ff" />
        <Path d="M151.69 238L35-71h307L221.8 238z" fill="url(#prefix__c)" />
        <Path d="M-6 183l69 103h94.5L-6-97z" fillOpacity={0.8} fill="url(#prefix__a)" />
        <Path d="M379 193.5l-70.5 101-95.5.5 166-407z" fillOpacity={0.8} fill="url(#prefix__d)" />
        <Path d="M89.38 367H154v-81H63z" fill="#50d4f8" />
        <Path d="M81.05 262.56a4 4 0 013.17-1.56h66.35l9.43 25H63z" fill="#caeff9" />
        <Path d="M282.58 367H218v-73h91z" fill="#5feebf" />
        <Path d="M226.47 270h62.76a4 4 0 013.21 1.62L309 294h-92z" fill="#b1f9e0" opacity={0.5} />
        <Path d="M222.67 366h-71.34L141 261h92z" fill="#bca2fc" />
        <Path d="M149.19 237.68A4 4 0 01153 235h68.57a4 4 0 013.8 2.75L233 261h-92z" fill="#dfd3ff" />
        <Path
          d="M185.93 313l.46-24.43-3.7 2.05a4 4 0 01-2 .49 3.29 3.29 0 01-3.42-2.95 2.91 2.91 0 011.48-2.46l9.25-5a4.19 4.19 0 012.31-.66c2 0 3.8 1.48 3.71 3.2l-1 30.33c0 1.48-1.67 2.62-3.61 2.46s-3.48-1.6-3.48-3.03zM98.07 299.37a1.81 1.81 0 000 1 3.22 3.22 0 003.24 2.22 1.94 1.94 0 002-1.4c.47-1.64 1.76-3.19 4.91-3.28 3.79-.08 6.29 2.05 6.75 4.51.64 3.78-3 5.92-6.51 8.05s-7.39 4.42-6.26 8.43a2.92 2.92 0 002.69 1.72l16.56.17c1.2 0 2.13-.74 2-1.72s-1.3-1.81-2.59-1.81l-13.7-.08c-.28-1.19 1.78-2.37 4.37-3.84 4.2-2.4 9.79-5.59 9.05-10.92-.74-5.49-5.83-9.26-13.42-9-5.57.13-8.44 2.67-9.09 5.95zM269 310.56l-7.49 6.14-.14.16a2.56 2.56 0 00-.7 1.07c-.18 1 .56 1.81 1.85 1.73l2.5-.08c3.61-.09 4.26 1.55 3.61 3.77s-2.59 3.6-6 3.77a5.53 5.53 0 01-4.82-1.89 2.12 2.12 0 00-1.75-.74 2.54 2.54 0 00-2.41 1.72 1.08 1.08 0 00.18.91c1.39 1.72 4.17 3 8 2.87 6-.33 9.72-2.71 11.11-6.81 1.11-3.44.56-6.72-5.09-7.21l8-6.32a3 3 0 001-1.39 1.48 1.48 0 00-1.58-2.05H261a3 3 0 00-2.78 2.13 1.78 1.78 0 001.95 2.05z"
          fill="#fff"
        />
        <Path
          d="M376.45 335.67v321.55H-.29v-340.6a23.47 23.47 0 0113.52-4.29c10.11 0 18.84 6.52 22.6 15.82.64 0 1.28-.08 1.93-.08A23.36 23.36 0 0150 331.54 23.36 23.36 0 0175.19 330a23.59 23.59 0 0135.45-1.27 23.47 23.47 0 0113.85-4.53c12.88 0 23.42 10.48 24.49 23.83a25.44 25.44 0 013 2.3A23.55 23.55 0 01185.4 352a12.78 12.78 0 012-.15 13.59 13.59 0 0111.89 7.29 24.23 24.23 0 0120.62-11.84 23.56 23.56 0 015.41.63 23.46 23.46 0 0130.24.49 24 24 0 0119.27-9.9c.65 0 1.3 0 1.94.08a24.42 24.42 0 0116.92-11.11 24.31 24.31 0 0121-12.59 23.73 23.73 0 0116.48 6.73 24.25 24.25 0 0120.69-12c13.59-.03 24.59 11.64 24.59 26.04z"
          fill="#fff"
        />
      </G>
    </Svg>
  );
};

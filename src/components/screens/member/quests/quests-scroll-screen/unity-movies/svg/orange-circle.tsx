/* tslint:disable */
import * as React from "react";
import Svg, { LinearGradient, Stop, G, Circle } from "react-native-svg";
import { Style } from "@styles/index";

const OrangeCircle = () => {
  return (
    <Svg
      height={String(Style.SCALE_UP_AND_DOWN(250))}
      width={String(Style.SCALE_UP_AND_DOWN(250))}
      viewBox="0 0 400 400"
    >
      <G>
        <LinearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="100" y1="300" x2="100" y2="25">
          <Stop offset="1.129295e-03" stopColor="#FF8971" />
          <Stop offset="0.9045" stopColor="#F0FF28" />
        </LinearGradient>
        <Circle fill="url(#SVGID_5_)" cx="200" cy="200" r="200" />
      </G>
    </Svg>
  );
};

export default OrangeCircle;

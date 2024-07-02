import { Style } from "@styles";
import React, { memo } from "react";
import Svg, { Defs, LinearGradient, Rect, Stop } from "react-native-svg";

export const HeroHeaderGradient = memo(() => (
  <Svg width={Style.DEVICE_WIDTH} height={Style.adjust(8)} viewBox={`0 0 ${Style.DEVICE_WIDTH} 7`}>
    <Rect width={Style.DEVICE_WIDTH} height="5" fill="url(#paint0_radial_1869_22875)" />
    <Defs>
      <LinearGradient id="paint0_radial_1869_22875" x1="0" y1="0" x2="0" y2="2">
        <Stop stopColor="rgb(235,235,235)" />
        <Stop offset="1" stopColor="rgb(235,235,235)" stopOpacity="0" />
      </LinearGradient>
    </Defs>
  </Svg>
));

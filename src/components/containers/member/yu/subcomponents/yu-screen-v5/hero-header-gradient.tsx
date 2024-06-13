import { Style } from "@styles";
import React, { memo } from "react";
import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";

export const HeroHeaderGradient = memo(() => (
  <Svg width={Style.DEVICE_WIDTH} height={Style.adjust(7)} viewBox={`0 0 ${Style.DEVICE_WIDTH} 7`}>
    <Rect width={Style.DEVICE_WIDTH} height="7" fill="url(#paint0_radial_1869_22875)" />
    <Defs>
      <RadialGradient
        id="paint0_radial_1869_22875"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(188 -11) rotate(90) scale(18 249.769)"
      >
        <Stop stopColor="#D9D9D9" />
        <Stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
      </RadialGradient>
    </Defs>
  </Svg>
));

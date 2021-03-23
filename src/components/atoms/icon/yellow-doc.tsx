import React from "react";
import Svg, { Path } from "react-native-svg";
import { Style } from "@styles";

export const YellowDoc = () => (
  <Svg width={Style.adjust(24)} height={Style.adjust(24)} viewBox="0 0 24 24">
    <Path d="M6 22a2 2 0 01-2-2V4a2 2 0 012-2h9l5 5v13a2 2 0 01-2 2H6z" fill="#FFDE32" />
    <Path d="M15 2l5 5h-3a2 2 0 01-2-2V2z" fill="#FFB13B" />
    <Path
      d="M7.19 11.93h10M7.19 8.93h10M7.19 14.93h10M14 17.93h2"
      stroke="#FFB13B"
      strokeWidth={1.3}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

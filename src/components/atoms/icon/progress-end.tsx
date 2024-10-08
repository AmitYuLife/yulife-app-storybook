import React, { memo } from "react";
import Svg, { Circle, ClipPath, Defs, G, Path } from "react-native-svg";

/**
 * Do not Style.adjust
 */
export const ProgressEnd = memo(() => (
  <Svg width={16} height={16} viewBox="0 0 16 16">
    <Circle cx={8} cy={8} r={8} fill="#fff" />
    <Path
      fill="#E3E3E1"
      d="M15 8a7 7 0 0 1-13.326 3H.582A8.003 8.003 0 0 0 16 8 8 8 0 0 0 .582 5h1.092A7 7 0 0 1 15 8Z"
    />
    <G clipPath="url(#a)">
      <Path
        fill="#ABABAD"
        d="m8 4 .88 2.775 2.87-.006-2.325 1.71.893 2.771L8 9.53l-2.318 1.72.893-2.772L4.25 6.77l2.87.006L8 4Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M4 3.5h8v8H4z" />
      </ClipPath>
    </Defs>
  </Svg>
));

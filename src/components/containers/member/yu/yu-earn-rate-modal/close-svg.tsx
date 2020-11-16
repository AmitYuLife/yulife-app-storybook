import React from "react";
import Svg, { Path } from "react-native-svg";
import { Style } from "@styles";

export const CloseSvg = () => {
  return (
    <Svg width={Style.adjust(24)} height={Style.adjust(24)} viewBox="0 0 24 24">
      <Path
        d="M23.5 12c0 6.351-5.149 11.5-11.5 11.5S.5 18.351.5 12 5.649.5 12 .5 23.5 5.649 23.5 12z"
        fill="#fff"
        stroke="#D3D3D6"
      />
      <Path
        d="M14.667 9.333l-5.333 5.334m0-5.334l5.333 5.334"
        stroke="#ABABAD"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

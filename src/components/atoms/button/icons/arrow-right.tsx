import React from "react";
import Svg, { Path } from "react-native-svg";
import { Style } from "@styles";

export const ArrowRightSvg = () => {
  return (
    <Svg width={Style.adjust(24)} height={Style.adjust(24)} viewBox="0 0 24 24" fill="none">
      <Path d="M8 20l8-8-8-8" stroke="#6E6E70" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
};

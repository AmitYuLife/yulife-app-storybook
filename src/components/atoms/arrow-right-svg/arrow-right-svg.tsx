import React from "react";
import { Colours, Style } from "@styles";
import Svg, { Path } from "react-native-svg";

const ArrowRightSvg = ({ colour = Colours.neutral.n700 }) => {
  return (
    <Svg width={Style.adjust(24)} height={Style.adjust(24)} viewBox="0 0 24 24">
      <Path d="M8 20l8-8-8-8" stroke={colour} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
};

export default ArrowRightSvg;

import { Style } from "@styles";
import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";

export const WrongNumberIcon = memo(() => {
  return (
    <Svg width={Style.adjust(6)} height={Style.adjust(6)} viewBox="0 0 6 6" fill="none">
      <Path
        d="M5.317 1.567a.625.625 0 10-.884-.884L3 2.116 1.567.683a.625.625 0 00-.884.884L2.116 3 .683 4.433a.625.625 0 10.884.884L3 3.884l1.433 1.433a.625.625 0 10.884-.884L3.884 3l1.433-1.433z"
        fill="#DC3321"
      />
    </Svg>
  );
});

import React, { memo } from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import { Style } from "@styles";

interface IProps {
  size?: number;
}

export const StarEmptySlotIcon = memo(({ size = 17 }: IProps) => (
  <Svg width={Style.adjust(size)} height={Style.adjust(size)} fill="none" viewBox="0 0 17 17">
    <G clipPath="url(#a)">
      <Path
        fill="#E3E3E1"
        d="M8 .175s1.138 3.594 2.772 5.228S16 8.175 16 8.175s-3.594 1.138-5.228 2.772S8 16.175 8 16.175s-1.138-3.594-2.772-5.228S0 8.175 0 8.175s3.594-1.138 5.228-2.772S8 .175 8 .175Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 .175h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
));

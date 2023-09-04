import React, { memo } from "react";
import { Style } from "@styles";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

interface IStarIconProps {
  color?: string;
}

export const StarIcon = memo(({ color = "#FBCC07" }: IStarIconProps) => (
  <Svg width={Style.adjust(16)} height={Style.adjust(16)} fill="none">
    <G clipPath="url(#prefix__clip0_519:35387)">
      <Path
        d="M8.002 1.002l1.761 5.549 5.738-.013-4.65 3.418 1.786 5.542-4.635-3.439-4.634 3.439 1.786-5.542-4.65-3.418 5.738.013L8.002 1z"
        fill={color}
      />
    </G>
    <Defs>
      <ClipPath id="prefix__clip0_519:35387">
        <Path fill="#fff" transform="translate(.005 .002)" d="M0 0h15.995v15.995H0z" />
      </ClipPath>
    </Defs>
  </Svg>
));

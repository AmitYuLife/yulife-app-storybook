import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";
import { Colours, Style } from "@styles";

type Props = {
  backgroundColor?: string;
  borderColor?: string;
};

export const PopoverBeak = memo(
  ({ backgroundColor = Colours.neutral.white, borderColor = Colours.neutral.n100 }: Props) => (
    <Svg width={Style.adjust(19)} height={Style.adjust(28)} viewBox="0 0 19 28" fill="none">
      <Path d="M3.39 11.317L19 2v24L3.39 16.683c-1.853-1.105-1.853-4.26 0-5.366z" fill={backgroundColor} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 27.184L2.82 17.528C1.5 16.74.938 15.298.938 14c0-1.299.562-2.74 1.882-3.528L19 .816v26.368zm-15.61-10.5c-1.853-1.106-1.853-4.262 0-5.367L19 2v24L3.39 16.683z"
        fill={borderColor}
      />
    </Svg>
  )
);

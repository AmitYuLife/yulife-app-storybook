import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";
import { Colours, Style } from "@styles";

type Props = {
  backgroundColor?: string;
  borderColor?: string;
};

export const TooltipBeak = memo(
  ({ backgroundColor = Colours.neutral.white, borderColor = Colours.neutral.n100 }: Props) => (
    <Svg width={Style.adjust(9)} height={Style.adjust(20)} viewBox="0 0 8 20" fill="black">
      <Path
        d="M8.70712 18.2929L8.70712 2.29288L1.41423 9.58577C1.02371 9.97629 1.02371 10.6095 1.41423 11L8.70712 18.2929Z"
        fill={backgroundColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.70712 19.7071L0.707124 11.7071C-0.0739259 10.926 -0.0739234 9.65971 0.707124 8.87866L8.70712 0.878666L8.70712 19.7071ZM8.70712 2.29288L1.41423 9.58577C1.02371 9.97629 1.02371 10.6095 1.41423 11L8.70712 18.2929L8.70712 2.29288Z"
        fill={borderColor}
      />
    </Svg>
  )
);

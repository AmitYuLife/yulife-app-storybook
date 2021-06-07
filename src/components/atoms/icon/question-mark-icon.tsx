import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";
import { Style } from "@styles";

export const QuestionMarkIcon = memo(() => (
  <Svg width={Style.adjust(16)} height={Style.adjust(16)} viewBox="0 0 16 16" fill="none">
    <Path d="M8 15.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" fill="#E30D76" />
    <Path
      d="M6.666 6.64c0-.373.268-1.356 1.433-1.305.775.034 1.234.72 1.234 1.304 0 .432-.142.661-.309.932-.1.137-.425.576-.791 1.059-.193.254-.184.474-.184.754m.012 1.282H8.05"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
));

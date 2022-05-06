import React, { FC, memo } from "react";
import Svg, { Path } from "react-native-svg";

interface IProps {
  width: number | string;
  height: number | string;
  children?: React.ReactNode;
}

const _YuniversalQuestSvg: FC<IProps> = ({ width, height, children }) => (
  <Svg width={width} height={height} viewBox="0 0 375 812">
    <Path
      d="M187.75 628.56c-50.04 0-90.75-40.71-90.75-90.75s40.71-90.75 90.75-90.75 90.75 40.71 90.75 90.75-40.715 90.75-90.75 90.75Zm0-180c-49.215 0-89.25 40.04-89.25 89.25s40.035 89.25 89.25 89.25S277 587.02 277 537.81s-40.04-89.25-89.25-89.25Z"
      fill="#fff"
    />
    <Path d="M188.5 263H187v184.81h1.5V263ZM188.5 537.81H187v90h1.5v-90Z" fill="#fff" />
    {children}
  </Svg>
);

export const YuniversalQuestSvg = memo(_YuniversalQuestSvg);

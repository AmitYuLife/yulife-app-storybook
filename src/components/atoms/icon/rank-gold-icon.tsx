import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";
import { Style } from "@styles";

interface IProps {
  width?: number;
  height?: number;
}

export const RankGoldIcon = memo(({ width = 24, height = 24 }: IProps) => (
  <Svg width={Style.adjust(width)} height={Style.adjust(height)} fill="none" viewBox="0 0 24 24">
    <Path
      fill="#F9D337"
      d="M4 13.5v9.409a1 1 0 0 0 1.434.9L12 20.649l6.566 3.162A1 1 0 0 0 20 22.909V13.5l-8 4.32-8-4.32Z"
    />
    <Path fill="#FCE93D" d="M21 10.5a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    <Path
      fill="#F9D337"
      fillRule="evenodd"
      d="M22 10.5c0 5.523-4.477 10-10 10s-10-4.477-10-10S6.477.5 12 .5s10 4.477 10 10Zm-10 9a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
      clipRule="evenodd"
    />
    <Path fill="#F9D337" d="M18.364 16.864A9 9 0 0 0 5.636 4.136L12 10.5l6.364 6.364Z" />
    <Path
      fill="#F19E22"
      d="M11.418 7.7v5.712c0 .372.312.684.684.684a.692.692 0 0 0 .684-.684v-6.9a.692.692 0 0 0-.684-.684c-.18 0-.288.06-.42.144L9.954 7.088a.666.666 0 0 0 .372 1.212.63.63 0 0 0 .396-.132l.696-.468Z"
    />
  </Svg>
));

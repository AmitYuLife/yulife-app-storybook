import { Style } from "@styles";
import * as React from "react";
import { memo } from "react";
import Svg, { G, Path, Rect, Defs, ClipPath } from "react-native-svg";
import { IconProps } from "./types";

export const StreakSaverIcon = memo(({ width = 24, height = 24 }: IconProps) => {
  return (
    <Svg width={Style.adjust(width)} height={Style.adjust(height)} viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0_1483_663)">
        <Path
          d="M13.268 2H9.732a2 2 0 00-3.464 0H5a3 3 0 00-3 3v13a3 3 0 003 3h1c.69 0 .943.406 1.227.863.127.205.26.42.443.614.694.737 1.83.523 2.33.023.614-.613 1.344-1.015 2.264-1.021.984-.006 1.43.39 1.72.648l.08.072c.824.705 1.538.122 1.838-.122.04-.033.073-.06.098-.077.04-.027.097-.076.17-.139.338-.288 1.008-.861 1.83-.861h1a3 3 0 003-3V5a3 3 0 00-3-3h-2.268a2 2 0 00-3.464 0z"
          fill="#A3F5FF"
        />
        <Rect x={3} y={3} width={18} height={17} rx={2} fill="#6BDCFF" />
        <Path d="M3 5a2 2 0 012-2h14a2 2 0 012 2v3H3V5z" fill="#00C2FF" />
        <Rect x={3} y={3} width={16} height={17} rx={2} fill="#EFFDFF" />
        <Path d="M3 5a2 2 0 012-2h12a2 2 0 012 2v3H3V5z" fill="#6BDCFF" />
        <Rect x={7} y={2} width={2} height={4} rx={1} fill="#00C2FF" />
        <Rect x={14} y={2} width={2} height={4} rx={1} fill="#00C2FF" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.53 10.97a.75.75 0 010 1.06l-4 4a.75.75 0 01-1.06 0l-2-2a.75.75 0 111.06-1.06L10 14.44l3.47-3.47a.75.75 0 011.06 0z"
          fill="#569DE9"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1483_663">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
});

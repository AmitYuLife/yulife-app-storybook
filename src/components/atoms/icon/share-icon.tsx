import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";
import { Style } from "@styles";

interface IProps {
  width?: number;
  height?: number;
  color?: string;
}

export const ShareIcon = memo(({ width = Style.adjust(20), height = Style.adjust(22), color = "#5C5757" }: IProps) => (
  <Svg viewBox="0 0 20 22" fill="none" width={width} height={height}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 2a2 2 0 100 4 2 2 0 000-4zm-2.842 4.815a4 4 0 10-1.008-1.727L6.842 8.185a4 4 0 100 5.63l5.309 3.093A4.003 4.003 0 0016 22a4 4 0 10-2.839-6.818l-5.31-3.095a4.003 4.003 0 000-2.175l5.307-3.097zM5.7 9.945a1.01 1.01 0 00.057.097c.156.284.244.61.244.958a1.991 1.991 0 01-.3 1.055A1.999 1.999 0 012 11a2 2 0 013.7-1.055zm8.516 7.151a1.038 1.038 0 00.123-.208 2 2 0 11-.122.209z"
      fill={color}
    />
  </Svg>
));

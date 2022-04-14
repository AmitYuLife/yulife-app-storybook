import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";
import { Colours, Style } from "@styles";

interface Props {
  scale?: number;
  colour?: string;
}

const _LockIcon = ({ scale = 1, colour = Colours.neutral.n800 }: Props) => (
  <Svg width={Style.adjust(14 * scale)} height={Style.adjust(14 * scale)} fill="none" viewBox="0 0 14 14">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.375 2.775C4.375 1.387 5.568.292 7 .292c1.43 0 2.625 1.093 2.625 2.467v1.308a.292.292 0 1 1-.583 0V2.76C9.042 1.744 8.146.875 7 .875c-1.145 0-2.042.868-2.042 1.9v1.308a.292.292 0 1 1-.583 0V2.775Z"
      fill={colour}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.292 5.25c0-.805.653-1.458 1.458-1.458h10.5c.806 0 1.458.653 1.458 1.458v7c0 .806-.652 1.458-1.458 1.458H1.75A1.458 1.458 0 0 1 .292 12.25v-7Zm1.458-.875a.875.875 0 0 0-.875.875v7c0 .483.392.875.875.875h10.5a.875.875 0 0 0 .875-.875v-7a.875.875 0 0 0-.875-.875H1.75Z"
      fill={colour}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 7.875a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75Zm-1.458.875a1.458 1.458 0 1 1 2.916 0 1.458 1.458 0 0 1-2.916 0Z"
      fill={colour}
    />
  </Svg>
);

export const LockIcon = memo(_LockIcon);

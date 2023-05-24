import { Style } from "@styles";
import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";

const SudokuLeaderboardIcon = () => {
  return (
    <Svg width={Style.adjust(24)} height={Style.adjust(24)} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.5 4.002A2.5 2.5 0 013 1.5h18a2.5 2.5 0 012.5 2.502v15.996A2.5 2.5 0 0121 22.5H3a2.5 2.5 0 01-2.5-2.502V4.002zm12 17.497H21a1.5 1.5 0 001.5-1.5V12.5h-10v9zm-1-8.999v9H3a1.5 1.5 0 01-1.5-1.502V12.5h10zm1-1h10V4.002A1.5 1.5 0 0021 2.5h-8.5V11.5zm-1-9v9h-10V4.002A1.5 1.5 0 013 2.5h8.5z"
        fill="#5C5757"
      />
      <Path d="M6.5 8.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM17.5 18.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="#5C5757" />
    </Svg>
  );
};

export default memo(SudokuLeaderboardIcon);

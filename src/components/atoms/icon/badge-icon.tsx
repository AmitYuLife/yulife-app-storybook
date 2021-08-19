import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";
import { Style } from "@styles";

export const BadgeIcon = memo(() => {
  return (
    <Svg width={Style.adjust(22)} height={Style.adjust(22)} viewBox="0 0 22 22">
      <Path
        d="M.5 11C.5 5.201 5.201.5 11 .5S21.5 5.201 21.5 11 16.799 21.5 11 21.5.5 16.799.5 11z"
        fill="#FF5F5F"
        stroke="#fff"
      />
      <Path
        d="M10.17 12.37c0 .46.373.828.838.828a.829.829 0 00.837-.827V5.827A.829.829 0 0011.008 5a.829.829 0 00-.837.827v6.544zm.838 2.655c-.651 0-1.008.367-1.008.964 0 .705.357 1.011 1.008 1.011.635 0 .992-.306.992-1.01 0-.598-.357-.966-.992-.966z"
        fill="#fff"
      />
    </Svg>
  );
});

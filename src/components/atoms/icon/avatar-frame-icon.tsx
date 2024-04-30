import { Style } from "@styles";
import * as React from "react";
import { memo } from "react";
import Svg, { Path } from "react-native-svg";

export const AvatarFrameIcon = memo(() => {
  return (
    <Svg width={Style.adjust(24)} height={Style.adjust(24)} viewBox="0 0 24 24" fill="none">
      <Path
        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4h14c.55 0 1 .45 1 1v2.3l-7.49 7.96-4.14-4.6a.533.533 0 00-.36-.17.53.53 0 00-.37.15l-3.65 3.65V5c0-.55.45-1 1-1H5zm14 16H5c-.55 0-1-.45-1-1v-3.29l3.98-3.98 4.15 4.61c.09.1.23.16.37.17.14 0 .27-.06.36-.16L20 8.77v10.24c0 .55-.45 1-1 1V20z"
        fill="#464647"
      />
    </Svg>
  );
});

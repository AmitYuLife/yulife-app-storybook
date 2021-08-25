import { Style } from "@styles";
import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";

export const ArrowUp = memo(() => (
  <Svg width={Style.adjust(24)} height={Style.adjust(15)} viewBox="0 0 24 15">
    <Path
      d="M10.839 1.10389L0 15H24L14.039 1.16534C13.2597 0.0829188 11.6593 0.052186 10.839 1.10389Z"
      fill="#FFEB80"
    />
  </Svg>
));

import React, { memo } from "react";
import Svg, { Path, Mask, G } from "react-native-svg";
import { Style } from "../../../styles";

const SwipeArrowRight = memo(() => {
  return (
    <Svg width={Style.adjust(16)} height={Style.adjust(16)} viewBox="0 0 16 16" fill="none">
      <Mask id="mask0" x={0} y={0} width={16} height={16}>
        <Path
          d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z"
          fill="#DEDEF0"
        />
      </Mask>
      <G mask="url(#mask0)">
        <Path
          d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z"
          fill="#B60B69"
        />
        <Path
          d="M16 6.8374C16 11.2557 12.4183 14.8374 8 14.8374C3.58172 14.8374 0 11.2557 0 6.8374C0 2.41912 3.58172 -1.1626 8 -1.1626C12.4183 -1.1626 16 2.41912 16 6.8374Z"
          fill="#E30D76"
        />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.56431 4.16422C6.69448 4.03405 6.90554 4.03405 7.03571 4.16422L10.2357 7.36422C10.3659 7.4944 10.3659 7.70545 10.2357 7.83563L7.03571 11.0356C6.90554 11.1658 6.69448 11.1658 6.56431 11.0356C6.43413 10.9055 6.43413 10.6944 6.56431 10.5642L9.5286 7.59992L6.56431 4.63563C6.43413 4.50545 6.43413 4.2944 6.56431 4.16422Z"
        fill="white"
      />
    </Svg>
  );
});

export default SwipeArrowRight;

import React, { memo } from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { Style } from "@styles";

const TooltipIcon = () => (
  <Svg width={Style.adjust(18)} height={Style.adjust(18)} viewBox="0 0 18 18" fill="none">
    <Circle cx={Style.adjust(9)} cy={Style.adjust(9)} r={Style.adjust(9)} fill="white" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.3334 8.99996C16.3334 13.05 13.0502 16.3333 9.00008 16.3333C4.94999 16.3333 1.66675 13.05 1.66675 8.99996C1.66675 4.94987 4.94999 1.66663 9.00008 1.66663C13.0502 1.66663 16.3334 4.94987 16.3334 8.99996ZM8.99491 7.53493C9.30499 7.53493 9.55305 7.77995 9.55305 8.08623V12.4487C9.55305 12.7549 9.30499 13 8.99491 13C8.68484 13 8.43677 12.7549 8.43677 12.4487V8.08623C8.43677 7.77995 8.68484 7.53493 8.99491 7.53493ZM9.66675 5.67377C9.66675 6.07194 9.42902 6.31696 8.99491 6.31696C8.57114 6.31696 8.33342 6.07194 8.33342 5.67377C8.33342 5.20415 8.57114 4.99996 8.99491 4.99996C9.42902 4.99996 9.66675 5.20415 9.66675 5.67377Z"
      fill="#E30D76"
    />
  </Svg>
);

export default memo(TooltipIcon);

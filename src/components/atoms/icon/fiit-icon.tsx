import React, { FC, memo } from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { Style } from "@styles";

export const Fiit: FC = memo(() => (
  <Svg width={Style.adjust(63)} height={Style.adjust(32)} viewBox="0 0 786 394" fill="none">
    <Path d="M651.689 170.668H571.085V122.784H785.764V170.668H705.16V392.53H651.689V170.668Z" fill="white" />
    <Path
      d="M0.467743 121.986H195.196V170.668H54.7362V236.907H165.667V285.589H54.7362V392.53H0.467743V121.986Z"
      fill="white"
    />
    <Circle cx="306.521" cy="34.4197" r="34.3168" fill="white" />
    <Circle cx="463.346" cy="34.4197" r="34.3168" fill="white" />
    <Path d="M332.463 122.784H278.195V392.53H332.463V122.784Z" fill="white" />
    <Path d="M490.48 122.784H436.212V392.53H490.48V122.784Z" fill="white" />
  </Svg>
));

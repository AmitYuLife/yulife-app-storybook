import React from "react";
import Svg, { Path } from "react-native-svg";
import { Style } from "@styles";

export const BlueDoc = () => (
  <Svg width={Style.adjust(24)} height={Style.adjust(24)} viewBox="0 0 24 24">
    <Path d="M8 23a2 2 0 01-2-2V7a4 4 0 014-4h7l5 5v13a2 2 0 01-2 2H8z" fill="#D9EAFF" />
    <Path d="M17 3l5 5h-3a2 2 0 01-2-2V3z" fill="#8CC1FF" />
    <Path
      d="M14.91 13h4M16.91 10h2M12.91 16h6M8.91 19h10"
      stroke="#8CC1FF"
      strokeWidth={1.3}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.166 6.386c0-.617.564-1.1 1.172-1.2.53-.089 1.151-.302 1.67-.786a.922.922 0 00.128-.152C7.29 2.573 8.704 2.294 9.41 3c1.175 1.175 2.516 1.947 4.347 2.108.563.05 1.032.494 1.032 1.059V8.74c0 .265-.076 4.358-5.879 7.26 0 0-1.083.57-2.248-1.179-1.166-1.748-3.497-2.697-3.497-5.79V6.387z"
      fill="#469BFF"
    />
    <Path
      d="M2 6.117c0-.516.39-.948.895-1.048 1.166-.23 3.188-.798 4.313-2.084.289-.33.99-.374 1.29-.054.7.748 2.008 1.74 4.23 2.151.505.094.896.518.896 1.031v2.613s.28 4.163-5.576 7.143a.475.475 0 01-.459-.011C6.524 15.223 2 12.336 2 9.032V6.117z"
      fill="#8CC1FF"
    />
    <Path
      d="M5.91 9.5L7.243 11 9.91 8"
      stroke="#F4F9FF"
      strokeWidth={1.3}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

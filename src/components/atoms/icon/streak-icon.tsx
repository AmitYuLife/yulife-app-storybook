import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const StreakIcon: React.FC = () => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path d="M3 6.5h20V19a4 4 0 01-4 4H7a4 4 0 01-4-4V6.5z" fill="#FABCBC" />
      <Path d="M3 8.7h20V6.2a3 3 0 00-3-3H6a3 3 0 00-3 3v2.5z" fill="#FB4848" />
      <Path d="M1 6.5h20V19a4 4 0 01-4 4H5a4 4 0 01-4-4V6.5z" fill="#FAD4D4" />
      <Path d="M1 8.7h20V6.2a3 3 0 00-3-3H4a3 3 0 00-3 3v2.5z" fill="#FF7A7A" />
      <Path d="M6 2a1 1 0 012 0v3.5a1 1 0 01-2 0V2zM15 2a1 1 0 112 0v3.5a1 1 0 11-2 0V2z" fill="#FB4848" />
      <Path
        d="M16.5 12l-6.253 6.6L7.5 15.63"
        stroke="#FB4848"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

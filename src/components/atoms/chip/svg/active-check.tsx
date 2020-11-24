import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

export const ActiveCheck = () => {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16">
      <Circle cx={8} cy={8} r={8} fill="#5BA9D5" />
      <Path d="M12 5.333l-5.558 5.334L4 8.267" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
};

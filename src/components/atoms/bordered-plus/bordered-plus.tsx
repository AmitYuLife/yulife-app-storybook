import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function BorderedPlus() {
  return (
    <Svg width={42} height={42} viewBox="0 0 42 42" fill="none">
      <Path fillRule="evenodd" clipRule="evenodd" d="M22 13h-2v7h-7v2h7v7h2v-7h7v-2h-7v-7z" fill="#D9D9D7" />
      <Circle cx={21} cy={21} r={20} stroke="#D9D9D7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export default BorderedPlus;

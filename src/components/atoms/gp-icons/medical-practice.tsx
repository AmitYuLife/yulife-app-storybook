import React from "react";
import Svg, { Path, Rect, SvgProps } from "react-native-svg";

export function MedicalPracticeIcon(props: SvgProps = {}) {
  const { color = "#6E6E70" } = props;
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path d="M12 11.8v2m0 0v2m0-2h2m-2 0h-2" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <Rect x={2} y={6} width={20} height={16} rx={2} stroke={color} />
      <Path d="M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke={color} />
    </Svg>
  );
}

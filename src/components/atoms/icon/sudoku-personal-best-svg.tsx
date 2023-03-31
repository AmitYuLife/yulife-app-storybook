import { Style } from "@styles";
import { memo } from "react";
import Svg, { Path, Circle } from "react-native-svg";

interface IProps {
  width?: number;
  height?: number;
}

function SudokuPersonalBestIcon({ width = 20, height = 24 }: IProps) {
  return (
    <Svg width={Style.adjust(width)} height={Style.adjust(height)} viewBox="0 0 20 24" fill="none">
      <Path
        d="M2 13.5v9.409a1 1 0 001.434.9L10 20.649l6.566 3.162A1 1 0 0018 22.909V13.5l-8 4.32-8-4.32z"
        fill="#F9D337"
      />
      <Circle cx={9.99994} cy={10.4999} r={9.49994} fill="#FCE93D" stroke="#F9D337" />
      <Path d="M16.364 16.864A9 9 0 003.636 4.136L10 10.5l6.364 6.364z" fill="#F9D337" />
      <Path
        d="M9.419 7.7v5.712c0 .372.312.684.684.684a.692.692 0 00.684-.684v-6.9a.692.692 0 00-.684-.684c-.18 0-.288.06-.42.144L7.955 7.088A.666.666 0 008.327 8.3a.63.63 0 00.396-.132l.696-.468z"
        fill="#F8A528"
      />
    </Svg>
  );
}

export default memo(SudokuPersonalBestIcon);

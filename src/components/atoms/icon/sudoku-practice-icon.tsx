import { Style } from "@styles";
import { memo } from "react";
import Svg, { Path, Circle } from "react-native-svg";

interface IProps {
  width?: number;
  height?: number;
}

const SudokuPracticeIcon = ({ width = Style.adjust(22), height = Style.adjust(20) }: IProps) => {
  return (
    <Svg fill="none" height={height} viewBox="0 0 22 20" width={width}>
      <Path
        d="M22 3.03v12.93C22 18.19 20.21 20 18 20H6c-2.21 0-4-1.809-4-4.04V3.03C2 1.357 3.343 0 5 0h14c1.657 0 3 1.357 3 3.03z"
        fill="#7eacf0"
      />
      <Path
        d="M0 3.03C0 1.357 1.343 0 3 0h14c1.657 0 3 1.357 3 3.03l.003 12.93c0 2.231-1.791 4.04-4 4.04h-12c-2.21 0-4-1.809-4-4.04z"
        fill="#f1f7ff"
      />
      <Path d="M0 3a3 3 0 013-3h7v10H0z" fill="#caeff9" />
      <Path d="M10.5 0h-1v9.5H0v1h9.5V20h1v-9.5H20v-1h-9.5z" fill="#94ddf1" />
      <Circle cx={5} cy={5} fill="#00c0f3" r={2} />
      <Circle cx={15} cy={15} fill="#569de9" r={2} />
    </Svg>
  );
};

export default memo(SudokuPracticeIcon);

import { Style } from "@styles";
import { memo } from "react";
import Svg, { Circle, Path, Rect } from "react-native-svg";

const SudokuTodaysTimeSvg = () => {
  return (
    <Svg width={Style.adjust(24)} height={Style.adjust(24)} viewBox="0 0 24 24" fill="none">
      <Circle cx={12.5} cy={12} r={10.5} fill="#7EACF0" />
      <Circle cx={11.4762} cy={12} r={10.4762} fill="#F1F7FF" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 6.5a1 1 0 011 1v3h3a1 1 0 110 2h-4a1 1 0 01-1-1v-4a1 1 0 011-1z"
        fill="#4C8BEA"
      />
      <Rect x={10.9524} y={2.57141} width={1} height={2.09524} rx={0.5} fill="#7EACF0" />
      <Rect x={10.9524} y={19.3333} width={1} height={2.09524} rx={0.5} fill="#7EACF0" />
      <Rect x={4.66699} y={11.4762} width={1} height={2} rx={0.5} transform="rotate(90 4.667 11.476)" fill="#7EACF0" />
      <Rect x={20.381} y={11.4762} width={1} height={2} rx={0.5} transform="rotate(90 20.381 11.476)" fill="#7EACF0" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 22.5C17.299 22.5 22 17.799 22 12S17.299 1.5 11.5 1.5 1 6.201 1 12s4.701 10.5 10.5 10.5zm0-2.1a8.4 8.4 0 100-16.8 8.4 8.4 0 000 16.8z"
        fill="#B6DCFF"
      />
    </Svg>
  );
};

export default memo(SudokuTodaysTimeSvg);

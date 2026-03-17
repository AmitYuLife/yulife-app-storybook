import { Style } from "@styles";
import { memo } from "react";
import Svg, { Rect, Circle, G, Path, Defs, ClipPath } from "react-native-svg";

const SudokuTurnsTakenIcon = () => {
  return (
    <Svg width={Style.adjust(24)} height={Style.adjust(22)} viewBox="0 0 24 22" fill="none">
      <Rect width={24} height={22} rx={11} fill="#BADAFF" />
      <Circle cx={11} cy={11} r={11} fill="#70B2FF" />
      <G clipPath="url(#clip0_247_34204)">
        <Path
          d="M6.247 8.771a5.25 5.25 0 11-.197 3.979M5.75 6.625v2.333h2.333"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
        <Path
          d="M9.923 12.576v-3.47a.26.26 0 01.4-.218l2.711 1.735a.26.26 0 010 .437l-2.71 1.735a.26.26 0 01-.4-.219z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_247_34204">
          <Path fill="#fff" transform="translate(4 4)" d="M0 0H14V14H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default memo(SudokuTurnsTakenIcon);

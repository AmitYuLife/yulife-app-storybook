import { Style } from "@styles";
import { memo } from "react";
import Svg, { Rect, Circle, Path } from "react-native-svg";

const SudokuMistakesIcon = () => {
  return (
    <Svg width={Style.adjust(24)} height={Style.adjust(22)} viewBox="0 0 24 22" fill="none">
      <Rect width={24} height={22} rx={11} fill="#FABBBB" />
      <Circle cx={11} cy={11} r={11} fill="#FB4848" />
      <Path
        d="M11.12 11.976s1.072 1.52 1.568 2.208c.16.224.448.336.688.336a.86.86 0 00.864-.864c0-.24-.08-.384-.176-.528l-1.936-2.432L14 8.392a.84.84 0 00.176-.528.86.86 0 00-.864-.864.872.872 0 00-.688.336L11.12 9.4 9.616 7.336A.872.872 0 008.928 7a.86.86 0 00-.864.864.84.84 0 00.176.528l1.872 2.304-1.936 2.432a.868.868 0 00-.176.528c0 .48.384.864.864.864.24 0 .528-.112.688-.336.496-.688 1.568-2.208 1.568-2.208z"
        fill="#fff"
      />
    </Svg>
  );
};

export default memo(SudokuMistakesIcon);

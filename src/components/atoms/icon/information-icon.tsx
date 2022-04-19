import { Style } from "@styles";
import React, { memo } from "react";
import Svg, { Circle, Path, Rect } from "react-native-svg";

export const InformationIcon = memo(() => (
  <Svg width={Style.adjust(22)} height={Style.adjust(22)} viewBox="0 0 22 22" fill="none">
    <Circle cx={11} cy={11} r={10.5} fill="#F8CB31" stroke="#FCE56A" />
    <Path
      d="M12.634 7.673c0 .924-.735 1.667-1.633 1.667-.9 0-1.634-.743-1.634-1.667 0-.925.735-1.668 1.634-1.668.898 0 1.633.743 1.633 1.668Z"
      fill="#fff"
      stroke="#F8CB31"
      strokeWidth={0.4}
    />
    <Rect x={9.367} y={9.74} width={3.267} height={7.069} rx={1.633} fill="#fff" stroke="#F8CB31" strokeWidth={0.4} />
  </Svg>
));

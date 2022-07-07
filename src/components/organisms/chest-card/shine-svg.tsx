import React, { memo } from "react";
import Svg, { Path, G } from "react-native-svg";
import { Style } from "@styles";

const _ShineSvg = () => (
  <Svg width={Style.adjust(106)} height={Style.adjust(116)} viewBox="0 0 106 116">
    <G opacity="0.15">
      <Path
        d="M106 9.73509L0 115.735V101.593L101.008 0.584839C103.936 1.77363 106 4.64575 106 8.00003V9.73509Z"
        fill="white"
      />
      <Path d="M86.1615 0L0 86.1615V29.5929L29.5929 0H86.1615Z" fill="white" />
    </G>
  </Svg>
);

export const ShineSvg = memo(_ShineSvg);

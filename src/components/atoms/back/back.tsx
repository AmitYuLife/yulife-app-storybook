import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { BACK_BUTTON } from "@ids";
import { Style } from "@styles";

interface Props {
  color?: string;
  scale?: number;
}

function Back({ color = "#464647", scale = 1 }: Props) {
  return (
    <Svg
      height={String(Style.adjust(22 * scale))}
      width={String(Style.adjust(12 * scale))}
      viewBox="0 0 12 22"
      fill="none"
      testID={BACK_BUTTON}
    >
      <Path d="M11.25 0.5L0.75 11L11.25 21.5" stroke={color} strokeMiterlimit="10" strokeLinecap="round" />
    </Svg>
  );
}

export default Back;

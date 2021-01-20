import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { BACK_BUTTON } from "@ids";
import { Style, Colours } from "@styles";

interface Props {
  color?: string;
}

function Back({ color = Colours.neutral.n900 }: Props) {
  return (
    <Svg
      height={String(Style.adjust(22))}
      width={String(Style.adjust(12))}
      viewBox="0 0 12 22"
      fill="none"
      testID={BACK_BUTTON}
    >
      <Path d="M11.25 0.5L0.75 11L11.25 21.5" stroke={color} strokeMiterlimit="10" strokeLinecap="round" />
    </Svg>
  );
}

export default Back;

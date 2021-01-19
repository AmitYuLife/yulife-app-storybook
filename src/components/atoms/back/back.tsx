import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { BACK_BUTTON } from "@ids";
import { Style, Colours } from "@styles";

interface Props {
  color?: string;
}

function Back({ color = Colours.neutral.n800 }: Props) {
  return (
    <Svg width={Style.adjust(24)} height={Style.adjust(24)} viewBox="0 0 24 24" testID={BACK_BUTTON}>
      <Path d="M16 4l-8 8 8 8" stroke={color} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export default Back;

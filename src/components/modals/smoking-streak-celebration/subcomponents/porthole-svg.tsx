import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { Colours, Style } from "@styles";

// This is a mask containing a transparent circle cut out of a white square. It is used to create a porthole window effect in the SmokingStreakCelebrationModal.
export function PortholeSvg(props: SvgProps) {
  return (
    <Svg
      width={props.width ?? Style.adjust(210)}
      height={props.height ?? Style.adjust(210)}
      viewBox="0 0 248 248"
      fill="none"
      pointerEvents="box-none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M248 0H0v248h248V0zM124 230c58.542 0 106-47.458 106-106S182.542 18 124 18 18 65.458 18 124s47.458 106 106 106z"
        fill={Colours.neutral.white}
      />
    </Svg>
  );
}

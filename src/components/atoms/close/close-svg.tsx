import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { BUTTON_CLOSE } from "@ids";
import { Style } from "@styles";

interface Props {
  type?: "encircled";
  stroke?: string;
}

function CloseSvg({ type, stroke }: Props) {
  if (type === "encircled") {
    return (
      <Svg width={Style.adjust(24)} height={Style.adjust(24)} viewBox="0 0 24 24">
        <Path
          d="M23.5 12c0 6.351-5.149 11.5-11.5 11.5S.5 18.351.5 12 5.649.5 12 .5 23.5 5.649 23.5 12z"
          stroke={stroke || "#D3D3D6"}
        />
        <Path
          d="M14.667 9.333l-5.333 5.334m0-5.334l5.333 5.334"
          stroke={stroke || "#ABABAD"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  }

  return (
    <Svg
      width={Style.adjust(14).toString()}
      height={Style.adjust(14).toString()}
      viewBox="0 0 14 14"
      fill="none"
      testID={BUTTON_CLOSE}
    >
      <Path d="M1 13L13 1" stroke="#464647" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M13 13L1 1" stroke="#464647" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export default CloseSvg;

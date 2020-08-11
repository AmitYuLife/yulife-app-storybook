import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { BUTTON_CLOSE } from "@ids";

function CloseSvg() {
  return (
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none" testID={BUTTON_CLOSE}>
      <Path d="M1 13L13 1" stroke="#464647" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M13 13L1 1" stroke="#464647" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export default CloseSvg;

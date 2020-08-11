import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { BACK_BUTTON } from "@ids";

function Back() {
  return (
    <Svg width="12" height="22" viewBox="0 0 12 22" fill="none" testID={BACK_BUTTON}>
      <Path d="M11.25 0.5L0.75 11L11.25 21.5" stroke="#464647" strokeMiterlimit="10" strokeLinecap="round" />
    </Svg>
  );
}

export default Back;

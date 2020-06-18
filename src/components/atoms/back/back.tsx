import * as React from "react";
import Svg, { Polygon } from "react-native-svg";
import { BACK_BUTTON } from "@ids";

function Back() {
  return (
    <Svg viewBox="0 0 23 41" height={String(41 * 0.5)} width={String(23 * 0.5)} testID={BACK_BUTTON}>
      <Polygon fill="#333" points="20.5,40.6 0.4,20.5 20.5,0.4 22.6,2.6 4.7,20.5 22.6,38.4 " />
    </Svg>
  );
}

export default Back;

/* tslint:disable */
import * as React from "react";
import Svg, { Line, G, Circle } from "react-native-svg";
import { Style } from "@styles/index";

const RedCircleWithLine = () => (
  <Svg
    style={{
      position: "absolute",
      top: Style.SCALE_Y_UP_AND_DOWN(50),
    }}
    height={String(Style.SCALE_UP_AND_DOWN(100))}
    width={String(Style.SCALE_UP_AND_DOWN(100))}
    viewBox="0 0 200 200"
  >
    <G>
      <Circle fill="#E20177" cx="100" cy="70" r="8.5" />
      <Line fill="none" stroke="#E20177" strokeWidth="3" x1="100" y1="70" x2="100" y2="114.7" />
    </G>
  </Svg>
);

export default RedCircleWithLine;

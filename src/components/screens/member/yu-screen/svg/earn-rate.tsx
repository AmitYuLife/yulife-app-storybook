/* tslint:disable */
import * as React from "react";
import Svg, { Defs, LinearGradient, Path, Stop, G, Polygon } from "react-native-svg";
import { Style } from "@styles/index";
import { View } from "react-native";

const EarnRate = () => (
  <View style={{ position: "absolute" }}>
    <Svg
      data-name="earn-rate-gradient"
      height={String(Style.SCALE_UP_AND_DOWN(48))}
      width={String(Style.SCALE_UP_AND_DOWN(152))}
      viewBox="0 0 152 48"
    >
      <Defs>
        <LinearGradient id="linear-gradient" x1="27.49" y1="33.75" x2="160.31" y2="8.68" gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor="#ffdb42" />
          <Stop offset="1" stopColor="#f8cb31" />
        </LinearGradient>
      </Defs>
      <Path
        d="M152.5,24.5a24,24,0,0,1-24,24H24.5a24,24,0,0,1,0-48h104A24,24,0,0,1,152.5,24.5Z"
        transform="translate(-0.5 -0.5)"
        fill="url(#linear-gradient)"
      />
      <G opacity="0.17">
        <Path d="M80.36.5l-29.47,48H24.5a24,24,0,0,1,0-48Z" transform="translate(-0.5 -0.5)" fill="#fff" />
        <Polygon points="95.54 0 66.06 48 54.27 48 83.74 0 95.54 0" fill="#fff" />
      </G>
    </Svg>
  </View>
);

export default EarnRate;

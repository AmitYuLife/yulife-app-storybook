/* tslint:disable */
import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { Style } from "@styles/index";

interface Props {
  scale?: number;
  colour?: string;
}

const LevelLine: React.SFC<Props> = ({ scale = 1, colour }) => (
  <Svg
    width={String(Style.SCALE_UP_AND_DOWN(137) * scale)}
    height={String(Style.SCALE_UP_AND_DOWN(7) * scale)}
    viewBox="0 0 272 6.7926"
  >
    <G id="surface1">
      <G clipPath="url(#clip1)" clipRule="nonzero">
        <Path
          stroke={colour || "rgb(226, 226, 226)"}
          fill="none"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="miter"
          d="M 0 -0.00026875 C -20.179688 1.238012 -43.328125 2.195044 -68.5 2.7927 "
          transform="matrix(1,0,0,-1,270,4.7927)"
        />
      </G>
      <G clipPath="url(#clip2)" clipRule="nonzero">
        <Path
          stroke={colour || "rgb(226, 226, 226)"}
          fill="none"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="miter"
          d="M 0 -0.00026875 C 20.179688 1.238012 43.328125 2.195044 68.5 2.7927 "
          transform="matrix(1,0,0,-1,2,4.7927)"
        />
      </G>
    </G>
  </Svg>
);

export default LevelLine;

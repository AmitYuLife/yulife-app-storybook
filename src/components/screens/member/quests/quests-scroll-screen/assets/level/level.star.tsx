/* tslint:disable */
import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { Style } from "@styles/index";

interface Props {
  scale?: number;
  colour?: string;
}

const LevelStar: React.SFC<Props> = ({ scale = 1, colour }) => (
  <Svg
    width={String(Style.SCALE_UP_AND_DOWN(8) * scale)}
    height={String(Style.SCALE_UP_AND_DOWN(7) * scale)}
    viewBox="0 0 25.0928 24"
  >
    <G>
      <Path
        fillRule="nonzero"
        fill={colour || "rgba(198, 196, 197, 0.2)"}
        d="M 12.386719 0 L 9.441406 8.976562 L 0 9.335938 L 7.628906 14.910156 L 5.046875 24 L 12.710938 18.46875 L 20.558594 23.730469 L 17.664062 14.734375 L 25.09375 8.894531 L 15.644531 8.867188 Z M 12.386719 0 "
      />
    </G>
  </Svg>
);

export default LevelStar;

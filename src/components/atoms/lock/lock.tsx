/* tslint:disable */
import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { Colours } from "../../../styles";

interface Props {
  scale?: number;
  colour?: string;
}

const Lock: React.SFC<Props> = ({ scale = 1, colour }) => (
  <Svg width={String(21 * scale)} height={String(21 * scale)} viewBox="0 0 28 35.9167">
    <G>
      <Path
        fill={"transparent"}
        strokeWidth={3}
        stroke={colour || Colours.textInput.inactive}
        d="M 0.0001 -0.0002 L 0.0001 7.1248 C 0.0001 11.265425 -3.359275 14.6248 -7.4999 14.6248 C -11.640525 14.6248 -14.9999 11.265425 -14.9999 7.1248 L -14.9999 -0.0002 "
        transform="matrix(1,0,0,-1,21.4999,16.1248)"
      />
      <G clipPath="url(#clip1)" clipRule="nonzero">
        <Path
          fill={"transparent"}
          strokeWidth={3}
          stroke={colour || Colours.textInput.inactive}
          d="M 26.5 1.498731 L 1.5 1.498731 L 1.5 19.4167 L 26.5 19.4167 Z M 26.5 1.498731 "
          transform="matrix(1,0,0,-1,0,35.9167)"
        />
      </G>
      <Path
        fill={"transparent"}
        strokeWidth={3}
        stroke={colour || Colours.textInput.inactive}
        d="M 0.0001 0.00176875 C 0.0001 -0.552919 -0.449119 -0.998231 -0.9999 -0.998231 C -1.550681 -0.998231 -1.9999 -0.552919 -1.9999 0.00176875 C -1.9999 0.55255 -1.550681 1.001769 -0.9999 1.001769 C -0.449119 1.001769 0.0001 0.55255 0.0001 0.00176875 Z M 0.0001 0.00176875 "
        transform="matrix(1,0,0,-1,14.9999,25.4588)"
      />
    </G>
  </Svg>
);

export default Lock;

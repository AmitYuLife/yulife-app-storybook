/* tslint:disable */
import React, { SFC } from "react";
import Svg, { Path } from "react-native-svg";
import { Colours } from "../../../../styles";

interface Props {
  scale?: number;
  colour?: string;
}

const Board: SFC<Props> = ({ scale = 1, colour }) => (
  <Svg width={String(55 * scale)} height={String(55 * scale)} viewBox="0 0 52 59">
    <Path
      strokeWidth="3"
      fill={colour || Colours.textInput.inactive}
      stroke={colour || Colours.textInput.inactive}
      d="M 0 37.5 L 52 37.5 L 52 13.5 L 0 13.5 Z M 3 16.5 L 49 16.5 L 49 34.5 L 3 34.5 Z M 3 16.5 "
    />
    <Path
      fill={colour || Colours.textInput.inactive}
      stroke={colour || Colours.textInput.inactive}
      d="M 0.0002 0 L 0.0002 -20 "
      transform="matrix(1,0,0,-1,25.9998,37.5)"
      strokeWidth="3"
    />
    <Path
      fill={colour || Colours.textInput.inactive}
      stroke={colour || Colours.textInput.inactive}
      d="M 0.0002 0 L 0.0002 -4 "
      transform="matrix(1,0,0,-1,25.9998,9.5)"
      strokeWidth="3"
    />
    <Path
      fill={colour || Colours.textInput.inactive}
      stroke={colour || Colours.textInput.inactive}
      d="M 0.0002 0 L 22.0002 0 "
      transform="matrix(1,0,0,-1,14.9998,25.5)"
      strokeWidth="3"
    />
    <Path
      fill={colour || Colours.textInput.inactive}
      stroke={colour || Colours.textInput.inactive}
      d="M 0.0002 0 L 14.0002 0 "
      transform="matrix(1,0,0,-1,18.9998,57.5)"
      strokeWidth="3"
    />
    <Path
      fill={"none"}
      stroke={colour || Colours.textInput.inactive}
      d="M 0.0002 0 C 0.0002 2.210938 -1.792769 4 -3.9998 4 C -6.210738 4 -7.9998 2.210938 -7.9998 0 C -7.9998 -2.210938 -6.210738 -4 -3.9998 -4 C -1.792769 -4 0.0002 -2.210938 0.0002 0 Z M 0.0002 0 "
      transform="matrix(1,0,0,-1,29.9998,5.5)"
      strokeWidth="3"
    />
  </Svg>
);

export default Board;

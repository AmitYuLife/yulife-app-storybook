import * as React from "react";
import { SFC } from "react";
import Svg, { Polygon } from "react-native-svg";

interface IProps {
  color?: string;
  scale?: number;
}

const Back: SFC<IProps> = ({ color = "#333", scale = 0.5 }) => (
  <Svg viewBox="0 0 23 41" height={String(41 * scale)} width={String(23 * scale)}>
    <Polygon fill={color} points="20.5,40.6 0.4,20.5 20.5,0.4 22.6,2.6 4.7,20.5 22.6,38.4 " />
  </Svg>
);

export default Back;

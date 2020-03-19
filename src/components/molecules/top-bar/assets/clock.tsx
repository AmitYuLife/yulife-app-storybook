import * as React from "react";
import { SFC } from "react";
import Svg, { Path, Polygon } from "react-native-svg";

interface IProps {
    color?: string;
    scale?: number;
}

const Clock: SFC<IProps> = ({ color = "#333", scale = 0.5 }) => (
    <Svg height={String(50 * scale)} width={String(50 * scale)} viewBox="0 0 50 50">
        <Path
            fill={color}
            d="M25,3c12.1,0,22,9.9,22,22s-9.9,22-22,22S3,37.1,3,25S12.9,3,25,3 M25,0C11.2,0,0,11.2,0,25s11.2,25,25,25
		s25-11.2,25-25S38.8,0,25,0L25,0z"
        />
        <Polygon fill={color} points="40,26.5 23.5,26.5 23.5,10 26.5,10 26.5,23.5 40,23.5 	" />
    </Svg>
);

export default Clock;

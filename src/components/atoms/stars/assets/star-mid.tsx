// tslint:disable:max-line-length
import * as React from "react";
import { SFC } from "react";
import Svg, { Polygon } from "react-native-svg";

interface IProps {
    isHighlighted: boolean;
    fill?: string;
    accentFill?: string;
}

const StarMid: SFC<IProps> = ({ isHighlighted, fill = "#E2E2E2", accentFill = "#C4C4C4" }) => (
    <Svg width={String(87 * 0.5)} height={String(84 * 0.5)} viewBox="0 0 87 84">
        <Polygon
            fill={isHighlighted ? "#FBCF27" : fill}
            points="43.5,0.5 53.6,31.9 86.6,31.8 59.9,51.2 70.2,82.5 43.5,63.1 16.8,82.5 27.1,51.2 0.4,31.8 33.4,31.9 "
        />
        <Polygon fill={isHighlighted ? "#E59E00" : accentFill} points="0.4,31.8 30.6,48.8 16.8,82.5 27.1,51.2 	" />
        <Polygon fill={isHighlighted ? "#E59E00" : accentFill} points="86.6,31.8 56.4,48.8 70.2,82.5 59.9,51.2 	" />
    </Svg>
);

export default StarMid;

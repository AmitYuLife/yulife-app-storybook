// tslint:disable:max-line-length
import * as React from "react";
import { SFC } from "react";
import Svg, { Polygon } from "react-native-svg";

interface IProps {
    isHighlighted: boolean;
    fill?: string;
    accentFill?: string;
}

const StarLeft: SFC<IProps> = ({ isHighlighted, fill = "#E2E2E2", accentFill = "#C4C4C4" }) => (
    <Svg width={String(87 * 0.5)} height={String(84 * 0.5)} viewBox="0 0 87 84">
        <Polygon
            fill={isHighlighted ? "#FBCF27" : fill}
            points="42.1,0.4 33.4,32.3 0.4,33.6 28,51.8 19.1,83.6 44.9,63 72.3,81.2 60.7,50.3 86.6,29.9 53.6,31.4  "
        />
        <Polygon fill={isHighlighted ? "#E59E00" : accentFill} points="86.6,29.9 57.1,48.2 72.3,81.2 60.7,50.3    " />
        <Polygon fill={isHighlighted ? "#E59E00" : accentFill} points="0.4,33.6 31.3,49.3 19.1,83.6 28,51.8   " />
    </Svg>
);

export default StarLeft;

// tslint:disable:max-line-length
import * as React from "react";
import { SFC } from "react";
import Svg, { Polygon } from "react-native-svg";

interface IProps {
    isHighlighted: boolean;
    fill?: string;
    accentFill?: string;
}

const StarRight: SFC<IProps> = ({ isHighlighted, fill = "#E2E2E2", accentFill = "#C4C4C4" }) => (
    <Svg width={String(87 * 0.5)} height={String(84 * 0.5)} viewBox="0 0 87 84">
        <Polygon
            fill={isHighlighted ? "#FBCF27" : fill}
            points="44.9,0.4 53.6,32.3 86.6,33.6 59,51.8 67.9,83.6 42.1,63 14.7,81.2 26.3,50.3 0.4,29.9 33.4,31.4 	"
        />
        <Polygon fill={isHighlighted ? "#E59E00" : accentFill} points="0.4,29.9 29.9,48.2 14.7,81.2 26.3,50.3 	" />
        <Polygon fill={isHighlighted ? "#E59E00" : accentFill} points="86.6,33.6 55.7,49.3 67.9,83.6 59,51.8 	" />
    </Svg>
);

export default StarRight;

import * as React from "react";
import { SFC } from "react";
import { ViewStyle } from "react-native";
import Svg, {
    Circle,
    Path,
    Polygon
} from "react-native-svg";

interface IProps {
    backgroundColor?: string;
    progress: number;
    scale?: number;
    size?: number;
    style?: ViewStyle;
}

export function generateArc(percentage: number, radius: number) {
    percentage = percentage === 100 ? 99.999 : percentage;
    const a = (percentage * 2 * Math.PI) / 100;
    const r = radius;
    const rx = r;
    const ry = r;
    const xAxisRotation = 0;
    const sweepFlag = 1;
    const x = r + r * Math.sin(a);
    const y = r - r * Math.cos(a);
    let largeArcFlag = 1;
    if (percentage <= 50) {
        largeArcFlag = 0;
    } else {
        largeArcFlag = 1;
    }
    return `A${rx} ${ry} ${xAxisRotation} ${largeArcFlag} ${sweepFlag} ${x} ${y}`;
}

const Calendar: SFC<IProps> = ({
    size = 74,
    scale = 1,
    style,
    progress,
    backgroundColor = "#fff"
}) => (
    <Svg
        style={style}
        height={size * scale}
        width={size * scale}
        viewBox="0 0 74 74"
    >
        <Path
            d={`M${size / 2} ${size / 2} L${size /
                2} 0 ${generateArc(progress, size / 2)} Z`}
            fill={"rgba(255,255,255,1)"}
        />
        <Circle
            cx={size / 2}
            cy={size / 2}
            r={size / 2}
            fill={"rgba(255,255,255,0.2)"}
        />
        <Circle
            cx={size / 2}
            cy={size / 2}
            r={size / 2 - 3}
            fill={backgroundColor}
        />
        <Path
            fill="white"
            /*tslint:disable-next-line*/
            d="M49,22v-1.3c0-0.8-0.7-1.5-1.5-1.5S46,19.9,46,20.7V22H28v-1.3c0-0.8-0.7-1.5-1.5-1.5S25,19.9,25,20.7V22h-6.6 v30.8h37.4V22H49z M25,25v1.3c0,0.8,0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5V25H46v1.3c0,0.8,0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5V25h3.6v5 H21.3v-5H25z M21.3,49.8V33h31.4v16.8H21.3z"
        />
        <Polygon
            fill="white"
            points="35.8,42 32.3,38.5 30.2,40.6 35.8,46.2 43.8,38.3 41.6,36.2"
        />
    </Svg>
);

export default Calendar;

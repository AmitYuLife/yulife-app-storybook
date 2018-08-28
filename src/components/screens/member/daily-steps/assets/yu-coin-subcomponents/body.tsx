import * as React from "react";
import { SFC } from "react";
import {
    Circle,
    G,
    LinearGradient,
    Stop
} from "react-native-svg";
import { ISvgComponentProps } from "./model";

const Body: SFC<ISvgComponentProps> = ({ isGrayScale }) => (
    <G>
        <LinearGradient
            id="SVGID_3_"
            gradientUnits="userSpaceOnUse"
            x1="106"
            y1="-0.6199"
            x2="106"
            y2="214.5018"
        >
            <Stop offset="0" stopColor={isGrayScale ? "#f9f9f9" : "#FFF48E"} />
            <Stop offset="0.9955" stopColor={isGrayScale ? "#ededed" : "#FFED44"} />
        </LinearGradient>
        <Circle
            fill="url(#SVGID_3_)"
            cx="106"
            cy="106.4"
            r="105"
        />
    </G>
);

export default Body;

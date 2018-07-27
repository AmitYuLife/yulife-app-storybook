import * as React from "react";
import {
    Circle,
    G,
    LinearGradient,
    Stop,
} from "react-native-svg";

const Body = () => (
    <G>
        <LinearGradient
            id="SVGID_3_"
            gradientUnits="userSpaceOnUse"
            x1="106"
            y1="-0.6199"
            x2="106"
            y2="214.5018"
        >
            <Stop offset="0" stopColor="#FFF48E" />
            <Stop offset="0.9955" stopColor="#FFED44" />
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

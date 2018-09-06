import React from "react";
import {
    G,
    LinearGradient,
    Rect,
    Stop
} from "react-native-svg";

const Sky = () => (
    <G>
        <LinearGradient
            id="SVGID_3_"
            gradientUnits="userSpaceOnUse"
            x1="375"
            y1="676.4196"
            x2="375"
            y2="30.111"
        >
            <Stop offset="0" stopColor="#DBF7F1" />
            <Stop offset="1" stopColor="#9AE7D8" />
        </LinearGradient>
        <Rect
            fill="url(#SVGID_3_)"
            width="750"
            height="1094.4"
        />
    </G>
);

export default Sky;

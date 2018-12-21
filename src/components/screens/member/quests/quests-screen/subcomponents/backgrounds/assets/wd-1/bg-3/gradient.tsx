import React from "react";
import {
    G,
    LinearGradient,
    Rect,
    Stop
} from "react-native-svg";

const Gradient = () => (
    <G>
        <LinearGradient
            id="SVGID_3_"
            gradientUnits="userSpaceOnUse"
            x1="375.0001"
            y1="25.0032"
            x2="375.0001"
            y2="1200.4445"
        >
            <Stop offset="0" stopColor="#FEFAB9" />
            <Stop offset="0.01656" stopColor="#FEFABF" />
            <Stop offset="0.3819" stopColor="#FEFCCF" />
            <Stop offset="0.6253" stopColor="#FFFDEA" />
            <Stop offset="0.7805" stopColor="#FFFFFF" />
            <Stop offset="0.8912" stopColor="#FDF23D" />
            <Stop offset="1" stopColor="#F5661A" />
        </LinearGradient>
        <Rect
            fill="url(#SVGID_3_)"
            width="750"
            height="1208.3"
        />
    </G>
);

export default Gradient;

/* tslint:disable */
import * as React from "react";
import Svg, { LinearGradient, Stop, G, Circle } from "react-native-svg";
import { height, width } from "../../unity.styles";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Platform } from "react-native";

const OrangeCircle = () => {
    return (
        <Svg
            style={{ position: "absolute", left: isIphoneX() ? -50 : Platform.OS === "ios" ? 0 : -50, top: 50 }}
            height={String(height)}
            width={String(width)}
            viewBox="0 0 750 1334"
        >
            <G>
                <LinearGradient
                    id="SVGID_5_"
                    gradientUnits="userSpaceOnUse"
                    x1="375"
                    y1="777.6974"
                    x2="375"
                    y2="358.0952"
                >
                    <Stop offset="1.129295e-03" stopColor="#FF8971" />
                    <Stop offset="0.9045" stopColor="#F0FF28" />
                </LinearGradient>
                <Circle fill="url(#SVGID_5_)" cx="375" cy="562.4" r="221" />
            </G>
        </Svg>
    );
};

export default OrangeCircle;

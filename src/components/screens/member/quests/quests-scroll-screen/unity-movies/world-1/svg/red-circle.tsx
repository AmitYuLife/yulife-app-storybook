/* tslint:disable */
import * as React from "react";
import Svg, { Line, G, Circle } from "react-native-svg";
import { height, width } from "../../unity.styles";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Platform } from "react-native";

const RedCircleWithLine = () => (
    <Svg
        style={{
            position: "absolute",
            left: isIphoneX() ? -50 : Platform.OS === "ios" ? 0 : -50,
            top: isIphoneX() ? 50 : Platform.OS === "ios" ? 40 : 50
        }}
        height={String(height)}
        width={String(width)}
        viewBox="0 0 750 1334"
    >
        <G>
            <Circle fill="#E20177" cx="375" cy="490" r="8.5" />
            <Line fill="none" stroke="#E20177" strokeWidth="3" x1="375" y1="490" x2="375" y2="534.7" />
        </G>
    </Svg>
);

export default RedCircleWithLine;

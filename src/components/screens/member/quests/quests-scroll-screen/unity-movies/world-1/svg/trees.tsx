/* tslint:disable */
import * as React from "react";
import Svg, { Circle, Polygon, G } from "react-native-svg";
import { height, width } from "../../unity.styles";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Platform } from "react-native";

const Trees = () => (
    <Svg
        style={{ position: "absolute", left: isIphoneX() ? -50 : Platform.OS === "ios" ? 0 : -50, top: 50, zIndex: 4 }}
        height={String(height)}
        width={String(width)}
        viewBox="0 0 750 1334"
    >
        <G>
            <G>
                <Circle fill="#FE870D" cx="351.9" cy="342.8" r="59.7" />
                <Circle fill="#FF9D11" cx="404.7" cy="349" r="30.3" />
                <Polygon fill="#FF5D0F" points="404.7,352.1 399.3,397.8 410.1,397.8 " />
                <Polygon fill="#FD2F0F" points="351.9,348.9 341.3,427.9 362.6,427.9 " />
                <Circle fill="#FFA112" cx="422.7" cy="396.2" r="30.3" />
                <Polygon fill="#FF6F15" points="422.7,399.3 419,434.7 426.5,434.7 " />
                <Circle fill="#FFB40F" cx="407.3" cy="432.5" r="21.4" />
                <Polygon fill="#FF891D" points="407.3,434.7 403.5,467 411.1,467 " />
                <Circle fill="#FFDA0F" cx="375.6" cy="396.5" r="40.4" />
                <Polygon fill="#FF891D" points="375.6,400.6 368.4,461.6 382.7,461.6 " />
                <Circle fill="#EFC306" cx="329.1" cy="416.5" r="30.3" />
                <Polygon fill="#FF891D" points="329.1,419.6 323.8,474.1 334.5,474.1 " />
            </G>
        </G>
    </Svg>
);

export default Trees;

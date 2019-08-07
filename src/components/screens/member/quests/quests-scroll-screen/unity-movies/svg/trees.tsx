/* tslint:disable */
import * as React from "react";
import Svg, { Circle, Polygon, G } from "react-native-svg";
import { Style } from "@styles/index";

const Trees = () => (
    <Svg
        height={String(Style.SCALE_UP_AND_DOWN(100))}
        width={String(Style.SCALE_UP_AND_DOWN(100))}
        viewBox="-30 -20 200 200"
    >
        <G>
            <G>
                <Circle fill="#FE870D" cx="51.9" cy="42.8" r="59.7" />
                <Circle fill="#FF9D11" cx="104.7" cy="49" r="30.3" />
                <Polygon fill="#FF5D0F" points="104.7,52.1 99.3,97.8 110.1,97.8 " />
                <Polygon fill="#FD2F0F" points="51.9,48.9 41.3,127.9 62.6,127.9 " />
                <Circle fill="#FFA112" cx="122.7" cy="96.2" r="30.3" />
                <Polygon fill="#FF6F15" points="122.7,99.3 119,134.7 126.5,134.7 " />
                <Circle fill="#FFB40F" cx="107.3" cy="132.5" r="21.4" />
                <Polygon fill="#FF891D" points="107.3,134.7 103.5,167 111.1,167 " />
                <Circle fill="#FFDA0F" cx="75.6" cy="96.5" r="40.4" />
                <Polygon fill="#FF891D" points="75.6,100.6 68.4,161.6 82.7,161.6 " />
                <Circle fill="#EFC306" cx="29.1" cy="116.5" r="30.3" />
                <Polygon fill="#FF891D" points="29.1,119.6 23.8,174.1 34.5,174.1 " />
            </G>
        </G>
    </Svg>
);

export default Trees;

import React from "react";
import { Circle, G, Polygon } from "react-native-svg";

const ForestBack = () => (
    <G>
        <Circle
            fill="#CBF7EE"
            cx="129.6"
            cy="697.5"
            r="183.3"
        />
        <Circle
            fill="#81CFC5"
            cx="321.6"
            cy="850.5"
            r="99.2"
        />
        <Polygon
            fill="#95AE97"
            points="321.6,860.6 304,1010.5 339.3,1010.5"
        />
    </G>
);

export default ForestBack;

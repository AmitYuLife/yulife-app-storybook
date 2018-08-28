import * as React from "react";
import Svg, {
    LinearGradient,
    Polygon,
    Polyline,
    Rect,
    Stop
} from "react-native-svg";
import styles, {
    height,
    width
} from "./challenges-list-background.styles";

const ChallengeSetBackground = () => (
    <Svg
        style={styles.wrapper}
        viewBox="0 0 750 1334"
        width={width}
        height={height}
    >
        <LinearGradient
            id="SVGID_1_"
            gradientUnits="userSpaceOnUse"
            x1="375"
            y1="662.5845"
            x2="375"
            y2="29.4952"
        >
            <Stop offset="0" stopColor="#DBF7F1" />
            <Stop offset="1" stopColor="#9AE7D8" />
        </LinearGradient>
        <Rect
            fill="url(#SVGID_1_)"
            width="750"
            height="1072"
        />
        <Polygon
            fill="#449997"
            points="0,1052.5 750,1046.4 749.6,1334 0,1334 "
        />
        <Polyline
            fill="#337C78"
            points="0,1068.2 0,1334 750,1334 750,1075.7 "
        />
        <Polygon
            fill="#3B6D68"
            points="0,1092.6 750,1075.7 750,1334 0,1334 "
        />
    </Svg>
);

export default ChallengeSetBackground;

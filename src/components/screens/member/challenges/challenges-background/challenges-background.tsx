import * as React from "react";
import Svg, { LinearGradient, Polygon, Polyline, Rect, Stop } from "react-native-svg";
import styles, { height, width } from "./challenges-background.styles";

const ChallengesBackground = ({ currentWorld }: any) => {
    const worldStyle = getWorldStyle(currentWorld);

    return (
        <Svg style={styles.wrapper} viewBox="0 0 750 1334" width={String(width)} height={String(height)}>
            <LinearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="375" y1="662.5845" x2="375" y2="29.4952">
                <Stop offset="0" stopColor="#DBF7F1" />
                <Stop offset="1" stopColor="#9AE7D8" />
            </LinearGradient>
            <LinearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="375" y1="20" x2="375" y2="1130.218">
                <Stop offset="4.451122e-02" stopColor="#579BC1" />
                <Stop offset="0.2005" stopColor="#3F7FAC" />
                <Stop offset="0.3802" stopColor="#2B6699" />
                <Stop offset="0.5681" stopColor="#1C548C" />
                <Stop offset="0.7674" stopColor="#134984" />
                <Stop offset="0.9973" stopColor="#104681" />
            </LinearGradient>
            <Rect fill={worldStyle.rect} width="750" height="1072" />
            <Polygon fill={worldStyle.polygon1} points="0,1052.5 750,1046.4 749.6,1334 0,1334 " />
            <Polyline fill={worldStyle.polyline} points="0,1068.2 0,1334 750,1334 750,1075.7 " />
            <Polygon fill={worldStyle.polygon2} points="0,1092.6 750,1075.7 750,1334 0,1334 " />
        </Svg>
    );
};

export default ChallengesBackground;

const getWorldStyle = (currentWorld: number) => {
    switch (currentWorld) {
        case 1:
            return {
                polygon1: "#1A6090",
                polygon2: "#023A63",
                polyline: "#023D73",
                rect: "url(#SVGID_2_)"
            };
        case 0:
        default:
            return {
                polygon1: "#449997",
                polygon2: "#337C78",
                polyline: "#3B6D68",
                rect: "url(#SVGID_1_)"
            };
    }
};

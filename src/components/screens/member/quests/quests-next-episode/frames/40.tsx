/* tslint:disable */
import React from "react";
import Svg, { LinearGradient, Circle, Polygon, G, Stop, Rect, Line } from "react-native-svg";
import { platformAdjustments } from "./helpers";
import styles, { height, width } from "../../quests-screen/subcomponents/backgrounds/episode.styles";

const BackgroundImage = () => (
    <Svg style={styles.svg} height={String(height)} width={String(width)} viewBox="0 0 750 1334">
        <G {...platformAdjustments}>
        <LinearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="375" y1="-10983.3691" x2="375" y2="1061.8154">
<Stop  offset="6.060234e-02" stopColor="#F5661A"/>
<Stop  offset="0.1125" stopColor="#FDF23D"/>
<Stop  offset="0.1529" stopColor="#FFFFFF"/>
<Stop  offset="0.1805" stopColor="#F0FDFF"/>
<Stop  offset="0.2301" stopColor="#DAFBFF"/>
<Stop  offset="0.2851" stopColor="#CBF9FF"/>
<Stop  offset="0.3489" stopColor="#C2F8FF"/>
<Stop  offset="0.4423" stopColor="#BFF8FF"/>
<Stop  offset="0.5559" stopColor="#BBF7FE"/>
<Stop  offset="0.6663" stopColor="#AFF5FC"/>
<Stop  offset="0.7754" stopColor="#9CF1F8"/>
<Stop  offset="0.8837" stopColor="#80EBF2"/>
<Stop  offset="0.9905" stopColor="#5EE4EB"/>
<Stop  offset="1" stopColor="#5AE3EA"/>
</LinearGradient>
<Rect fill="url(#SVGID_1_)" width="750" height="1334"/>
<LinearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="375" y1="777.6974" x2="375" y2="358.0952">
<Stop  offset="1.129295e-03" stopColor="#FF8971"/>
<Stop  offset="0.9045" stopColor="#F0FF28"/>
</LinearGradient>
<Circle fill="url(#SVGID_2_)" cx="375" cy="562.4" r="221"/>
<Circle fill="#E20177" cx="375" cy="562.4" r="55"/>
<G>
<Circle fill="#E20177" cx="375" cy="477" r="8.5"/>
<Line fill="none" stroke="#E20177" strokeWidth="3" x1="375" y1="485.5" x2="375" y2="519.7"/>
</G>
<G>
<Circle fill="#FE870D" cx="351.9" cy="262.8" r="59.7"/>
<Circle fill="#FF9D11" cx="404.7" cy="269" r="30.3"/>
<Polygon fill="#FF5D0F" points="404.7,272.1 399.3,317.8 410.1,317.8 "/>
<Polygon fill="#FD2F0F" points="351.9,268.9 341.3,347.9 362.6,347.9 "/>
<Circle fill="#FFA112" cx="422.7" cy="316.2" r="30.3"/>
<Polygon fill="#FF6F15" points="422.7,319.3 419,354.7 426.5,354.7 "/>
<Circle fill="#FFB40F" cx="407.3" cy="352.5" r="21.4"/>
<Polygon fill="#FF891D" points="407.3,354.7 403.5,387 411.1,387 "/>
<Circle fill="#FFDA0F" cx="375.6" cy="316.5" r="40.4"/>
<Polygon fill="#FF891D" points="375.6,320.6 368.4,381.6 382.7,381.6 "/>
<Circle fill="#EFC306" cx="329.1" cy="336.5" r="30.3"/>
<Polygon fill="#FF891D" points="329.1,339.6 323.8,394.1 334.5,394.1 "/>
</G>
        </G>
    </Svg>
);

export default BackgroundImage;

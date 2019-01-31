/* tslint:disable */
import React from "react";
import Svg, { LinearGradient, Circle, Polygon, G, Stop, Rect, Line } from "react-native-svg";
import { platformAdjustments } from "./helpers";
import styles, { height, width } from "../../unity.styles";

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
<Circle fill="#FE870D" cx="351.9" cy="312.8" r="59.7"/>
<Circle fill="#FF9D11" cx="404.7" cy="319" r="30.3"/>
<Polygon fill="#FF5D0F" points="404.7,322.1 399.3,367.8 410.1,367.8 "/>
<Polygon fill="#FD2F0F" points="351.9,318.9 341.3,397.9 362.6,397.9 "/>
<Circle fill="#FFA112" cx="422.7" cy="366.2" r="30.3"/>
<Polygon fill="#FF6F15" points="422.7,369.3 419,404.7 426.5,404.7 "/>
<Circle fill="#FFB40F" cx="407.3" cy="402.5" r="21.4"/>
<Polygon fill="#FF891D" points="407.3,404.7 403.5,437 411.1,437 "/>
<Circle fill="#FFDA0F" cx="375.6" cy="366.5" r="40.4"/>
<Polygon fill="#FF891D" points="375.6,370.6 368.4,431.6 382.7,431.6 "/>
<Circle fill="#EFC306" cx="329.1" cy="386.5" r="30.3"/>
<Polygon fill="#FF891D" points="329.1,389.6 323.8,444.1 334.5,444.1 "/>
</G>
        </G>
    </Svg>
);

export default BackgroundImage;

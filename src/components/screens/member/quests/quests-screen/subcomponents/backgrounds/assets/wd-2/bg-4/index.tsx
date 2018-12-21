/* tslint:disable */
import React from "react";
import { Circle, Defs, G, Path, Polygon, Rect, Stop } from "react-native-svg";
import { Style } from "../../../../../../../../../../styles";
import { platformAdjustments, LinearGradientWithProps } from "../../helpers";

const pathPlatformAdjustments = {
    scale: Style.isShortAndroid() || Style.isShortAndWideAndroid() ? 1.1 : 1,
    translateX: Style.isShortAndroid() || Style.isShortAndWideAndroid() ? -42 : -4,
    translateY: Style.isShortAndroid() || Style.isShortAndWideAndroid() ? -120 : 0
};

const BackgroundImage: React.SFC<React.ReactNode> = ({ children }) => (
    <G {...platformAdjustments}>
        <Defs>
            <LinearGradientWithProps
                id="SVGID_1_"
                gradientUnits="userSpaceOnUse"
                x1="375"
                y1="1318.0386"
                x2="375"
                y2="49.5276"
                gradientTransform="matrix(1 0 0 -1 0 1334)"
            >
                <Stop offset="0" stopColor="#042872" />
                <Stop offset="0.5094" stopColor="#013d73" />
                <Stop offset="0.5667" stopColor="#145486" />
                <Stop offset="0.6869" stopColor="#468fb8" />
                <Stop offset="0.8423" stopColor="#8ee3ff" />
                <Stop offset="1" stopColor="#fefab9" />
            </LinearGradientWithProps>
            <LinearGradientWithProps
                id="SVGID_2_"
                gradientUnits="userSpaceOnUse"
                x1="376.8"
                y1="-6043.3882"
                x2="376.8"
                y2="-6581.8618"
                gradientTransform="matrix(1 0 0 0.5626 0 3716.9438)"
            >
                <Stop offset="0" stopColor="#ffffff" stopOpacity="0.02" />
                <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </LinearGradientWithProps>
            <LinearGradientWithProps
                id="SVGID_3_"
                gradientUnits="userSpaceOnUse"
                x1="686.15"
                y1="-6043.3882"
                x2="686.15"
                y2="-6581.8618"
                gradientTransform="matrix(1 0 0 0.5626 0 3716.9438)"
            >
                <Stop offset="0" stopColor="#ffffff" stopOpacity="0.02" />
                <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </LinearGradientWithProps>
            <LinearGradientWithProps
                id="SVGID_4_"
                gradientUnits="userSpaceOnUse"
                x1="532.55"
                y1="-6043.3882"
                x2="532.55"
                y2="-6581.8618"
                gradientTransform="matrix(1 0 0 0.5626 0 3716.9438)"
            >
                <Stop offset="0" stopColor="#ffffff" stopOpacity="0.04" />
                <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </LinearGradientWithProps>
            <LinearGradientWithProps
                id="SVGID_5_"
                gradientUnits="userSpaceOnUse"
                x1="531.05"
                y1="-6043.3882"
                x2="531.05"
                y2="-6581.8618"
                gradientTransform="matrix(1 0 0 0.5626 0 3716.9438)"
            >
                <Stop offset="0" stopColor="#ffffff" stopOpacity="0.03" />
                <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </LinearGradientWithProps>
            <LinearGradientWithProps
                id="SVGID_6_"
                gradientUnits="userSpaceOnUse"
                x1="453.2"
                y1="-6042.1992"
                x2="453.2"
                y2="-6408.8662"
                gradientTransform="matrix(1 0 0 0.5626 0 3716.9438)"
            >
                <Stop offset="0" stopColor="#ffffff" stopOpacity="0.06" />
                <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </LinearGradientWithProps>
            <LinearGradientWithProps
                id="SVGID_7_"
                gradientUnits="userSpaceOnUse"
                x1="522.3"
                y1="-6043.2598"
                x2="522.3"
                y2="-6423.5654"
                gradientTransform="matrix(1 0 0 0.5626 0 3716.9438)"
            >
                <Stop offset="3.145032e-02" stopColor="#ffffff" stopOpacity="0.08" />
                <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </LinearGradientWithProps>
            <LinearGradientWithProps
                id="SVGID_8_"
                gradientUnits="userSpaceOnUse"
                x1="563.15"
                y1="-6043.3882"
                x2="563.15"
                y2="-6581.8618"
                gradientTransform="matrix(1 0 0 0.5626 0 3716.9438)"
            >
                <Stop offset="3.211138e-02" stopColor="#ffffff" stopOpacity="0.06" />
                <Stop offset="0.9982" stopColor="#ffffff" stopOpacity="0" />
            </LinearGradientWithProps>
            <LinearGradientWithProps
                id="SVGID_9_"
                gradientUnits="userSpaceOnUse"
                x1="376.8"
                y1="1011.0325"
                x2="376.8"
                y2="472.5591"
                gradientTransform="matrix(1 0 0 -1 0 1334)"
            >
                <Stop offset="0" stopColor="#ffffff" stopOpacity="0.02" />
                <Stop offset="0.2044" stopColor="#ffffff" stopOpacity="0.03" />
                <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </LinearGradientWithProps>
            <LinearGradientWithProps
                id="SVGID_10_"
                gradientUnits="userSpaceOnUse"
                x1="686.15"
                y1="1011.0325"
                x2="686.15"
                y2="472.5591"
                gradientTransform="matrix(1 0 0 -1 0 1334)"
            >
                <Stop offset="0" stopColor="#ffffff" stopOpacity="0.02" />
                <Stop offset="0.2103" stopColor="#ffffff" stopOpacity="0.03" />
                <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </LinearGradientWithProps>
            <LinearGradientWithProps
                id="SVGID_11_"
                gradientUnits="userSpaceOnUse"
                x1="531.05"
                y1="1011.0325"
                x2="531.05"
                y2="472.5591"
                gradientTransform="matrix(1 0 0 -1 0 1334)"
            >
                <Stop offset="0" stopColor="#ffffff" stopOpacity="0.03" />
                <Stop offset="0.1769" stopColor="#ffffff" stopOpacity="0.04" />
                <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </LinearGradientWithProps>
            <LinearGradientWithProps
                id="SVGID_12_"
                gradientUnits="userSpaceOnUse"
                x1="453.2"
                y1="1012.2216"
                x2="453.2"
                y2="645.5549"
                gradientTransform="matrix(1 0 0 -1 0 1334)"
            >
                <Stop offset="0" stopColor="#ffffff" stopOpacity="0.06" />
                <Stop offset="0.1747" stopColor="#ffffb5" stopOpacity="0.13" />
                <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </LinearGradientWithProps>
            <LinearGradientWithProps
                id="SVGID_13_"
                gradientUnits="userSpaceOnUse"
                x1="532.55"
                y1="1011.0325"
                x2="532.55"
                y2="472.5591"
                gradientTransform="matrix(1 0 0 -1 0 1334)"
            >
                <Stop offset="0" stopColor="#ffffff" stopOpacity="0.04" />
                <Stop offset="0.1596" stopColor="#ffffff" stopOpacity="0.05" />
                <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </LinearGradientWithProps>
            <LinearGradientWithProps
                id="SVGID_14_"
                gradientUnits="userSpaceOnUse"
                x1="522.3"
                y1="1011.1612"
                x2="522.3"
                y2="630.8552"
                gradientTransform="matrix(1 0 0 -1 0 1334)"
            >
                <Stop offset="3.145032e-02" stopColor="#ffffff" stopOpacity="0.08" />
                <Stop offset="0.2831" stopColor="#ffffff" stopOpacity="0.1" />
                <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </LinearGradientWithProps>
            <LinearGradientWithProps
                id="SVGID_15_"
                gradientUnits="userSpaceOnUse"
                x1="563.15"
                y1="1011.0325"
                x2="563.15"
                y2="472.5591"
                gradientTransform="matrix(1 0 0 -1 0 1334)"
            >
                <Stop offset="3.211138e-02" stopColor="#ffffff" stopOpacity="0.06" />
                <Stop offset="0.2632" stopColor="#ffffb5" stopOpacity="0.11" />
                <Stop offset="0.9982" stopColor="#ffffff" stopOpacity="0" />
            </LinearGradientWithProps>
            <LinearGradientWithProps
                id="SVGID_16_"
                gradientUnits="userSpaceOnUse"
                x1="376.8"
                y1="-6043.3882"
                x2="376.8"
                y2="-6581.8618"
                gradientTransform="matrix(1 0 0 0.5626 0 3716.9438)"
            >
                <Stop offset="0" stopColor="#ffffff" stopOpacity="0.02" />
                <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </LinearGradientWithProps>
            <LinearGradientWithProps
                id="SVGID_17_"
                gradientUnits="userSpaceOnUse"
                x1="686.15"
                y1="-6043.3882"
                x2="686.15"
                y2="-6581.8618"
                gradientTransform="matrix(1 0 0 0.5626 0 3716.9438)"
            >
                <Stop offset="0" stopColor="#ffffff" stopOpacity="0.02" />
                <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </LinearGradientWithProps>
            <LinearGradientWithProps
                id="SVGID_18_"
                gradientUnits="userSpaceOnUse"
                x1="532.55"
                y1="-6043.3882"
                x2="532.55"
                y2="-6581.8618"
                gradientTransform="matrix(1 0 0 0.5626 0 3716.9438)"
            >
                <Stop offset="0" stopColor="#ffffff" stopOpacity="0.04" />
                <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </LinearGradientWithProps>
            <LinearGradientWithProps
                id="SVGID_19_"
                gradientUnits="userSpaceOnUse"
                x1="531.05"
                y1="-6043.3882"
                x2="531.05"
                y2="-6581.8618"
                gradientTransform="matrix(1 0 0 0.5626 0 3716.9438)"
            >
                <Stop offset="0" stopColor="#ffffff" stopOpacity="0.03" />
                <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </LinearGradientWithProps>
            <LinearGradientWithProps
                id="SVGID_20_"
                gradientUnits="userSpaceOnUse"
                x1="453.2"
                y1="-6042.1992"
                x2="453.2"
                y2="-6408.8662"
                gradientTransform="matrix(1 0 0 0.5626 0 3716.9438)"
            >
                <Stop offset="0" stopColor="#ffffff" stopOpacity="0.06" />
                <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </LinearGradientWithProps>
            <LinearGradientWithProps
                id="SVGID_21_"
                gradientUnits="userSpaceOnUse"
                x1="522.3"
                y1="-6043.2598"
                x2="522.3"
                y2="-6423.5654"
                gradientTransform="matrix(1 0 0 0.5626 0 3716.9438)"
            >
                <Stop offset="3.145032e-02" stopColor="#ffffff" stopOpacity="0.08" />
                <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </LinearGradientWithProps>
            <LinearGradientWithProps
                id="SVGID_22_"
                gradientUnits="userSpaceOnUse"
                x1="563.15"
                y1="-6043.3882"
                x2="563.15"
                y2="-6581.8618"
                gradientTransform="matrix(1 0 0 0.5626 0 3716.9438)"
            >
                <Stop offset="3.211138e-02" stopColor="#ffffff" stopOpacity="0.06" />
                <Stop offset="0.9982" stopColor="#ffffff" stopOpacity="0" />
            </LinearGradientWithProps>
            <LinearGradientWithProps
                id="SVGID_23_"
                gradientUnits="userSpaceOnUse"
                x1="376.8"
                y1="1011.0325"
                x2="376.8"
                y2="472.5591"
                gradientTransform="matrix(1 0 0 -1 0 1334)"
            >
                <Stop offset="0" stopColor="#ffffff" stopOpacity="0.02" />
                <Stop offset="0.2044" stopColor="#ffffff" stopOpacity="0.03" />
                <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </LinearGradientWithProps>
            <LinearGradientWithProps
                id="SVGID_24_"
                gradientUnits="userSpaceOnUse"
                x1="686.15"
                y1="1011.0325"
                x2="686.15"
                y2="472.5591"
                gradientTransform="matrix(1 0 0 -1 0 1334)"
            >
                <Stop offset="0" stopColor="#ffffff" stopOpacity="0.02" />
                <Stop offset="0.2103" stopColor="#ffffff" stopOpacity="0.03" />
                <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </LinearGradientWithProps>
            <LinearGradientWithProps
                id="SVGID_25_"
                gradientUnits="userSpaceOnUse"
                x1="531.05"
                y1="1011.0325"
                x2="531.05"
                y2="472.5591"
                gradientTransform="matrix(1 0 0 -1 0 1334)"
            >
                <Stop offset="0" stopColor="#ffffff" stopOpacity="0.03" />
                <Stop offset="0.1769" stopColor="#ffffff" stopOpacity="0.04" />
                <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </LinearGradientWithProps>
            <LinearGradientWithProps
                id="SVGID_26_"
                gradientUnits="userSpaceOnUse"
                x1="453.2"
                y1="1012.2216"
                x2="453.2"
                y2="645.5549"
                gradientTransform="matrix(1 0 0 -1 0 1334)"
            >
                <Stop offset="0" stopColor="#ffffff" stopOpacity="0.06" />
                <Stop offset="0.1747" stopColor="#ffffb5" stopOpacity="0.13" />
                <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </LinearGradientWithProps>
            <LinearGradientWithProps
                id="SVGID_27_"
                gradientUnits="userSpaceOnUse"
                x1="532.55"
                y1="1011.0325"
                x2="532.55"
                y2="472.5591"
                gradientTransform="matrix(1 0 0 -1 0 1334)"
            >
                <Stop offset="0" stopColor="#ffffff" stopOpacity="0.04" />
                <Stop offset="0.1596" stopColor="#ffffff" stopOpacity="0.05" />
                <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </LinearGradientWithProps>
            <LinearGradientWithProps
                id="SVGID_28_"
                gradientUnits="userSpaceOnUse"
                x1="522.3"
                y1="1011.1612"
                x2="522.3"
                y2="630.8552"
                gradientTransform="matrix(1 0 0 -1 0 1334)"
            >
                <Stop offset="3.145032e-02" stopColor="#ffffff" stopOpacity="0.08" />
                <Stop offset="0.2831" stopColor="#ffffff" stopOpacity="0.1" />
                <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </LinearGradientWithProps>
            <LinearGradientWithProps
                id="SVGID_29_"
                gradientUnits="userSpaceOnUse"
                x1="563.15"
                y1="1011.0325"
                x2="563.15"
                y2="472.5591"
                gradientTransform="matrix(1 0 0 -1 0 1334)"
            >
                <Stop offset="3.211138e-02" stopColor="#ffffff" stopOpacity="0.06" />
                <Stop offset="0.2632" stopColor="#ffffb5" stopOpacity="0.11" />
                <Stop offset="0.9982" stopColor="#ffffff" stopOpacity="0" />
            </LinearGradientWithProps>
            <LinearGradientWithProps
                id="SVGID_30_"
                gradientUnits="userSpaceOnUse"
                x1="375"
                y1="302.0386"
                x2="375"
                y2="3.5046"
                gradientTransform="matrix(1 0 0 -1 0 1334)"
            >
                <Stop offset="0.1742" stopColor="#ffffff" />
                <Stop offset="0.5104" stopColor="#ffffff" stopOpacity="0.0590678" />
                <Stop offset="0.5315" stopColor="#ffffff" stopOpacity="0" />
            </LinearGradientWithProps>
            <LinearGradientWithProps
                id="SVGID_31_"
                gradientUnits="userSpaceOnUse"
                x1="375"
                y1="1004.7052"
                x2="375"
                y2="1258.9919"
                gradientTransform="matrix(1 0 0 -1 0 1334)"
            >
                <Stop offset="0.2926" stopColor="#ffffff" />
                <Stop offset="0.7253" stopColor="#ffffff" stopOpacity="0.0590678" />
                <Stop offset="0.7525" stopColor="#ffffff" stopOpacity="0" />
            </LinearGradientWithProps>
        </Defs>

        <Rect width="750" height="1334" fill="url(#SVGID_1_)" />
        <G>
            <Path
                d="M291.7,556.2c0,0.8,0,1.6,0,2.4c0-0.9,0.1-1.7,0.1-2.6C291.8,556,291.8,556.1,291.7,556.2z"
                fill="#579bc1"
            />
            <Path
                d="M291.8,558.5c-0.8,25.8-1.8,52.4-2.9,80.6c0,1.2,0.6,2.8,1.4,3.5c0,0,0.1,0,0.1,0.1   c0.8,0.6,1.4,0.2,1.5-1c0.1-3.4,0.3-6.8,0.4-10.2C292.4,608.1,292.3,584,291.8,558.5z"
                fill="#579bc1"
            />
            <Path
                d="M285.4,336.6c-0.1-1.3-0.8-2.8-1.6-3.3c-0.8-0.5-1.4,0.1-1.4,1.5c1.6,29.7,3.1,57.4,4.3,83.3   c1.1,1.5,2.1,3.1,3.1,4.7C288.6,395.9,287.1,367.4,285.4,336.6z"
                fill="#579bc1"
            />
            <Path
                d="M294.5,430.6c1,1.9,2,3.9,3,5.8c0.3-29.1,0.5-59,0.4-91c-1-1.6-2-3.1-3-4.6   C295,372.3,294.8,401.9,294.5,430.6z"
                fill="#579bc1"
            />
            <Path
                d="M311.7,529.9c5.6-33.6,9-97.7,7.3-144c-1.1-2.6-2.2-5.1-3.3-7.6c2.1,39.6-0.2,96.6-4.6,134   c-0.9-26.5-2-54-3.2-83c2.6-17.5,4.6-36.5,5.8-55.3c-0.9-1.8-1.8-3.6-2.7-5.4c-0.8,14.6-2.1,29.4-3.8,43.5   c-0.8-17.8-1.6-36.2-2.5-55.3c-1-1.8-2.1-3.6-3.2-5.4c0.8,17.9,1.6,35.1,2.3,51.9c-0.3-0.8-0.7-1.5-1.2-1.9l0,0   c-0.8-0.6-1.5-0.1-1.5,1.1c-0.1,15.5-0.2,29.2-0.3,41.7c1.1,2.8,2.1,5.6,3,8.5c0.6-3,1.2-6,1.7-9.1c0.2,6.1,0.5,12.1,0.7,18   c2.2,9.4,3.4,19.3,3.4,29.4c0,6.8-0.5,13.5-1.6,20c0.2,6.1,0.4,12.1,0.6,18.1c-0.4,2.1-0.7,4.1-1.1,5.9c-0.2,1.2,0.2,2.5,1,2.9   c0.1,0,0.1,0.1,0.2,0.1s0.1,0,0.2,0c0.8,25.9,1.5,50.9,2,75.3c1-1.9,1.9-3.8,2.8-5.8C313.3,582.3,312.6,556.6,311.7,529.9z    M303.9,435.3c0.1-8.3,0.1-17.2,0.2-26.7c0.3,6.7,0.6,13.3,0.8,19.9C304.6,430.8,304.3,433.1,303.9,435.3z"
                fill="#579bc1"
            />
            <Path
                d="M317.7,549.9L317.7,549.9c0.9,0.2,1.6-0.6,1.8-1.8c3.6-28.4,7.5-93.9,8-139.5   c-0.9-2.9-1.9-5.9-3-8.8c0,45.1-4.1,117.4-8,147.3C316.3,548.5,316.9,549.7,317.7,549.9z"
                fill="#579bc1"
            />
            <Path
                d="M326.9,541.2C326.9,541.2,327,541.2,326.9,541.2c0.9,0.2,1.6-0.6,1.8-1.8c2.8-20.7,5.4-62.6,6.3-101   c-0.8-4.3-1.8-8.5-2.8-12.7c-0.6,41.3-3.5,90.4-6.5,112.8C325.6,539.7,326.1,540.9,326.9,541.2z"
                fill="#579bc1"
            />
            <Path
                d="M294.6,551.1c0.1,3.3,0.1,6.5,0.2,9.7c0.1-3.6,0.2-7.2,0.3-10.7   C294.9,550.5,294.8,550.8,294.6,551.1z"
                fill="#579bc1"
            />
            <Path
                d="M295.2,640.5c0.2-25.5,0.1-51.7-0.4-79.7c-0.7,22.8-1.5,46.1-2.5,70.7c0,4.5-0.1,9-0.1,13.5   C293.2,643.6,294.2,642.1,295.2,640.5z"
                fill="#579bc1"
            />
            <Path
                d="M303.8,529.2c-0.9,2.8-1.9,5.5-2.9,8.3c0.2,25.1,0.6,53.3,1.1,92.2c1-1.7,2-3.3,2.9-5   C304.4,584.2,304,555.5,303.8,529.2z"
                fill="#579bc1"
            />
        </G>
        <G>
            <Path
                d="M271,399.5c1,1,2,2,3,3c-1.1-28.9-2.4-60-3.8-93.6c-1-1.1-2-2.2-3.1-3.3   C268.6,339.4,269.9,370.6,271,399.5z"
                fill="#396c9e"
            />
            <Path
                d="M259.1,309.9c-0.8-0.6-1.5,0-1.5,1.3c0.6,29.4,1.1,55,1.5,78.1c1,0.8,2,1.5,3,2.3   c-0.4-23.2-0.9-48.8-1.5-78.3C260.6,312.1,259.9,310.5,259.1,309.9z"
                fill="#396c9e"
            />
            <Path
                d="M269.6,636.4c0.7,0.5,1.3,0.2,1.5-0.8c2.3-17.9,3.8-37.2,4.7-58.2c-1.1,1.2-2.2,2.3-3.3,3.4   c-0.9,18.5-2.3,35.6-4.4,51.7c-0.1,1.1,0.4,2.8,1.2,3.6C269.4,636.2,269.5,636.3,269.6,636.4z"
                fill="#396c9e"
            />
            <Path
                d="M277.1,584.5c0.8,0.6,1.4,0.2,1.5-1c0.2-3.4,0.4-6.7,0.6-10c-1.1,1.3-2.2,2.5-3.4,3.8   c-0.1,1.2-0.1,2.3-0.2,3.5s0.5,2.8,1.4,3.5C277.1,584.4,277.1,584.5,277.1,584.5z"
                fill="#396c9e"
            />
            <Path
                d="M231.2,685.5c0,1.3,0.7,2.8,1.5,3.5l0,0c0.8,0.6,1.5,0.1,1.5-1.1c0.3-38.1,0.3-62.4,0-80.6   c-1,0.4-2,0.9-2.9,1.3C231.5,626.2,231.4,649.8,231.2,685.5z"
                fill="#396c9e"
            />
            <Path
                d="M278.7,407.6c1,1.2,2,2.4,3,3.7c-0.7-27.4-1.8-57.7-3.5-93c-1-1.2-2-2.4-3.1-3.6   C276.8,350,278,380.3,278.7,407.6z"
                fill="#396c9e"
            />
            <Path
                d="M243.8,348.1c-0.1-1.3-0.8-2.8-1.6-3.4s-1.5,0.1-1.4,1.4c0.4,11.4,0.9,22.2,1.3,32.4   c1,0.5,2,1.1,3,1.6C244.7,370,244.3,359.3,243.8,348.1z"
                fill="#396c9e"
            />
            <Path
                d="M260.9,624.1L260.9,624.1c0.8,0.6,1.5,0.2,1.5-1.1c0.2-11.8,0.3-22.9,0.4-33.5c-1,0.8-2,1.6-3.1,2.4   c-0.1,9.2-0.2,18.7-0.4,28.7C259.4,621.9,260.1,623.5,260.9,624.1z"
                fill="#396c9e"
            />
            <Path
                d="M254.4,645.4C254.4,645.4,254.5,645.4,254.4,645.4c0.9,0.7,1.5,0.2,1.5-1.1   c0.3-17.4,0.6-34,0.8-50.1c-1,0.7-2,1.4-3,2.1c-0.2,14.7-0.4,29.8-0.7,45.6C252.9,643.2,253.6,644.7,254.4,645.4z"
                fill="#396c9e"
            />
            <Path
                d="M250.4,383.3c1,0.6,2,1.3,3,1.9c-1.1-29.5-2.5-61.4-4.1-97.2c-1-0.9-2-1.8-3-2.7   C247.8,321.4,249.2,353.5,250.4,383.3z"
                fill="#396c9e"
            />
            <Path
                d="M247.9,634.1L247.9,634.1c0.8,0.6,1.5,0.1,1.5-1.1c0.2-12,0.3-23.3,0.3-34.1c-1,0.6-2,1.2-3,1.8   c-0.1,9.5-0.2,19.4-0.3,29.9C246.4,631.9,247.1,633.4,247.9,634.1z"
                fill="#396c9e"
            />
            <Path
                d="M237.4,651l0.1,0.1c0.8,0.6,1.4,0.2,1.5-1c0.9-16.6,1.6-31.8,2.1-46.3c-0.8,0.4-1.6,0.8-2.4,1.2   c1.1,6.8,0.2-11.1-2.7,42.4C236,648.7,236.6,650.3,237.4,651z"
                fill="#396c9e"
            />
        </G>
        <Path
            d="M749.6,964.5V922c-0.6-3.5-1.1-5.4-1.1-5.4c3.1,19.6-10.9,41.1-20.4,54s-16.8,42.6-10.7,75.2  s-7.3,54.8-7.3,54.8l4.9,1.9c0,0,20.9-38.6,19.4-66.2s2.9-22.2,12.1-57.4C747.9,973.9,748.9,969.1,749.6,964.5z"
            fill="#437caa"
        />
        <G>
            <Path
                d="M685.5,1102.4c0,0,4.2-30.5,2.5-51.5s-12-45.7-14.2-90.7c-0.1-2.4-0.2-4.9-0.2-7.5   c-4.8,3.7-10,7.1-15.3,10.1c2.2,34.2,18,70.2,22.5,86.9c5.3,19.7-3.4,56.1-3.4,56.1L685.5,1102.4z"
                fill="#437caa"
            />
            <Path
                d="M722.5,838.8c0.4,4.3,0.7,8.7,0.7,13.1c0,26.3-8,50.7-21.6,70.9c-10.6,26.1-18.3,54.5-16.8,88.3   c1.8,38.4,6.9,41.3,4.5,89.7l8.4-0.1c0,0,1.5-41.9-1.1-68.3c-4.3-44.5,21.8-75.4,32.1-109.3c16-52.7-5.4-103.3-5.4-103.3   S723.4,827.4,722.5,838.8z"
                fill="#437caa"
            />
        </G>
        <G>
            <G>
                <Rect x="292.6" width="168.4" height="319.2" fill="url(#SVGID_2_)" />

                <Rect x="622.3" width="127.7" height="319.2" fill="url(#SVGID_3_)" />

                <Rect x="520.3" width="24.5" height="319.2" fill="url(#SVGID_4_)" />

                <Rect x="486.3" width="89.5" height="319.2" fill="url(#SVGID_5_)" />

                <Rect x="451.2" y="101.9" width="4" height="217.4" fill="url(#SVGID_6_)" />
                <G>
                    <Rect x="517.3" y="101.9" width="10" height="217.4" fill="url(#SVGID_7_)" fillOpacity="0.6" />
                </G>

                <Rect x="540.8" width="44.7" height="319.2" fill="url(#SVGID_8_)" />
            </G>
            <G>
                <Rect x="292.6" y="319.2" width="168.4" height="567.5" fill="url(#SVGID_9_)" />

                <Rect x="622.3" y="319.2" width="127.7" height="567.5" fill="url(#SVGID_10_)" />

                <Rect x="486.3" y="319.2" width="89.5" height="567.5" fill="url(#SVGID_11_)" />

                <Rect x="451.2" y="319.2" width="4" height="386.4" fill="url(#SVGID_12_)" />

                <Rect x="520.3" y="319.2" width="24.5" height="567.5" fill="url(#SVGID_13_)" />
                <G>
                    <Rect x="517.3" y="319.2" width="10" height="386.4" fill="url(#SVGID_14_)" fillOpacity="0.6" />
                </G>

                <Rect x="540.8" y="319.2" width="44.7" height="567.5" fill="url(#SVGID_15_)" />
            </G>
        </G>
        <G>
            <G>
                <Rect x="292.6" width="168.4" height="319.2" fill="url(#SVGID_16_)" />

                <Rect x="622.3" width="127.7" height="319.2" fill="url(#SVGID_17_)" />

                <Rect x="520.3" width="24.5" height="319.2" fill="url(#SVGID_18_)" />

                <Rect x="486.3" width="89.5" height="319.2" fill="url(#SVGID_19_)" />

                <Rect x="451.2" y="101.9" width="4" height="217.4" fill="url(#SVGID_20_)" />
                <G>
                    <Rect x="517.3" y="101.9" width="10" height="217.4" fill="url(#SVGID_21_)" fillOpacity="0.6" />
                </G>

                <Rect x="540.8" width="44.7" height="319.2" fill="url(#SVGID_22_)" />
            </G>
            <G>
                <Rect x="292.6" y="319.2" width="168.4" height="567.5" fill="url(#SVGID_23_)" />

                <Rect x="622.3" y="319.2" width="127.7" height="567.5" fill="url(#SVGID_24_)" />

                <Rect x="486.3" y="319.2" width="89.5" height="567.5" fill="url(#SVGID_25_)" />

                <Rect x="451.2" y="319.2" width="4" height="386.4" fill="url(#SVGID_26_)" />

                <Rect x="520.3" y="319.2" width="24.5" height="567.5" fill="url(#SVGID_27_)" />
                <G>
                    <Rect x="517.3" y="319.2" width="10" height="386.4" fill="url(#SVGID_28_)" fillOpacity="0.6" />
                </G>

                <Rect x="540.8" y="319.2" width="44.7" height="567.5" fill="url(#SVGID_29_)" />
            </G>
        </G>
        <G>
            <G>
                <Circle cx="562" cy="294.9" r="10" fill="#ffffff" fillOpacity="0.34" />
                <Circle cx="558.3" cy="291.7" r="2.6" fill="#ffffff" fillOpacity="0.3" />
            </G>
            <G>
                <Circle cx="144.8" cy="389.1" r="10" fill="#ffffff" fillOpacity="0.34" />
                <Circle cx="141.1" cy="385.8" r="2.6" fill="#ffffff" fillOpacity="0.3" />
            </G>
            <G>
                <Circle cx="205.8" cy="152" r="10" fill="#ffffff" fillOpacity="0.34" />
                <Circle cx="202.2" cy="148.8" r="2.6" fill="#ffffff" fillOpacity="0.3" />
            </G>
            <G>
                <Circle cx="616.2" cy="237.1" r="10" fill="#ffffff" fillOpacity="0.34" />
                <Circle cx="612.6" cy="233.9" r="2.6" fill="#ffffff" fillOpacity="0.3" />
            </G>
            <G>
                <Circle cx="477.2" cy="401.3" r="10" fill="#ffffff" fillOpacity="0.34" />
                <Circle cx="473.5" cy="398.1" r="2.6" fill="#ffffff" fillOpacity="0.3" />
            </G>
            <G>
                <Circle cx="663.5" cy="346.9" r="10" fill="#ffffff" fillOpacity="0.34" />
                <Circle cx="659.9" cy="343.6" r="2.6" fill="#ffffff" fillOpacity="0.3" />
            </G>
            <G>
                <Circle cx="264.7" cy="199.7" r="10" fill="#ffffff" fillOpacity="0.34" />
                <Circle cx="261.1" cy="196.5" r="2.6" fill="#ffffff" fillOpacity="0.3" />
            </G>
        </G>
        <G>
            <Path
                d="M582,630.4c9.3,35.2,13.6,29.8,12.1,57.4c-0.6,11.6,2.7,25.2,6.8,37.1c3.1,0.1,6.2,0.4,9.3,0.7   c-1-8-1.1-17.6,0.9-28.3c6.2-32.6-1.2-62.3-10.7-75.2c-4.8-6.6-10.9-15.4-15.2-25c-2.6,1-5.3,2-7.9,3.1   C577.8,609,579.1,619.3,582,630.4z"
                fill="#204d7a"
            />
            <Path
                d="M708.2,618.4c-2.6,26.4-1.1,68.3-1.1,68.3l8.4,0.1c-2.4-48.3,2.7-51.3,4.5-89.7   c0.2-4.8,0.3-9.6,0.1-14.2c-5-0.7-10-1.3-15.1-1.8C708,592.6,709.5,604.8,708.2,618.4z"
                fill="#204d7a"
            />
            <Path
                d="M739.8,586.5c-4.2-0.9-8.5-1.8-12.8-2.5c-3.9,22.8-8.9,38.7-10.1,52.9c-1.7,21,2.5,51.5,2.5,51.5   l8,3.4c0,0-8.7-36.4-3.4-56.1C726.8,625.2,734.2,607.1,739.8,586.5z"
                fill="#204d7a"
            />
            <Path
                d="M670.3,622.2c-1.5,27.6,19.4,66.2,19.4,66.2l4.9-1.9c0,0-13.4-22.2-7.3-54.8   c3.6-19.2,2.6-37.3-0.8-51.6c-2.1,0-4.1-0.1-6.2-0.1c-4.1,0-8.2,0.1-12.3,0.3c0.7,4.9,1.4,10.2,2,15.7c0.5,4.4,0.6,8.9,0.5,13.5   C670.7,612.9,670.6,616.9,670.3,622.2z"
                fill="#204d7a"
            />
            <Path
                d="M654.8,611.8c-2.2,45-12.5,69.8-14.2,90.7c-0.8,9.4-0.3,20.8,0.4,30.4c2.1,0.8,4.2,1.7,6.3,2.6   c-1.4-11.3-2.1-24.7,0.5-34.2c4.7-17.5,21.8-56.1,22.8-91.8c-0.4-11.1-3.1-14.7-7.7-29c-2.9,0.2-5.8,0.4-8.6,0.7   C654.9,591.6,655.3,602.3,654.8,611.8z"
                fill="#204d7a"
            />
            <Path
                d="M632,684c-1.3,13.6-1.6,31.5-1.5,45.5c2.8,0.8,5.5,1.6,8.2,2.6c-0.2-29.9,3.6-37.2,5.1-69.4   c1.4-29.5-4.3-54.9-12.9-78.2c-8.6,1.6-17,3.5-25.2,5.9C617.6,618.5,635.6,646.4,632,684z"
                fill="#204d7a"
            />
        </G>
        <G>
            <Path
                d="M707.9,914.2c0,0-21.4,50.6-5.4,103.3c9.7,31.7,33.2,60.8,32.6,100.9c1.6-0.3,3.2-0.7,4.7-1   l6.6-11.9c1.8-38.4-8.4-69.9-21.3-98.9C707.4,966.8,707.9,914.2,707.9,914.2z"
                fill="#62abcd"
            />
            <Path
                d="M715.9,1121.6c1.1-25-5.1-46.3-12.8-56.7c-9.5-12.9-23.5-34.3-20.4-54c0,0-7.4,27.1,1.9,62.3   c8.4,31.8,12.7,30.5,12.4,50.2C703.4,1123,709.7,1122.4,715.9,1121.6z"
                fill="#62abcd"
            />
        </G>
        <G>
            <Path
                d="M522.7,1042.3L522.7,1042.3c0.9-0.3,1.5-1.2,1.5-2.1c-2.9-30.6-4.1-56.4-3.8-85.9   c-1-0.7-2-1.5-3-2.2c-0.5,30.9,0.8,57.5,3.7,89.3C521.3,1042.1,521.9,1042.5,522.7,1042.3z"
                fill="#62abcd"
            />
            <Path
                d="M508.5,944.3c-0.7,39.5,0.7,74.7,4,112.9c0.1,0.8,0.7,1.1,1.5,0.9h0.1c0.8-0.3,1.4-1.2,1.4-2   c-3.2-37-4.6-71.1-4-109C510.5,946.2,509.5,945.3,508.5,944.3z"
                fill="#62abcd"
            />
            <Path
                d="M524.1,956.9c-2.1,48.8-1.5,86.9,4.7,119.6c0.1,0.7,0.8,1,1.5,0.8c0.1,0,0.2-0.1,0.3-0.1   c0.8-0.4,1.4-1.3,1.2-2.1c-6-31.9-6.7-69-4.8-116.3C526,958.2,525.1,957.6,524.1,956.9z"
                fill="#62abcd"
            />
            <Path
                d="M536.7,964.6c-0.5,33-0.3,62.6,0.6,105.4c0,0.8,0.7,1.3,1.5,1l0,0c0.8-0.3,1.5-1.2,1.5-2   c-0.9-41.7-1.1-70.9-0.7-102.9C538.7,965.6,537.7,965.1,536.7,964.6z"
                fill="#62abcd"
            />
            <Path
                d="M493.7,776.3c0.5-6.6,1-13.2,1.5-20c0.1-0.8-0.6-1.4-1.4-1.2s-1.5,1-1.6,1.9   c-0.6,8.2-1.2,16.1-1.7,23.9C491.4,779.4,492.5,777.8,493.7,776.3z"
                fill="#62abcd"
            />
            <Path
                d="M544,968.1c-1.4,38.2-1.4,73.5-0.1,116.9c0,0.8,0.7,1.2,1.5,1l0,0c0.8-0.3,1.5-1.2,1.5-2   c-1.3-42.5-1.3-77.3,0.1-114.6C545.9,969,544.9,968.5,544,968.1z"
                fill="#62abcd"
            />
            <Path
                d="M467.7,841.6c0.1-0.8-0.6-1.4-1.4-1.2s-1.5,1.1-1.6,1.9c-4.6,76.9-6.6,109.2-5.9,167.4   c1,1.4,2,2.8,3.1,4.2C461,952.6,462.9,920.7,467.7,841.6z"
                fill="#62abcd"
            />
            <Path
                d="M473.1,885c-0.9-3.3-1.6-6.6-2.3-10c-4.8,70-5.7,101.3-2.6,147.2c1.1,1.4,2.2,2.8,3.4,4.1   C468.2,980,468.8,949.9,473.1,885z"
                fill="#62abcd"
            />
            <Path
                d="M485.9,741.8c-0.8,0.2-1.5,1.1-1.6,1.9c-1.3,19.9-2.4,37.6-3.4,53.9c1.1-2.2,2.2-4.5,3.4-6.6   c0.9-14.7,2-30.5,3.1-48C487.4,742.1,486.7,741.6,485.9,741.8z"
                fill="#62abcd"
            />
            <Path
                d="M445.6,762.1c-0.8,0.2-1.5,1.1-1.6,1.9c-4.6,87.3-7.2,143.2-7.8,207.9c1,1.9,1.9,3.9,2.9,5.8   c0.5-67.5,3.2-124.2,7.9-214.4C447.1,762.4,446.4,761.9,445.6,762.1z"
                fill="#62abcd"
            />
            <Path
                d="M439.2,762.2c-0.8,0.2-1.5,1-1.6,1.9c-5.1,79-8.3,132.6-9.4,189.9c0.9,2.3,1.9,4.5,2.9,6.8   c1-60.3,4.2-115,9.5-197.5C440.7,762.5,440,762,439.2,762.2z"
                fill="#62abcd"
            />
            <Path
                d="M460.1,722.5c0.1-0.8-0.5-1.4-1.4-1.2c-0.8,0.2-1.6,1-1.6,1.9c-9,109.1-13.5,184.7-13,263.5   c1,1.7,2,3.5,3,5.2C446.4,910.9,450.8,834.4,460.1,722.5z"
                fill="#62abcd"
            />
            <Path
                d="M426.8,832.7c-0.8,0.2-1.5,1-1.6,1.9c-3,42.4-4.7,71.2-5.1,96.5c0.9,3,1.9,6,2.9,9   c0-27.7,1.8-58.2,5.1-106.3C428.2,833.1,427.6,832.5,426.8,832.7z"
                fill="#62abcd"
            />
            <Path
                d="M551.7,971.2c-1.7,35.8-2.1,64.2-1.2,107.6c0,0.8,0.7,1.3,1.5,1l0,0c0.8-0.3,1.5-1.2,1.5-2   c-0.9-42.6-0.5-70.7,1.2-105.6C553.6,972,552.6,971.6,551.7,971.2z"
                fill="#62abcd"
            />
            <Path
                d="M627.9,975.2c-3.3,53.1-5,96.2-5.2,142.6c1,0.2,2,0.4,3,0.6c0.1-46.9,1.8-90.4,5.2-144.1   C629.9,974.6,628.9,974.9,627.9,975.2z"
                fill="#62abcd"
            />
            <Path
                d="M419.9,810.9c-0.8,0.2-1.5,1.1-1.6,1.9c-2.3,38.6-4,66-5,91c0.8,4,1.6,7.9,2.6,11.8   c0.9-28.7,2.7-58.4,5.4-103.6C421.4,811.2,420.7,810.7,419.9,810.9z"
                fill="#62abcd"
            />
            <Path
                d="M560.8,1091.9c0.1,0.8,0.7,1.2,1.5,0.9h0.1c0.8-0.3,1.4-1.2,1.4-2c-4.8-58.6-4,11.6,2-74.7   c0-0.4-0.1-19.2-0.3-40.5c-2.1-0.5-4.3-1.1-6.4-1.7C556.8,1020.6,557.3,1048.3,560.8,1091.9z"
                fill="#62abcd"
            />
            <Path
                d="M607.9,978.6c-1,0.1-2,0.2-3,0.2c-0.6,14-1.1,27.6-1.1,40.3c-0.1,25.8,1.4,7.4,2.8,28.2   c1.4,20.6,2.9,41.8,2.7,67.2c1,0.3,2,0.6,3,0.8c0.2-26.3-1.3-48-2.7-69.2c-1.4-20.8-2.9-2.2-2.8-28   C606.9,1005.8,607.3,992.4,607.9,978.6z"
                fill="#62abcd"
            />
            <Path
                d="M408.4,851.9c0,8.7,0.4,17.2,1.2,25.7c1-24.9,2.6-51.4,4.7-82.3   C410.4,813.6,408.4,832.5,408.4,851.9z"
                fill="#62abcd"
            />
            <Path
                d="M579.3,978.1c-1-0.1-2-0.3-2.9-0.4c-2,41.5-2.8,74.1-2.6,124.5c1,0.4,2,0.8,3,1.3   C576.5,1052.3,577.4,1019.6,579.3,978.1z"
                fill="#62abcd"
            />
            <Path
                d="M654,965.2c-1,0.5-2,1-3,1.5c-1.9,62.3-2.4,102.7-1.7,155.4c1,0.1,2,0.2,3,0.3   C651.5,1069,652.1,1028.4,654,965.2z"
                fill="#62abcd"
            />
            <Path
                d="M666.1,958.1c-1,0.7-2,1.3-3.1,2c-5.4,73.2-8,110.9-7.7,162.7c1,0.1,2,0.2,3,0.3   C658,1070.4,660.7,1032.6,666.1,958.1z"
                fill="#62abcd"
            />
            <Path
                d="M643.9,969.8c-1,0.4-2,0.8-3,1.2c-0.6,58,0.3,99.3,2.9,150.4c1,0.1,2,0.3,3.1,0.4   C644.2,1070,643.2,1028.5,643.9,969.8z"
                fill="#62abcd"
            />
            <Path
                d="M637.4,1120.5c0.7-39.9,0.7-67.3,0.1-114.8c0-0.8-0.7-1.3-1.5-1l0,0c-0.8,0.3-1.5,1.2-1.5,2   c0.6,47,0.6,74.2,0,113.4C635.4,1120.2,636.4,1120.4,637.4,1120.5z"
                fill="#62abcd"
            />
            <Path
                d="M687.1,940.8c-1,1.1-2.1,2.1-3.2,3.2c-5.5,71.8-8.2,122.9-8,179.9c1,0,2,0,3,0   C678.6,1065.9,681.4,1014.2,687.1,940.8z"
                fill="#62abcd"
            />
            <Path
                d="M620.3,1048.3l0.1-9c0.3-26.5,0.9-45.7,1.7-62.8c-1,0.2-2,0.4-3,0.6c-0.9,17.2-1.4,36.4-1.7,63.1   l-0.1,9c-0.2,21.7-0.5,43.9-1.6,67c1,0.2,1.9,0.5,2.9,0.7C619.8,1093.2,620,1070.5,620.3,1048.3z"
                fill="#62abcd"
            />
            <Path
                d="M692.6,934.7c-1,1.2-2.1,2.4-3.1,3.5c-4.6,88-6.2,145.1-5,185.6c1,0,2,0,3,0   C686.2,1082.9,687.9,1025,692.6,934.7z"
                fill="#62abcd"
            />
            <Path
                d="M671.4,969.5c0.1-0.8-0.6-1.4-1.4-1.2c-0.8,0.2-1.5,1.1-1.6,1.9c-4,66.1-6,105.5-6,153.1   c1,0.1,2,0.1,3,0.2C665.4,1075.5,667.4,1036,671.4,969.5z"
                fill="#62abcd"
            />
            <Path
                d="M461.6,761.8c0-0.8-0.6-1.4-1.4-1.1c-0.9,0.2-1.5,1.1-1.6,1.9c-6.3,117.4-7.9,190.4-4.8,239.9   c1.1,1.7,2.2,3.3,3.4,5C453.5,958.1,455,884.1,461.6,761.8z"
                fill="#62abcd"
            />
            <Path
                d="M675.3,999.6c0.1-0.8-0.6-1.4-1.4-1.2c-0.8,0.2-1.5,1-1.6,1.9c-3.8,53.9-5.5,89.7-5.1,123.3   c1,0,2,0.1,3,0.1C669.8,1089.9,671.5,1054,675.3,999.6z"
                fill="#62abcd"
            />
            <Path
                d="M501.3,936.9c-1-1.2-2.1-2.3-3.1-3.5c0.6,41.6,2.2,80.3,4.7,124.7c1.1,0.9,2.1,1.8,3.2,2.7   C503.6,1016.5,501.9,978,501.3,936.9z"
                fill="#62abcd"
            />
            <Path
                d="M485.3,914.8c-0.9-1.7-1.9-3.4-2.7-5.1c-2,43.9-2.9,84.2-2.7,126c1,1.1,2,2.2,3,3.2   C482.7,997.6,483.5,957.9,485.3,914.8z"
                fill="#62abcd"
            />
            <Path
                d="M491.2,1047.3c1,0.9,1.9,1.9,2.9,2.8c1-50.8,1.3-71.5,0.7-121c-1-1.4-2.1-2.8-3.1-4.2   C492.4,977,492.2,997.5,491.2,1047.3z"
                fill="#62abcd"
            />
            <Path
                d="M477.6,952.5c0.2-18.7,0.6-35.4,1.1-51.2c-1-2.3-1.9-4.7-2.7-7.1c-0.6,18.2-1.1,37.4-1.3,59.2   l-0.1,9c-0.3,23.3-0.5,43-1.9,65c0.9,1.1,1.8,2.1,2.7,3.2c1.6-23.7,1.9-44.4,2.2-69.1L477.6,952.5z"
                fill="#62abcd"
            />
            <Path
                d="M592.6,979.1c-1,0-2-0.1-2.9-0.1c-2.5,44.9-3.4,84-2.5,128.5c1,0.4,2,0.7,3,1.1   C589.3,1063.6,590.1,1024.3,592.6,979.1z"
                fill="#62abcd"
            />
            <Path
                d="M576,977.6c-1-0.2-1.9-0.3-2.9-0.5c-5.4,70.3-8,57.1-7.6,121.4c1,0.5,2,0.9,3,1.4   C568,1033.4,570.6,1047.3,576,977.6z"
                fill="#62abcd"
            />
            <Path
                d="M599.6,979.1c-1,0-2,0-3,0c-2.3,61.4-2.2,101.8,0.2,131.7c1.1,0.3,2.1,0.7,3.2,1   C597.5,1082,597.3,1041.5,599.6,979.1z"
                fill="#62abcd"
            />
            <Path
                d="M584.6,1106.5c0.9-48.8,1.1-76.6,0.4-127.8c-1-0.1-2-0.2-3-0.3c0.6,51.3,0.5,79.1-0.4,127   C582.6,1105.8,583.6,1106.2,584.6,1106.5z"
                fill="#62abcd"
            />
        </G>
        <G>
            <Path
                d="M494.1,960.1c0.1,0,0.3-0.1,0.4-0.1c2-0.7,3.9-1.5,6.1-2.1c0.8-0.2,1.6-0.5,2.4-0.7   c0.8-0.3,1.5-0.6,2.2-1c0.5-0.3,0.9-0.7,1.3-1s0.7-0.6,1.1-0.8c0.3-0.1,0.6-0.3,1-0.4c0.4-0.1,0.9-0.3,1.4-0.6   c0.1,0.1,0.2,0.1,0.3,0.2c0.6,0.4,1.3,0.8,1.9,1.3c2.4,1.6,5.1,3.4,7.9,4.2l0,0c1,5.7,3,11.4,5,17l0.4,1.1c0.1,0.4,0.4,0.7,0.8,0.8   c0.5-0.2,1.1-0.4,1.6-0.6c0.2-0.3,0.2-0.6,0.1-1l0.1-0.1c1.4-3.4,2.3-6.6,3.1-10.1c0.1-0.1,0.2-0.2,0.3-0.3   c0.6-0.8,1.2-1.5,1.7-2.3c0.2-0.2,0.3-0.4,0.5-0.7c-1.4-0.8-2.8-1.6-4.2-2.5c-0.2,1.5-0.4,3.1-0.7,4.5c-0.6,2.7-1.2,5.1-2,7.5   c-2-5.5-3.8-11.2-4.3-16.7c-2.2-1.6-4.4-3.3-6.6-5c0.9,1.7,1.9,3.3,2.8,4.9c-1.7-0.8-3.3-1.9-5-3c-0.7-0.4-1.3-0.9-1.9-1.3   c-0.2-0.3-0.4-0.5-0.7-0.5c-0.1,0-0.1,0-0.2-0.1c-3.1-2-6.1-3.9-9.1-6.4c-1.8-1.5-4-2.6-6.1-3.6c-0.2-0.1-0.4-0.2-0.6-0.3   c-0.1-0.1-0.1-0.3-0.2-0.4c-0.1-0.3-0.3-0.7-0.6-1.2c-0.7-1-1.4-2-2.1-2.9c-0.6-0.8-1.2-1.6-1.8-2.4c-2-3-3.9-3.5-6.5-4.2l-0.6-0.2   c-1.3-0.4-2.7-0.9-4-1.6c-0.2-0.5-0.8-0.8-1.4-0.8h-0.1c-2.2-1.2-4.3-2.6-6.4-4.1c0-0.1,0-0.2,0-0.3c-0.4-1-0.7-2.1-1.1-3.2   c-0.7-2.2-1.4-4.5-2.4-6.6c-1.2-2.6-3.3-4.3-5.3-5.9c-0.9-0.7-1.9-1.5-2.7-2.3c-0.5-0.5-1.4-0.5-1.9,0s-0.5,1.4,0,1.9   c0.9,0.9,1.9,1.7,2.9,2.5c1.9,1.5,3.6,2.9,4.6,5c0.9,1.9,1.6,4.1,2.3,6.2c-3.5-2.6-6.6-5.2-9.2-7.8c-3.9-3.8-8.3-7.3-13.7-7.4   c-0.7,0-1.3,0.6-1.4,1.3c0,0.7,0.6,1.3,1.3,1.4c4.5,0.1,8.4,3.2,11.9,6.6c3.4,3.3,7.6,6.7,12.4,10.1c1.1,0.8,2.3,1.6,3.4,2.4   c-3-0.4-6-1.4-7.8-3.1c-0.5-0.5-1.4-0.5-1.9,0.1c-0.5,0.5-0.5,1.4,0.1,1.9c3.1,2.9,8.2,4,12.7,4c0.6,0,1.2,0,1.7-0.1   c1.7,0.9,3.5,1.6,5.3,2.1l0.7,0.2c2.5,0.7,3.6,1,5,3.1c0.6,0.9,1.3,1.7,1.9,2.5c0.3,0.4,0.6,0.8,0.9,1.2c-0.5-0.2-1.1-0.3-1.7-0.5   c-2.6-0.7-5.3-1.5-6.7-2.9c-0.5-0.5-1.4-0.5-1.9,0s-0.5,1.4,0,1.9c1.9,1.9,4.9,2.8,7.8,3.6c1.7,0.5,3.3,0.9,4.5,1.5   c0.1,0,0.2,0.1,0.3,0.1c0.2,0.2,0.4,0.3,0.6,0.3c0.2,0.1,0.4,0.2,0.6,0.3c1.9,0.9,4,1.9,5.5,3.3c0.9,0.8,1.8,1.4,2.7,2.1   c-0.4-0.1-0.8-0.2-1.3-0.4c-1.1-0.3-2.2-0.7-3.4-1.1c-3.3-1.1-6.8-2.2-10.3-2.8c-3.7-0.7-6.7-0.7-10.1,0c-0.2-0.2-0.4-0.4-0.5-0.7   c-0.3-0.4-0.7-0.9-1.1-1.3c-1.4-1.3-3.3-2.6-5-3.6c-2.6-1.6-3.8-2.9-5.9-5.2c-0.8-0.8-1.4-1.7-2.1-2.6c-1-1.3-2-2.7-3.3-3.8   c-0.5-0.5-1-0.8-1.5-1.2c-2.1-2.3-4.5-7.5-5.9-11.4c-0.2-0.7-1-1.1-1.7-0.8c-0.7,0.2-1.1,1-0.8,1.7c0.3,0.9,1.6,4.4,3.3,7.6   c-0.4-0.2-0.7-0.4-1.1-0.7c-4.4-3-8.3-5.8-11.4-9.1c-0.3-0.3-7.8-8.5-12.7-8.1c-0.7,0.1-1.3,0.7-1.2,1.4c0.1,0.7,0.7,1.3,1.4,1.2   c2.2-0.2,6.5,3.1,9.4,6c-0.4,0-0.9,0-1.4,0c-0.9,0-1.8,0-2.6,0.1c-1.2,0.2-2.2,0.7-3.3,1.2c-1,0.4-1.9,0.8-2.8,1   c-2.4,0.5-5.6-0.6-8.2-1.4l-0.2-0.1c-0.6-0.2-1.3-0.4-2.1-0.6c-0.4-0.1-0.9-0.3-1.4-0.4c0.2,1,0.5,2,0.7,3c0.7,0.2,1.4,0.4,1.9,0.6   l0.2,0.1c2.9,0.9,6.5,2.1,9.6,1.5c1.2-0.2,2.3-0.7,3.3-1.2c0.9-0.4,1.8-0.8,2.7-1c0.6-0.1,1.3-0.1,2-0.1c1.1,0,2.3,0.1,3.4-0.4   c0.1,0,0.1-0.1,0.2-0.1c3.1,3.1,6.8,5.7,10.9,8.5c1.1,0.7,2.1,1.3,3.2,1.8c1.5,0.8,2.9,1.5,4.2,2.7c0.5,0.5,1.1,1.1,1.5,1.6   c-1,0.5-2.1,1-3.2,1.4c-0.9,0.4-1.8,0.7-2.7,1.2c-1.1,0.5-2,1.2-2.8,1.9c-0.6-0.3-1.2-0.6-1.9-0.9c-1.3-0.6-2.6-1.2-3.7-2l-0.8-0.5   c-1.5-1-3.1-2.1-4.8-3.1c0-0.1,0-0.1-0.1-0.2c-0.3-0.6-1-0.8-1.6-0.7c-1.4-0.7-2.8-1.3-4.3-1.7c-2-0.6-4-0.4-5.9-0.3   c-1.3,0.1-2.6,0.2-3.8,0c-1.8-0.2-3.7-0.7-5.5-1.5c0.3,1.1,0.6,2.1,0.9,3.2c1.5,0.5,3,0.8,4.4,1c1.5,0.2,2.9,0.1,4.3,0   c1.8-0.1,3.5-0.2,5.1,0.2c0.6,0.2,1.2,0.4,1.8,0.6c-2.7,1.3-5.6,2.5-8.5,3.4c-1.6,0.5-3.4,1-4.8,0.6c-0.2,0-0.3-0.1-0.6-0.2   c0.3,1,0.6,2,1,3c1.8,0.2,3.6-0.3,5.2-0.8c0.8-0.2,1.6-0.5,2.3-0.8c3-1.1,5.8-2.4,8.5-3.7c1.7,1,3.4,2.1,5.1,3.2l0.8,0.5   c1.3,0.9,2.7,1.5,4.1,2.2c0.2,0.1,0.4,0.2,0.6,0.3c-0.1,0.1-0.2,0.1-0.4,0.2c-0.7,0.3-1.3,0.6-2,0.8c-2.3,1-4.8,2-6.6,4.3   c-0.7,0.9-1,1.7-1.3,2.4c-0.2,0.5-0.3,0.9-0.6,1.4c-0.8,1.5-2.7,2.1-4.7,2.6c-1.6,0.5-3.2,0.9-4.5,2c0.6,0.7,1.1,1.4,1.7,2.1   c0.8-0.7,2.1-1,3.5-1.4c2.3-0.7,4.9-1.4,6.3-3.9c0.3-0.6,0.6-1.2,0.8-1.7c0.3-0.7,0.5-1.2,0.9-1.8c1.4-1.8,3.3-2.6,5.5-3.5   c0.7-0.3,1.4-0.6,2.1-0.9c1-0.5,1.8-1,2.5-1.7c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.2-0.2,0.3-0.2c0.8-0.7,1.6-1.3,2.4-1.7   c0.9-0.4,1.7-0.8,2.6-1.1c1.3-0.5,2.6-1.1,3.9-1.8c0.7,0.9,1.3,1.7,2.1,2.6c2.2,2.4,3.6,3.8,6.5,5.6c1.6,1,3.3,2.1,4.6,3.3   c0.2,0.2,0.4,0.5,0.6,0.7c-0.1,0-0.2,0.1-0.3,0.1c-2.3,0.7-4.8,1.4-7.2,1.9c-1.1,0.2-2.1,0.6-3.2,0.9c-0.4,0.1-0.8,0.2-1.2,0.4   c-0.4-0.1-0.7,0.1-1,0.3c-0.6,0.1-1.1,0.3-1.7,0.3c-1.8,0.2-3.7-0.3-5.8-0.7c-1.3-0.3-2.7-0.6-4.1-0.7c-3.3-0.3-6,0.6-8.8,1.6   l-0.3,0.1c-0.7,0.2-1.1,1-0.8,1.7c0.2,0.7,1,1.1,1.7,0.8l0.3-0.1c2.7-1,4.9-1.8,7.6-1.5c1.2,0.1,2.4,0.4,3.8,0.7   c2.1,0.5,4.3,0.9,6.5,0.8c0.1,0,0.1,0,0.2,0c-1.5,3.6-3.5,6.4-6.4,9.1c-2.6,2.3-5.2,3.1-8.3,3.9c-0.8,0.2-1.7,0.5-2.6,0.8   c0.9,0.7,1.8,1.3,2.7,2c0.2-0.1,0.4-0.1,0.6-0.2c1.2-0.3,2.3-0.7,3.5-1.1c2-0.7,4-1.7,5.9-3.5c3.7-3.3,6-6.9,7.8-11.7   c0.4-0.1,0.8-0.2,1.2-0.4c0.8-0.3,1.6-0.5,2.3-0.7c-0.6,2-1.7,4.1-2.8,6c-0.3,0.6-0.6,1.1-0.9,1.6c-0.2,0.4-0.4,0.7-0.5,1.1   c-0.6,1.2-1.2,2.5-2,3.5c-1.2,1.7-2.9,3-4.6,4.3c-1.4,1-2.7,2-4,3.3c-0.5,0.5-0.5,1.3,0,1.8c0.3,0.2,0.5,0.3,0.8,0.5   c0.2,0,0.4,0,0.6-0.1s0.4-0.2,0.5-0.3c1.1-1.1,2.3-2,3.6-3c1.8-1.4,3.8-2.8,5.2-4.9c0.9-1.2,1.5-2.6,2.2-3.9   c0.2-0.4,0.4-0.7,0.5-1.1c0.3-0.5,0.5-1,0.8-1.6c1.3-2.5,2.8-5.3,3.3-7.9c1.7-0.4,3.4-0.9,5-1.4c0.7-0.2,1.3-0.4,1.9-0.5   c0.3,0.1,0.6,0.1,0.8,0c0.2-0.1,0.3-0.2,0.5-0.3c3-0.6,5.6-0.5,8.9,0.1s6.7,1.7,9.9,2.7c1.1,0.4,2.3,0.7,3.4,1.1   c1.9,0.6,3.7,1.1,5.4,1.6c-0.5,0.3-0.9,0.6-1.3,0.9c-0.3,0.3-0.6,0.5-0.9,0.7c-1.1,0.6-2.5,1.1-3.9,1.5c-2.3,0.7-4.2,1.4-6.3,2.2   c-2.7,1-5.5,2-8.3,2.9c-4.6,1.6-8.3,1-13.6-0.5c-0.7-0.2-1.4,0.2-1.7,0.9c-0.2,0.7,0.2,1.4,0.9,1.7c4.9,1.4,9.4,2.5,15.2,0.5   c1.1-0.4,2.2-0.8,3.3-1.1c-0.6,0.7-1.3,1.5-1.9,2.2c-2.6,3.1-5.4,6.4-6.4,8.3c-0.4,0.6-0.1,1.5,0.5,1.8c0.3,0.2,0.7,0.2,1.1,0.1   c0.3-0.1,0.6-0.3,0.7-0.6c0.9-1.7,3.7-5,6.1-7.8C491.9,963,493.4,961.2,494.1,960.1z"
                fill="#ca45b3"
            />
            <Path
                d="M413.8,891.5c1.2,0,2.4-0.2,3.5-0.3c2.6-0.2,5-0.5,7.3,0c2.5,0.5,5.6,1.9,9.1,4.1   c0.8,0.5,1.8,1,2.8,1.5c0.9,0.4,1.8,0.9,2.6,1.4c-1,0.2-2,0.2-3.2,0.3c-1.3,0-2.6,0-3.9,0c-1.4,0-2.9-0.1-4.3,0l-0.4-0.2   c-3-1.4-5.9-2.6-9.6-3.1c-1.6-0.2-3.2-0.2-4.8-0.2c-0.4,0-0.8,0-1.1,0c0.1,0.9,0.3,1.8,0.4,2.7c0.2,0,0.5,0,0.7,0   c1.6,0,3,0,4.5,0.2c1.8,0.2,3.4,0.7,5,1.3c-2.7,0.4-5.2,1-7.5,1.7c-0.5,0.2-1.2,0.4-1.9,0.7c0.2,0.9,0.3,1.8,0.5,2.7   c0.8-0.3,1.6-0.7,2.2-0.8c3.2-1,6.8-1.7,10.7-2.1c1.8-0.2,3.6-0.1,5.6-0.1c1.4,0,2.8,0.1,4.1,0c2.2-0.1,4.1-0.3,6.1-0.9   c0.2,0,0.4,0,0.6-0.1c0.1,0,0.2-0.1,0.3-0.2c0.7-0.2,1.5-0.5,2.3-0.7c2.6-0.9,4.9-1.2,7.3-0.9c0.1,0.1,0.2,0.1,0.2,0.2   c0.4,0.3,0.8,0.3,1.2,0.2c0.1,0,0.1-0.1,0.2-0.1c1.7,0.3,3.5,0.9,5.6,1.7c1.7,0.6,3.4,1.1,5.1,1.5c2.5,0.7,5.1,1.4,7.3,2.5   c1.6,1.7,3.7,3.1,5.6,4.4c0.6,0.4,1.2,0.9,1.8,1.3c1.4,1,3,1.9,4.6,2.9c0.1,0,0.1,0.1,0.2,0.1c-0.8-1.5-1.6-3-2.4-4.6   c-0.3-0.2-0.6-0.4-0.9-0.6c-0.6-0.4-1.2-0.9-1.9-1.3c-3.4-2.3-6.9-4.7-7.6-8.5c-0.1-0.4,0-0.9,0-1.5s0.1-1.2,0-1.8   c-0.1-0.8-0.4-1.5-0.7-2.2c-0.2-0.5-0.4-1-0.5-1.4c-0.6-2.7-1.5-6-2.7-9.4c-0.2-0.7-1-1.1-1.7-0.8s-1.1,1-0.8,1.7   c0.8,2.3,1.5,4.6,2.1,6.6c-1.3,0-2.8-0.6-4.1-1.6c-1.4-1.1-2.5-2.4-3.7-3.9l-0.4-0.5c-4.8-5.9-10.2-11.3-16.2-16.1   c-0.6-0.5-1.4-0.4-1.9,0.2c-0.5,0.6-0.4,1.4,0.2,1.9c5.8,4.7,11.1,9.9,15.8,15.7l0.4,0.5c1.2,1.5,2.5,3.1,4.2,4.4   c1.8,1.4,3.8,2.1,5.7,2.1c0.2,0,0.4,0,0.6-0.1c0.1,0.6,0.3,1.1,0.6,1.6c0.2,0.6,0.5,1.1,0.5,1.6c0,0.4,0,0.8,0,1.3   c-0.1,0.7-0.1,1.4,0,2.2c0.1,0.6,0.3,1.2,0.5,1.8c-1.3-0.4-2.7-0.8-4-1.2c-1.7-0.5-3.3-0.9-4.9-1.5c-2.4-0.9-4.7-1.6-7.1-1.9   c-1.9-1.5-3.8-3.6-5.5-5.8c1.6-4.4,0.1-9.7-3.5-12.6c-0.6-0.5-1.4-0.4-1.9,0.2c-0.5,0.6-0.4,1.4,0.2,1.9c2.2,1.9,3.4,4.9,3,7.8   c-1.3-1.7-2.8-3.6-4.8-4.8c0-0.1,0-0.2,0-0.3c-1-2.9-2.3-5.7-3.5-8.4c-1.6-3.5-3.1-6.9-4.2-10.6c-0.3-1.1-0.6-2.3-0.9-3.5   c-0.5-2.3-1.1-4.6-2.1-6.9l-0.3-0.7c-1.3-2.8-2.9-6.2-4.9-9.1c-0.6,0.8-1.1,1.5-1.6,2.3c1.6,2.5,3,5.5,4.1,7.9l0.3,0.7   c0.9,2,1.4,4.1,1.9,6.3c0.1,0.2,0.1,0.5,0.2,0.7c-0.9-0.8-2-1.7-3.3-2.6c-0.8-0.6-1.5-1.1-2.2-1.5c-1.7-1.1-3.1-2-4.2-3.7l-0.6-0.9   c-0.1-0.1-0.2-0.3-0.2-0.4c-0.7,1.2-1.3,2.4-1.9,3.6c0.3,0,0.7-0.1,1,0c0.1,0,0.1,0,0.2,0c1.3,1.6,2.9,2.7,4.4,3.7   c0.7,0.4,1.4,0.9,2.1,1.4c4.6,3.5,6.1,5.2,6.5,6c1,2.9,2.3,5.6,3.5,8.3c1,2.1,1.9,4.3,2.8,6.5c-0.9-0.1-1.7-0.1-2.5-0.1   c-0.9,0-1.8,0-2.6-0.2c-1.6-0.4-2.7-1.4-4-2.4c-0.6-0.5-1.1-0.9-1.8-1.4c-1.5-1-3.2-1.8-4.9-2.3c0-0.1,0-0.2,0-0.3   c-0.7-5-3.1-9.6-6.8-13.1c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0.8-0.6,1.6-0.9,2.4c2.9,2.8,5,6.6,5.7,10.6c-0.6-0.1-1.2-0.3-1.8-0.4   l-0.9-0.2c-2.2-0.5-4.1-0.2-6,0.3c-0.2,1-0.5,2-0.7,3c0.1,0,0.1,0,0.2-0.1c2.1-0.6,3.9-1.1,5.9-0.6l0.9,0.2   c2.9,0.7,6.2,1.5,8.5,3.1c0.6,0.4,1.1,0.8,1.6,1.3c1.4,1.2,2.9,2.4,5,3c1.2,0.3,2.3,0.3,3.4,0.3c1.2,0,2.3-0.1,3.3,0.4   c2.1,0.8,3.7,2.9,5.2,4.9l0.1,0.1c1.6,2.2,3.4,4.5,5.3,6.4c-1.6,0.1-3.3,0.4-5.1,1.1c-0.6,0.2-1.2,0.4-1.8,0.6   c-1.3-1.2-3.1-2.1-4.8-3c-0.9-0.5-1.8-0.9-2.6-1.4c-3.8-2.4-7.2-3.9-10.1-4.5c-2.7-0.5-5.5-0.3-8.1,0c-1.1,0.1-2.2,0.2-3.3,0.3   c-0.9,0-1.9,0-2.8-0.1c0.1,0.9,0.2,1.8,0.4,2.7C412.1,891.6,412.9,891.6,413.8,891.5z"
                fill="#ca45b3"
            />
            <Path
                d="M480.3,917c-1.9-1.3-3.9-2.7-5.4-4.2c-0.5-0.5-1.4-0.6-1.9,0c-0.5,0.5-0.6,1.4,0,1.9   c1.7,1.8,3.8,3.2,5.8,4.6c1.2,0.8,2.3,1.6,3.4,2.4c2.6,2.1,7.1,5.2,11.6,6c-0.9-1.2-1.7-2.3-2.5-3.5c-3.1-1.3-5.9-3.4-7.4-4.6   C482.7,918.6,481.4,917.8,480.3,917z"
                fill="#ca45b3"
            />
            <Path
                d="M474.4,810.7v1c0,0.9,0,1.7,0,2.6c0.6-1.8,1.2-3.6,1.8-5.4c-1.1,0.3-2.2,0.5-3.3,0.9   C473.4,810.1,473.9,810.4,474.4,810.7z"
                fill="#ca45b3"
            />
            <Path
                d="M463.1,866.3c-1.8-0.9-3.7-1.4-5.6-2c-1.2-0.3-2.3-0.6-3.4-1s-2.3-0.7-3.4-1c-1.6-0.4-3-0.7-4.4-1.4   c-3.6-1.8-7.5-4.4-8.1-5.9c-0.3-0.7-1.1-1-1.7-0.7c-0.7,0.3-1,1.1-0.7,1.7c1.2,3,7.5,6.3,9.4,7.2c1.6,0.8,3.3,1.2,4.9,1.6   c1.1,0.3,2.1,0.5,3.1,0.9c1.2,0.4,2.4,0.8,3.5,1.1c1.8,0.5,3.6,1,5.1,1.8c0.9,0.4,1.7,1.1,2.6,1.8c1.2,1,2.5,2,4,2.5   c0.8,2.9,1.9,5.7,3.2,8.6c0.3,0.6,0.5,1.1,0.8,1.7c-2.5-10-3.9-20.5-3.9-31.3c0-1.6,0-3.2,0.1-4.7c-0.2-2.4-0.6-4.7-1.5-7.5   c-1.3-3.7-2.6-7.1-2.7-11c-0.1-1.4-0.2-2.7-0.3-3.9c0.4-0.8,0.8-1.5,1.2-2.3c0.4-0.8,0.7-1.5,1.1-2.2l0.3-0.5   c1.3-2.2,3-5.3,1.4-8.4c0-0.1-0.1-0.1-0.1-0.1c-0.8,0.3-1.6,0.6-2.4,0.9c0,0.2,0.1,0.3,0.1,0.5c1,1.9-0.2,3.9-1.3,5.9l-0.3,0.5   c-0.3,0.5-0.5,1-0.8,1.5c-0.4-1.4-0.9-2.9-1.5-4.5c-0.3-0.7-0.6-1.3-0.9-1.9c-0.8,0.4-1.6,0.7-2.4,1.1c0.3,0.6,0.6,1.2,0.9,1.8   c1.1,2.7,1.7,4.9,2,7.3c0,0,0,0.1-0.1,0.1c-0.4,0.6-0.2,1.3,0.3,1.7c0.1,0.8,0.1,1.7,0.2,2.7c0,0.6,0.1,1.2,0.2,1.8   c-0.6-0.4-1.2-0.8-1.8-1.3c-1.1-0.7-2.1-1.4-2.7-2.1c-2.1-2.1-4.5-3.8-6.8-5.4c-0.6-0.4-1.2-0.9-1.8-1.3c-0.8,0.5-1.6,1.1-2.4,1.6   c0.9,0.6,1.8,1.3,2.7,1.9c1.4,1,2.8,2,4.1,3c-3.6-0.4-7.1-0.8-9.9-2.6c-0.7,0.6-1.5,1.1-2.2,1.7c3.5,2.7,7.9,3.2,12.2,3.6   c1.1,0.1,2.2,0.2,3.2,0.4h0.1c0.6,0.5,1.3,0.9,2,1.4c1.5,1,3.2,2.1,3.7,3.2c0.1,0.2,0.3,0.4,0.5,0.5c0.5,1.8,1.1,3.5,1.8,5.3   c1.6,4.3,1.5,7.5,1.5,11.9c0,0.7,0,1.4,0,2.1c0,2.8,0.1,5.5,0.4,8c-2.6-2.1-5.3-4.2-7.9-6c-0.4-2.7-1.1-5.1-2.6-8.1   c-0.9-1.8-1.9-3.4-3.5-5c-0.4-0.4-0.7-0.7-1.1-1.1c-0.9-1-1.9-1.9-2.9-2.8c-0.6-0.5-1.2-0.9-1.8-1.3c-0.8-0.5-1.5-1-2-1.6   s-1.3-0.6-1.9-0.1s-0.6,1.3-0.1,1.9c0.7,0.9,1.7,1.5,2.6,2.1c0.5,0.4,1.1,0.7,1.5,1.1c0.9,0.8,1.8,1.8,2.7,2.7   c0.4,0.4,0.7,0.8,1.1,1.1c1.2,1.2,2,2.5,3,4.4c0.9,1.7,1.4,3.2,1.8,4.6c-2.2-1.4-4.3-2.7-6.2-3.8c-0.8-0.5-1.8-0.9-2.7-1.4   c-2.5-1.2-5.1-2.5-6.7-4.3c-1.9-2.1-3.1-5.9-4.1-9.2l-0.4-1.4c-0.2-0.8-0.5-1.6-0.7-2.3c-0.7,0.7-1.4,1.4-2.1,2.2   c0.1,0.3,0.2,0.6,0.3,1l0.4,1.4c0.1,0.2,0.1,0.4,0.2,0.6c-0.8-0.4-1.7-0.8-2.5-1.3c-0.6,0.7-1.2,1.4-1.8,2.1l0,0   c1.7,0.9,3.7,2,5.3,2.3c0.9,2.4,1.9,4.8,3.5,6.4c2,2.2,4.8,3.6,7.5,4.9c0.9,0.4,1.8,0.9,2.6,1.3c5.5,3,12.6,8.1,19.1,13.6   c0.2,1,0.3,2,0.6,2.9c-0.5-0.3-1-0.7-1.5-1.1C465.3,867.6,464.3,866.9,463.1,866.3z"
                fill="#ca45b3"
            />
        </G>
        <G>
            <Path
                d="M413,836.7c1.4,0,2.8,0.1,4.1,0c2.2-0.1,4.1-0.3,6.1-0.9c0.2,0,0.4,0,0.6-0.1c0.1,0,0.2-0.1,0.3-0.2   c0.7-0.2,1.5-0.5,2.3-0.7c2.6-0.9,4.9-1.2,7.3-0.9c0.1,0.1,0.2,0.1,0.2,0.2c0.4,0.3,0.8,0.3,1.2,0.2c0.1,0,0.1-0.1,0.2-0.1   c1.7,0.3,3.5,0.9,5.6,1.7c1.7,0.6,3.4,1.1,5.1,1.5c2.5,0.7,5.1,1.4,7.3,2.5c1.6,1.7,3.7,3.1,5.6,4.4c0.6,0.4,1.2,0.9,1.8,1.3   c1.4,1,3,1.9,4.6,2.9c1.2,0.7,2.4,1.4,3.5,2.1c0-1,0-2.1,0.1-3.1c-0.7-0.4-1.5-0.9-2.2-1.3c-1.6-0.9-3.1-1.8-4.4-2.7   c-0.6-0.4-1.2-0.9-1.9-1.3c-3.4-2.3-6.9-4.7-7.6-8.5c-0.1-0.4,0-0.9,0-1.5s0.1-1.2,0-1.8c-0.1-0.8-0.4-1.5-0.7-2.2   c-0.2-0.5-0.4-1-0.5-1.4c-0.6-2.7-1.5-6-2.7-9.4c-0.2-0.7-1-1.1-1.7-0.8s-1.1,1-0.8,1.7c0.8,2.3,1.5,4.6,2.1,6.6   c-1.3,0-2.8-0.6-4.1-1.6c-1.4-1.1-2.5-2.4-3.7-3.9l-0.4-0.5c-4.8-5.9-10.2-11.3-16.2-16.1c-0.6-0.5-1.4-0.4-1.9,0.2   c-0.5,0.6-0.4,1.4,0.2,1.9c5.8,4.7,11.1,9.9,15.8,15.7l0.4,0.5c1.2,1.5,2.5,3.1,4.2,4.4c1.8,1.4,3.8,2.1,5.7,2.1   c0.2,0,0.4,0,0.6-0.1c0.1,0.6,0.3,1.1,0.6,1.6c0.2,0.6,0.5,1.1,0.5,1.6c0,0.4,0,0.8,0,1.3c-0.1,0.7-0.1,1.4,0,2.2   c0.1,0.6,0.3,1.2,0.5,1.8c-1.3-0.4-2.7-0.8-4-1.2c-1.7-0.5-3.3-0.9-4.9-1.5c-2.4-0.9-4.7-1.6-7.1-1.9c-1.9-1.5-3.8-3.6-5.5-5.8   c1.6-4.4,0.1-9.7-3.5-12.6c-0.6-0.5-1.4-0.4-1.9,0.2c-0.5,0.6-0.4,1.4,0.2,1.9c2.2,1.9,3.4,4.9,3,7.8c-1.3-1.7-2.8-3.6-4.8-4.8   c0-0.1,0-0.2,0-0.3c-1-2.9-2.3-5.7-3.5-8.4c-1.6-3.5-3.1-6.9-4.2-10.6c-0.2-0.7-0.4-1.4-0.6-2.1c-0.4,1.9-0.7,3.7-1.1,5.6   c1,2.8,2.2,5.5,3.4,8.1c1,2.1,1.9,4.3,2.8,6.5c-0.9-0.1-1.7-0.1-2.5-0.1c-0.9,0-1.8,0-2.6-0.2c-1.2-0.3-2.1-0.9-3.1-1.7   c-0.1,1-0.3,2-0.4,3c0.8,0.5,1.8,1,2.8,1.3c1.2,0.3,2.3,0.3,3.4,0.3c1.2,0,2.3-0.1,3.3,0.4c2.1,0.8,3.7,2.9,5.2,4.9l0.1,0.1   c1.6,2.2,3.4,4.5,5.3,6.4c-1.6,0.1-3.3,0.4-5.1,1.1c-0.6,0.2-1.2,0.4-1.8,0.6c-1.3-1.2-3.1-2.1-4.8-3c-0.9-0.5-1.8-0.9-2.6-1.4   c-2.4-1.5-4.6-2.6-6.6-3.4c-0.1,0.9-0.2,1.9-0.2,2.8c1.7,0.7,3.5,1.7,5.4,2.9c0.8,0.5,1.8,1,2.8,1.5c0.9,0.4,1.8,0.9,2.6,1.4   c-1,0.2-2,0.2-3.2,0.3c-1.3,0-2.6,0-3.9,0s-2.7-0.1-4.1,0c-0.1,0.9-0.1,1.8-0.2,2.7C410.1,836.7,411.5,836.7,413,836.7z"
                fill="#e99fe9"
            />
            <Path
                d="M461.3,852.6c-1.9-1.3-3.9-2.7-5.4-4.2c-0.5-0.5-1.4-0.6-1.9,0c-0.5,0.5-0.6,1.4,0,1.9   c1.7,1.8,3.8,3.2,5.8,4.6c1.2,0.8,2.3,1.6,3.4,2.4c1.4,1.2,3.5,2.7,5.9,3.9c-0.1-1.1-0.1-2.1-0.2-3.2c-1.7-1-3.1-2.1-4-2.8   C463.7,854.2,462.5,853.4,461.3,852.6z"
                fill="#e99fe9"
            />
            <Path
                d="M491.9,778.3c-0.4-2.4-0.6-4.5-0.5-6.8c0.1-1,0.2-2,0.3-3.1c0.4-3.8,0.8-8-0.6-11.6   c-0.3-0.7-1-1-1.7-0.8l0,0c-0.7,0.3-1,1-0.8,1.7c1.2,3,0.8,6.8,0.5,10.4c-0.1,1.1-0.2,2.2-0.3,3.2c-0.1,2.5,0,4.8,0.5,7.4   c0.1,0.7,0.3,2,0.4,3.3c0.8-1.1,1.5-2.3,2.3-3.4C491.9,778.5,491.9,778.4,491.9,778.3z"
                fill="#e99fe9"
            />
            <Path
                d="M457.4,771.4c-0.3-0.7-1-1-1.7-0.7s-1,1.1-0.7,1.7c1.7,4.2,9.4,8.4,13.7,8.9c1,0.9,2.1,1.6,3.1,2.2   c1,0.7,2,1.3,2.9,2c1,0.9,1.8,1.7,2.7,2.7c0.8,0.9,1.6,1.8,2.6,2.7c0.1,0.1,0.1,0.1,0.2,0.1c0.6,1.3,1.3,2.7,2.1,3.9   c0.5-0.9,1-1.9,1.5-2.8c-1.2-2.2-2.2-4.4-2.6-6.7c-0.3-2-0.4-4.2-0.5-6.4c0-2.1-0.1-4.2-0.4-6.3c-0.2-1-0.4-2-0.6-3   c0-0.1,0.1-0.2,0.1-0.4c0.3-2.3,1.1-4.4,2-6.6c1.2-3,2.5-6.2,2.2-10s-0.9-7.3-1.6-10.8c-0.9,0-1.8-0.1-2.7-0.1   c0.8,3.6,1.3,7.3,1.7,11.2c0.3,3.1-0.8,5.8-2,8.7c-0.4,0.9-0.7,1.9-1.1,2.8c-0.5-1.7-1.1-3.3-1.7-4.9c-2-5.7-4.4-11.5-6.7-17.2   c0-0.1-0.1-0.1-0.1-0.2c-0.9,0.1-1.8,0.2-2.8,0.3c0.1,0.3,0.2,0.6,0.4,0.9c2.3,5.6,4.7,11.4,6.7,17.1c1.5,4.2,2.9,8.2,3.6,12.6   c0.3,1.9,0.3,3.9,0.4,6s0.1,4.2,0.4,6.3c-0.6-0.7-1.3-1.3-2-2c-1-0.9-2.1-1.6-3.2-2.3c-2.2-1.4-4.1-2.6-4.8-5   c-1.1-3.6-2-7.7-2.5-11c-0.4-2.4-0.1-4.8,0.2-7.3c0.3-2.6,0.6-5.2,0.2-7.8c-0.1-0.7-0.8-1.2-1.5-1.1c-0.7,0.1-1.2,0.8-1.1,1.5   c0.3,2.3,0.1,4.6-0.2,7.1c-0.3,2.6-0.6,5.3-0.2,8c0,0.1,0.1,0.3,0.1,0.5c-2.6-2.2-4.8-4.9-5-7.6c-0.2-3.7-0.2-7.5-0.1-11.2v-2.6   c0-0.1,0-0.3,0-0.4c-1.4,0.3-2.8,0.7-4.2,1.1c0.5,0.3,1,0.6,1.5,0.9v1c0,3.7,0,7.6,0.1,11.3c0.2,4.7,4.3,8.5,8.4,11.5   c0.5,2.3,1.1,4.7,1.8,6.9c0.1,0.3,0.2,0.5,0.3,0.8C462.6,776.5,458.3,773.8,457.4,771.4z"
                fill="#e99fe9"
            />
            <Path
                d="M443.6,859.2c-0.5,0.5-0.5,1.4,0.1,1.9c3.1,2.9,8.2,4,12.7,4c0.6,0,1.2,0,1.7-0.1   c1.7,0.9,3.5,1.6,5.3,2.1l0.7,0.2c2.5,0.7,3.6,1,5,3.1c0.4,0.6,0.8,1.2,1.3,1.7c-0.3-1.7-0.5-3.4-0.7-5.2c-1.5-1.3-3-1.7-4.9-2.2   l-0.6-0.2c-1.3-0.4-2.7-0.9-4-1.6c-0.2-0.5-0.8-0.8-1.4-0.8h-0.1c-2.2-1.2-4.3-2.6-6.4-4.1c0-0.1,0-0.2,0-0.3   c-0.4-1-0.7-2.1-1.1-3.2c-0.7-2.2-1.4-4.5-2.4-6.6c-1.2-2.6-3.3-4.3-5.3-5.9c-0.9-0.7-1.9-1.5-2.7-2.3c-0.5-0.5-1.4-0.5-1.9,0   s-0.5,1.4,0,1.9c0.9,0.9,1.9,1.7,2.9,2.5c1.9,1.5,3.6,2.9,4.6,5c0.9,1.9,1.6,4.1,2.3,6.2c-3.5-2.6-6.6-5.2-9.2-7.8   c-3.9-3.8-8.3-7.3-13.7-7.4c-0.7,0-1.3,0.6-1.4,1.3c0,0.7,0.6,1.3,1.3,1.4c4.5,0.1,8.4,3.2,11.9,6.6c3.4,3.3,7.6,6.7,12.4,10.1   c1.1,0.8,2.3,1.6,3.4,2.4c-3-0.4-6-1.4-7.8-3.1C445,858.7,444.1,858.7,443.6,859.2z"
                fill="#e99fe9"
            />
            <Path
                d="M426.9,873.4c-2.3,1-4.8,2-6.6,4.3c-0.7,0.9-1,1.7-1.3,2.4c-0.2,0.5-0.3,0.9-0.6,1.4   c-0.8,1.5-2.7,2.1-4.7,2.6c-1.1,0.3-2.2,0.7-3.2,1.2c0.1,0.9,0.2,1.8,0.3,2.7c0,0.1,0.1,0.1,0.1,0.2c0.8-0.7,2.1-1,3.5-1.4   c2.3-0.7,4.9-1.4,6.3-3.9c0.3-0.6,0.6-1.2,0.8-1.7c0.3-0.7,0.5-1.2,0.9-1.8c1.4-1.8,3.3-2.6,5.5-3.5c0.7-0.3,1.4-0.6,2.1-0.9   c1-0.5,1.8-1,2.5-1.7c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.2-0.2,0.3-0.2c0.8-0.7,1.6-1.3,2.4-1.7c0.9-0.4,1.7-0.8,2.6-1.1   c1.3-0.5,2.6-1.1,3.9-1.8c0.7,0.9,1.3,1.7,2.1,2.6c2.2,2.4,3.6,3.8,6.5,5.6c1.6,1,3.3,2.1,4.6,3.3c0.2,0.2,0.4,0.5,0.6,0.7   c-0.1,0-0.2,0.1-0.3,0.1c-2.3,0.7-4.8,1.4-7.2,1.9c-1.1,0.2-2.1,0.6-3.2,0.9c-0.4,0.1-0.8,0.2-1.2,0.4c-0.4-0.1-0.7,0.1-1,0.3   c-0.6,0.1-1.1,0.3-1.7,0.3c-1.8,0.2-3.7-0.3-5.8-0.7c-1.3-0.3-2.7-0.6-4.1-0.7c-3.3-0.3-6,0.6-8.8,1.6l-0.3,0.1   c-0.7,0.2-1.1,1-0.8,1.7c0.2,0.7,1,1.1,1.7,0.8l0.3-0.1c2.7-1,4.9-1.8,7.6-1.5c1.2,0.1,2.4,0.4,3.8,0.7c2.1,0.5,4.3,0.9,6.5,0.8   c0.1,0,0.1,0,0.2,0c-1.5,3.6-3.5,6.4-6.4,9.1c-2.6,2.3-5.2,3.1-8.3,3.9c-0.8,0.2-1.7,0.5-2.6,0.8c0.9,0.7,1.8,1.3,2.7,2   c0.2-0.1,0.4-0.1,0.6-0.2c1.2-0.3,2.3-0.7,3.5-1.1c2-0.7,4-1.7,5.9-3.5c3.7-3.3,6-6.9,7.8-11.7c0.4-0.1,0.8-0.2,1.2-0.4   c0.8-0.3,1.6-0.5,2.3-0.7c-0.6,2-1.7,4.1-2.8,6c-0.3,0.6-0.6,1.1-0.9,1.6c-0.2,0.4-0.4,0.7-0.5,1.1c-0.6,1.2-1.2,2.5-2,3.5   c-1.2,1.7-2.9,3-4.6,4.3c-1.4,1-2.7,2-4,3.3c-0.5,0.5-0.5,1.3,0,1.8c0.3,0.2,0.5,0.3,0.8,0.5c0.2,0,0.4,0,0.6-0.1s0.4-0.2,0.5-0.3   c1.1-1.1,2.3-2,3.6-3c1.8-1.4,3.8-2.8,5.2-4.9c0.9-1.2,1.5-2.6,2.2-3.9c0.2-0.4,0.4-0.7,0.5-1.1c0.3-0.5,0.5-1,0.8-1.6   c1.3-2.5,2.8-5.3,3.3-7.9c1.7-0.4,3.4-0.9,5-1.4c0.7-0.2,1.3-0.4,1.9-0.5c0.3,0.1,0.6,0.1,0.8,0c0.2-0.1,0.3-0.2,0.5-0.3   c3-0.6,5.6-0.5,8.9,0.1c1.4,0.3,2.9,0.6,4.4,1c-0.2-1-0.5-2-0.7-3c-1.1-0.3-2.1-0.5-3.2-0.7c-3.7-0.7-6.7-0.7-10.1,0   c-0.2-0.2-0.4-0.4-0.5-0.7c-0.3-0.4-0.7-0.9-1.1-1.3c-1.4-1.3-3.3-2.6-5-3.6c-2.6-1.6-3.8-2.9-5.9-5.2c-0.8-0.8-1.4-1.7-2.1-2.6   c-1-1.3-2-2.7-3.3-3.8c-0.5-0.5-1-0.8-1.5-1.2c-2.1-2.3-4.5-7.5-5.9-11.4c-0.2-0.7-1-1.1-1.7-0.8c-0.7,0.2-1.1,1-0.8,1.7   c0.3,0.9,1.6,4.4,3.3,7.6c-0.4-0.2-0.7-0.4-1.1-0.7c-4.4-3-8.3-5.8-11.4-9.1c-0.3-0.3-7.8-8.5-12.7-8.1c-0.1,0-0.1,0-0.2,0   c0,0.9-0.1,1.7-0.1,2.6c0.2,0.1,0.3,0.1,0.5,0.1c2.2-0.2,6.5,3.1,9.4,6c-0.4,0-0.9,0-1.4,0c-0.9,0-1.8,0-2.6,0.1   c-1.2,0.2-2.2,0.7-3.3,1.2c-1,0.4-1.9,0.8-2.8,1c0,0.1,0,0.3,0,0.4c0,0.8,0,1.5,0,2.3c0.2,0,0.3,0,0.5-0.1c1.2-0.2,2.3-0.7,3.3-1.2   c0.9-0.4,1.8-0.8,2.7-1c0.6-0.1,1.3-0.1,2-0.1c1.1,0,2.3,0.1,3.4-0.4c0.1,0,0.1-0.1,0.2-0.1c3.1,3.1,6.8,5.7,10.9,8.5   c1.1,0.7,2.1,1.3,3.2,1.8c1.5,0.8,2.9,1.5,4.2,2.7c0.5,0.5,1.1,1.1,1.5,1.6c-1,0.5-2.1,1-3.2,1.4c-0.9,0.4-1.8,0.7-2.7,1.2   c-1.1,0.5-2,1.2-2.8,1.9c-0.6-0.3-1.2-0.6-1.9-0.9c-1.3-0.6-2.6-1.2-3.7-2L425,867c-1.5-1-3.1-2.1-4.8-3.1c0-0.1,0-0.1-0.1-0.2   c-0.3-0.6-1-0.8-1.6-0.7c-1.4-0.7-2.8-1.3-4.3-1.7c-2-0.6-4-0.4-5.9-0.3c0,0.9,0.1,1.8,0.1,2.7l0,0c1.8-0.1,3.5-0.2,5.1,0.2   c0.6,0.2,1.2,0.4,1.8,0.6c-2.2,1-4.4,2-6.8,2.8c0.1,0.9,0.1,1.8,0.2,2.8c0.4-0.1,0.8-0.2,1.1-0.4c3-1.1,5.8-2.4,8.5-3.7   c1.7,1,3.4,2.1,5.1,3.2l0.8,0.5c1.3,0.9,2.7,1.5,4.1,2.2c0.2,0.1,0.4,0.2,0.6,0.3c-0.1,0.1-0.2,0.1-0.4,0.2   C428.2,872.9,427.5,873.1,426.9,873.4z"
                fill="#e99fe9"
            />
            <Path
                d="M419.1,782.4c2,2.2,4.8,3.6,7.5,4.9c0.9,0.4,1.8,0.9,2.6,1.3c5.5,3,12.6,8.1,19.1,13.6   c0.2,1,0.3,2,0.6,2.9c-0.5-0.3-1-0.7-1.5-1.1c-1-0.8-2-1.5-3.1-2.1c-1.8-0.9-3.7-1.4-5.6-2c-1.2-0.3-2.3-0.6-3.4-1s-2.3-0.7-3.4-1   c-1.6-0.4-3-0.7-4.4-1.4c-3.6-1.8-7.5-4.4-8.1-5.9c-0.3-0.7-1.1-1-1.7-0.7c-0.7,0.3-1,1.1-0.7,1.7c1.2,3,7.5,6.3,9.4,7.2   c1.6,0.8,3.3,1.2,4.9,1.6c1.1,0.3,2.1,0.5,3.1,0.9c1.2,0.4,2.4,0.8,3.5,1.1c1.8,0.5,3.6,1,5.1,1.8c0.9,0.4,1.7,1.1,2.6,1.8   c1.2,1,2.5,2,4,2.5c0.8,2.9,1.9,5.7,3.2,8.6c3.1,6.7,7.2,13.8,10.9,19c1.6,2.3,3.4,4.3,5.3,6.3c0.3-4.3,0.8-8.6,1.6-12.7   c-0.5-1.3-1-2.5-1.5-3.7l-0.3-0.8c-0.6-1.3-1.4-2.5-2.2-3.7c-1-1.5-1.9-2.8-2.3-4.4c-0.2-0.7-0.9-1.1-1.6-1c-0.7,0.2-1.1,0.9-1,1.6   c0.5,2,1.6,3.6,2.7,5.2c0.8,1.1,1.5,2.2,1.9,3.2l0.3,0.8c0.7,1.5,1.3,2.9,1.8,4.4c0.5,1.7,0.3,3.4,0,5.3c0,0.3-0.1,0.6-0.1,0.9   c-0.9-1-1.7-2-2.5-3.1c-3.7-5.1-7.6-12.1-10.7-18.6c-3.8-8.2-5.3-15.7-5.3-25.8c0-0.7,0-1.4,0-2.1c0-4.5,0.1-8-1.6-12.8   c-1.3-3.7-2.6-7.1-2.7-11c-0.1-1.4-0.2-2.7-0.3-3.9c0.4-0.8,0.8-1.5,1.2-2.3c0.4-0.8,0.7-1.5,1.1-2.2l0.3-0.5   c1.3-2.2,3-5.3,1.4-8.4c0-0.1-0.1-0.1-0.1-0.1c-0.8,0.3-1.6,0.6-2.4,0.9c0,0.2,0.1,0.3,0.1,0.5c1,1.9-0.2,3.9-1.3,5.9l-0.3,0.5   c-0.3,0.5-0.5,1-0.8,1.5c-0.4-1.4-0.9-2.9-1.5-4.5c-0.3-0.7-0.6-1.3-0.9-1.9c-0.8,0.4-1.6,0.7-2.4,1.1c0.3,0.6,0.6,1.2,0.9,1.8   c1.1,2.7,1.7,4.9,2,7.3c0,0,0,0.1-0.1,0.1c-0.4,0.6-0.2,1.3,0.3,1.7c0.1,0.8,0.1,1.7,0.2,2.7c0,0.6,0.1,1.2,0.2,1.8   c-0.6-0.4-1.2-0.8-1.8-1.3c-1.1-0.7-2.1-1.4-2.7-2.1c-2.1-2.1-4.5-3.8-6.8-5.4c-0.6-0.4-1.2-0.9-1.8-1.3c-0.8,0.5-1.6,1.1-2.4,1.6   c0.9,0.6,1.8,1.3,2.7,1.9c1.4,1,2.8,2,4.1,3c-3.6-0.4-7.1-0.8-9.9-2.6c-0.1,0.1-0.1,0.1-0.2,0.2c-0.3,0.8-0.5,1.5-0.8,2.3   c3.3,2,7.2,2.4,11.1,2.8c1.1,0.1,2.2,0.2,3.2,0.4h0.1c0.6,0.5,1.3,0.9,2,1.4c1.5,1,3.2,2.1,3.7,3.2c0.1,0.2,0.3,0.4,0.5,0.5   c0.5,1.8,1.1,3.5,1.8,5.3c1.6,4.3,1.5,7.5,1.5,11.9c0,0.7,0,1.4,0,2.1c0,2.8,0.1,5.5,0.4,8c-2.6-2.1-5.3-4.2-7.9-6   c-0.4-2.7-1.1-5.1-2.6-8.1c-0.9-1.8-1.9-3.4-3.5-5c-0.4-0.4-0.7-0.7-1.1-1.1c-0.9-1-1.9-1.9-2.9-2.8c-0.6-0.5-1.2-0.9-1.8-1.3   c-0.8-0.5-1.5-1-2-1.6s-1.3-0.6-1.9-0.1s-0.6,1.3-0.1,1.9c0.7,0.9,1.7,1.5,2.6,2.1c0.5,0.4,1.1,0.7,1.5,1.1   c0.9,0.8,1.8,1.8,2.7,2.7c0.4,0.4,0.7,0.8,1.1,1.1c1.2,1.2,2,2.5,3,4.4c0.9,1.7,1.4,3.2,1.8,4.6c-2.2-1.4-4.3-2.7-6.2-3.8   c-0.8-0.5-1.8-0.9-2.7-1.4c-2.5-1.2-5.1-2.5-6.7-4.3c-0.9-0.9-1.6-2.2-2.2-3.7c-0.4,1.3-0.7,2.5-1,3.8   C418.2,781.3,418.6,781.9,419.1,782.4z"
                fill="#e99fe9"
            />
            <Path
                d="M475.4,892.7c-0.3,0.1-0.5,0.2-0.8,0.3c-2.7,1-5.5,2-8.3,2.9c-4.6,1.6-8.3,1-13.6-0.5   c-0.7-0.2-1.4,0.2-1.7,0.9c-0.2,0.7,0.2,1.4,0.9,1.7c4.9,1.4,9.4,2.5,15.2,0.5c1.1-0.4,2.2-0.8,3.3-1.1c-0.6,0.7-1.3,1.5-1.9,2.2   c-2.6,3.1-5.4,6.4-6.4,8.3c-0.4,0.6-0.1,1.5,0.5,1.8c0.3,0.2,0.7,0.2,1.1,0.1c0.3-0.1,0.6-0.3,0.7-0.6c0.9-1.7,3.7-5,6.1-7.8   c2.3-2.7,3.8-4.5,4.5-5.6c0.1,0,0.3-0.1,0.4-0.1c0.2-0.1,0.5-0.2,0.7-0.3C476,894.4,475.7,893.5,475.4,892.7z"
                fill="#e99fe9"
            />
            <Path
                d="M517.1,752.1c0.2-0.2,0.4-0.3,0.6-0.5c-0.3-0.2-0.6-0.3-0.9-0.5C516.9,751.5,517,751.8,517.1,752.1z   "
                fill="#e99fe9"
            />
            <Path
                d="M469.5,876.3c0.6,0.2,1.1,0.3,1.7,0.5c-0.2-1-0.4-2-0.5-2.9c-0.1,0-0.3-0.1-0.4-0.1   c-2.6-0.7-5.3-1.5-6.7-2.9c-0.5-0.5-1.4-0.5-1.9,0s-0.5,1.4,0,1.9C463.5,874.6,466.6,875.5,469.5,876.3z"
                fill="#e99fe9"
            />
            <Path
                d="M493.7,753c0.7,1,1.4,2,2.1,3.1c0.1,0.2,0.2,0.3,0.3,0.5c1,1.6,2,3.3,2.7,5c1.3,3.4,1.1,6,0,8.3   c1.2-1.4,2.3-2.7,3.5-4c0-1.6-0.3-3.3-1.1-5.2c-0.7-1.8-1.7-3.5-2.7-5.2c0.7-1.9,1.8-3.7,3-5.6c0.8-1.2,1.6-2.5,2.3-3.8   c-1-0.3-1.9-0.6-2.9-0.8l0,0c0,0.1,0.1,0.3,0.1,0.4c-0.5,0.9-1.1,1.9-1.7,2.8c-0.9,1.4-1.8,2.8-2.5,4.3c-0.3-0.4-0.6-0.8-0.8-1.2   c-2-2.8-3.8-5.5-5-8.5c-1-0.1-2-0.3-3-0.4C489.2,746.4,491.5,749.8,493.7,753z"
                fill="#e99fe9"
            />
            <Path
                d="M471.1,789.8c-0.6,0.5-0.7,1.3-0.2,1.9c4.5,5.8,6,13.8,4.1,20.9c1-3.1,2.1-6.1,3.4-9.1   c-0.5-4.8-2.3-9.6-5.3-13.4C472.6,789.4,471.7,789.3,471.1,789.8z"
                fill="#e99fe9"
            />
            <Path
                d="M508.9,747.7c-1-0.4-2.1-0.8-3.1-1.1c0,0.2,0,0.5,0.1,0.7c1.1,2.4,1.6,5.5,2.2,8.5   c0.2,1.2,0.4,2.4,0.7,3.5c0.8-0.7,1.5-1.4,2.3-2.1c-0.1-0.6-0.2-1.2-0.3-1.9C510.2,752.8,509.7,750.1,508.9,747.7z"
                fill="#e99fe9"
            />
            <Path
                d="M456.6,791.7c0.4,2,0.8,4.2,1.5,6.3c1.4,4,5,8.9,9.8,11c0.2,0.1,0.3,0.1,0.5,0.1   c0.1,0.1,0.1,0.3,0.2,0.4c0.3,0.9,0.7,1.8,1,2.7c0.2,0.7,0.5,1.4,0.7,2.1c0.6,2,1.3,4,2.4,5.8c0.5-1.8,1-3.6,1.5-5.4   c-0.2,0.5-0.3,0.9-0.5,1.3c-0.3-0.8-0.6-1.7-0.9-2.5c-0.2-0.7-0.5-1.5-0.7-2.2c-0.3-0.9-0.7-1.8-1-2.7c-0.6-1.7-1.3-3.5-1.9-5.3   c-0.5-1.7-0.7-3.4-0.8-5.2c-0.1-1.3-0.2-2.7-0.4-4.1c-0.1-0.7-0.8-1.2-1.6-1.1c-0.7,0.1-1.2,0.8-1.1,1.6c0.2,1.2,0.3,2.5,0.4,3.8   c0.1,1.9,0.3,3.8,0.9,5.8c0.2,0.5,0.3,1,0.5,1.4c-2.8-1.9-5.3-5-6.5-8.4c-0.7-2-1.1-3.9-1.4-5.9c-0.4-2-0.7-4-1.4-6   c-0.2-0.7-1-1.1-1.7-0.8l0,0c-0.7,0.2-1.1,1-0.8,1.7C455.9,787.9,456.3,789.8,456.6,791.7z"
                fill="#e99fe9"
            />
        </G>
        <G>
            <G>
                <Path
                    d="M34.4,741.1c-0.8,0.2-1.3,1-1.1,1.8c1.6,6,2.9,12.1,4,18.2c1,0.1,2.1,0.2,3.1,0.4    c-1.2-6.5-2.6-12.9-4.2-19.3C36,741.4,35.2,740.9,34.4,741.1z"
                    fill="#62abcd"
                />
                <Path
                    d="M40.7,737.1c-0.8,0.3-1.2,1.1-0.9,1.9c2.5,7.5,4.6,15.2,6.1,23c1,0.1,2.1,0.2,3.1,0.2    c-1.6-8.2-3.7-16.2-6.4-24.2C42.3,737.3,41.5,736.8,40.7,737.1z"
                    fill="#62abcd"
                />
                <Path
                    d="M15.9,746.7c-0.8,0.3-1.1,1.2-0.7,2c1.5,3.2,2.8,6.5,4,9.8c1.1,0.2,2.3,0.4,3.4,0.6    c-1.4-3.9-3-7.8-4.7-11.6C17.6,746.7,16.7,746.4,15.9,746.7z"
                    fill="#62abcd"
                />
                <Path
                    d="M65.6,720.1c-0.3-0.8-1.2-1.2-1.9-0.8c-0.8,0.3-1.1,1.2-0.8,1.9c5.2,13.3,8.3,27.4,9,41.6    c1,0,2,0,3,0C74.1,748.2,71,733.7,65.6,720.1z"
                    fill="#62abcd"
                />
                <Path
                    d="M96.7,761.4c6-18.9,4.9-40.2-3-58.5c-0.3-0.8-1.2-1.1-2-0.8s-1.1,1.2-0.8,2    c7.6,17.3,8.7,37.5,3.1,55.6c3-17.6-2.6-36.8-8.9-55.2c-0.3-0.8-1.1-1.2-1.9-0.9s-1.2,1.1-0.9,1.9c6.5,19.1,12.3,38.9,8.3,56.5    c1-0.1,2.1-0.2,3.1-0.3c0-0.1,0-0.2,0.1-0.3c0,0.1,0,0.2,0.1,0.3C94.8,761.6,95.8,761.5,96.7,761.4z"
                    fill="#62abcd"
                />
                <Path
                    d="M14.7,756.7c-0.4,0.1-0.7,0.4-0.9,0.7c0.9,0.2,1.9,0.4,2.8,0.5c0-0.1,0-0.1,0-0.2    C16.3,757,15.5,756.5,14.7,756.7z"
                    fill="#62abcd"
                />
                <Path
                    d="M61.9,737.1c-0.2-0.8-1.1-1.2-1.9-1c-0.8,0.2-1.2,1.1-1,1.9c2.5,8,4.2,16.4,5.1,24.8c1,0,2,0,3,0    C66.2,754.1,64.5,745.5,61.9,737.1z"
                    fill="#62abcd"
                />
                <Path
                    d="M105.4,759.7c7.2-23.8,5.1-50.4-5.8-72.7c-0.4-0.7-1.3-1.1-2-0.7c-0.7,0.4-1.1,1.3-0.7,2    c10.6,21.7,12.7,47.4,5.7,70.6c-0.2,0.7,0.1,1.5,0.8,1.8c0.5-0.1,1.1-0.2,1.6-0.2C105.1,760.2,105.3,760,105.4,759.7z"
                    fill="#62abcd"
                />
                <Path
                    d="M81.4,762.5c0.3-14-0.6-28-2.6-41.9c-0.1-0.8-0.9-1.4-1.7-1.3c-0.8,0.1-1.4,0.9-1.3,1.7    c2,13.7,2.9,27.7,2.6,41.6C79.4,762.6,80.4,762.6,81.4,762.5z"
                    fill="#62abcd"
                />
                <Path
                    d="M114,758.5c6.3-28.2,7.7-57,4.2-85.6c-0.1-0.8-0.8-1.4-1.7-1.3c-0.8,0.1-1.4,0.8-1.3,1.7    c3.4,28.3,2,56.8-4.2,84.6c-0.1,0.6,0.1,1.2,0.6,1.5c0.7-0.1,1.4-0.2,2.1-0.3C113.8,758.9,113.9,758.7,114,758.5z"
                    fill="#62abcd"
                />
                <Path
                    d="M55,746.5c-0.3-0.8-1.2-1.2-1.9-0.9c-0.8,0.3-1.2,1.2-0.9,1.9c1.8,4.9,3.1,9.9,4,15.1    c1,0,2,0.1,3.1,0.1C58.4,757.2,57,751.7,55,746.5z"
                    fill="#62abcd"
                />
                <Path
                    d="M124.8,700.9c-0.8,0-1.5,0.6-1.6,1.4c-0.8,15.4-0.5,31,1,46.3c0.1,0.8,0.7,1.4,1.5,1.4h0.1    c0.8-0.1,1.4-0.8,1.4-1.6c-1.4-15.2-1.8-30.6-0.9-45.9C126.3,701.7,125.7,700.9,124.8,700.9z"
                    fill="#62abcd"
                />
                <Path
                    d="M140.4,710.8c0.4,8.4,0.8,17,5.7,24c0.3,0.4,0.8,0.6,1.2,0.6c0.3,0,0.6-0.1,0.9-0.3    c0.7-0.5,0.8-1.4,0.4-2.1c-4.4-6.3-4.8-14.5-5.1-22.4l-0.1-2c-0.9-17.8-4.2-35.4-9.8-52.3c-0.3-0.8-1.1-1.2-1.9-1    c-0.8,0.3-1.2,1.1-1,1.9c5.5,16.7,8.8,34,9.6,51.5L140.4,710.8z"
                    fill="#62abcd"
                />
                <Path
                    d="M135.1,751.4c0.1,0,0.1,0,0.2,0c0.7,0,1.4-0.6,1.5-1.3c3.5-29-0.3-58.7-11.1-85.8    c-0.3-0.8-1.2-1.2-1.9-0.8c-0.8,0.3-1.1,1.2-0.8,1.9c10.5,26.7,14.3,55.9,10.9,84.4C133.7,750.6,134.3,751.3,135.1,751.4z"
                    fill="#62abcd"
                />
            </G>
            <G>
                <Path
                    d="M203.6,683.2h0.1c0.8,0,1.4-0.6,1.5-1.4c1.4-17.2-0.5-35-5.6-51.4c-0.2-0.8-1.1-1.2-1.9-1    c-0.8,0.2-1.2,1.1-1,1.9c5,16.1,6.9,33.5,5.5,50.3C202.1,682.4,202.8,683.1,203.6,683.2z"
                    fill="#8aeafb"
                />
                <Path
                    d="M192.9,692.8c0.1,0,0.3,0.1,0.4,0.1c0.7,0,1.3-0.4,1.4-1.1c4.9-17,4.1-35.5-2.1-52    c-0.3-0.8-1.2-1.2-1.9-0.9c-0.8,0.3-1.2,1.2-0.9,1.9c6,16,6.7,33.8,2,50.1C191.6,691.7,192.1,692.5,192.9,692.8z"
                    fill="#8aeafb"
                />
                <Path
                    d="M208.8,678.8c-0.1,0.8,0.5,1.6,1.3,1.7c0.1,0,0.1,0,0.2,0c0.7,0,1.4-0.6,1.5-1.3    c2.6-21.2,0-42.8-7.4-62.9c-1,0.2-2,0.3-3,0.5C208.7,636.5,211.3,657.8,208.8,678.8z"
                    fill="#8aeafb"
                />
                <Path
                    d="M215.2,671.2c-0.1,0.8,0.5,1.6,1.4,1.6h0.1c0.8,0,1.4-0.6,1.5-1.4c1.6-19.2,1-38.5-1.8-57.5    c0-0.1,0-0.2-0.1-0.3c-1,0.3-1.9,0.5-2.9,0.8C216.2,633.1,216.8,652.3,215.2,671.2z"
                    fill="#8aeafb"
                />
                <Path
                    d="M149.4,735.3c0.3,0.2,0.6,0.3,0.9,0.3c0.5,0,0.9-0.2,1.2-0.6c15.8-20.9,18.4-51.4,7.8-90.6    c-0.2-0.8-1-1.3-1.8-1.1s-1.3,1-1.1,1.8c7.4,27.2,8.2,50,2.7,68.2c0.7-15.6-1.3-31.6-6-46.5c-0.2-0.8-1.1-1.2-1.9-1    c-0.8,0.2-1.2,1.1-1,1.9c5,16.1,6.9,33.5,5.5,50.3c-0.1,0.7,0.4,1.3,1,1.6c-2.1,4.9-4.6,9.5-7.8,13.6    C148.6,733.8,148.7,734.8,149.4,735.3z"
                    fill="#8aeafb"
                />
                <Path
                    d="M170.7,716.9c0.1,0,0.1,0,0.2,0c0.7,0,1.4-0.5,1.5-1.3c4.1-27.4-0.1-56.4-11.7-81.6    c-0.3-0.8-1.2-1.1-2-0.7c-0.8,0.3-1.1,1.2-0.7,2c11.4,24.7,15.4,53,11.4,79.9C169.3,716,169.9,716.7,170.7,716.9z"
                    fill="#8aeafb"
                />
                <Path
                    d="M146.5,729.2c0.1,0,0.3,0.1,0.4,0.1c0.7,0,1.3-0.4,1.4-1.1c4.9-17,4.1-35.5-2.1-52    c-0.3-0.8-1.2-1.2-1.9-0.9c-0.8,0.3-1.2,1.2-0.9,1.9c6,16,6.7,33.8,2,50.1C145.2,728.1,145.7,729,146.5,729.2z"
                    fill="#8aeafb"
                />
                <Path
                    d="M188.4,701.8L188.4,701.8c0.9,0,1.5-0.6,1.6-1.4c1.1-23.5-2.2-46.8-9.7-69.1    c-0.3-0.8-1.1-1.2-1.9-0.9c-0.8,0.3-1.2,1.1-0.9,1.9c7.3,21.7,10.6,45.2,9.6,68C186.9,701.1,187.6,701.8,188.4,701.8z"
                    fill="#8aeafb"
                />
                <Path
                    d="M180.1,708.9C180.2,708.9,180.2,708.9,180.1,708.9c0.9,0,1.5-0.6,1.6-1.4c1-24.3-1.7-48.5-7.8-72    c-0.2-0.8-1-1.3-1.8-1.1s-1.3,1-1.1,1.8c6.1,23.2,8.7,47.1,7.7,71.1C178.7,708.1,179.3,708.8,180.1,708.9z"
                    fill="#8aeafb"
                />
            </G>
            <G>
                <Path
                    d="M274,625c0.1,0.8,0.7,1.4,1.5,1.4h0.1c0.8-0.1,1.4-0.8,1.4-1.6c-1.4-15.2-1.8-30.6-0.9-45.9    c0-0.5-0.2-0.9-0.5-1.2c-0.9,0.9-1.7,1.8-2.6,2.7C272.3,595.2,272.6,610.2,274,625z"
                    fill="#fde93b"
                />
                <Path
                    d="M328.6,538c0-0.8-0.6-1.5-1.4-1.6s-1.5,0.6-1.6,1.4c-0.7,13.2-0.6,26.5,0.4,39.7    c0.9-2.6,1.7-5.3,2.5-8C328,559.1,328,548.5,328.6,538z"
                    fill="#fde93b"
                />
            </G>
            <G>
                <Path
                    d="M262,636c0.1,0,0.2,0,0.3,0c0.7,0,1.3-0.5,1.5-1.2c3.8-16.9,5.8-34.1,6-51.4c-1,0.9-2,1.9-3,2.8    c-0.4,16.1-2.4,32.1-5.9,47.9C260.6,635,261.1,635.8,262,636z"
                    fill="#d8f78d"
                />
                <Path
                    d="M303.7,562.1c0.1,5.7-1.3,11.6-2.7,17.2c-1.8,7.4-3.7,15-2.3,22.7c0.1,0.7,0.8,1.2,1.5,1.2    c0.1,0,0.2,0,0.3,0c0.8-0.2,1.4-0.9,1.2-1.8c-1.3-7,0.4-14,2.3-21.4c1.5-5.8,3-11.9,2.8-18c-0.1-6.1-1.8-12-3.5-17.7    c-0.7-2.5-1.5-5-2.1-7.5c-0.6,1.6-1.2,3.1-1.9,4.6c0.3,1.3,0.7,2.5,1.1,3.7C301.9,550.8,303.6,556.5,303.7,562.1z"
                    fill="#d8f78d"
                />
                <Path
                    d="M251.2,639.9c-0.1,0.8,0.5,1.6,1.3,1.7c0.1,0,0.1,0,0.2,0c0.7,0,1.4-0.6,1.5-1.3    c1.7-14.4,1.1-28.9-1.8-43c-0.9,0.6-1.8,1.2-2.7,1.7C252.3,612.4,252.9,626.2,251.2,639.9z"
                    fill="#d8f78d"
                />
                <Path
                    d="M306.2,521.4c10.4,38.3,7.9,67.9-7.3,88.1c-0.1,0.2-0.2,0.4-0.3,0.6c0-0.3-0.1-0.5-0.3-0.7    c-4.4-6.3-4.8-14.5-5.1-22.4l-0.1-2c-0.4-8.7-1.5-17.4-3.1-26c-0.8,1.2-1.6,2.5-2.4,3.7c1.3,7.4,2.1,14.9,2.5,22.5l0.1,2    c0.4,8.4,0.8,17,5.7,24c0.3,0.4,0.8,0.6,1.2,0.6c0.3,0,0.6-0.1,0.9-0.3s0.5-0.6,0.6-0.9c0,0.4,0.2,0.8,0.6,1.1    c0.3,0.2,0.6,0.3,0.9,0.3c0.5,0,0.9-0.2,1.2-0.6c15.8-20.9,18.4-51.4,7.8-90.6c-0.2-0.8-1-1.3-1.8-1.1c-0.5,0.1-0.8,0.5-1,0.9    c0,0.1-0.1,0.2-0.1,0.4C306.1,521.1,306.1,521.3,306.2,521.4z"
                    fill="#d8f78d"
                />
                <Path
                    d="M284.9,627.7c0.1,0,0.1,0,0.2,0c0.7,0,1.4-0.6,1.5-1.3c2.4-19.5,1.4-39.3-2.8-58.5    c-0.8,1-1.6,2.1-2.4,3.1c3.6,18.1,4.4,36.7,2.2,55.1C283.5,626.9,284.1,627.6,284.9,627.7z"
                    fill="#d8f78d"
                />
                <Path
                    d="M260.7,591.3c-0.9,0.7-1.9,1.4-2.8,2.2c1,12.9,0.9,26-0.2,38.9c-0.1,0.8,0.5,1.6,1.4,1.6h0.1    c0.8,0,1.4-0.6,1.5-1.4C261.8,618.8,261.8,605,260.7,591.3z"
                    fill="#d8f78d"
                />
                <Path
                    d="M244.6,642.7c-0.1,0.8,0.5,1.5,1.4,1.6h0.1c0.8,0,1.4-0.6,1.5-1.4c1.1-13.6,0.1-27.6-2.9-41    c-0.9,0.5-1.8,1-2.7,1.5C244.8,616.2,245.7,629.6,244.6,642.7z"
                    fill="#d8f78d"
                />
                <Path
                    d="M209.8,675.7c-0.5,0.7-0.4,1.6,0.3,2.1c0.3,0.2,0.6,0.3,0.9,0.3c0.5,0,0.9-0.2,1.2-0.6    c12.4-16.4,16.7-38.8,12.8-66.7c-1,0.3-1.9,0.7-2.9,1C225.8,638.6,221.6,660,209.8,675.7z"
                    fill="#d8f78d"
                />
                <Path
                    d="M310.5,510.3c-0.3-0.8-1.2-1.1-2-0.7c-0.1,0-0.1,0.1-0.2,0.1c-0.1,0.8-0.2,1.6-0.4,2.3    c11.2,24.6,15.2,52.7,11.2,79.4c-0.1,0.7,0.3,1.4,1,1.6c0.9-2.3,1.8-4.6,2.7-6.9C325.6,560.5,321.3,533.8,310.5,510.3z"
                    fill="#d8f78d"
                />
                <Path
                    d="M230.1,657.7c-0.1,0.8,0.4,1.6,1.3,1.7c0.1,0,0.1,0,0.2,0c0.7,0,1.4-0.5,1.5-1.3    c2.4-16.4,1.9-33.4-1.4-49.9c-0.9,0.4-1.9,0.8-2.8,1.1C232,625.3,232.5,641.8,230.1,657.7z"
                    fill="#d8f78d"
                />
                <Path
                    d="M238.3,653.9c0.1,0,0.3,0.1,0.4,0.1c0.7,0,1.3-0.4,1.4-1.1c4.5-15.7,4.2-32.6-0.7-48.2    c-0.9,0.5-1.8,0.9-2.7,1.3c4.6,14.9,4.9,31,0.6,46C237.1,652.8,237.5,653.7,238.3,653.9z"
                    fill="#d8f78d"
                />
            </G>
        </G>
        <G>
            <Path
                d="M252.8,320.1c-0.8,0.1-1.4,0.8-1.3,1.7c1.5,12.4,0,37.1-2.7,60.5c1,0.6,1.9,1.2,2.9,1.8   c2.8-24,4.4-49.5,2.8-62.6C254.4,320.6,253.6,320,252.8,320.1z"
                fill="#d8f78d"
            />
            <Path
                d="M244.8,313.3c-0.1-0.8-0.8-1.4-1.6-1.3s-1.4,0.8-1.3,1.6c1.4,13.4,0.4,39.4-1.6,63.9   c1,0.5,1.9,1,2.9,1.5C245.1,354,246.2,327.1,244.8,313.3z"
                fill="#d8f78d"
            />
        </G>
        <G>
            <Path
                d="M233.6,295.6c-0.1-0.4-0.4-0.7-0.7-0.9c0.3-7.1,0.3-13.9-0.1-20.2c-1-0.8-2.1-1.6-3.1-2.4   c1.8,27.1-2.5,64.8-10.9,91.5c3.2-24,5.8-63.1,3.8-76.6c-0.1-0.8-0.9-1.4-1.7-1.3s-1.4,0.9-1.3,1.7c2.1,14.1-1,57.6-4.5,80.5   c1.6,0.4,3.2,0.9,4.8,1.4c6.4-18.2,10.7-42.3,12.4-65c2.9,17.6,2.6,45.1,0.4,69.7c1,0.4,1.9,0.8,2.9,1.3   C238.4,346,238.3,312.4,233.6,295.6z"
                fill="#8cf9e4"
            />
            <Path
                d="M215.8,280.6c-0.2-0.8-1-1.3-1.8-1.2c-0.8,0.2-1.3,1-1.2,1.8c3.1,15.1-1.6,63.9-7.8,84.4   c1,0.2,2,0.4,3,0.6C214.3,344.8,218.9,296.2,215.8,280.6z"
                fill="#8cf9e4"
            />
        </G>
        <G>
            <Path
                d="M192.7,278.3c-0.8-0.2-1.6,0.3-1.8,1.2c-3.1,14.6-8.9,66.8-10.1,84.2c0.5,0,1.1,0,1.6,0s0.9,0,1.4,0   c1.2-17.5,7-69.2,10-83.6C194,279.3,193.5,278.5,192.7,278.3z"
                fill="#62abcd"
            />
            <Path
                d="M202.6,256.5c2.9,17.3-0.6,74.9-2.4,92.4l-0.2,2c-0.5,4.6-1,9.3-0.7,13.9c1,0.1,2,0.3,3.1,0.4   c-0.4-4.5,0.1-9.3,0.7-14l0.2-2c1.8-17.6,5.3-75.2,2.4-93c-0.7-0.4-1.5-0.9-2.2-1.3C202.8,255.2,202.5,255.8,202.6,256.5z"
                fill="#62abcd"
            />
            <Path
                d="M185.9,252.5c-0.8,0-1.5,0.6-1.6,1.4c-0.9,24.8-8.4,79.3-17.1,110.6c1.1-0.1,2.1-0.2,3.2-0.3   c8.7-31.7,16.1-85.4,16.9-110.2C187.3,253.2,186.7,252.5,185.9,252.5z"
                fill="#62abcd"
            />
            <Path
                d="M163.2,349.6c-0.4,0.7,0,1.6,0.7,2c0.1,0.1,0.3,0.1,0.4,0.1c0.6,0.1,1.3-0.2,1.6-0.8   c10.4-21.5,16.3-83.6,10.3-109.7c-1.2-0.5-2.3-1-3.5-1.5C179.5,263.5,173.6,328.1,163.2,349.6z"
                fill="#62abcd"
            />
            <Path
                d="M196.6,262.7c-0.2-0.8-1-1.3-1.8-1.1c-0.8,0.2-1.3,1-1.1,1.8c4.9,21.6,3.1,68-1.5,100.7   c1,0.1,2,0.2,3,0.3C199.8,331.2,201.5,284.6,196.6,262.7z"
                fill="#62abcd"
            />
        </G>
        <G>
            <Path
                d="M93.1,224.3c-0.8-0.4-1.5,0-1.5,0.8c2.5,78.5,3.2,114.6,2.3,174.4c1-1,2-1.9,3.1-2.9   c0.8-57.3,0-93.6-2.4-170.2C94.6,225.6,93.9,224.6,93.1,224.3z"
                fill="#396c9e"
            />
            <Path
                d="M107.2,388.3c1-0.8,2.1-1.5,3.2-2.3c1.7-42.4-1.7-95.2-6.3-164.8c-1-0.1-2-0.3-2.9-0.4   C105.8,292.1,109.3,345.6,107.2,388.3z"
                fill="#396c9e"
            />
            <Path
                d="M110.9,385.7c1.1-0.7,2.2-1.5,3.3-2.2c3.7-48,2.8-88.4-2.5-161.1c-1-0.2-2-0.3-2.9-0.5   C114.2,295.9,114.9,336.2,110.9,385.7z"
                fill="#396c9e"
            />
            <Path
                d="M77.8,249c-0.1-0.9-0.8-1.8-1.6-2.2c-0.8-0.4-1.5,0-1.4,0.9c4.6,77,6.6,109.7,5.9,166.8   c1-1.3,2-2.6,3.1-3.9C84.3,356.8,82.3,323.6,77.8,249z"
                fill="#396c9e"
            />
            <Path
                d="M56.9,294.6c-0.8-0.4-1.5,0.1-1.4,0.9c6.6,102.7,9.9,83.5,9.8,145.6c0.9-2.2,1.9-4.4,3-6.5   c-0.2-52.7-3.5-39.7-9.8-137.8C58.5,295.9,57.7,294.9,56.9,294.6z"
                fill="#396c9e"
            />
            <Path
                d="M87.7,406c1-1.1,2-2.2,3.1-3.3c0.7-58.7-1.7-107.7-6.9-183.3c-1-0.1-1.9-0.1-2.9-0.2   C86.3,296.2,88.6,345.4,87.7,406z"
                fill="#396c9e"
            />
            <Path
                d="M68,368.3c5.4,78.1,6.6,30.7,3.4,60.6c1-1.9,2.1-3.7,3.3-5.5c2.9-45.1,1.6-77.8-3.6-153.8   c-0.1-0.9-0.8-1.8-1.6-2.2C68.6,267,67.9,367.5,68,368.3z"
                fill="#396c9e"
            />
        </G>
        <G>
            <Path
                d="M119.4,241.5c-0.1-0.9-0.8-1.8-1.6-2.2c-0.8-0.3-1.4,0.1-1.4,1c3.3,38.3,5.7,71.2,7.4,100.8   c0.9-1.3,1.8-2.7,2.7-4.2C124.9,308.7,122.5,277.5,119.4,241.5z"
                fill="#579bc1"
            />
            <Path
                d="M120.3,345.2c-0.6,0.6-0.6,1.5,0,2.1c0.2,0.2,0.5,0.4,0.8,0.4c0.4,0.1,0.9-0.1,1.3-0.4   c0.6-0.5,1.1-1.1,1.6-1.8c-0.1-1.5-0.2-3-0.2-4.5C122.7,342.7,121.5,344,120.3,345.2z"
                fill="#579bc1"
            />
            <Path
                d="M167.7,263.4c-0.1-0.8-0.9-1.4-1.7-1.2c-0.8,0.1-1.4,0.9-1.2,1.7c3.6,20.5,0.3,74.9-3.8,101.5   c1-0.2,2.1-0.3,3.1-0.5C168.2,337.6,171.4,284.3,167.7,263.4z"
                fill="#579bc1"
            />
            <Path
                d="M155.4,366.5c4-28.9,7.5-79.3,5.4-100c-0.1-0.8-0.8-1.4-1.6-1.3s-1.4,0.8-1.3,1.6   c2.1,20.8-1.5,72-5.5,100.4C153.3,367,154.4,366.8,155.4,366.5z"
                fill="#579bc1"
            />
            <Path
                d="M127.8,334.5c-0.4,0.8-0.8,1.6-1.3,2.4c0.1,1.7,0.2,3.4,0.3,5.2c0.3-0.4,0.5-0.8,0.8-1.2   c-0.1,3.2-0.2,6.4-0.3,9.7c0.5,8.7,0.8,17.1,1.1,25.2c0.3-0.1,0.6-0.3,0.9-0.4c0.6-13.5,1.1-26.8,1.5-40.2c1.4-2.8,2.7-5.8,3.9-9.1   c-0.1,16.7,0,30.8,0.2,46.8c1-0.4,2-0.8,3-1.2c-0.2-18.1-0.3-34-0.1-54.6c0.6-2,1.2-4,1.8-6.1c1.2,19.4,2.3,37.8,3.2,55.5   c-0.4,1.4-0.7,2.6-1.1,3.8l0,0c1.4-0.5,2.8-0.9,4.1-1.3c0-0.7-0.1-1.3-0.1-2c7.5-29,11.1-92.9,3.9-118.2c-0.1-0.4-0.4-0.7-0.7-0.9   c0.2-5.8,0.3-11.5,0.1-16.8c-1-0.3-2-0.6-3-0.9c0.7,18.2-1.1,40.1-4.8,60.3c-1.2-18-2.5-37-4-57c-0.1-0.9-0.8-1.8-1.6-2.2   c-0.8-0.3-1.4,0.1-1.4,0.9c1.3,18.4,2.6,35.9,3.7,52.6c-0.3-0.5-0.7-1-1.2-1.3l0,0c-0.8-0.4-1.5-0.1-1.5,0.7   c-0.2,12.3-0.3,22.9-0.4,32.5c-1.2,3.8-2.4,7.3-3.8,10.6c0.8-31.7,1.1-64,0.7-101c-1-0.2-2-0.5-3-0.7   C129.1,265.8,128.8,300.3,127.8,334.5z M148.4,257.5c4.1,25,1.8,70-3.3,98.1c-0.9-17.2-2-35.1-3.2-53.9   C145.1,287.7,147.3,272.3,148.4,257.5z M138.1,288.3c0.3,4.4,0.6,8.7,0.8,12.9c-0.3,1.5-0.7,3-1,4.4   C138,300.3,138,294.5,138.1,288.3z"
                fill="#579bc1"
            />
            <Path
                d="M124.1,345.6c0.6,10.9,1.1,21.4,1.4,31.5c0.2-0.1,0.5-0.2,0.7-0.3c0.4-8.8,0.8-17.6,1.1-26.3   c-0.1-2.8-0.3-5.6-0.5-8.5C125.9,343.3,125,344.5,124.1,345.6z"
                fill="#579bc1"
            />
        </G>
        <G>
            <Path
                d="M76.4,561.2c-4.7-7.1-8.8-14.7-12-22.7c-1.4,13.9-3.3,29.8-6.4,42.9c-8.6,35.9-20,57.4-26.9,75.2   c2.5-10.2,4.7-19.4,6.6-27.2c8.8-37.4,4.7-70.2-2.6-101.1c-10-42.4,0.2-94,0.2-94S4.9,480.1,10.9,534.8   c3.9,35.2,23.8,70.4,11.3,113.3c-4.9,17-15.1,71.8-21.4,106.3c3.1,0.8,6.3,1.5,9.4,2.2c7.5-31.6,18.7-76.9,24.3-88.6   c8.9-18.4,38.3-60.4,41.4-99.3C76.1,566.2,76.3,563.7,76.4,561.2z"
                fill="#2e5d8f"
            />
        </G>
        <G>
            <Path
                d="M329.9,506.1c0.1,0.1,0.3,0.2,0.4,0.2c0.6,0.2,1.3-0.3,1.6-1.3c2.8-8.8,5.2-22,7.2-37.4   c-0.4-4.5-0.9-9-1.5-13.4c-2.1,20.3-5,38-8.4,48.8C328.8,504.2,329.1,505.6,329.9,506.1z"
                fill="#62abcd"
            />
            <Path
                d="M339.9,481c-3.2,25.8-6.9,49.2-10.7,64.1c-0.3,1.2,0.1,2.5,0.8,3c0.1,0.1,0.2,0.1,0.3,0.1   c0.7,0.2,1.4-0.4,1.6-1.4c2.7-10.6,5.3-25.3,7.8-42c0.2-4.6,0.3-9.2,0.3-13.8C340.1,487.6,340,484.3,339.9,481z"
                fill="#62abcd"
            />
        </G>
        <G id="PROGRESS_24" {...pathPlatformAdjustments}>
            <Rect x="373.5" y="1030.4" width="3" height="303.6" fill="url(#SVGID_30_)" fillOpacity="0.35" />
            <Polygon
                points="376,1031.5 374,1029.3 561.2,851.9 181.2,851.9   184,849.3 562.7,491.9 181.2,491.9 374,309.3 376,311.5 188.8,488.9 570.3,488.9 567.5,491.5 188.8,848.9 568.8,848.9 "
                fill="#ffffff"
                fillOpacity="0.35"
            />

            <Rect x="373.5" width="3" height="310.4" fill="url(#SVGID_31_)" fillOpacity="0.35" />
        </G>
        <G>
            <Path
                d="M734.1,642.2c-0.8-0.2-1.6,0.2-1.9,1c-5.8,18.9-8.3,38.7-7.6,58.4c1,0.3,2,0.7,3,1   c-0.9-19.7,1.6-39.6,7.4-58.5C735.3,643.3,734.9,642.4,734.1,642.2z"
                fill="#579bc1"
            />
            <Path
                d="M704.1,676.4c0.4,6.1,2.3,12,4.2,17.7c0.2,0.7,0.5,1.4,0.7,2c1.2,0.4,2.4,0.8,3.5,1.2   c-0.4-1.4-0.9-2.8-1.4-4.2c-1.8-5.5-3.7-11.2-4.1-17c-0.3-5.7,0.9-11.5,2.1-17.1c1.3-6,2.6-12.3,2.1-18.6c-0.1-0.8-0.8-1.4-1.6-1.4   l0,0c-0.8,0.1-1.4,0.8-1.4,1.6c0.5,5.9-0.7,11.6-2,17.7C705,664.3,703.7,670.3,704.1,676.4z"
                fill="#579bc1"
            />
            <Path
                d="M725.6,634.7c-0.8-0.2-1.6,0.3-1.8,1.1c-4.2,17.3-6.2,35.1-5.7,52.9l0.1,2c0.1,2.9,0.2,5.7,0.1,8.6   c1,0.3,2,0.7,3,1c0.2-3.2,0.1-6.5,0-9.7l-0.1-2c-0.5-17.5,1.4-35.1,5.6-52.1C726.9,635.7,726.4,634.9,725.6,634.7z"
                fill="#579bc1"
            />
            <Path
                d="M541.6,619.1c0.1,0.3,0.1,0.6,0.2,0.9c0.2,0.8,0.8,1.3,1.6,1.2c0.1,0,0.1,0,0.2,0   c0.4-0.1,0.7-0.3,0.9-0.5c3.8,2.1,8.7,4.8,14.4,8c0.3,0.9,0.6,1.7,0.9,2.6c0.2,0.6,0.9,1,1.5,1c0.1,0,0.3,0,0.4-0.1   c0.6-0.2,1-0.8,1-1.3c6.3,3.5,13.4,7.5,21.1,11.8c0.1,0.2,0.1,0.5,0.2,0.7c0.2,0.7,0.8,1.2,1.6,1.2c0.1,0,0.1,0,0.2,0   c0.3-0.1,0.5-0.2,0.7-0.4c4.1,2.3,8.3,4.6,12.7,7.1c0.8,1.3,1.6,2.6,2.5,3.9c1.9,0.9,3.8,1.7,5.7,2.6c-0.9-1.1-1.7-2.1-2.6-3.3   c1.7,0.9,3.4,1.9,5.1,2.9c-0.2,0.4-0.4,0.8-0.7,1.3c0.9,0.4,1.8,0.8,2.8,1.2c0.2-0.3,0.4-0.7,0.5-1c2.5,1.4,5.1,2.8,7.7,4.3   c0,0.1,0,0.2,0,0.3c4.9,2.1,10.5,4.4,16.6,6.8c-1.8-1-3.7-2.1-5.5-3.1c0.7-0.1,1.2-0.7,1.2-1.4c0.3-15.4-0.6-31-2.7-46.2   c-0.1-0.8-0.9-1.4-1.7-1.3c-0.8,0.1-1.4,0.9-1.3,1.7c2,15.1,2.9,30.5,2.7,45.8c0,0.2,0,0.3,0.1,0.5c-2.2-1.2-4.3-2.4-6.5-3.6   c-2.2-17.2-1.8-34.7,1.2-51.8l-2.9-0.6c-2.9,16.7-3.4,33.8-1.5,50.7c-2.2-1.2-4.4-2.5-6.6-3.7c2.5-6.5,2.3-13.8,2.1-20.8l-0.1-2   c-0.2-8.4,0.1-16.9,1-25.2l-3-0.6c-0.9,8.6-1.2,17.3-1,26l0.1,2c0.2,6,0.4,12.1-1.2,17.5c-5.2-14.8-6-31.2-2.1-46.4l-2.9-0.6   c-3.9,15.6-3.2,32.2,2,47.4c-2-1.1-3.9-2.2-5.8-3.3c-0.9-1.5-1.8-3-2.6-4.6c0.6-0.3,1-0.9,0.9-1.6c-2.1-12.8-2.2-26.2-0.5-39.2   l-2.9-0.6c-1.6,11.7-1.7,23.7-0.2,35.4c-4.1-10.5-6.1-22.7-6-36.7l-3-0.6c-0.2,17.8,2.8,32.9,9.2,45.2c-3.6-2-7.1-4-10.6-5.9   c-2.9-13.1-3.9-26.8-3-40.3l-2.9-0.6c-0.9,13.1-0.1,26.2,2.5,39c-2.2-1.2-4.3-2.4-6.4-3.6c0.1-0.3,0.2-0.6,0.2-0.9   c-1.4-11.5-1.9-23-1.6-34.6c-1,0.4-2,0.9-3,1.3c-0.2,10.8,0.3,21.7,1.5,32.5c-2.4-1.4-4.8-2.7-7-3.9c0,0,0,0,0.1,0   c0.8-0.1,1.4-0.9,1.3-1.7c-1-8-1.5-16.2-1.4-24.4c-1,0.5-2,0.9-3,1.4c0,7.8,0.5,15.6,1.5,23.4c0,0.2,0.1,0.3,0.2,0.5   c-1.2-0.7-2.4-1.3-3.5-2c-2.1-6.1-3.4-12.5-3.9-19c-1,0.5-1.9,1-2.9,1.5c0.5,5.2,1.5,10.4,3,15.4c-2.3-1.3-4.5-2.5-6.5-3.6   c0-0.2,0.1-0.4,0-0.6c-0.5-2.9-0.8-5.8-1.1-8.8c-1,0.5-1.9,1.1-2.9,1.6c0.2,2,0.4,4,0.7,6c-1.3-0.7-2.6-1.4-3.7-2.1   c-0.1-0.7-0.2-1.3-0.4-2c-1.2,0.7-2.4,1.4-3.6,2.1C540.9,618.8,541.3,618.9,541.6,619.1z"
                fill="#579bc1"
            />
            <Path
                d="M649.8,616c-5.9,19-5.9,39.8-0.1,58.9c1.2,0.4,2.4,0.9,3.6,1.3c-6.4-19.2-6.5-40.3-0.5-59.6   L649.8,616z"
                fill="#579bc1"
            />
            <Path
                d="M687.2,688.6c1.1,0.4,2.1,0.7,3.2,1.1c-2.8-21.2-0.8-43.3,5.9-63.5l-2.9-0.6   C686.7,645.7,684.6,667.5,687.2,688.6z"
                fill="#579bc1"
            />
            <Path
                d="M697.1,626.4c-4.9,26.5-4.3,48.7,1.7,66.3c1.2,0.4,2.4,0.8,3.7,1.3c-6.7-17.5-7.5-39.9-2.5-66.9   L697.1,626.4z"
                fill="#579bc1"
            />
            <Path
                d="M661.2,623.6c-0.8-0.3-1.6,0.1-1.9,0.9c-6,17.3-6,36.6-0.1,53.9c1.2,0.4,2.4,0.9,3.7,1.3   c-6.5-17.3-6.7-36.9-0.7-54.3C662.4,624.8,662,623.9,661.2,623.6z"
                fill="#579bc1"
            />
            <Path
                d="M680.4,648.1c-0.8,0.1-1.4,0.9-1.3,1.7c1.6,12.2,2.5,24.6,2.7,36.9c1,0.4,2,0.7,3,1.1   c-0.1-12.8-1-25.7-2.7-38.4C682,648.6,681.2,648,680.4,648.1z"
                fill="#579bc1"
            />
            <Path
                d="M632.6,612.3c1,20.3,4.4,40.4,10.2,60c1.2,0.4,2.3,0.9,3.5,1.3l0,0c-6.1-19.8-9.6-40.1-10.7-60.7   L632.6,612.3z"
                fill="#579bc1"
            />
            <Path
                d="M743.4,651.3c0-0.8-0.6-1.5-1.4-1.6c-0.8,0-1.5,0.6-1.6,1.4c-0.8,19.2,0.6,38.3,4.1,57   c1.1,0.4,2.2,0.7,3.2,1.1C744,690.2,742.6,670.8,743.4,651.3z"
                fill="#579bc1"
            />
            <Path
                d="M742,707.4c-0.4-8.9-1.2-17.7-2.4-26.4c-0.1-0.8-0.9-1.4-1.7-1.3c-0.8,0.1-1.4,0.9-1.3,1.7   c1.1,8.3,1.9,16.6,2.3,25C740,706.7,741,707,742,707.4z"
                fill="#579bc1"
            />
            <Path
                d="M676.2,621.8c-3.6,20.4-4.6,41.2-3,61.9c1,0.4,2.1,0.7,3.1,1.1c-1.8-20.8-0.8-41.7,2.8-62.3   L676.2,621.8z"
                fill="#579bc1"
            />
            <Path
                d="M670.1,620.4c-5.3,21-9.6,42.7-2.5,61.2c1.3,0.5,2.6,0.9,3.8,1.4c-8.3-18.2-3.9-40.5,1.6-61.9   l-0.8-0.2L670.1,620.4z"
                fill="#579bc1"
            />
        </G>
        <Path
            d="M749.6,971.3v-91.2c-5.2,22.7-15,43.4-19.1,64.5c-10.3,54.1,16.5,102.1,16.5,102.1  S742.5,1008.3,749.6,971.3z"
            fill="#62abcd"
        />
        <Path
            d="M547.7,614.5c-10.5,5.9-20.7,12.5-30.3,19.7c11.4,9.4,24.9,20.2,40.9,32.3  c39,29.6,116.7,81.7,191.7,130.4V717l-69.4-34.5L547.7,614.5z"
            fill="#62abcd"
        />
        <Path
            d="M533.5,623c-9.3,6-18.1,12.5-26.6,19.5c9.4,11.1,20.6,23.7,34,38.1c11.2,12,26.2,27.3,43.7,44.6  c3.8-0.3,7.5-0.5,11.4-0.5c70.3,0,127.2,57,127.2,127.2c0,1.8,0,3.5-0.1,5.2c9.1,8.4,18.1,16.7,26.9,24.8V785l-91.4-67.5L533.5,623z  "
            fill="#437caa"
        />
        <G>
            <G>
                <Path
                    d="M659.7,726.8c-0.8,0-1.5,0.8-1.4,1.6c0.2,4.3,0.4,8.6,0.4,12.9c1,0.6,2,1.2,3,1.8    c0-4.9-0.2-9.9-0.4-14.8C661.3,727.4,660.6,726.7,659.7,726.8z"
                    fill="#8cf9e4"
                />
                <Path
                    d="M659.9,694.3c-0.8-0.2-1.6,0.3-1.8,1.1c-3.6,13.7-6,27.7-7.2,41.8c1,0.5,1.9,0.9,2.9,1.4    c1.1-14.3,3.5-28.5,7.2-42.4C661.2,695.4,660.7,694.5,659.9,694.3z"
                    fill="#8cf9e4"
                />
                <Path
                    d="M675.8,702.1c-6,13.4-9.9,27.8-11.6,42.4c0.9,0.6,1.9,1.2,2.8,1.8c1.6-14.6,5.3-29.1,11.2-42.5    L675.8,702.1z"
                    fill="#8cf9e4"
                />
                <Path
                    d="M688.6,715.8L688.6,715.8c-0.8,0-1.5,0.7-1.5,1.5c0,5.9-1.6,11.5-3.4,17.5    c-1.7,5.7-3.4,11.6-3.5,17.7c0,1.4,0,2.9,0.2,4.3c1.2,1,2.3,2.1,3.4,3.1c-0.4-2.5-0.6-4.9-0.6-7.3c0.1-5.7,1.8-11.4,3.4-16.9    c1.7-5.9,3.5-12,3.5-18.3C690.1,716.4,689.4,715.8,688.6,715.8z"
                    fill="#8cf9e4"
                />
                <Path
                    d="M713.3,730.1c-0.8-0.3-1.6,0.1-1.9,0.8c-6,15.3-9.9,31.3-11.5,47.6c0.9,1.3,1.8,2.6,2.7,4    c1.3-17.3,5.2-34.3,11.6-50.5C714.5,731.2,714.1,730.4,713.3,730.1z"
                    fill="#8cf9e4"
                />
                <Path
                    d="M679.6,710c-0.8-0.2-1.6,0.3-1.8,1.1c-3.8,14-5.9,26.8-6.3,38.5c1,0.7,2,1.5,2.9,2.2    c0.2-12,2.3-25.4,6.3-40C680.9,711,680.4,710.2,679.6,710z"
                    fill="#8cf9e4"
                />
                <Path
                    d="M703.5,722.9c-5.1,15.5-8.3,31.6-9.5,47.9c0.9,1.1,1.9,2.3,2.8,3.5c1-17.1,4.2-34,9.5-50.2    l-2.4-1.8C703.7,722.5,703.6,722.7,703.5,722.9z"
                    fill="#8cf9e4"
                />
            </G>
            <G>
                <Path
                    d="M631.5,674.4c0.3-0.8-0.1-1.6-0.8-1.9c-0.8-0.3-1.6,0.1-1.9,0.8c-6.7,17-9.9,35.3-9.4,53.5    c1,0.2,2,0.4,3,0.6C621.7,709.4,624.8,691.3,631.5,674.4z"
                    fill="#d8f78d"
                />
                <Path
                    d="M642.1,700.8c0.3-0.8-0.1-1.6-0.9-1.9c-0.8-0.3-1.6,0.1-1.9,0.9c-3.7,9.8-5.4,20.3-5.2,30.8    c1,0.3,2,0.6,3,1C636.8,721.1,638.4,710.6,642.1,700.8z"
                    fill="#d8f78d"
                />
                <Path
                    d="M653.6,690.3c-0.8-0.3-1.6,0.2-1.9,0.9c-4.7,13.8-7.7,27.9-9.1,42.3c1,0.4,2,0.8,2.9,1.2    c1.3-14.5,4.4-28.9,9-42.5C654.8,691.4,654.4,690.6,653.6,690.3z"
                    fill="#d8f78d"
                />
                <Path
                    d="M593.9,643.2c-7.5,20.3-8.2,43-2,63.7c0.2,0.6,0.8,1.1,1.4,1.1c0.1,0,0.3,0,0.4-0.1    c0.8-0.2,1.2-1.1,1-1.9c-6-19.8-5.3-41.5,1.6-61L593.9,643.2z"
                    fill="#d8f78d"
                />
                <Path
                    d="M606.1,652l-2.5-1.8c-8,18.3-9.1,39.6-3,58.6c0.2,0.6,0.8,1,1.4,1c0.2,0,0.3,0,0.5-0.1    c0.5-0.2,0.9-0.6,1-1.1c0.9,4.6,2.5,9.1,4.8,13.4c0.3,0.5,0.8,0.8,1.3,0.8c0.2,0,0.5-0.1,0.7-0.2c0.7-0.4,1-1.3,0.6-2    c-10.1-18.8-4.8-41.4,2.5-63.4l-2.6-1.8c-5.8,17.3-10.4,35.1-7.7,51.5C597.7,689.1,598.8,669.1,606.1,652z"
                    fill="#d8f78d"
                />
                <Path
                    d="M634.3,689.4c-0.8-0.2-1.6,0.2-1.9,1c-3.8,12.2-5.8,25.1-6.1,38c1,0.2,2,0.5,3,0.8    c0.2-12.8,2.2-25.7,5.9-37.9C635.5,690.4,635.1,689.6,634.3,689.4z"
                    fill="#d8f78d"
                />
                <Path
                    d="M618.5,674.3c0.1-0.8-0.4-1.6-1.3-1.7c-0.8-0.1-1.6,0.4-1.7,1.3c-2.6,17.2-3.3,34.7-2.2,52    c1,0.1,2,0.3,3,0.5C615.3,709,616,691.5,618.5,674.3z"
                    fill="#d8f78d"
                />
            </G>
            <G>
                <Path
                    d="M573.4,692.6c1.2-14.3,1.4-28.7,0.7-43c0-0.8-0.7-1.5-1.6-1.4c-0.8,0-1.5,0.8-1.4,1.6    c0.7,13.1,0.6,26.4-0.4,39.5C571.5,690.3,572.5,691.4,573.4,692.6z"
                    fill="#d8f78d"
                />
                <Path
                    d="M578,631.8c-1.8,24.4-0.1,48.9,5.1,72.9c0.6,0.7,1.1,1.4,1.7,2.2c0.1,0,0.2,0,0.3,0    c0.8-0.2,1.3-1,1.1-1.8c-5.2-23.4-7-47.3-5.4-71.2L578,631.8z"
                    fill="#d8f78d"
                />
                <Path
                    d="M553,622.5c-0.8-0.3-1.6,0.1-1.9,0.9c-4.6,12.4-6.2,25.9-4.7,39c1.2,1.1,2.4,2.3,3.6,3.5    c-2.3-13.9-1-28.3,3.9-41.5C554.1,623.6,553.7,622.8,553,622.5z"
                    fill="#d8f78d"
                />
                <Path
                    d="M567.2,624.1c-5.2,16.8-7.9,34.3-7.9,51.9c1,1.1,2,2.3,3,3.5c-0.3-18.1,2.2-36.2,7.4-53.5    L567.2,624.1z"
                    fill="#d8f78d"
                />
                <Path
                    d="M554,655.8l-0.1,2c-0.2,3.7-0.4,7.5-1,11.2c0.8,0.9,1.7,1.8,2.6,2.7c1-4.5,1.2-9.2,1.4-13.8l0.1-2    c0.6-12,2.4-23.9,5.1-35.5l-2.6-1.9C556.5,630.8,554.6,643.2,554,655.8z"
                    fill="#d8f78d"
                />
                <Path
                    d="M518.6,635c0-0.6,0.1-1.2,0.1-1.8c-0.3,0.3-0.7,0.5-1,0.8C518,634.3,518.3,634.6,518.6,635z"
                    fill="#d8f78d"
                />
                <Path
                    d="M538.1,654.6c1,1,2,1.9,3,2.9c-0.3-14.3,1.7-28.9,5.9-42.6l0,0c-1.3,0.7-2.5,1.4-3.7,2.1    C539.8,629.1,538.1,641.9,538.1,654.6z"
                    fill="#d8f78d"
                />
                <Path
                    d="M523.4,640c1,1,2,2,3,3.1c0-5.3,0.2-10.6,0.8-15.9c-1.1,0.7-2.2,1.5-3.2,2.2    C523.7,632.9,523.5,636.5,523.4,640z"
                    fill="#d8f78d"
                />
                <Path
                    d="M532.1,623.9c-0.8,9.1-0.6,17.6,0.6,25.4c1.2,1.2,2.4,2.4,3.7,3.6c-1.8-9.3-2.2-19.6-1-31    C534.2,622.6,533.1,623.2,532.1,623.9z"
                    fill="#d8f78d"
                />
            </G>
            <G>
                <Path
                    d="M712.2,767.6c-0.8,0-1.5,0.8-1.4,1.6c0.5,9.4,0.6,18.9,0.2,28.4c1,2,1.9,4.1,2.7,6.1    c0.7-11.6,0.7-23.2,0.1-34.7C713.8,768.2,713.1,767.5,712.2,767.6z"
                    fill="#8cf9e4"
                />
                <Path
                    d="M750,829.6v-10c-4.2-15.6-5-32.3-2.3-48.2c0.1-0.8-0.4-1.6-1.2-1.7c-0.8-0.1-1.6,0.4-1.7,1.2    C741.4,790.4,743.3,811,750,829.6z"
                    fill="#8cf9e4"
                />
                <Path
                    d="M750,842.3c-11.4-26.2-13.5-56.1-5.6-83.7c0.2-0.8-0.2-1.6-1-1.9c-0.8-0.2-1.6,0.2-1.9,1    c-8.7,30.4-5.6,63.4,8.5,91.7V842.3z"
                    fill="#8cf9e4"
                />
                <Path
                    d="M729.8,799.6c-2.2-17.4-2-35,0.5-52.4c0.1-0.8-0.5-1.6-1.3-1.7c-0.8-0.1-1.6,0.5-1.7,1.3    c-2.5,17.6-2.7,35.5-0.5,53.2l0.3,2c1,7.8,2.1,15.9-1,22.8c0-0.1,0-0.2,0-0.3c-6.2-27.8-7.6-56.3-4.2-84.6    c0.1-0.8-0.5-1.6-1.3-1.7c-0.8-0.1-1.6,0.5-1.7,1.3c-3.5,28.6-2,57.5,4.2,85.6c0.2,0.7,0.8,1.2,1.5,1.2c0.1,0,0.2,0,0.3,0    c0.4-0.1,0.8-0.4,1-0.7c0,0.6,0.3,1.1,0.9,1.3c0.3,0.1,0.6,0.2,0.9,0.1c0.5-0.1,0.9-0.4,1.1-0.8c3.6-7.7,2.4-16.3,1.4-24.6    L729.8,799.6z"
                    fill="#8cf9e4"
                />
                <Path
                    d="M735.4,763.3c0.1-0.8-0.5-1.6-1.4-1.6c-0.8-0.1-1.6,0.5-1.6,1.4c-2.3,24.2-1,48.5,3.9,72.3    c0.2,0.8,0.9,1.3,1.7,1.2c0,0,0,0,0.1,0c0.8-0.2,1.3-1,1.2-1.8C734.4,811.2,733.1,787.2,735.4,763.3z"
                    fill="#8cf9e4"
                />
            </G>
        </G>
        <G>
            <Path d="M533.4,624.8" fill="#4d8bb5" />
            <Path
                d="M750,767.5V719l-51.6-21.8l-165-72.4c13,11.5,34.2,28.6,67.3,51.4   C631.9,697.7,690.7,733.1,750,767.5z"
                fill="#4d8bb5"
            />
        </G>
        <G>
            <Path
                d="M558,713.5c-1.8-3.8-3.7-7.8-4.9-11.3c-0.2-0.7-1-1.1-1.7-0.8l0,0c-0.7,0.2-1,1-0.8,1.7   c1.3,3.7,3.2,7.7,5,11.6c0.7,1.4,1.4,2.8,2,4.2l0,0l0,0c1.3,2.8,3.1,6.5,5.2,10.3c0.9-0.2,1.8-0.5,2.7-0.7c-2-3.6-3.8-7.3-5.2-10.2   c1.9-5.6,1.3-11.3-0.1-16.9c2.2-3.7,4.2-8.7,5-12.8c0.1-0.7-0.3-1.4-1.1-1.6c-0.7-0.1-1.4,0.3-1.6,1.1c-0.6,3.1-1.9,6.6-3.4,9.7   c-0.5-1.6-1-3.2-1.6-4.7c-0.2-0.7-1-1.1-1.7-0.8c-0.7,0.2-1.1,1-0.8,1.7c2.4,6.8,4.6,13.9,3.5,20.6   C558.3,714,558.2,713.7,558,713.5z"
                fill="#f9d335"
            />
            <Path
                d="M566.4,696.9c-0.7,0-1.4,0.6-1.4,1.3c-0.1,4-0.3,8.2,0.4,12.4c0.8,4.7,2.5,8.7,5.2,11.6   c0.1,0.1,0.1,0.1,0.2,0.2c-0.9,1.7-1.6,3.5-2.2,5.3c1-0.2,2-0.4,3-0.6c1.3-3.7,3.3-7.1,6.4-10.1c0.8-0.8,1.7-1.6,2.7-2.4   c2.1-1.8,4.2-3.7,5.8-6.3c0.8-1.3,1.3-2.7,1.9-4.2c0.6-1.7,1.3-3.3,2.2-4.6c0.9-1.2,2-2.1,3.1-3.2c0.8-0.7,1.7-1.5,2.5-2.4   c1.1-1.2,2.1-2.3,3.1-3.5c1.9-2.2,3.8-4.3,5.9-6.3l0,0c0.7-0.7,1.5-1.3,2.3-2c3-2.3,4.3-5.4,5.5-8.4c0.8-2.1,1.6-4,2.9-5.6   c-0.3-0.7-0.5-1.5-0.8-2.2c-0.4-0.1-0.9,0.1-1.2,0.4c-1.6,1.9-2.5,4.1-3.4,6.3c-1.1,2.8-2.2,5.4-4.7,7.3c-0.2,0.1-0.4,0.3-0.6,0.5   c0-2.5,0.6-5.4,1.2-8.1c0.2-0.9,0.4-1.7,0.5-2.5c0.2-1.2,0.5-2.4,0.8-3.7c1-4.1,2-8.4,1.4-12.5l0,0c-0.2-0.3-0.3-0.6-0.5-0.8   c-0.3-0.2-0.6-0.3-1-0.3c-0.7,0.1-1.2,0.8-1.1,1.5c0.5,3.6-0.4,7.6-1.3,11.5c-0.3,1.3-0.6,2.6-0.8,3.8c-0.1,0.3-0.1,0.7-0.2,1   c-2.6-3.8-3.5-8.7-2.3-13.1c0.2-0.7-0.2-1.4-0.9-1.6c-0.7-0.2-1.4,0.2-1.6,0.9c-1.5,5.5-0.3,11.7,3.2,16.1c0.2,0.3,0.6,0.5,1,0.5   c-0.7,3.1-1.2,6.5-0.7,9.4c-2,1.9-3.8,3.9-5.6,6c-0.8,0.9-1.6,1.8-2.4,2.7c0.3-1.9,0.8-3.7,1.2-5.4c1.1-4,2.3-8.1,0.4-13.4   c-0.2-0.7-1-1.1-1.7-0.8c-0.8,0.3-1.1,1-0.8,1.7c1.6,4.5,0.6,7.9-0.5,11.8c-0.8,2.7-1.6,5.5-1.6,8.9v0.1l-0.1,0.1   c-1.2,1.1-2.4,2.2-3.4,3.5c-1.2,1.6-1.9,3.5-2.6,5.3c-0.5,1.3-1,2.6-1.7,3.7c-1.3,2.2-3.1,3.8-5,5.5c0.1-2.6-0.2-5.2-0.4-7.9   c-0.2-2.2-0.4-4.3-0.4-6.3c0-0.7,0-1.3,0.1-2c4.3-4.1,8.4-8.7,11.9-13.5c0.4-0.6,0.3-1.4-0.3-1.8c-0.6-0.4-1.4-0.3-1.8,0.3   c-2.8,3.8-5.9,7.5-9.3,10.9c0.5-2.8,1.2-5.5,2-8.2c0.2-0.9,0.5-1.7,0.7-2.6c1.6-6.1,4.7-10.9,8-16.1c0.9-1.5,1.9-2.9,2.8-4.5   c1-1.7,2.4-3.5,3.9-5.4c2.8-3.6,5.6-7.3,6.6-11c-0.4-0.6-0.9-1.1-1.3-1.7c-0.6,0-1.1,0.4-1.2,1c-0.8,3.2-3.5,6.7-6.2,10.1   c-0.8,1-1.5,1.9-2.2,2.8c-1.1-6.4,0.2-14.4,4.3-18.2c0.4-0.3,0.5-0.9,0.4-1.3c-0.3-0.3-0.6-0.6-0.9-0.9c-0.4-0.1-0.9,0-1.3,0.3   c-5.5,5.1-6.6,15.9-4.5,23.3c-0.9,1.4-1.7,2.8-2.6,4.1c-2.5,3.9-4.8,7.6-6.6,11.8c-0.3-1.9-0.5-3.7-0.3-5.2   c0.1-0.9,0.3-1.8,0.5-2.6c0.5-2.6,1.1-5.3-0.5-8.2c-0.3-0.7-1.2-0.9-1.8-0.6c-0.7,0.3-0.9,1.1-0.6,1.8c1.1,2.1,0.7,4.1,0.2,6.5   c-0.2,0.9-0.4,1.9-0.5,2.9c-0.3,2.6,0.4,6.2,0.9,9.1c0.1,0.6,0.2,1.2,0.3,1.7c-0.2,0.7-0.4,1.5-0.6,2.3c-1.3,4.6-2.7,9.8-2.7,15.1   c0,1.6,0.1,3.3,0.3,5c-3.2-4.9-6.1-14.9-4.5-17.8c0.4-0.6,0.1-1.5-0.5-1.8c-0.6-0.4-1.5-0.1-1.8,0.5c-2.6,4.8,2,19.6,7.2,23.5   c0.2,2.6,0.3,5.1,0,7.4c-0.1,0.1-0.2,0.1-0.2,0.2c-1.5,1.5-2.8,3.2-3.9,4.9c-2.1-2.5-3.5-5.8-4.1-9.8c-0.6-3.9-0.5-7.9-0.4-11.8   C567.8,697.6,567.2,696.9,566.4,696.9z"
                fill="#f9d335"
            />
            <Path
                d="M599.2,702.7c-0.3-0.7-1.1-1-1.8-0.6c-0.7,0.3-0.9,1.1-0.6,1.8c1.1,2.3-1.7,6.2-3.6,8.8   c-0.5,0.7-1,1.4-1.4,2l-0.5,0.8c-1.4,2.2-2.5,4-4.2,5.9c-1,1.2-1.9,2.5-2.7,3.8c1.1-0.1,2.2-0.2,3.3-0.3c0.4-0.6,0.9-1.2,1.4-1.8   c1.8-2,3.1-4.1,4.5-6.3l0.5-0.8c0.4-0.6,0.8-1.2,1.3-1.9C597.8,710.9,601,706.4,599.2,702.7z"
                fill="#f9d335"
            />
            <Path
                d="M530.6,742c-0.7-1-1.4-2-2.1-2.9c-0.6-0.8-1.2-1.6-1.8-2.4c-2-3-3.9-3.5-6.5-4.2l-0.6-0.2   c-1.3-0.4-2.7-0.9-4-1.6c-0.2-0.5-0.8-0.8-1.4-0.8h-0.1c-2.2-1.2-4.3-2.6-6.4-4.1c0-0.1,0-0.2,0-0.3c-0.4-1-0.7-2.1-1.1-3.2   c-0.7-2.2-1.4-4.5-2.4-6.6c-1.2-2.6-3.3-4.3-5.3-5.9c-0.9-0.7-1.9-1.5-2.7-2.3c-0.5-0.5-1.4-0.5-1.9,0s-0.5,1.4,0,1.9   c0.9,0.9,1.9,1.7,2.9,2.5c1.9,1.5,3.6,2.9,4.6,5c0.9,1.9,1.6,4.1,2.3,6.2c-3.5-2.6-6.6-5.2-9.2-7.8c-3.9-3.8-8.3-7.3-13.7-7.4   c-0.7,0-1.3,0.6-1.4,1.3c0,0.7,0.6,1.3,1.3,1.4c4.5,0.1,8.4,3.2,11.9,6.6c3.4,3.3,7.6,6.7,12.4,10.1c1.1,0.8,2.3,1.6,3.4,2.4   c-3-0.4-6-1.4-7.8-3.1c-0.5-0.5-1.4-0.5-1.9,0.1c-0.5,0.5-0.5,1.4,0.1,1.9c3.1,2.9,8.2,4,12.7,4c0.6,0,1.2,0,1.7-0.1   c1.7,0.9,3.5,1.6,5.3,2.1l0.7,0.2c2.5,0.7,3.6,1,5,3.1c0.6,0.9,1.3,1.7,1.9,2.5c0.3,0.4,0.6,0.8,0.9,1.2c-0.5-0.2-1.1-0.3-1.7-0.5   c-2.6-0.7-5.3-1.5-6.7-2.9c-0.5-0.5-1.4-0.5-1.9,0s-0.5,1.4,0,1.9c1.9,1.9,4.9,2.8,7.8,3.6c0.9,0.3,1.7,0.5,2.5,0.8   c1.2-0.7,2.3-1.5,3.5-2.2C530.9,742.4,530.7,742.2,530.6,742z"
                fill="#f9d335"
            />
            <Path
                d="M524,649c1,0.9,2.1,1.6,3.1,2.2c1,0.7,2,1.3,2.9,2c1,0.9,1.8,1.7,2.7,2.7c0.8,0.9,1.6,1.8,2.6,2.7   c0.1,0.1,0.1,0.1,0.2,0.1c1.2,2.7,2.9,5.2,4.5,7.7c2.1,3.2,4,6.2,5,9.3c-0.2,0.3-0.2,0.7-0.1,1c0.1,0.3,0.3,0.6,0.6,0.7   c0.2,0.8,0.3,1.6,0.2,2.5c0,2.1-1.1,4.6-2.1,6.9c-0.5,1.2-1,2.3-1.4,3.4c-0.1,0.4-0.3,0.9-0.4,1.3l-0.1,0.1c-0.4,0.4-0.5,1-0.3,1.5   c-0.2,1-0.4,1.9-0.5,2.9c-1.4-1.7-3.3-3.2-5.2-4.6c-1.7-1.3-3.4-2.6-4.5-4c-0.2-0.2-0.4-0.5-0.5-0.7c5.1-9,4.2-20.9-2.2-29.1   c-0.5-0.6-1.3-0.7-1.9-0.2c-0.6,0.5-0.7,1.3-0.2,1.9c5.3,6.8,6.4,16.6,2.8,24.4c-0.3-0.8-0.6-1.7-0.9-2.5c-0.2-0.7-0.5-1.5-0.7-2.2   c-0.3-0.9-0.7-1.8-1-2.7c-0.6-1.7-1.3-3.5-1.9-5.3c-0.5-1.7-0.7-3.4-0.8-5.2c-0.1-1.3-0.2-2.7-0.4-4.1c-0.1-0.7-0.8-1.2-1.6-1.1   c-0.7,0.1-1.2,0.8-1.1,1.6c0.2,1.2,0.3,2.5,0.4,3.8c0.1,1.9,0.3,3.8,0.9,5.8c0.2,0.5,0.3,1,0.5,1.4c-2.8-1.9-5.3-5-6.5-8.4   c-0.7-2-1.1-3.9-1.4-5.9c-0.4-2-0.7-4-1.4-6c-0.2-0.7-1-1.1-1.7-0.8l0,0c-0.7,0.2-1.1,1-0.8,1.7c0.6,1.8,1,3.7,1.3,5.6   c0.4,2,0.8,4.2,1.5,6.3c1.4,4,5,8.9,9.8,11c0.2,0.1,0.3,0.1,0.5,0.1c0.1,0.1,0.1,0.3,0.2,0.4c0.3,0.9,0.7,1.8,1,2.7   c0.2,0.7,0.5,1.4,0.7,2.1c0.8,2.5,1.6,5.1,3.4,7.2c1.3,1.6,3.2,3,5,4.4c2.5,1.9,5.1,3.9,6.2,6.3c0.1,0.2,0.3,0.4,0.4,0.5   c0,1.2,0.2,2.5,0.4,3.7c0.9,6,3.4,12,5.7,17.9c1,2.5,1.9,4.8,2.8,7.1c0.5,1.3,0.9,2.5,1.4,3.8c0.8-0.3,1.7-0.6,2.5-0.9   c-0.5-1.2-0.9-2.5-1.4-3.7c-0.8-2.4-1.8-4.8-2.8-7.2c-2.3-5.7-4.7-11.6-5.6-17.3c-0.6-3.9-0.4-7.3,0.5-10.8   c1.5-1.4,3.6-3.2,5.6-4.1c1.7-0.8,3.4-1.2,5.3-1.6c1.3-0.3,2.6-0.5,4-1l0,0l0,0c0.1,0,0.2-0.1,0.4-0.1c6.9-2.5,15.1-9.8,12.1-18.3   c-0.2-0.7-1-1.1-1.7-0.8l0,0c-0.7,0.2-1.1,1-0.8,1.7c2.2,6.2-3.5,11.7-8.9,14.2c0.2-1.1,0.5-2.1,1.2-3.6c0.3-0.7,0.6-1.6,1-2.6   c0.5-1.5,1.2-3.3,1.8-4c0.5-0.5,0.5-1.4,0-1.9s-1.4-0.5-1.9,0c-1.1,1.1-1.7,3.1-2.4,5c-0.3,0.9-0.6,1.7-0.9,2.3   c-1,2.3-1.4,3.8-1.5,5.7c-0.9,0.3-1.8,0.5-2.8,0.7c-1.9,0.4-3.9,0.8-5.9,1.8c-0.9,0.4-1.8,1-2.6,1.6c0,0,0-0.1,0.1-0.1   c1.1-2.5,2.3-5.2,2.4-7.9c0-1.1-0.1-2.1-0.3-3.1c0.6-1.3,1.5-2.5,2.4-3.7c0.9-1.1,1.8-2.3,2.4-3.6c0.6-1.3,1-2.7,1.2-4.1   c5.4,0,10.8-1.7,15.3-4.9c0.6-0.4,0.8-1.3,0.3-1.9c-0.4-0.6-1.3-0.8-1.9-0.3c-3.8,2.7-8.5,4.2-13.2,4.3c0.2-1,0.5-2,1-2.8   c0.4-0.7,1-1.3,1.7-1.8c0.2,0,0.3,0,0.5-0.1c2.1-0.8,4.5-1.3,7-1.9c2.7-0.6,5.4-1.2,7.9-2.1c2.4-0.9,4.7-2,6.7-3.7   c1.7-1.5,3.2-3.2,4.6-5c0.3-0.2,0.5-0.4,0.6-0.8c0.8-1.1,1.6-2.3,2.4-3.4c0.8-1.2,1.6-2.3,2.4-3.3c0.4-0.5,0.9-1.1,1.4-1.8   c0.7-0.9,1.5-1.9,2.2-2.9c-0.7-0.6-1.3-1.2-2-1.8c-0.8,1.1-1.6,2.1-2.3,3c-0.5,0.7-1,1.3-1.4,1.9c-0.6,0.8-1.2,1.6-1.7,2.4   c0.2-1.1,0.4-2.3,0.5-3.5c0.2-1.1,0.3-2.2,0.5-3.2c0.2-1.3,0.3-2.6,0.4-3.9c-0.8-0.6-1.7-1.3-2.5-1.9c0,0.3,0,0.6-0.1,1   c-0.1,1.6-0.2,3.1-0.4,4.5c-0.2,1.1-0.3,2.1-0.5,3.2c-0.2,1.3-0.4,2.6-0.6,3.8c-0.1,0.5-0.2,1.1-0.3,1.7c-0.2,1.1-0.5,2.3-0.5,3.4   c-1.3,1.8-2.7,3.4-4.3,4.7c-2.2,1.9-5.1,3-8.1,3.9c0.6-0.4,1.2-0.9,1.7-1.5c4.5-4.7,5.4-10.1,6.3-15.7c0.3-1.7,0.5-3.4,0.9-5.1   c0.5-2.1,1.2-4.3,2-6.5c-0.8-0.5-1.5-1-2.3-1.4c-0.4,1.1-0.8,2.2-1.1,3.3c-0.4-1.6-0.9-3.2-1.5-4.8c-1.1-0.6-2.2-1.2-3.4-1.8   c0.2,0.7,0.4,1.5,0.7,2.2c0.9,2.5,2.6,7.1,2,9.7c-0.1,0.5,0.1,1,0.5,1.3c-0.2,0.9-0.3,1.8-0.4,2.7c-0.9,5.4-1.6,10.1-5.6,14.3   c-1.7,1.8-4.3,2.7-7,3.8c-1.3,0.5-2.5,1-3.7,1.5c1-2,2.3-3.8,3.6-5.6c2.3-3,4.6-6.2,5.3-10.6c0.5-3.1,0.2-6.9-0.8-11.5   c-0.3-1.1-0.5-2.3-0.7-3.6c-0.5-2.6-1-5.3-1.8-7.6c-1-0.4-2.1-0.8-3.1-1.1c0,0.2,0,0.5,0.1,0.7c1.1,2.4,1.6,5.5,2.2,8.5   c0.2,1.3,0.5,2.5,0.7,3.7c1,4.3,1.2,7.8,0.8,10.5c-0.6,3.7-2.7,6.5-4.8,9.4c-1.9,2.6-3.9,5.3-5,8.8c-0.1,0.2-0.1,0.4,0,0.6   c-0.7,0.6-1.3,1.3-1.8,2.1c-1.1,1.7-1.4,3.7-1.8,5.6c-0.2,1.2-0.4,2.4-0.8,3.4c0-1.3-0.2-2.7-0.7-4.3l-0.3-1.3   c-1.1-4-1.9-6.9-0.7-10.9c0.8-2.7,2.5-4.9,4.1-7.1c3.1-4.2,6.3-8.5,3.5-15.8c-0.7-1.8-1.7-3.5-2.7-5.2c0.7-1.9,1.8-3.7,3-5.6   c0.8-1.2,1.6-2.5,2.3-3.8c-1-0.3-1.9-0.6-2.9-0.8l0,0c0,0.1,0.1,0.3,0.1,0.4c-0.5,0.9-1.1,1.9-1.7,2.8c-0.9,1.4-1.8,2.8-2.5,4.3   c-0.3-0.4-0.6-0.8-0.8-1.2c-1.1-1.6-2.3-3.3-3.2-4.9c-0.8,0.4-1.6,0.9-2.3,1.3c1,1.8,2.2,3.5,3.4,5.1c0.7,1,1.4,2,2.1,3.1   c0.1,0.2,0.2,0.3,0.3,0.5c1,1.6,2,3.3,2.7,5c2.3,5.9-0.2,9.3-3.1,13.2c-1.3,1.7-2.5,3.4-3.5,5.4c-0.1-0.7-0.2-1.4-0.2-1.9   c-0.4-2.4-0.6-4.5-0.5-6.8c0.1-1,0.2-2,0.3-3.1c0.4-3.8,0.8-8-0.6-11.6c-0.3-0.7-1-1-1.7-0.8l0,0c-0.7,0.3-1,1-0.8,1.7   c1.2,3,0.8,6.8,0.5,10.4c-0.1,1.1-0.2,2.2-0.3,3.2c-0.1,2.5,0,4.8,0.5,7.4c0.2,0.8,0.3,2.3,0.4,3.8c0.2,2.4,0.4,4.8,0.8,6.2   c0.2,2.1,0.7,4.1,1.3,6.3l0.3,1.3c1,3.8,0.7,6.1-0.8,8.9c-1.2-2.7-2.9-5.3-4.5-7.9c-2.5-3.8-5-7.7-5.7-11.8c-0.3-2-0.4-4.2-0.5-6.4   c0-2.1-0.1-4.2-0.4-6.3c-0.2-1-0.4-2-0.6-3c0-0.1,0.1-0.2,0.1-0.4c0.3-2.3,1.1-4.4,2-6.6c1.2-3,2.5-6.2,2.2-10   c0-0.4-0.1-0.8-0.1-1.2c-0.9,0.5-1.7,1.1-2.5,1.6c0.2,3-0.9,5.7-2,8.5c-0.4,0.9-0.7,1.9-1.1,2.8c-0.5-1.7-1.1-3.3-1.7-4.9   c-0.3-0.9-0.7-1.8-1-2.7c-0.8,0.5-1.5,1-2.3,1.5c0.3,0.7,0.5,1.4,0.8,2.1c1.5,4.2,2.9,8.2,3.6,12.6c0.3,1.9,0.3,3.9,0.4,6   c0.1,2.1,0.1,4.2,0.4,6.3c-0.6-0.7-1.3-1.3-2-2c-1-0.9-2.1-1.6-3.2-2.3c-2.2-1.4-4.1-2.6-4.8-5c-1.1-3.6-2-7.7-2.5-11   c-0.1-0.5-0.1-1-0.1-1.5c-0.8,0.6-1.7,1.2-2.5,1.8l0,0c0,0.1,0.1,0.3,0.1,0.5c-0.1-0.1-0.2-0.2-0.3-0.3c-0.7,0.5-1.4,1.1-2.2,1.6   c1,1,2.2,1.9,3.3,2.7c0.5,2.3,1.1,4.7,1.8,6.9c0.1,0.3,0.2,0.5,0.3,0.8c-3.5-1.4-7.7-4.1-8.7-6.5c-0.1-0.3-0.4-0.6-0.7-0.7   c-0.6,0.5-1.2,1-1.8,1.5c0,0.1,0,0.2,0.1,0.3C512,644.3,519.7,648.4,524,649z"
                fill="#f9d335"
            />
            <Path
                d="M452.5,719.7c0.7,0.2,1.4,0.4,2,0.6l0.2,0.1c2.9,0.9,6.5,2.1,9.6,1.5c1.2-0.2,2.3-0.7,3.3-1.2   c0.9-0.4,1.8-0.8,2.7-1c0.6-0.1,1.3-0.1,2-0.1c1.1,0,2.3,0.1,3.4-0.4c0.1,0,0.1-0.1,0.2-0.1c3.1,3.1,6.8,5.7,10.9,8.5   c1.1,0.7,2.1,1.3,3.2,1.8c1.5,0.8,2.9,1.5,4.2,2.7c0.5,0.5,1.1,1.1,1.5,1.6c-1,0.5-2.1,1-3.2,1.4c-0.9,0.4-1.8,0.7-2.7,1.2   c-1.1,0.5-2,1.2-2.8,1.9c-0.6-0.3-1.2-0.6-1.9-0.9c-1.3-0.6-2.6-1.2-3.7-2l-0.8-0.5c-1.5-1-3.1-2.1-4.8-3.1c0-0.1,0-0.1-0.1-0.2   c-0.3-0.6-1-0.8-1.6-0.7c-1.4-0.7-2.8-1.3-4.3-1.7c-2-0.6-4-0.4-5.9-0.3c-1.3,0.1-2.6,0.2-3.8,0c-3.5-0.4-7.7-2.1-10.1-4.2   c-0.4-0.3-0.8-0.4-1.3-0.2c0.4,1.2,0.8,2.3,1.2,3.5c2.8,1.9,6.6,3.3,10,3.6c1.5,0.2,2.9,0.1,4.3,0c1.8-0.1,3.5-0.2,5.1,0.2   c0.6,0.2,1.2,0.4,1.8,0.6c-2.7,1.3-5.6,2.5-8.5,3.4c-1.6,0.5-3.4,1-4.8,0.6c-1.2-0.3-4-1.8-5.5-2.8c0.6,1.4,1.3,2.8,1.9,4.1   c1.1,0.6,2.2,1,2.9,1.2c2.1,0.6,4.3,0,6.3-0.6c0.8-0.2,1.6-0.5,2.3-0.8c3-1.1,5.8-2.4,8.5-3.7c1.7,1,3.4,2.1,5.1,3.2l0.8,0.5   c1.3,0.9,2.7,1.5,4.1,2.2c0.2,0.1,0.4,0.2,0.6,0.3c-0.1,0.1-0.2,0.1-0.4,0.2c-0.7,0.3-1.3,0.6-2,0.8c-2.3,1-4.8,2-6.6,4.3   c-0.7,0.9-1,1.7-1.3,2.4c-0.2,0.5-0.3,0.9-0.6,1.4c-0.8,1.5-2.7,2.1-4.7,2.6c-1.6,0.5-3.2,0.9-4.5,2c0.6,0.7,1.1,1.4,1.7,2.1   c0.8-0.7,2.1-1,3.5-1.4c2.3-0.7,4.9-1.4,6.3-3.9c0.3-0.6,0.6-1.2,0.8-1.7c0.3-0.7,0.5-1.2,0.9-1.8c1.4-1.8,3.3-2.6,5.5-3.5   c0.7-0.3,1.4-0.6,2.1-0.9c1-0.5,1.8-1,2.5-1.7c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.2-0.2,0.3-0.2c0.8-0.7,1.6-1.3,2.4-1.7   c0.9-0.4,1.7-0.8,2.6-1.1c1.3-0.5,2.6-1.1,3.9-1.8c0.7,0.9,1.3,1.7,2.1,2.6c2.2,2.4,3.6,3.8,6.5,5.6c1.6,1,3.3,2.1,4.6,3.3   c0.2,0.2,0.4,0.5,0.6,0.7c-0.1,0-0.2,0.1-0.3,0.1c-2.3,0.7-4.8,1.4-7.2,1.9c-1.1,0.2-2.1,0.6-3.2,0.9c-0.4,0.1-0.8,0.2-1.2,0.4   c-0.4-0.1-0.7,0.1-1,0.3c-0.6,0.1-1.1,0.3-1.7,0.3c-1.8,0.2-3.7-0.3-5.8-0.7c-1.3-0.3-2.7-0.6-4.1-0.7c-3.3-0.3-6,0.6-8.8,1.6   l-0.3,0.1c-0.7,0.2-1.1,1-0.8,1.7c0.2,0.7,1,1.1,1.7,0.8l0.3-0.1c2.7-1,4.9-1.8,7.6-1.5c1.2,0.1,2.4,0.4,3.8,0.7   c2.1,0.5,4.3,0.9,6.5,0.8c0.1,0,0.1,0,0.2,0c-1.5,3.6-3.5,6.4-6.4,9.1c-2.6,2.3-5.2,3.1-8.3,3.9c-0.8,0.2-1.7,0.5-2.6,0.8   c0.9,0.7,1.8,1.3,2.7,2c0.2-0.1,0.4-0.1,0.6-0.2c1.2-0.3,2.3-0.7,3.5-1.1c2-0.7,4-1.7,5.9-3.5c3.7-3.3,6-6.9,7.8-11.7   c0.4-0.1,0.8-0.2,1.2-0.4c0.8-0.3,1.6-0.5,2.3-0.7c-0.6,2-1.7,4.1-2.8,6c-0.3,0.6-0.6,1.1-0.9,1.6c-0.2,0.4-0.4,0.7-0.5,1.1   c-0.6,1.2-1.2,2.5-2,3.5c-1.2,1.7-2.9,3-4.6,4.3c-1.4,1-2.7,2-4,3.3c-0.5,0.5-0.5,1.3,0,1.8c0.3,0.2,0.5,0.3,0.8,0.5   c0.2,0,0.4,0,0.6-0.1s0.4-0.2,0.5-0.3c1.1-1.1,2.3-2,3.6-3c1.8-1.4,3.8-2.8,5.2-4.9c0.9-1.2,1.5-2.6,2.2-3.9   c0.2-0.4,0.4-0.7,0.5-1.1c0.3-0.5,0.5-1,0.8-1.6c1.3-2.5,2.8-5.3,3.3-7.9c1.7-0.4,3.4-0.9,5-1.4c0.7-0.2,1.3-0.4,1.9-0.5   c0.3,0.1,0.6,0.1,0.8,0s0.3-0.2,0.5-0.3c1.9-0.4,3.7-0.5,5.7-0.4c1.1-0.8,2.1-1.5,3.2-2.3c-3.5-0.6-6.4-0.6-9.6,0.1   c-0.2-0.2-0.4-0.4-0.5-0.7c-0.3-0.4-0.7-0.9-1.1-1.3c-1.4-1.3-3.3-2.6-5-3.6c-2.6-1.6-3.8-2.9-5.9-5.2c-0.8-0.8-1.4-1.7-2.1-2.6   c-1-1.3-2-2.7-3.3-3.8c-0.5-0.5-1-0.8-1.5-1.2c-2.1-2.3-4.5-7.5-5.9-11.4c-0.2-0.7-1-1.1-1.7-0.8c-0.7,0.2-1.1,1-0.8,1.7   c0.3,0.9,1.6,4.4,3.3,7.6c-0.4-0.2-0.7-0.4-1.1-0.7c-4.4-3-8.3-5.8-11.4-9.1c-0.3-0.3-7.8-8.5-12.7-8.1c-0.7,0.1-1.3,0.7-1.2,1.4   c0.1,0.7,0.7,1.3,1.4,1.2c2.2-0.2,6.5,3.1,9.4,6c-0.4,0-0.9,0-1.4,0c-0.9,0-1.8,0-2.6,0.1c-1.2,0.2-2.2,0.7-3.3,1.2   c-1,0.4-1.9,0.8-2.8,1c-2.4,0.5-5.6-0.6-8.2-1.4l-0.2-0.1c-0.6-0.2-1.3-0.4-2.1-0.6c-2.3-0.6-5.5-1.5-7.1-2.8   c0.2,1.2,0.5,2.3,0.7,3.5C448.7,718.6,450.7,719.2,452.5,719.7z"
                fill="#f9d335"
            />
            <Path
                d="M550.2,713.4c2,4.6,3.1,10.8,3.3,18.6c0.9-0.3,1.8-0.6,2.7-0.9c-0.2-7.7-1.4-14-3.5-18.8   c-0.3-0.7-1.1-1-1.8-0.7C550.2,711.9,549.9,712.7,550.2,713.4z"
                fill="#f9d335"
            />
            <Path
                d="M502.7,655.8c0,0.7,0,1.4,0,2.1c0,2.8,0.1,5.5,0.4,8c-2.6-2.1-5.3-4.2-7.9-6c-0.3-2-0.7-3.8-1.5-5.7   c-0.7,0.7-1.4,1.3-2.1,2c0.2,0.5,0.3,1,0.5,1.5c-0.4-0.3-0.8-0.5-1.2-0.8c-0.7,0.6-1.3,1.3-2,1.9c4.6,3,9.9,6.9,14.8,11   c0.2,1,0.3,2,0.6,2.9c-0.5-0.3-1-0.7-1.5-1.1c-1-0.8-2-1.5-3.1-2.1c-1.8-0.9-3.7-1.4-5.6-2c-1.2-0.3-2.3-0.6-3.4-1s-2.3-0.7-3.4-1   c-1.4-0.3-2.6-0.6-3.8-1.2c-0.6,0.7-1.3,1.4-1.9,2.1c0.1,0,0.1,0.1,0.2,0.1c1.6,0.8,3.3,1.2,4.9,1.6c1.1,0.3,2.1,0.5,3.1,0.9   c1.2,0.4,2.4,0.8,3.5,1.1c1.8,0.5,3.6,1,5.1,1.8c0.9,0.4,1.7,1.1,2.6,1.8c1.2,1,2.5,2,4,2.5c0.8,2.9,1.9,5.7,3.2,8.6   c3.1,6.7,7.2,13.8,10.9,19c2.2,3,4.7,5.7,7.2,8.3s4.8,5.1,6.8,7.9c3.4,4.8,6.6,10.4,9.7,16.2c0.8-0.4,1.6-0.7,2.4-1.1   c-2.1-4-4.3-8-6.6-11.7c0.8-1.5,2.5-5,2-7.6c-0.4-2.3-1.4-4.3-2.3-6.3l-6.2-13.1c-0.3-0.7-1.1-1-1.8-0.6c-0.7,0.3-1,1.1-0.6,1.8   l6.2,13.1c0.9,1.8,1.8,3.7,2.1,5.6c0.2,1-0.3,2.8-1,4.5c-0.5-0.8-1.1-1.6-1.6-2.3c-2.1-3-4.6-5.6-7.1-8.2c-0.7-0.7-1.3-1.4-2-2.1   c0,0,0,0,0-0.1c0-1,0.1-2.1,0.3-3.2c0.3-2.1,0.6-4.2-0.1-6.5c-0.5-1.6-1.2-3.2-1.9-4.7l-0.3-0.8c-0.6-1.3-1.4-2.5-2.2-3.7   c-1-1.5-1.9-2.8-2.3-4.4c-0.2-0.7-0.9-1.1-1.6-1c-0.7,0.2-1.1,0.9-1,1.6c0.5,2,1.6,3.6,2.7,5.2c0.8,1.1,1.5,2.2,1.9,3.2l0.3,0.8   c0.7,1.5,1.3,2.9,1.8,4.4c0.5,1.7,0.3,3.4,0,5.3c0,0.3-0.1,0.6-0.1,0.9c-0.9-1-1.7-2-2.5-3.1c-3.7-5.1-7.6-12.1-10.7-18.6   c-3.8-8.2-5.3-15.7-5.3-25.8c0-0.7,0-1.4,0-2.1c0-3.9,0.1-7.2-1.1-11.1c-0.8,0.6-1.5,1.3-2.3,1.9   C502.8,649.7,502.8,652.3,502.7,655.8z"
                fill="#f9d335"
            />
            <Path
                d="M462.7,704.5c1.8-0.2,3.6-0.1,5.6-0.1c1.4,0,2.8,0.1,4.1,0c2.2-0.1,4.1-0.3,6.1-0.9   c0.2,0,0.4,0,0.6-0.1c0.1,0,0.2-0.1,0.3-0.2c0.7-0.2,1.5-0.5,2.3-0.7c2.6-0.9,4.9-1.2,7.3-0.9c0.1,0.1,0.2,0.1,0.2,0.2   c0.4,0.3,0.8,0.3,1.2,0.2c0.1,0,0.1-0.1,0.2-0.1c1.7,0.3,3.5,0.9,5.6,1.7c1.7,0.6,3.4,1.1,5.1,1.5c2.5,0.7,5.1,1.4,7.3,2.5   c1.6,1.7,3.7,3.1,5.6,4.4c0.6,0.4,1.2,0.9,1.8,1.3c1.4,1,3,1.9,4.6,2.9c3.5,2,7.2,4.1,8.8,7.1c0.5,0.9,0.8,2.1,1.1,3.2   c0.2,0.6,0.3,1.2,0.5,1.8c-4.1-0.5-8.8-3.9-10.8-5.5c-1.1-0.9-2.4-1.7-3.5-2.6c-1.9-1.3-3.9-2.7-5.4-4.2c-0.5-0.5-1.4-0.6-1.9,0   c-0.5,0.5-0.6,1.4,0,1.9c1.7,1.8,3.8,3.2,5.8,4.6c1.2,0.8,2.3,1.6,3.4,2.4c3,2.4,8.7,6.3,13.8,6.2c1.2,2,3,3.7,4.6,5.2l0.5,0.5   c0.5,0.4,0.9,0.9,1.4,1.4c0.8-0.4,1.7-0.8,2.5-1.2c-0.7-0.7-1.4-1.4-2-2.1l-0.5-0.5c-1.7-1.7-3.4-3.4-4.5-5.2   c-0.5-0.9-0.9-2.1-1.2-3.3c-0.4-1.3-0.7-2.6-1.4-3.8c-2-3.6-5.9-5.9-9.8-8.1c-1.6-0.9-3.1-1.8-4.4-2.7c-0.6-0.4-1.2-0.9-1.9-1.3   c-3.4-2.3-6.9-4.7-7.6-8.5c-0.1-0.4,0-0.9,0-1.5s0.1-1.2,0-1.8c-0.1-0.8-0.4-1.5-0.7-2.2c-0.2-0.5-0.4-1-0.5-1.4   c-0.6-2.7-1.5-6-2.7-9.4c-0.2-0.7-1-1.1-1.7-0.8s-1.1,1-0.8,1.7c0.8,2.3,1.5,4.6,2.1,6.6c-1.3,0-2.8-0.6-4.1-1.6   c-1.4-1.1-2.5-2.4-3.7-3.9l-0.4-0.5c-4.8-5.9-10.2-11.3-16.2-16.1c-0.6-0.5-1.4-0.4-1.9,0.2c-0.5,0.6-0.4,1.4,0.2,1.9   c5.8,4.7,11.1,9.9,15.8,15.7l0.4,0.5c1.2,1.5,2.5,3.1,4.2,4.4c1.8,1.4,3.8,2.1,5.7,2.1c0.2,0,0.4,0,0.6-0.1   c0.1,0.6,0.3,1.1,0.6,1.6c0.2,0.6,0.5,1.1,0.5,1.6c0,0.4,0,0.8,0,1.3c-0.1,0.7-0.1,1.4,0,2.2c0.1,0.6,0.3,1.2,0.5,1.8   c-1.3-0.4-2.7-0.8-4-1.2c-1.7-0.5-3.3-0.9-4.9-1.5c-2.4-0.9-4.7-1.6-7.1-1.9c-1.9-1.5-3.8-3.6-5.5-5.8c1.6-4.4,0.1-9.7-3.5-12.6   c-0.6-0.5-1.4-0.4-1.9,0.2c-0.5,0.6-0.4,1.4,0.2,1.9c2.2,1.9,3.4,4.9,3,7.8c-1.3-1.7-2.8-3.6-4.8-4.8c0-0.1,0-0.2,0-0.3   c-1-2.9-2.3-5.7-3.5-8.4c-0.2-0.5-0.5-1.1-0.7-1.6c-0.6,0.8-1.3,1.5-1.9,2.3c0.1,0.1,0.1,0.3,0.2,0.4c1,2.1,1.9,4.3,2.8,6.5   c-0.9-0.1-1.7-0.1-2.5-0.1c-0.9,0-1.8,0-2.6-0.2c-0.9-0.2-1.6-0.6-2.4-1.2c-0.6,0.7-1.1,1.4-1.6,2.1c1,0.7,2,1.3,3.3,1.6   c1.2,0.3,2.3,0.3,3.4,0.3c1.2,0,2.3-0.1,3.3,0.4c2.1,0.8,3.7,2.9,5.2,4.9l0.1,0.1c1.6,2.2,3.4,4.5,5.3,6.4   c-1.6,0.1-3.3,0.4-5.1,1.1c-0.6,0.2-1.2,0.4-1.8,0.6c-1.3-1.2-3.1-2.1-4.8-3c-0.9-0.5-1.8-0.9-2.6-1.4c-3.8-2.4-7.2-3.9-10.1-4.5   c-0.3-0.1-0.6-0.1-1-0.2c-0.6,0.8-1.2,1.7-1.8,2.5c0.8,0,1.5,0.1,2.3,0.2c2.5,0.5,5.6,1.9,9.1,4.1c0.8,0.5,1.8,1,2.8,1.5   c0.9,0.4,1.8,0.9,2.6,1.4c-1,0.2-2,0.2-3.2,0.3c-1.3,0-2.6,0-3.9,0c-1.4,0-2.9-0.1-4.3,0l-0.4-0.2c-2.6-1.2-5.1-2.3-8.1-2.8   c-0.6,0.8-1.1,1.6-1.6,2.4c1.7,0.2,3.3,0.7,4.8,1.2c-2.3,0.4-4.5,0.9-6.5,1.4c-0.8,1.2-1.6,2.4-2.3,3.6c0.8-0.3,1.6-0.7,2.2-0.8   C455.2,705.7,458.8,705,462.7,704.5z"
                fill="#f9d335"
            />
            <Path
                d="M618.9,711.4c-0.1-0.7-0.8-1.2-1.5-1.1c-0.7,0.1-1.2,0.8-1.1,1.5c1,7.3-5.1,10.3-12,13.2   c1.8,0.1,3.7,0.3,5.5,0.5C615.3,722.6,619.9,718.7,618.9,711.4z"
                fill="#f9d335"
            />
            <Path
                d="M620.2,691.1c-0.7,0.2-1.1,0.9-0.9,1.6c1,3.4-0.8,6.3-3.4,8.8c-0.7-4.2-1.4-9.4-0.1-12.8   c0.8-2.2,2.3-4.2,3.8-6.3c0.1-0.1,0.2-0.3,0.3-0.4c-0.2-1.2-0.5-2.4-0.7-3.6c-0.5,0.8-1.1,1.6-1.7,2.4c-1.6,2.1-3.2,4.3-4.2,6.9   c-1.7,4.5-0.6,10.9,0.2,15.6v0.3c-0.8,0.6-1.6,1.3-2.3,1.9c-0.8,0.7-1.6,1.3-2.4,1.9c-1.8-5.4-2.5-12.7-0.2-18.3   c0.3-0.7,0-1.5-0.7-1.8s-1.5,0-1.8,0.7c-2.4,5.9-2.2,14.2,0.5,21.4c-3,3.2-5,6.7-6.7,10.2c-0.7,1.3-1.2,2.8-1.7,4.2   c-0.1,0.3-0.2,0.6-0.3,0.8c0.9,0,1.9,0,2.8,0.1l0,0c0.5-1.3,0.9-2.7,1.5-3.8c1.8-3.6,3.8-7.3,7.1-10.4c0.9-0.9,2.1-1.9,3.4-2.9   c3.1-2.5,6.7-5.3,8.4-8.8c0-0.3,0-0.6,0-0.9c0-2.3-0.1-4.6-0.3-6.9C620.7,691,620.5,691,620.2,691.1z"
                fill="#f9d335"
            />
        </G>
        <G>
            <Path
                d="M750,733.7c-1.9-2.4-3.1-3.8-3.1-3.8l-30.5-13.7c-11.3,11.5,0.1,37.5,9.3,48.7   c4.9,5.9,15,8.5,24.2,8.7L750,733.7L750,733.7z"
                fill="#e2be24"
            />
            <Path
                d="M638.3,641c0,0-58.5-35.5-48.1-41.3c10.3-5.8,13.1-27.8,27.4-31.9c14.3-4,48.1,41.3,48.1,41.3   L638.3,641z"
                fill="#f9d335"
            />
            <G>
                <Path
                    id="circle7041-4_33_"
                    d="M625.4,580.1c4,1.2,6.3,5.5,5,9.6s-5.5,6.4-9.6,5.1c-4-1.2-6.3-5.5-5-9.6    C617.1,581.2,621.4,578.9,625.4,580.1z"
                    fill="#071a29"
                />
                <Path
                    id="circle7043-3_33_"
                    d="M622,581.1c1.8,0.6,2.9,2.5,2.3,4.4c-0.6,1.9-2.5,2.9-4.4,2.3    c-1.8-0.6-2.8-2.5-2.3-4.4C618.3,581.6,620.2,580.5,622,581.1z"
                    fill="#ffffff"
                />
            </G>
            <Path
                d="M750,704.3c-26.7-38.4-74.7-93.5-93-94.5c-20-1.1-29.5,18.6-25.2,41.9   c3.6,19.4,81.5,67.4,118.2,83.7V704.3z"
                fill="#f9d335"
            />
            <Path
                d="M637.2,635.1c-17.3-1.8-43.1,20-43.5,42.5c-0.4,22.4,41.8,48.2,49.5,50.7c9.2,3,8.2-2.2,2.9-10.6   c-7-10.9-36.4-45.7,5.7-63.5C658.1,651.4,654.5,636.9,637.2,635.1z"
                fill="#e2be24"
            />
            <Path
                d="M750,648c-5.8-14.4-13-27.7-22.3-37.3c-33.6-34.7-59.8-12-68.1-21.1c-2-2.1-5.8,3.1-3.1,13.1   c7.6,27.7-5.7,37.5,8.2,59.2c12.6,19.7,53.8,52.2,85.4,71.2V648H750z"
                fill="#3b9ab7"
            />
            <G fillOpacity="0.19">
                <Path
                    d="M693,625.8c3.1,0.1,6.5,2.7,7.4,5.7l3.6,11.7c0.9,3-0.2,7.1-2.6,9.2l-6.2,5.5    c-2.4,2.1-6.5,2.5-9.3,1l-11-6.1c-2.8-1.5-4.3-5.2-3.5-8.2l3.8-14c0.8-3,4.1-5.4,7.2-5.3L693,625.8z"
                    fill="#caf6ff"
                />
                <Path
                    d="M711.6,654.7c-3.1-0.7-7.5,0.5-9.9,2.5l-3.7,3.2c-2.4,2-2.9,5.8-1.1,8.4l4.4,6.4    c1.8,2.6,5.6,3.6,8.4,2.3l5.7-2.6c2.9-1.3,5.3-4.9,5.4-8.1l0.2-4.4c0.1-3.1-2.3-6.2-5.4-6.9L711.6,654.7z"
                    fill="#caf6ff"
                />
                <Path
                    d="M698.3,616.1c-0.5,3.1-3.4,5.5-6.5,5.3l-0.9-0.1c-3.1-0.2-6.8-2.7-8.1-5.5l-0.3-0.7    c-1.3-2.8-0.2-6.3,2.6-7.8l1.7-0.9c2.8-1.5,6.7-1.2,8.8,0.6s3.4,5.8,2.9,8.9L698.3,616.1z"
                    fill="#caf6ff"
                />
            </G>
        </G>
        <Path
            d="M462.6,1014.9c49.6,66.2,128.7,109,217.8,109c24.1,0,47.4-3.1,69.6-9v-16l-139.7-39.7L462.6,1014.9z"
            fill="#8aeafb"
        />
        <Path
            d="M705.9,787.3l0.1,0.8c10.9,18.8,17.2,40.6,17.2,63.9c0,23.8-6.5,46.1-17.9,65.1  c0.7,21.9,6.3,36.2,6.3,36.2c-5.2-19.2,6.4-42,14.5-55.8s16.8-46,2.5-75.9C722.3,808.3,705.9,787.3,705.9,787.3z"
            fill="#62abcd"
        />
        <G>
            <Path
                d="M471.5,984.8c-1,12.1,0.7,24.4,4.9,35.9c0.2,0.6,0.9,1,1.5,1c0.1,0,0.3,0,0.4-0.1   c0.8-0.3,1.2-1.2,0.9-1.9c-4.1-10.9-5.7-22.6-4.8-34.2L471.5,984.8z"
                fill="#8aeafb"
            />
            <Path
                d="M480.6,986.8c-0.5,10.7-0.1,21.4,1.3,32.2c0.1,0.8,0.8,1.4,1.6,1.3c0,0,0,0,0.1,0   c0.8-0.1,1.4-0.9,1.3-1.7c-1.3-10.2-1.7-20.7-1.2-31.1L480.6,986.8z"
                fill="#8aeafb"
            />
            <Path
                d="M528.7,1049c3.9-7.2,3.6-15.6,3.4-23.7l-0.1-2c-0.2-8.4,0.1-16.9,1-25.2l-3-0.6   c-0.9,8.6-1.2,17.3-1,26l0.1,2c0.2,5.5,0.3,11.2-0.9,16.4c-5.3-14.5-6.3-30.4-2.9-45.4l-2.9-0.6c-3.6,15.7-2.5,32.4,3.2,47.5   c0.2,0.6,0.9,1,1.5,1c0.1,0,0.3,0,0.4-0.1l0,0c-0.4,1.2-1,2.5-1.6,3.6C526.9,1048.2,527.8,1048.6,528.7,1049z"
                fill="#8aeafb"
            />
            <Path
                d="M455.9,985.3c0.1,8.1,1,16.2,2.6,24.1c0.2,0.8,0.8,1.3,1.6,1.2c0.1,0,0.1,0,0.2,0   c0.8-0.2,1.3-1,1.2-1.8c-1.7-8.3-2.5-16.8-2.6-25.3C458.1,984,457,984.6,455.9,985.3z"
                fill="#8aeafb"
            />
            <Path
                d="M516.4,1035.4c0.6-0.3,1-0.9,0.9-1.6c-2.1-12.8-2.2-26.2-0.5-39.2l-2.9-0.6   c-1.6,11.7-1.7,23.7-0.2,35.4c-4.1-10.5-6.1-22.7-6-36.7l-3-0.6c-0.3,21.4,4.2,38.9,13.5,52.4c1.9,0.9,3.8,1.7,5.7,2.6   C521.1,1043.4,518.6,1039.6,516.4,1035.4z"
                fill="#8aeafb"
            />
            <Path
                d="M463.7,983.1c-0.5,9.5,0,19.1,1.6,28.5c0.1,0.8,0.8,1.3,1.6,1.3h0.1c0.8-0.1,1.4-0.9,1.2-1.7   c-1.5-9-2-18.2-1.5-27.3L463.7,983.1z"
                fill="#8aeafb"
            />
            <Path
                d="M656.4,1070.3c-0.1-0.8-0.9-1.4-1.7-1.3s-1.4,0.9-1.3,1.7c1.1,8.3,1.9,16.6,2.3,25   c1,0.3,2,0.7,3.1,1C658.4,1087.9,657.6,1079,656.4,1070.3z"
                fill="#8aeafb"
            />
            <Path
                d="M489.1,988.6c-0.4,12.2,0.1,24.5,1.6,36.7c0.1,0.8,0.8,1.4,1.6,1.3c0,0,0,0,0.1,0   c0.8-0.1,1.4-0.8,1.3-1.7c-1.4-11.9-1.9-23.8-1.6-35.7L489.1,988.6z"
                fill="#8aeafb"
            />
            <Path
                d="M595.1,1011.6l-2.9-0.6c-3.1,20-3.8,40.3-1.9,60.4c-10.3-17.6-6.9-39.6-1.7-61.2l-2.9-0.6   c-5.3,21.8-8.7,44.1,1.5,62.4c2.1,0.8,4.2,1.5,6.4,2.3C591.4,1053.4,591.9,1032.3,595.1,1011.6z"
                fill="#8aeafb"
            />
            <Path
                d="M497.4,990.4c-1,14.2,0.1,28.5,3.2,42.3c0.2,0.7,0.8,1.2,1.6,1.2c0.1,0,0.1,0,0.2,0   c0.8-0.2,1.3-1,1.1-1.8c-3.1-13.3-4.1-27.2-3.2-41L497.4,990.4z"
                fill="#8aeafb"
            />
            <Path
                d="M449.9,990.9c0.2,1.7,0.4,3.4,0.6,5c0.2,0.2,0.4,0.3,0.7,0.5c-0.2,0.5-0.3,1.1-0.4,1.6   c0.2,1.4,0.4,2.8,0.6,4.2c0.1,0.8,0.8,1.3,1.6,1.3h0.1c0.8-0.1,1.4-0.9,1.2-1.7c-0.8-4.6-1.4-9.3-1.9-13.9   C451.5,988.8,450.5,989.8,449.9,990.9z"
                fill="#8aeafb"
            />
            <Path
                d="M578.9,1014.9c0.3-0.8-0.1-1.6-0.9-1.9c-0.8-0.3-1.6,0.1-1.9,0.9c-6,17.3-6,36.6-0.1,53.9   c1.2,0.4,2.4,0.9,3.7,1.3C573.2,1051.9,572.9,1032.3,578.9,1014.9z"
                fill="#8aeafb"
            />
            <Path
                d="M626.7,1020.6c-0.1-0.8-0.8-1.4-1.6-1.4l0,0c-0.8,0.1-1.4,0.8-1.4,1.6c0.5,5.9-0.7,11.6-2,17.7   c-1.2,5.8-2.5,11.8-2.1,17.9s2.3,12,4.2,17.7c1.4,4.1,2.7,8,3.4,11.9c1.1,0.4,2.1,0.7,3.2,1.1c-0.7-4.8-2.3-9.4-3.8-14   c-1.8-5.5-3.7-11.2-4.1-17c-0.3-5.7,0.9-11.5,2.1-17.1C625.9,1033.1,627.2,1026.9,626.7,1020.6z"
                fill="#8aeafb"
            />
            <Path
                d="M638,1089.7c0.2-3.2,0.1-6.5,0-9.7l-0.1-2c-0.5-17.5,1.4-35.1,5.6-52.1c0.2-0.8-0.3-1.6-1.1-1.8   c-0.8-0.2-1.6,0.3-1.8,1.1c-4.2,17.3-6.2,35.1-5.7,52.9l0.1,2c0.1,2.9,0.2,5.7,0.1,8.6C636,1089,637,1089.4,638,1089.7z"
                fill="#8aeafb"
            />
            <Path
                d="M616.8,1016.3l-2.9-0.6c-4.9,26.5-4.3,48.7,1.7,66.3c1.2,0.4,2.4,0.8,3.7,1.3   C612.6,1065.8,611.8,1043.4,616.8,1016.3z"
                fill="#8aeafb"
            />
            <Path
                d="M651.9,1033.4c0.2-0.8-0.2-1.6-1-1.9c-0.8-0.2-1.6,0.2-1.9,1c-5.8,18.9-8.3,38.7-7.6,58.4   c1,0.3,2,0.7,3,1C643.6,1072.2,646.1,1052.3,651.9,1033.4z"
                fill="#8aeafb"
            />
            <Path
                d="M660.2,1040.6c0-0.8-0.6-1.5-1.4-1.6c-0.8,0-1.5,0.6-1.6,1.4c-0.8,19.2,0.6,38.3,4,57   c1.1,0.4,2.2,0.7,3.2,1.1C660.8,1079.6,659.4,1060.1,660.2,1040.6z"
                fill="#8aeafb"
            />
            <Path
                d="M540.1,1053.9c-2.5-18-2.3-36.3,0.8-54.1l-2.9-0.6c-3.1,17.6-3.4,35.7-1.1,53.4   C538,1053,539,1053.5,540.1,1053.9z"
                fill="#8aeafb"
            />
            <Path
                d="M563.1,1063c-6.1-19.8-9.6-40.1-10.7-60.7l-3-0.7c1,20.3,4.4,40.4,10.2,60   C560.8,1062.1,561.9,1062.6,563.1,1063L563.1,1063z"
                fill="#8aeafb"
            />
            <Path
                d="M547.7,1056.3L547.7,1056.3c0.9-0.1,1.5-0.7,1.5-1.5c0.3-15.4-0.6-31-2.7-46.2   c-0.1-0.8-0.9-1.4-1.7-1.3c-0.8,0.1-1.4,0.9-1.3,1.7c2,15.1,2.9,30.5,2.7,45.8C546.2,1055.6,546.9,1056.3,547.7,1056.3z"
                fill="#8aeafb"
            />
            <Path
                d="M611.6,1015.2l-2.9-0.6c-5.9,20.5-7.3,42.6-3.9,63.6c1.1,0.4,2.2,0.8,3.2,1.1   C604.3,1058.1,605.6,1035.9,611.6,1015.2z"
                fill="#8aeafb"
            />
            <Path
                d="M569.6,1006l-2.9-0.6c-5.9,19-5.9,39.8-0.1,58.9c1.2,0.4,2.4,0.9,3.6,1.3   C563.7,1046.4,563.5,1025.3,569.6,1006z"
                fill="#8aeafb"
            />
            <Path
                d="M601.6,1077.1c0.1-14.5-0.8-29-2.7-43.4c-0.1-0.8-0.9-1.4-1.7-1.3s-1.4,0.9-1.3,1.7   c1.8,13.8,2.7,27.9,2.7,41.9C599.6,1076.4,600.6,1076.7,601.6,1077.1z"
                fill="#8aeafb"
            />
        </G>
        <Path
            d="M51.5,680.6c1.7,0.1,5.3,0.2,9,0.5c4.9,0.3,9.9,0.7,9.9,0.7s1.4-2.1,2.8-4.3c0.7-1.1,1.4-2.1,1.9-2.9  c0.5-0.8,0.9-1.3,0.9-1.3s-0.9-0.1-2.4-0.1c-1.4-0.1-3.3-0.2-5.2-0.2c-3.8-0.1-7.5-0.3-7.5-0.3s-2,0.9-3.9,1.7  c-0.8,0.3-1.5,0.7-2.2,1c1-1.6,2-3.1,3-4.7c1.4-2.1,2.8-4.2,4.1-6.3c0.3-0.5,0.6-0.9,1-1.4c1.6,0.1,5.4,0.5,9.1,0.8  c2.5,0.3,4.9,0.5,6.8,0.7c1.8,0.2,3.1,0.3,3.1,0.3l6-8.3c0,0-3.7-0.3-7.5-0.7c-3.8-0.3-7.5-0.6-7.5-0.6s-2,0.8-4,1.6  c-0.9,0.4-1.7,0.7-2.4,1c0.6-0.9,1.2-1.7,1.8-2.6c0.7-1,1.4-2,2.1-2.9c1.4-1.9,2.8-3.9,4.1-5.8c0.2-0.3,0.4-0.6,0.6-0.9  c1.4,0.2,5.4,0.7,9.3,1.3c2.4,0.4,4.9,0.7,6.7,1c1.8,0.3,3,0.5,3,0.5s1.6-2,3.2-4c0.8-1,1.6-2,2.2-2.7s1-1.2,1-1.2s-3.7-0.6-7.4-1.1  c-3.7-0.5-7.5-1-7.5-1s-2,0.7-4.1,1.4c-1,0.4-2.1,0.7-2.8,1c0.7-0.9,1.3-1.7,2-2.6c0.7-0.9,1.4-1.8,2.1-2.6c1.4-1.7,2.7-3.5,4-5.1  c0.4-0.5,0.8-1,1.2-1.5c1.1,0.2,5.3,0.9,9.4,1.8c2.4,0.5,4.8,1,6.7,1.4c1.8,0.4,3,0.7,3,0.7s1.7-1.9,3.3-3.8  c1.7-1.9,3.4-3.7,3.4-3.7s-3.6-0.8-7.4-1.5c-1.9-0.4-3.7-0.7-5.1-1c-1.4-0.2-2.3-0.4-2.3-0.4s-2.1,0.6-4.1,1.2  c-1,0.3-2.1,0.6-2.9,0.8c-0.2,0.1-0.3,0.1-0.5,0.1c1-1.2,2-2.4,3-3.6c2.4-2.8,4.7-5.5,7-8l0,0c0,0,1.2,0.3,3,0.7s4.2,1.1,6.6,1.7  c2.4,0.6,4.8,1.3,6.5,1.8c1.8,0.5,3,0.9,3,0.9s1.8-1.8,3.5-3.5c1.8-1.7,3.6-3.4,3.6-3.4s-3.6-1-7.2-2s-7.3-1.9-7.3-1.9  s-2.1,0.5-4.2,0.9c-1.7,0.4-3.4,0.8-4,0.9c1.3-1.5,2.7-2.9,3.9-4.2c2.1-2.2,4-4.2,5.9-6c-0.3-0.2-0.6-0.4-0.9-0.6  c-1.9,1.7-3.9,3.6-5.9,5.6c-0.9,0.8-1.8,1.7-2.7,2.6c0.1-0.5,0.2-1.1,0.3-1.6c0.4-2.1,0.9-4.2,0.9-4.2s-1-4.1-1.8-8.3  c0-0.2-0.1-0.5-0.1-0.7c-1.7-1.3-3.4-2.7-5.1-4.2l-0.1,0.1c-1,0.9-1.9,1.8-2.6,2.5s-1.2,1.2-1.2,1.2s0.3,1.4,0.8,3.4  c0.5,2.1,1.2,4.8,1.9,7.5c0.7,2.7,1.5,5.4,2.1,7.4c0.1,0.5,0.3,0.9,0.4,1.3c-0.1,0.1-0.1,0.1-0.2,0.2c-2.5,2.6-5.1,5.4-7.8,8.4  c-0.6,0.7-1.2,1.3-1.8,2c0-0.3,0.1-0.7,0.1-1c0.3-2.1,0.6-4.3,0.6-4.3s-0.3-1-0.7-2.5c-0.4-1.5-1-3.6-1.6-5.6  c-1.1-4.1-2.1-8.2-2.1-8.2s-1.7,1.9-3.5,3.8c-0.9,1-1.7,1.9-2.4,2.7c-0.6,0.7-1.1,1.2-1.1,1.2s0.4,1.3,1,3.4c0.6,2,1.5,4.7,2.4,7.4  c1,3.1,2.1,6.2,2.8,8.2c-0.7,0.8-1.3,1.6-2,2.3c-1.4,1.6-2.8,3.4-4.2,5.1c-0.7,0.9-1.4,1.7-2.1,2.6c-0.3,0.3-0.5,0.6-0.8,1  c0-0.2,0-0.4,0-0.5c0.2-2.1,0.4-4.3,0.4-4.3s-1.4-4-2.7-8c-1.4-4-2.6-8.1-2.6-8.1s-1.7,2-3.3,4c-1.6,2-3.2,4-3.2,4s0.5,1.3,1.2,3.3  s1.8,4.6,2.8,7.2c1.1,2.9,2.3,5.8,3.1,7.8c-0.5,0.6-0.9,1.2-1.4,1.7c-1.4,1.9-2.8,3.8-4.3,5.7c-0.7,1-1.4,1.9-2.2,2.9  c-0.2,0.3-0.4,0.6-0.6,0.9c0-0.1,0-0.1,0-0.2c0.1-2.2,0.2-4.3,0.2-4.3s-1.6-3.9-3.1-7.8c-0.8-2-1.5-4-2.1-5.5s-0.9-2.5-0.9-2.5  s-0.4,0.5-1,1.3s-1.3,1.8-2.1,2.8c-1.5,2.1-3,4.1-3,4.1s0.5,1.3,1.4,3.2c0.8,1.9,2,4.5,3.1,7.1c1.2,2.8,2.5,5.5,3.4,7.5  c-0.5,0.8-1.1,1.6-1.6,2.3c-2.1,3-4.1,6.1-6.2,9.3c0-2.1,0-4.2,0-4.2s-1.7-3.9-3.4-7.7c-1.7-3.9-3.3-7.8-3.3-7.8s-0.4,0.5-0.9,1.3  s-1.2,1.9-1.9,2.9c-1.4,2.1-2.8,4.3-2.8,4.3s0.6,1.3,1.5,3.2s2.1,4.4,3.4,6.9c1.3,2.7,2.7,5.3,3.6,7.2c-2.2,3.5-4.4,7-6.6,10.5  c-0.3,0.4-0.5,0.8-0.8,1.3l-0.2-4c0,0-0.5-0.9-1.2-2.4c-0.7-1.4-1.7-3.3-2.6-5.2c-1.8-3.8-3.6-7.6-3.6-7.6s-1.4,2.2-2.7,4.3  c-1.3,2.2-2.6,4.4-2.6,4.4s2.6,5,5.3,9.9c1.3,2.4,2.7,4.9,3.7,6.7c0,0.1,0.1,0.2,0.1,0.2c-1.2,2-2.3,4-3.5,6.1c-1.1,2-2.3,4-3.4,6  c-0.1-2-0.3-4-0.3-4s-2-3.7-4-7.4c-2-3.8-3.9-7.5-3.9-7.5l-5,8.8c0,0,0.7,1.2,1.7,3c1.1,1.8,2.5,4.3,3.9,6.7c1.5,2.5,3,5,4,6.8  c-0.3,0.5-0.5,1-0.8,1.5c-2,3.6-3.8,7.2-5.6,10.8l-0.4-3.9c0,0-0.5-0.9-1.3-2.3c-0.8-1.4-1.9-3.2-2.9-5c-2.1-3.7-4.1-7.3-4.1-7.3  s-1.2,2.2-2.4,4.5S7.4,717,7.4,717s2.9,4.8,5.9,9.5c1.5,2.4,3,4.7,4.1,6.5c0.1,0.1,0.1,0.1,0.1,0.2c-1.8,3.6-3.5,7.3-5.3,10.9  c-0.3,0.5-0.5,1.1-0.8,1.6l-0.5-4c0,0-2.2-3.6-4.5-7.2c-2.2-3.6-4.4-7.2-4.4-7.2l-2,5.1v7.4c1.1,1.7,2.6,4,4.1,6.2  c1.7,2.4,3.3,4.9,4.5,6.6c-0.5,1.1-1,2.2-1.5,3.4c1.2,0.3,2.3,0.5,3.5,0.8c0.2-0.5,0.5-1.1,0.7-1.6c1.7-0.1,5.3-0.4,8.9-0.7  c5-0.4,9.9-0.7,9.9-0.7l4.5-9.3c0,0-3.7,0.3-7.5,0.7s-7.5,0.8-7.5,0.8l-5.6,3.5c0.6-1.2,1.1-2.3,1.7-3.5c1.6-3.3,3.2-6.6,4.8-9.8  c0.5,0,1.2-0.1,2.1-0.1c1.9-0.1,4.4-0.2,6.8-0.3c5-0.2,9.9-0.4,9.9-0.4s1.2-2.3,2.4-4.6s2.4-4.6,2.4-4.6s-3.8,0.2-7.6,0.4  c-3.8,0.3-7.5,0.5-7.5,0.5l-5.6,3.3c2.2-4.2,4.3-8.5,6.6-12.6c0.1-0.2,0.2-0.3,0.2-0.5c1.7,0,5.3-0.1,8.9-0.2c2.5,0,4.9,0,6.8-0.1  c1.9,0,3.1,0,3.1,0l5.1-9c0,0-3.8,0.1-7.5,0.2c-3.8,0.1-7.6,0.3-7.6,0.3s-1.9,1-3.8,2c-0.7,0.4-1.3,0.7-1.9,1  c0.2-0.3,0.3-0.6,0.5-0.8c1.2-2.3,2.6-4.6,3.9-6.9c1-1.7,1.9-3.4,2.9-5.1c1.7,0,5.3,0,8.9,0.1c5,0.1,9.9,0.3,9.9,0.3  s1.3-2.2,2.6-4.4c1.4-2.2,2.7-4.4,2.7-4.4s-3.8-0.1-7.6-0.1s-7.5,0-7.5,0l-5.9,2.9c0.6-1,1.2-2,1.8-3  C47.6,686.9,49.6,683.8,51.5,680.6z"
            fill="#80daef"
        />
        <G>
            <Path
                d="M48.1,458.5c-2.2-3.6-4.6-7.3-6.2-10.7c-0.3-0.7-1.1-0.9-1.8-0.6l0,0c-0.7,0.3-0.9,1.1-0.6,1.8   c1.7,3.5,4,7.3,6.3,11c0.8,1.3,1.7,2.7,2.4,4l0,0l0,0c1.9,3.2,4.9,7.7,7.9,11.9c0.2-1.3,0.3-2.6,0.5-3.9c-2.2-3.1-4.3-6.3-5.9-8.9   c1.2-5.8,0-11.4-2-16.8c1.8-3.9,3.2-9.1,3.5-13.3c0.1-0.7-0.5-1.4-1.2-1.5s-1.4,0.5-1.5,1.2c-0.3,3.1-1.1,6.8-2.3,10   c-0.7-1.5-1.4-3-2.1-4.5c-0.3-0.7-1.1-0.9-1.8-0.6s-0.9,1.1-0.6,1.8c3.2,6.4,6.1,13.2,5.8,20.1C48.4,459,48.2,458.7,48.1,458.5z"
                fill="#62abcd"
            />
            <Path
                d="M53.2,499.4c-0.5-5.3-2.1-10-4.1-14.6c-0.8-11.8-3-20.9-6.5-26.9c-0.4-0.6-1.2-0.9-1.8-0.5   s-0.9,1.2-0.5,1.8c2.6,4.4,4.4,10.6,5.5,18.6c-0.1-0.1-0.1-0.2-0.2-0.4c-0.6-1.2-1.2-2.4-1.8-3.6c-1.1-2.2-2.4-4.6-3.6-6.8   c-2.9-5.4-6-11-7.5-16.5c-1-3.8-1.3-7.2-0.8-10.8c1.4-1.6,3.2-3.6,5.1-4.7c1.6-1,3.3-1.6,5.1-2.2c1.3-0.4,2.5-0.8,3.8-1.5l0,0l0,0   c0.1-0.1,0.2-0.1,0.4-0.2c6.5-3.2,13.9-11.4,10-19.5c-0.3-0.7-1.1-0.9-1.8-0.6l0,0c-0.7,0.3-0.9,1.1-0.6,1.8   c2.9,5.9-2.2,12-7.3,15.1c0-1.2,0.2-2.2,0.7-3.7c0.3-0.8,0.5-1.7,0.7-2.7c0.3-1.5,0.8-3.5,1.3-4.2c0.4-0.6,0.3-1.4-0.3-1.9   c-0.6-0.4-1.4-0.3-1.9,0.3c-0.9,1.2-1.4,3.3-1.8,5.3c-0.2,0.9-0.4,1.8-0.6,2.4c-0.8,2.4-1,3.9-0.9,5.8c-0.9,0.4-1.8,0.7-2.7,1   c-1.9,0.6-3.8,1.3-5.6,2.4c-0.8,0.5-1.7,1.2-2.4,1.9v-0.1c0.8-2.6,1.7-5.5,1.4-8.1c-0.1-1.1-0.3-2.1-0.6-3.1c0.4-1.4,1.2-2.6,2-3.9   c0.7-1.2,1.5-2.5,2-3.9s0.7-2.8,0.8-4.2c5.4-0.6,10.6-2.9,14.6-6.5c0.6-0.5,0.6-1.3,0.1-1.9s-1.3-0.6-1.9-0.1   c-3.5,3.1-7.9,5.2-12.6,5.8c0.1-1,0.3-2,0.7-2.9c0.3-0.8,0.9-1.4,1.4-2c0.2,0,0.3-0.1,0.5-0.1c2-1,4.3-1.8,6.7-2.7   c2.6-0.9,5.2-1.8,7.6-3c2.3-1.1,4.5-2.5,6.2-4.4c1.5-1.6,2.8-3.5,4-5.5c0.3-0.2,0.4-0.5,0.5-0.8c0.7-1.2,1.4-2.4,2-3.6   c0.7-1.2,1.3-2.4,2-3.6c0.3-0.6,0.7-1.2,1.2-2c0.6-1,1.2-2,1.9-3.1c-0.7-0.5-1.4-1.1-2.2-1.6c-0.7,1.2-1.3,2.3-2,3.3   c-0.5,0.7-0.9,1.4-1.2,2c-0.5,0.8-1,1.7-1.5,2.6c0-1.2,0.1-2.3,0.1-3.5c0-1.1,0.1-2.2,0.1-3.3c0-1.3,0-2.6-0.1-4   c-0.9-0.5-1.8-1.1-2.7-1.6c0,0.3,0,0.6,0,1c0.1,1.6,0.1,3.1,0.1,4.5c0,1.1-0.1,2.2-0.1,3.2c-0.1,1.3-0.1,2.6-0.2,3.8   c0,0.5-0.1,1.1-0.1,1.7c-0.1,1.1-0.2,2.3-0.1,3.4c-1.1,1.9-2.3,3.7-3.7,5.2c-2,2.1-4.7,3.6-7.6,4.8c0.6-0.5,1.1-1,1.5-1.6   c4-5.2,4.2-10.6,4.5-16.3c0.1-1.7,0.2-3.4,0.3-5.2c0.2-2.2,0.7-4.4,1.2-6.7c-0.8-0.4-1.6-0.8-2.5-1.2c-0.3,1.1-0.5,2.3-0.8,3.4   c-0.6-1.5-1.3-3.1-2-4.6c-1.2-0.5-2.4-0.9-3.6-1.4c0.3,0.7,0.6,1.4,1,2.1c1.2,2.4,3.4,6.8,3.1,9.4c0,0.5,0.2,1,0.6,1.3   c-0.1,0.9-0.1,1.8-0.1,2.7c-0.3,5.5-0.5,10.3-3.9,14.8c-1.5,2-3.9,3.2-6.5,4.5c-1.2,0.6-2.4,1.2-3.6,1.9c0.7-2.1,1.8-4,3-6   c1.9-3.3,3.9-6.7,4.1-11.1c0.1-3.2-0.5-6.9-2.1-11.4c-0.4-1.1-0.7-2.3-1.1-3.5c-0.8-2.5-1.6-5.1-2.7-7.4c-1.1-0.3-2.1-0.5-3.2-0.8   c0,0.2,0,0.5,0.2,0.7c1.3,2.3,2.2,5.3,3.1,8.2c0.4,1.3,0.7,2.5,1.1,3.6c1.4,4.2,2.1,7.6,2,10.4c-0.2,3.8-1.9,6.7-3.7,9.9   c-1.6,2.8-3.3,5.7-3.9,9.3c0,0.2,0,0.4,0.1,0.6c-0.6,0.7-1.1,1.4-1.5,2.3c-0.8,1.8-1,3.8-1.1,5.8c-0.1,1.2-0.2,2.4-0.4,3.5   c-0.2-1.3-0.6-2.7-1.2-4.2l-0.5-1.2c-1.5-3.9-2.6-6.7-1.9-10.8c0.5-2.8,1.9-5.2,3.3-7.5c2.6-4.5,5.3-9.1,1.7-16.1   c-0.9-1.7-2-3.3-3.3-4.8c0.5-2,1.4-3.9,2.4-5.9c0.6-1.3,1.3-2.7,1.8-4.1c-1-0.2-2-0.4-3-0.5l0,0c0,0.1,0.1,0.3,0.2,0.4   c-0.4,1-0.9,2-1.4,3c-0.7,1.5-1.4,3-2,4.6c-0.3-0.4-0.7-0.7-1-1.1c-2.3-2.6-4.4-5.1-6-7.9c-1,0-2-0.1-3-0.1   c1.7,3.7,4.3,6.7,6.9,9.7c0.8,0.9,1.6,1.9,2.4,2.8c0.1,0.2,0.2,0.3,0.3,0.4c1.2,1.5,2.3,3,3.2,4.7c3,5.6,0.8,9.2-1.6,13.5   c-1.1,1.8-2.1,3.7-2.9,5.8c-0.2-0.7-0.3-1.4-0.5-1.9c-0.7-2.3-1.1-4.4-1.2-6.7c-0.1-1-0.1-2-0.1-3.1c-0.1-3.8-0.1-8.1-1.9-11.5   c-0.3-0.6-1.1-0.9-1.8-0.6l0,0c-0.7,0.3-0.9,1.1-0.6,1.8c1.5,2.9,1.6,6.6,1.6,10.3c0,1.1,0,2.2,0.1,3.2c0.1,2.5,0.6,4.8,1.3,7.3   c0.2,0.8,0.5,2.2,0.8,3.7c0.5,2.3,1,4.7,1.5,6.1c0.4,2.1,1.2,4,2,6.1l0.5,1.2c1.4,3.7,1.4,5.9,0.2,8.9c-1.5-2.6-3.5-5-5.4-7.3   c-2.9-3.5-5.9-7.1-7-11.1c-0.6-2-0.9-4.2-1.2-6.3c-0.3-2.1-0.6-4.2-1.1-6.2c-0.3-1-0.6-1.9-0.9-2.9c0-0.1,0.1-0.2,0.1-0.4   c0-2.3,0.6-4.5,1.3-6.8c0.9-3.2,1.8-6.4,1.1-10.1c-0.8-3.7-1.7-7.2-2.8-10.6c-0.9,0.1-1.8,0.1-2.7,0.2c1.2,3.5,2.1,7.1,2.9,10.9   c0.6,3.1-0.2,5.9-1,8.9c-0.3,1-0.5,1.9-0.8,2.9c-0.7-1.6-1.5-3.2-2.3-4.7c-2.7-5.4-5.7-11-8.6-16.3c0-0.1-0.1-0.1-0.1-0.2   c-0.9,0.2-1.8,0.4-2.7,0.6c0.2,0.3,0.3,0.6,0.5,0.8c2.9,5.3,5.9,10.8,8.6,16.2c2,4,3.9,7.8,5,12.1c0.5,1.9,0.8,3.8,1.1,5.9   s0.6,4.2,1.2,6.3c-0.7-0.6-1.4-1.2-2.2-1.7c-1.1-0.8-2.3-1.3-3.5-1.9c-2.4-1.1-4.4-2.1-5.4-4.4c-1.5-3.4-2.9-7.4-3.7-10.7   c-0.6-2.3-0.6-4.7-0.6-7.3c0-2.6,0-5.2-0.7-7.8c-0.1-0.5-0.6-0.9-1.1-1V387c0.4,0.2,0.8,0.5,1.2,0.7c0.8,2.2,1.6,4.6,2.5,6.7   c0.1,0.3,0.2,0.5,0.4,0.7c-1.3-0.3-2.7-0.9-4.1-1.5v2.9c2.5,1,5.1,1.7,7,1.7c1.1,0.8,2.3,1.3,3.4,1.9c1.1,0.5,2.2,1,3.1,1.7   c1.1,0.7,2,1.5,2.9,2.4c0.9,0.8,1.8,1.6,2.9,2.4c0.1,0,0.1,0.1,0.2,0.1c1.5,2.5,3.5,4.9,5.4,7.2c2.4,2.9,4.7,5.7,6,8.7   c-0.1,0.3-0.1,0.7,0,1s0.4,0.5,0.6,0.7c0.2,0.8,0.4,1.6,0.5,2.4c0.2,2.1-0.6,4.6-1.3,7.1c-0.4,1.2-0.7,2.4-1,3.5   c-0.1,0.4-0.2,0.9-0.2,1.3l-0.1,0.1c-0.4,0.4-0.4,1-0.1,1.5c-0.1,1-0.2,2-0.2,2.9c-1.6-1.5-3.7-2.8-5.6-3.9s-3.7-2.2-5-3.4   c-0.2-0.2-0.4-0.4-0.6-0.7c4-9.5,1.8-21.3-5.5-28.7c-0.5-0.5-1.4-0.5-1.9,0s-0.5,1.4,0,1.9c6.1,6.2,8.2,15.7,5.6,23.9   c-0.4-0.8-0.8-1.6-1.1-2.4c-0.3-0.7-0.6-1.4-1-2.1c-0.4-0.9-0.9-1.7-1.3-2.6c-0.8-1.7-1.7-3.4-2.5-5.1c-0.7-1.6-1-3.3-1.4-5.1   c-0.2-1.3-0.5-2.7-0.9-4c-0.2-0.7-1-1.1-1.7-0.9s-1.1,1-0.9,1.7c0.4,1.2,0.6,2.4,0.8,3.7c0.3,1.9,0.7,3.8,1.5,5.7   c0.2,0.5,0.4,0.9,0.6,1.4c-3-1.5-5.9-4.4-7.4-7.6c-0.3-0.7-0.6-1.4-0.9-2.1v5.8c2.2,3.1,5.6,6.1,9.5,7.3c0.2,0,0.3,0.1,0.5,0   c0.1,0.1,0.1,0.3,0.2,0.4c0.4,0.8,0.9,1.7,1.3,2.5c0.3,0.7,0.6,1.3,0.9,2c1.1,2.4,2.2,4.9,4.2,6.8c1.5,1.5,3.5,2.7,5.4,3.8   c2.7,1.6,5.5,3.3,6.8,5.6c0.1,0.2,0.3,0.4,0.5,0.5c0.2,1.2,0.4,2.4,0.8,3.7c1.6,5.8,4.7,11.6,7.7,17.1c1.3,2.3,2.5,4.5,3.5,6.7   c0.6,1.2,1.2,2.4,1.8,3.6c1.1,2.3,2.3,4.5,3.3,6.7c0,0.3,0,0.6,0.1,0.9c0,0.5,0.4,1,0.8,1.2c1.6,3.9,2.9,7.9,3.2,12.2   c0,0.1,0,0.3,0.1,0.4c-1.9-2.5-3.7-5.2-5.6-8c0.1-0.6-0.2-1.2-0.8-1.4c-0.1,0-0.1-0.1-0.2-0.1c-0.7-1-1.3-2-2-3   c-3.9-5.8-7.9-11.7-12-17c0.6-1.5,1.9-5.2,1.1-7.8c-0.7-2.2-1.9-4.1-3-6l-7.6-12.3c-0.4-0.6-1.2-0.8-1.9-0.4   c-0.6,0.4-0.8,1.2-0.4,1.9l7.6,12.3c1.1,1.7,2.2,3.5,2.8,5.4c0.3,1,0,2.8-0.5,4.5c-0.6-0.7-1.2-1.4-1.8-2.1   c-2.4-2.7-5.2-5.1-7.9-7.4c-0.7-0.6-1.5-1.3-2.2-1.9c0,0,0,0,0-0.1c-0.1-1-0.1-2.1-0.1-3.2c0-2.1,0.1-4.3-0.9-6.4   c-0.7-1.6-1.6-3-2.4-4.4l-0.4-0.7c-0.7-1.3-1.7-2.4-2.6-3.4c-1.2-1.3-2.3-2.6-2.8-4.1c-0.3-0.7-1-1-1.7-0.8c-0.7,0.3-1,1-0.8,1.7   c0.7,1.9,2,3.4,3.3,4.9c0.9,1,1.7,2,2.3,3l0.4,0.7c0.8,1.4,1.6,2.7,2.3,4.2c0.7,1.6,0.7,3.4,0.6,5.3c0,0.3,0,0.6,0,0.9   c-1-0.9-1.9-1.8-2.8-2.8c-3.3-3.8-7-8.7-10.3-13.7v4.7c2.8,3.9,5.7,7.7,8.4,10.7c2.5,2.8,5.3,5.2,8,7.5c2.8,2.3,5.4,4.5,7.7,7.1   c5,5.5,9.8,12.5,14.4,19.4c-1.2-0.9-2.5-2-3.7-3c-1-0.8-2-1.7-2.9-2.4l-0.6-0.5c-1.9-1.5-3.8-3-5.1-4.7c-0.6-0.9-1.1-2-1.5-3.1   c-0.5-1.2-1-2.5-1.8-3.6c-2.4-3.3-6.6-5.2-10.6-6.9c-1.7-0.7-3.3-1.5-4.7-2.2c-0.6-0.4-1.3-0.7-2-1.1c-2-1.1-4-2.2-5.7-3.5v3.3   c1.4,1,2.9,1.8,4.4,2.6c0.7,0.4,1.3,0.7,1.9,1.1c1.5,0.8,3.2,1.6,4.9,2.4c3.7,1.6,7.6,3.3,9.5,6c0.6,0.9,1,1.9,1.5,3.1   c0.2,0.6,0.5,1.1,0.7,1.7c-4.2,0-9.2-2.9-11.4-4.3c-1.2-0.8-2.5-1.5-3.8-2.1c-2-1.1-4.1-2.2-5.8-3.6c-0.6-0.5-1.4-0.4-1.9,0.2   c-0.1,0.1-0.1,0.1-0.1,0.2v1.3c0.1,0.1,0.2,0.2,0.3,0.3c1.9,1.6,4.1,2.8,6.3,3.9c1.3,0.7,2.5,1.3,3.6,2c3.3,2.1,9.4,5.3,14.4,4.6   c1.5,1.8,3.4,3.3,5.1,4.7l0.6,0.5c0.9,0.7,1.9,1.5,2.9,2.4c2.9,2.4,5.8,4.8,9,6.4c2.7,4,5.3,7.7,8,11.2c-1.7-0.6-3.5-1.5-5.3-2.4   c-0.7-0.4-1.4-0.7-2.1-1c-0.2-0.2-0.5-0.4-0.8-0.5c-0.1,0-0.1,0-0.2,0c-3.3-1.6-6.5-3.2-9.8-5.4c-2-1.3-4.3-2.1-6.5-2.9   c-0.2-0.1-0.5-0.2-0.7-0.2c-0.1-0.1-0.1-0.2-0.2-0.4c-0.2-0.3-0.4-0.7-0.7-1.1c-0.8-1-1.6-1.8-2.4-2.6c-0.7-0.7-1.4-1.4-2-2.2   c-2.3-2.7-4.3-3-7-3.4l-0.7-0.1c-1.4-0.2-2.7-0.6-4.1-1.1c-0.3-0.5-0.9-0.7-1.4-0.6H6c-2.1-0.9-4.2-1.9-6.2-3v3   c0.3,0.2,0.6,0.3,1,0.5c-0.3,0-0.6,0-1,0v2.7c1.5,0.1,2.9,0,4.3-0.1c0.6-0.1,1.1-0.2,1.7-0.3c1.8,0.7,3.6,1.2,5.5,1.5l0.7,0.1   c2.6,0.4,3.7,0.6,5.4,2.5c0.7,0.8,1.5,1.6,2.2,2.3c0.4,0.4,0.7,0.7,1,1.1c-0.6-0.1-1.1-0.2-1.7-0.3c-2.7-0.4-5.4-0.9-7-2.1   c-0.6-0.5-1.4-0.4-1.9,0.2s-0.4,1.4,0.2,1.9c2.1,1.7,5.2,2.2,8.2,2.7c1.7,0.3,3.4,0.6,4.6,1c0.1,0,0.2,0.1,0.3,0.1   c0.2,0.1,0.4,0.2,0.6,0.2c0.2,0.1,0.4,0.2,0.6,0.2c2,0.7,4.2,1.5,5.9,2.6c1,0.6,1.9,1.2,2.9,1.8c-0.4-0.1-0.8-0.1-1.3-0.2   c-1.1-0.2-2.3-0.4-3.4-0.7c-3.4-0.7-7-1.4-10.5-1.7c-3.8-0.2-6.8,0.1-10.1,1.1c-0.2-0.2-0.4-0.4-0.6-0.6c-0.4-0.4-0.8-0.8-1.2-1.1   c-1.6-1.2-3.6-2.2-5.4-3c-0.3-0.2-0.6-0.3-0.9-0.5v3c1.6,0.8,3.4,1.7,4.7,2.7c0.2,0.2,0.5,0.4,0.7,0.6c-0.1,0-0.2,0.1-0.3,0.1   c-1.6,0.7-3.3,1.4-5.1,2v7.5c0.6-1.7,1.1-3.5,1.3-5.1c1.7-0.6,3.3-1.3,4.8-2c0.6-0.3,1.2-0.5,1.8-0.7c0.3,0.1,0.6,0,0.8-0.1   s0.3-0.2,0.4-0.4c2.9-0.9,5.5-1.2,8.9-0.9c3.3,0.2,6.8,0.9,10.2,1.6c1.2,0.2,2.3,0.5,3.5,0.7c2,0.4,3.8,0.7,5.6,0.9   c-0.5,0.4-0.8,0.7-1.1,1.1c-0.3,0.3-0.5,0.6-0.8,0.8c-1,0.8-2.4,1.3-3.7,1.9c-2.2,0.9-4.1,1.9-6,2.9c-2.6,1.3-5.2,2.6-7.9,3.9   c-4.4,2.1-8.1,1.9-13.6,1c-0.7-0.1-1.4,0.4-1.5,1.1c-0.1,0.7,0.4,1.4,1.1,1.5c5,0.9,9.7,1.4,15.2-1.2c1-0.5,2.1-1,3.1-1.5   c-0.5,0.8-1.1,1.6-1.6,2.4c-2.3,3.4-4.6,6.9-5.5,9c-0.3,0.7,0.1,1.5,0.7,1.7c0.4,0.1,0.8,0.1,1.1,0s0.5-0.4,0.6-0.7   c0.7-1.8,3.1-5.3,5.2-8.5c1.9-2.9,3.3-4.9,3.8-6.1c0.1-0.1,0.2-0.1,0.4-0.2c1.9-0.9,3.7-1.9,5.8-2.8c0.8-0.3,1.5-0.6,2.3-1   c0.7-0.4,1.4-0.8,2.1-1.2c0.5-0.4,0.9-0.8,1.2-1.1c0.3-0.4,0.6-0.7,1-0.9c0.3-0.2,0.6-0.3,0.9-0.5c0.4-0.2,0.9-0.4,1.3-0.7   c0.1,0,0.2,0.1,0.3,0.1c0.7,0.3,1.4,0.7,2.1,1.1c2.6,1.3,5.5,2.8,8.4,3.3l0,0c1.6,5.6,4.3,11,6.9,16.3l0.5,1   c0.1,0.2,0.2,0.4,0.4,0.5c-1-3.7-1.9-7.4-2.6-11.3C55.3,509,53.7,504.2,53.2,499.4z"
                fill="#62abcd"
            />
            <Path
                d="M58.3,428.9c0.3-0.7,0-1.5-0.7-1.7c-0.7-0.3-1.5,0-1.7,0.7c-1.7,4.2,2.3,14.6,6.9,19.9   c0.4-1,0.7-2,1.1-2.9C60.4,440,57.2,431.7,58.3,428.9z"
                fill="#62abcd"
            />
            <Path
                d="M59.4,458.5c-0.7-1.4-1.3-2.8-1.7-4.5c-1.1-3.8-1.4-7.8-1.7-11.7c-0.1-0.7-0.7-1.3-1.5-1.2   c-0.7,0.1-1.3,0.7-1.2,1.5c0.3,4,0.7,8.2,1.8,12.2c0.8,2.8,1.9,5.4,3.4,7.5C58.8,461,59.1,459.7,59.4,458.5z"
                fill="#62abcd"
            />
            <Path
                d="M92.3,393.3L92.3,393.3c-0.2-0.3-0.4-0.5-0.6-0.8c-0.3-0.2-0.7-0.3-1-0.2c-0.7,0.2-1.1,0.9-0.9,1.6   c0.8,3,0.6,6.3,0.2,9.7c1-1,1.9-2,2.9-3C93,398.1,92.9,395.6,92.3,393.3z"
                fill="#62abcd"
            />
            <Path
                d="M85.4,397.7c0.1-0.7-0.4-1.4-1.1-1.5s-1.4,0.4-1.5,1.1c-0.6,4,0.2,8.3,2.2,11.8   c0.6-0.7,1.2-1.4,1.8-2.1C85.5,404.1,84.9,400.8,85.4,397.7z"
                fill="#62abcd"
            />
            <Path
                d="M67.9,423.7c0.9-6.2,3.4-11.4,6.1-16.9c0.8-1.6,1.5-3.1,2.3-4.8c0.8-1.8,2-3.7,3.3-5.8   c2.4-3.9,4.8-7.9,5.3-11.7c-0.5-0.5-1-1-1.5-1.5c-0.6,0.1-1,0.5-1.1,1.1c-0.5,3.3-2.8,7.1-5,10.7c-0.6,1-1.3,2.1-1.8,3.1   c-1.8-6.2-1.4-14.3,2.2-18.6c0.3-0.4,0.4-0.9,0.2-1.3c-0.3-0.3-0.7-0.6-1-0.8c-0.5-0.1-0.9,0.1-1.2,0.4c-4.9,5.7-4.7,16.6-1.8,23.6   c-0.7,1.5-1.4,3-2.1,4.4c-2,4.1-3.9,8.1-5.2,12.5c-0.5-1.8-0.9-3.7-0.9-5.1c0-0.9,0.1-1.8,0.2-2.7c0.2-2.6,0.5-5.4-1.4-8.1   c-0.4-0.6-1.3-0.8-1.9-0.4c-0.6,0.4-0.8,1.2-0.4,1.9c1.4,2,1.2,4,1,6.4C63.1,411,63,412,63,413c0,2.6,1.1,6.1,1.9,8.9   c0.2,0.6,0.3,1.1,0.5,1.6c-0.1,0.8-0.2,1.5-0.4,2.3c-0.7,4.7-1.6,10.1-1,15.3c0.1,0.8,0.2,1.7,0.4,2.5c3-7.5,6.7-14.7,11.1-21.5   c-0.4,0.1-0.7,0.3-0.9,0.6c-2.4,4.1-5,8.1-8,11.8c0.2-2.8,0.6-5.6,1.1-8.3C67.7,425.4,67.8,424.6,67.9,423.7z"
                fill="#62abcd"
            />
            <Path
                d="M79.9,412.8c-0.7,0.4-0.9,1.1-0.6,1.8c0.2,0.4,0.3,0.8,0.5,1.2c0.6-0.8,1.2-1.6,1.8-2.4   C81.3,412.7,80.6,412.5,79.9,412.8z"
                fill="#62abcd"
            />
        </G>
        <G>
            <Path d="M0,336.1c1.5-11.3,1.4-21,0-27.6V336.1z" fill="#396c9e" />
            <Path
                d="M0,389.2v21c6.3-19.1,11.1-27.5,19.7-53.1c12.2-36.4,13.8-68.9,12.8-99.7c-0.4-12,0.5-24.6,2.1-36.5   c-4.9,0.6-9.7,1.3-14.5,2.2c-3.5,12.1-6.2,25.4-7,39.5c-2.2,34.9,7.9,70.5-7.9,112.1C3.4,379.2,1.7,384.1,0,389.2z"
                fill="#396c9e"
            />
            <Path d="M0,253.1c0.2-0.5,0.4-0.9,0.6-1.4c0,0-0.2,0.4-0.6,1.1V253.1z" fill="#396c9e" />
            <Path
                d="M63,236.3c-3.7-1-10.5,44.4-20.7,74.6c-14.5,42.6-28.9,64-36.2,83.6c-2.2,6.1-4.3,13.1-6.1,20v21.6   c2.1-12.3,5.8-30.3,11.6-41.1c9.5-17.6,38.1-57.5,46.2-95.7S66.7,237.3,63,236.3z"
                fill="#396c9e"
            />
        </G>
        <G>
            <Path
                d="M63.3,618.4c8.9-29.2,6.3-57.7,2.2-77.3c-3.3-7.6-5.8-15.7-7.6-24c-0.1,9.8-1.5,55.2-17.2,90.5   c-12.9,29-23,60.5-21.3,98.9c0.4,8,0.9,17.5,1.4,27.9c-3.5-18.7-10.7-42-12.5-78.8c-1.6-31.8,6.9-77.2,1.8-77.4   c-2.9-0.1-6.7,7.4-10.2,21V697c5.5,20.1,12.6,37.7,15.4,48c0.8,2.8,1.5,7.4,2.2,13.2c4.9,0.9,9.9,1.7,14.9,2.4   c-0.2-14.3-0.6-26.3-1.3-32.9C26.9,683.2,53,652.3,63.3,618.4z"
                fill="#62abcd"
            />
            <Path
                d="M83.1,611.8c3.1,19.6-10.9,41.1-20.4,54S45.9,708.3,52,741c1.1,5.7,1.5,13.1,1.6,21.5   c4.4,0.2,8.8,0.3,13.2,0.4c1.6-13.4,2.6-24.8,2.2-31.4c-1.5-27.6,2.9-22.2,12.1-57.4C90.5,638.9,83.1,611.8,83.1,611.8z"
                fill="#62abcd"
            />
        </G>
        <G>
            <Path
                d="M169.6,338.1c-2.7,1.9-7,2.8-11.2,3.7c-1.2,0.3-2.4,0.5-3.5,0.8c3.3-5.5,9.4-10.9,15-11.2   c0.5,0,0.9-0.3,1.1-0.8c0-0.4-0.1-0.9-0.1-1.3c-0.3-0.4-0.7-0.6-1.2-0.6c-7.5,0.4-15.3,7.9-18.4,14.9c-1.6,0.5-3.1,1-4.6,1.5   c-4.4,1.4-8.6,2.7-12.7,4.8c1-1.6,2.1-3.1,3.1-4.1c0.6-0.6,1.4-1.2,2.1-1.7c2.1-1.6,4.2-3.3,4.9-6.6c0.2-0.7-0.3-1.4-1-1.6   s-1.4,0.3-1.6,1c-0.5,2.3-2.1,3.6-4,5.1c-0.7,0.6-1.5,1.2-2.3,1.9c-1.9,1.8-3.7,5-5.2,7.5c-0.3,0.5-0.6,1-0.9,1.5   c-0.6,0.4-1.3,0.9-1.9,1.3c-3.9,2.7-8.4,5.8-11.8,9.8c-1,1.2-2,2.6-3,4c0.7-5.8,5-15.3,8.1-16.5c0.7-0.3,1-1,0.8-1.7   c-0.3-0.7-1-1-1.7-0.8c-5.1,2-11.1,16.3-9.6,22.6c-1.5,2.1-3.1,4.1-4.8,5.7c-0.1,0-0.2,0-0.3,0c-2.2,0.2-4.2,0.6-6.1,1.2   c0-3.2,1.1-6.7,3.2-10.1c2-3.4,4.7-6.4,7.4-9.3c0.5-0.6,0.5-1.4-0.1-1.9c-0.5-0.5-1.4-0.5-1.9,0.1c-2.7,3-5.5,6.1-7.7,9.7   c-2.5,4.1-3.7,8.3-3.6,12.2c0,0.1,0,0.2,0.1,0.2c-3.2,1.3-6.1,3.2-8.8,5.3c0.9-5.2,2.2-11,3.4-15.3c5-3.1,8.3-7.8,10.8-13   c4.1-1.4,8.8-3.9,12.1-6.6c0.6-0.5,0.7-1.3,0.2-1.9s-1.3-0.7-1.9-0.2c-2.4,2-5.7,3.9-8.9,5.2c0.6-1.5,1.2-3.1,1.8-4.6   c0.3-0.7-0.1-1.5-0.8-1.7c-0.7-0.3-1.5,0.1-1.7,0.8c-2.5,6.7-5.4,13.6-10.6,18c0.1-0.3,0.2-0.6,0.2-0.9c1.1-4.1,2.2-8.3,3.5-11.8   c0.3-0.7-0.1-1.5-0.8-1.7l0,0c-0.7-0.3-1.4,0.1-1.7,0.8c-1.4,3.6-2.5,8-3.6,12.1c-0.4,1.5-0.8,3.1-1.2,4.5l0,0l0,0   c-1.4,4.9-3.2,12.8-4.1,19.2c-3.4,3.2-6.4,6.8-9.4,10.3c-4.1,4.9-8,9.5-12.6,13c-2.2,1.7-4.2,3.1-6.4,4.4c2.6-6.9,5.4-13.7,10-18.9   c3.5-4,5.9-8.4,7.8-13c8.1-8.7,13.1-16.5,15.1-23.2c0.2-0.7-0.2-1.5-0.9-1.7c-0.7-0.2-1.5,0.2-1.7,0.9c-1.4,4.9-4.7,10.5-9.7,16.7   c0-0.1,0.1-0.2,0.1-0.4c0.5-1.2,0.9-2.5,1.4-3.8c0.9-2.3,1.7-4.9,2.5-7.3c1.9-5.9,3.9-11.9,6.9-16.8c2-3.3,4.4-5.8,7.3-8   c2.1-0.1,4.8-0.1,6.9,0.4c1.8,0.5,3.4,1.3,5,2.2c1.2,0.6,2.3,1.3,3.7,1.8l0,0l0,0c0.1,0,0.2,0.1,0.4,0.1c6.8,2.5,17.9,2.3,21.1-6.1   c0.3-0.7-0.1-1.5-0.8-1.7l0,0c-0.7-0.3-1.5,0.1-1.7,0.8c-2.3,6.1-10.2,6.7-16,5.1c0.9-0.8,1.8-1.3,3.2-2c0.7-0.3,1.5-0.8,2.4-1.3   c1.4-0.8,3-1.8,4-1.9c0.7-0.1,1.3-0.7,1.2-1.5c-0.1-0.7-0.7-1.3-1.5-1.2c-1.5,0.2-3.3,1.2-5.1,2.3c-0.8,0.5-1.6,0.9-2.2,1.2   c-2.3,1.1-3.5,2-4.8,3.4c-0.9-0.4-1.7-0.8-2.6-1.3c-1.7-0.9-3.5-1.9-5.6-2.4c-1-0.3-2-0.4-3-0.5c0,0,0.1,0,0.1-0.1   c2.4-1.2,5.1-2.5,6.9-4.5c0.7-0.8,1.3-1.6,1.8-2.5c1.3-0.7,2.7-1,4.2-1.3c1.4-0.3,2.8-0.6,4.2-1.2c1.3-0.6,2.5-1.4,3.6-2.3   c4.2,3.5,9.4,5.7,14.8,6.1c0.7,0.1,1.4-0.5,1.5-1.2s-0.5-1.4-1.2-1.5c-4.7-0.4-9.2-2.2-12.9-5.2c0.8-0.6,1.7-1.2,2.6-1.5   c0.8-0.3,1.6-0.3,2.4-0.3c0.1,0.1,0.3,0.2,0.4,0.3c2.1,0.8,4.3,1.9,6.6,3.1c2.4,1.2,4.9,2.5,7.4,3.5c2.4,0.9,4.9,1.5,7.5,1.5   c2.3,0,4.5-0.4,6.8-0.9c0.3,0,0.7,0,0.9-0.2c1.4-0.3,2.7-0.7,4-1c1.4-0.4,2.7-0.7,4-1c0.7-0.2,1.4-0.3,2.2-0.5   c1.1-0.2,2.3-0.5,3.5-0.8c-0.1-0.9-0.2-1.8-0.4-2.7c-1.3,0.3-2.6,0.6-3.7,0.8c-0.8,0.2-1.6,0.3-2.3,0.5c-0.9,0.2-1.9,0.5-2.9,0.7   c0.9-0.8,1.8-1.5,2.7-2.3c0.8-0.7,1.7-1.4,2.5-2.1c1-0.8,1.9-1.8,2.8-2.8c-0.2-1-0.5-2.1-0.7-3.1c-0.2,0.2-0.5,0.5-0.7,0.7   c-1.1,1.1-2.1,2.2-3.2,3.2c-0.8,0.7-1.6,1.4-2.4,2.1c-1,0.8-2,1.7-2.9,2.5c-0.4,0.3-0.9,0.7-1.3,1.1c-0.9,0.7-1.8,1.4-2.6,2.3   c-2.1,0.5-4.3,0.8-6.3,0.8c-2.9,0-5.8-0.9-8.7-2.2c0.7,0.1,1.5,0.1,2.2,0c6.5-0.7,10.6-4.2,14.9-7.9c1.3-1.1,2.6-2.3,4-3.3   c1.7-1.3,3.7-2.5,5.7-3.7c-0.3-0.9-0.6-1.7-0.9-2.6c-1,0.6-2,1.2-3,1.8c0.7-1.5,1.4-3.1,2-4.6c-0.5-1.2-0.9-2.4-1.4-3.5   c-0.3,0.7-0.6,1.4-0.9,2.1c-0.9,2.5-2.6,7.1-4.7,8.8c-0.4,0.3-0.6,0.8-0.5,1.3c-0.7,0.6-1.4,1.2-2.1,1.8c-4.2,3.6-7.8,6.7-13.5,7.3   c-2.5,0.3-5-0.7-7.8-1.6c-1.3-0.5-2.6-0.9-3.9-1.2c2-0.9,4.2-1.4,6.4-1.9c3.7-0.9,7.5-1.8,10.9-4.6c2.4-2.1,4.6-5.1,6.8-9.3   c0.5-1,1.2-2.1,1.8-3.2c1.3-2.3,2.6-4.6,3.5-7c-0.5-1-1.1-1.9-1.6-2.9c-0.2,0.2-0.3,0.4-0.4,0.6c-0.7,2.5-2.3,5.3-3.8,7.9   c-0.7,1.1-1.3,2.2-1.8,3.3c-2,3.9-4.1,6.7-6.2,8.6c-2.9,2.5-6.2,3.2-9.8,4.1c-3.2,0.7-6.4,1.5-9.4,3.5c-0.2,0.1-0.3,0.3-0.4,0.5   c-0.9,0-1.8,0.2-2.7,0.5c-1.9,0.6-3.5,1.9-5,3.1c-1,0.8-1.9,1.5-2.8,2.1c0.8-1,1.6-2.2,2.3-3.8l0.6-1.2c1.8-3.8,3-6.5,6.5-8.8   c2.3-1.5,5.1-2.2,7.7-2.8c5.1-1.2,10.3-2.4,12.8-9.8c0.6-1.8,1-3.8,1.3-5.7c1.8-1,3.8-1.7,5.9-2.3c1.4-0.4,2.8-0.9,4.2-1.5   c-0.5-0.9-1.1-1.7-1.7-2.5l0,0c-0.1,0.1-0.1,0.2-0.2,0.4c-1,0.4-2.1,0.7-3.1,1.1c-1.6,0.5-3.2,1-4.7,1.7c0-0.5,0.1-1,0.1-1.5   c0.3-3.4,0.6-6.7,1.6-9.7c-0.7-0.7-1.3-1.5-2-2.2c-1.5,3.7-1.9,7.8-2.3,11.7c-0.1,1.2-0.2,2.5-0.4,3.7c-0.1,0.2-0.1,0.4-0.1,0.5   c-0.3,1.9-0.6,3.8-1.2,5.6c-2,6-6.1,7-10.9,8.1c-2,0.5-4.1,1-6.2,1.9c0.4-0.6,0.8-1.2,1-1.6c1.2-2.1,2.4-3.8,4-5.5   c0.7-0.7,1.4-1.5,2.2-2.2c2.7-2.6,5.8-5.6,7-9.3c0.2-0.7-0.1-1.4-0.8-1.7l0,0c-0.7-0.2-1.5,0.1-1.7,0.8c-1.1,3.1-3.8,5.7-6.4,8.3   c-0.8,0.8-1.6,1.5-2.3,2.3c-1.7,1.8-3.1,3.7-4.4,6c-0.4,0.7-1.3,1.9-2.1,3.2c-1.4,2-2.8,4-3.4,5.3c-1.2,1.7-2.1,3.6-3.1,5.6   l-0.6,1.2c-1.7,3.6-3.4,5.1-6.3,6.3c0.8-2.8,1.2-5.9,1.6-8.9c0.6-4.5,1.1-9.1,3.2-12.8c1-1.8,2.4-3.5,3.8-5.2   c1.3-1.6,2.7-3.3,3.7-5.1c0.5-0.9,1-1.8,1.5-2.7c0.1-0.1,0.2-0.1,0.3-0.2c1.7-1.6,3.7-2.6,5.8-3.7c2.9-1.5,5.9-3.1,8.1-6.2   c2.2-3.1,4.1-6.1,5.8-9.3c-0.7-0.6-1.3-1.2-2-1.8c-1.7,3.3-3.7,6.4-5.9,9.6c-1.8,2.6-4.4,3.9-7.2,5.4c-0.9,0.5-1.8,0.9-2.6,1.5   c0.7-1.6,1.3-3.3,1.9-4.9c2.1-5.7,4.1-11.7,5.9-17.5c0-0.1,0-0.1,0.1-0.2c-0.8-0.5-1.5-1-2.3-1.5c-0.1,0.3-0.2,0.6-0.3,0.9   c-1.9,5.8-3.8,11.7-5.9,17.3c-1.6,4.2-3.1,8.2-5.4,12c-1,1.6-2.2,3.2-3.5,4.8c-1.3,1.6-2.6,3.3-3.8,5.1c0-0.9-0.1-1.8-0.3-2.8   c-0.2-1.3-0.6-2.6-1-3.8c-0.8-2.5-1.5-4.7-0.5-6.9c1.5-3.4,3.5-7.2,5.2-10.1c1.3-2.1,3-3.7,4.9-5.5s3.8-3.6,5.2-5.9   c0.4-0.6,0.2-1.4-0.4-1.8s-1.4-0.2-1.8,0.4c-1.2,2-2.9,3.6-4.8,5.3c-1.9,1.8-3.9,3.6-5.3,6c-0.1,0.1-0.2,0.3-0.2,0.4   c-0.5-3.4-0.6-6.8,1.1-9c2.2-2.9,4.7-5.8,7.1-8.6l1.7-2c0.1-0.1,0.2-0.2,0.3-0.3c-1.3-0.7-2.6-1.3-3.9-1.9c0.2,0.6,0.4,1.1,0.6,1.7   l-0.7,0.8c-2.4,2.8-4.9,5.8-7.2,8.8c-2.8,3.7-2.1,9.3-1,14.2c-1.1,2.1-2.2,4.3-3.1,6.4c-0.1,0.3-0.2,0.5-0.3,0.8   c-1.8-3.3-3.3-8.1-2.5-10.6c0.2-0.7-0.2-1.4-0.9-1.7c-0.7-0.2-1.5,0.2-1.7,0.9c-1.4,4.3,1.8,12.5,4.7,15.7c0.2,1.3,0.6,2.6,1,3.7   c0.4,1.2,0.7,2.3,0.9,3.4c0.2,1.3,0.2,2.5,0.3,3.8c0,1.2,0.1,2.4,0.3,3.7c0,0.1,0,0.1,0.1,0.2c-0.8,2.8-1.2,5.9-1.5,8.8   c-0.5,3.7-0.9,7.3-2.2,10.3c-0.3,0.1-0.6,0.4-0.7,0.7c-0.1,0.3-0.1,0.6-0.1,0.9c-0.4,0.7-0.9,1.4-1.4,2c-1.4,1.6-3.8,2.8-6.1,3.9   c-1.2,0.6-2.3,1.1-3.2,1.7c-0.4,0.2-0.8,0.5-1.1,0.7h-0.1c-0.6,0-1,0.4-1.2,0.9c-0.8,0.6-1.5,1.2-2.2,1.9c0-2.2-0.5-4.6-1-6.8   c-0.5-2.1-0.9-4.2-0.9-6c0-0.3,0-0.6,0.1-0.9c9.7-3.6,16.7-13.3,17.1-23.7c0-0.7-0.6-1.4-1.3-1.4c-0.7,0-1.4,0.6-1.4,1.3   c-0.3,8.6-5.8,16.8-13.6,20.5c0.3-0.8,0.6-1.6,1-2.5c0.3-0.7,0.6-1.4,0.9-2.1c0.3-0.9,0.7-1.8,1-2.7c0.6-1.8,1.3-3.6,2-5.3   c0.7-1.6,1.7-3,2.8-4.5c0.8-1.1,1.6-2.2,2.3-3.4c0.4-0.6,0.1-1.5-0.5-1.8c-0.6-0.4-1.5-0.1-1.8,0.5c-0.6,1.1-1.3,2.1-2.1,3.1   c-1.1,1.5-2.3,3.1-3.1,5c-0.2,0.5-0.4,0.9-0.6,1.4c-0.9-3.2-0.8-7.3,0.4-10.6c0.7-2,1.7-3.7,2.7-5.4c1-1.7,2-3.5,2.8-5.5   c0.3-0.7-0.1-1.5-0.8-1.7l0,0c-0.7-0.3-1.5,0.1-1.7,0.8c-0.7,1.8-1.6,3.4-2.6,5.2c-1,1.8-2.1,3.7-2.9,5.8c-1.5,4-1.9,10.1,0.4,14.7   c0.1,0.2,0.2,0.3,0.3,0.4c-0.1,0.1-0.1,0.3-0.2,0.4c-0.3,0.9-0.6,1.8-1,2.7c-0.3,0.7-0.5,1.4-0.8,2.1c-1,2.4-2,5-2.1,7.7   c0,2.1,0.5,4.4,1,6.6c0.7,3.1,1.4,6.2,0.6,8.8c-0.1,0.2-0.1,0.5,0,0.7c-0.7,1-1.5,2-2.1,3.1c-3.2,5.1-5.2,11.3-7.2,17.3   c-0.8,2.5-1.6,4.9-2.5,7.2c-0.5,1.3-0.9,2.5-1.4,3.8c-0.9,2.4-1.7,4.7-2.6,7c-0.2,0.2-0.4,0.4-0.6,0.6c-0.4,0.4-0.5,0.9-0.3,1.4   c-1.7,3.9-3.8,7.5-6.7,10.8c-0.1,0.1-0.2,0.2-0.3,0.3c0.6-3.1,1.2-6.3,2-9.6c0.5-0.3,0.7-1,0.5-1.5c0-0.1,0-0.1-0.1-0.2   c0.3-1.2,0.5-2.3,0.8-3.5c1.5-6.8,3.1-13.8,4.1-20.4c1.6-0.6,5.1-2.2,6.4-4.5c1.1-2,1.7-4.2,2.2-6.3l3.7-14c0.2-0.7-0.2-1.5-1-1.7   c-0.7-0.2-1.5,0.2-1.7,1l-3.7,14c-0.5,1.9-1.1,4-2,5.7c-0.5,0.9-2,2-3.7,2.7c0.1-0.9,0.2-1.9,0.3-2.8c0.3-3.6,0.1-7.3-0.1-10.8   c-0.1-1-0.1-1.9-0.1-2.9l0,0c0.6-0.8,1.4-1.5,2.3-2.3c1.6-1.4,3.2-2.9,4.1-5c0.7-1.6,1.1-3.2,1.6-4.8l0.2-0.8   c0.4-1.4,0.6-2.8,0.7-4.2c0.2-1.8,0.4-3.4,1-4.8c0.3-0.7,0-1.5-0.6-1.8c-0.7-0.3-1.5,0-1.8,0.6c-0.9,1.8-1.1,3.8-1.3,5.7   c-0.1,1.3-0.3,2.6-0.6,3.7l-0.2,0.8c-0.5,1.6-0.9,3.1-1.5,4.5c-0.7,1.6-2,2.8-3.4,4.1c-0.2,0.2-0.4,0.4-0.6,0.6c0-1.3,0-2.6,0.1-4   c0.5-6.3,1.9-14.2,3.8-21.1c2.4-8.7,6-15.4,12.6-23.1c0.5-0.6,0.9-1.1,1.4-1.6c2.9-3.4,5.2-6.1,7-10.8c1.4-3.7,2.7-7.1,5-10.1   c0.9-1.1,1.6-2.1,2.3-3.1c0.8-0.3,1.6-0.7,2.4-1c0.8-0.4,1.5-0.7,2.3-1l0.5-0.2c2.4-0.9,5.7-2.1,6.5-5.6c0-0.1,0-0.1,0-0.2   c-0.8-0.3-1.6-0.6-2.4-0.9c-0.1,0.1-0.2,0.3-0.2,0.5c-0.5,2.1-2.7,2.9-4.8,3.7l-0.6,0.2c-0.5,0.2-1,0.4-1.5,0.6   c0.6-1.3,1.2-2.8,1.8-4.5c0.2-0.7,0.4-1.4,0.5-2c-0.9-0.2-1.7-0.5-2.6-0.7c-0.1,0.6-0.3,1.3-0.5,1.9c-0.9,2.8-1.9,4.9-3.2,6.9h-0.1   c-0.7,0.2-1,0.8-0.9,1.5c-0.5,0.7-1,1.4-1.6,2.2c-0.4,0.5-0.7,1-1,1.5c-0.2-0.7-0.4-1.4-0.6-2.1c-0.4-1.2-0.7-2.4-0.8-3.4   c-0.2-3-1-5.8-1.7-8.5c-0.2-0.7-0.4-1.4-0.6-2.2c-0.9-0.1-1.9-0.2-2.8-0.3c0.3,1.1,0.5,2.1,0.8,3.2c0.5,1.7,0.9,3.3,1.2,4.9   c-2.5-2.6-4.9-5.2-5.9-8.4c-0.9,0-1.9-0.1-2.8-0.1c1,4.4,4,7.5,7,10.6c0.8,0.8,1.5,1.6,2.2,2.4c0,0,0.1,0,0.1,0.1   c0.2,0.8,0.4,1.6,0.6,2.4c0.5,1.7,1,3.7,0.8,4.9c-0.1,0.3,0,0.5,0.1,0.7c-0.7,1.7-1.4,3.4-2,5.2c-1.6,4.3-3.7,6.7-6.5,10   c-0.4,0.5-0.9,1.1-1.4,1.6c-1.8,2.2-3.4,4.3-4.9,6.4c-0.6-3.3-1.4-6.6-2.2-9.7c1.4-2.4,2.5-4.6,3.2-7.9c0.4-2,0.8-3.8,0.6-6.1   c0-0.5-0.1-1-0.1-1.6c-0.1-1.3-0.2-2.7-0.4-4c-0.1-0.7-0.3-1.5-0.5-2.1c-0.3-0.9-0.5-1.8-0.5-2.5s-0.6-1.3-1.3-1.3   c-0.7,0-1.3,0.6-1.3,1.3c0,1.2,0.3,2.2,0.6,3.3c0.2,0.6,0.4,1.2,0.4,1.8c0.2,1.2,0.3,2.5,0.4,3.8c0,0.5,0.1,1.1,0.1,1.6   c0.1,1.7-0.1,3.1-0.5,5.3c-0.4,1.8-1,3.3-1.6,4.7c-0.7-2.5-1.5-4.8-2.3-6.9c-0.3-0.9-0.8-1.8-1.2-2.8c-1.1-2.5-2.3-5.2-2.4-7.6   c-0.1-2.9,1.4-6.5,2.8-9.7l0.6-1.4c0.3-0.7,0.6-1.5,1-2.2c-1,0.1-2,0.2-3.1,0.3c-0.1,0.3-0.3,0.6-0.4,0.9l-0.6,1.3   c-0.1,0.2-0.2,0.4-0.3,0.6c-0.4-0.8-0.8-1.7-1.1-2.6c-0.9,0.1-1.8,0.3-2.7,0.4c0,0,0,0,0,0.1c0.7,1.8,1.5,3.9,2.5,5.2   c-0.9,2.4-1.6,4.9-1.5,7.1c0.1,3,1.4,5.8,2.6,8.6c0.4,0.9,0.8,1.8,1.1,2.7c2.2,5.9,4.4,14.3,5.8,22.7c-0.5,0.9-1,1.7-1.5,2.6   c-0.2-0.6-0.3-1.2-0.4-1.8c-0.2-1.2-0.5-2.4-1-3.6c-0.8-1.8-1.9-3.5-3-5.1c-0.7-1-1.3-2-1.9-3s-1.3-2-2-2.9c-1-1.3-1.9-2.5-2.4-3.9   c-1.6-3.7-2.9-8.2-2.4-9.7c0.2-0.7-0.2-1.5-0.9-1.7s-1.5,0.2-1.7,0.9c-1,3.1,1.7,9.6,2.5,11.6c0.7,1.7,1.7,3.1,2.7,4.4   c0.7,0.9,1.3,1.8,1.8,2.7c0.6,1.1,1.3,2.1,2,3.1c1.1,1.6,2.1,3.1,2.8,4.7c0.4,0.9,0.6,2,0.8,3.1c0.3,1.5,0.6,3.1,1.5,4.5   c-1.2,2.7-2.2,5.6-3.1,8.6c-1.9,7.1-3.4,15.2-3.9,21.6c-0.3,3.7-0.1,7.4,0.1,11s0.4,7,0.1,10.5c-0.6,7.4-2.4,15.7-4.2,23.8   c-0.2-1.5-0.3-3.1-0.4-4.7c-0.1-1.3-0.1-2.6-0.3-3.8l-0.1-0.8c-0.2-2.4-0.5-4.8-0.1-6.9c0.2-1.1,0.7-2.1,1.2-3.3   c0.6-1.2,1.1-2.4,1.4-3.8c0.8-4-0.7-8.3-2.2-12.5c-0.6-1.8-1.2-3.4-1.6-4.9c-0.2-0.7-0.4-1.5-0.6-2.2c-1.1-4-2.2-8-0.4-11.4   c0.2-0.4,0.6-0.7,0.9-1.1c0.4-0.4,0.8-0.9,1.2-1.4c0.4-0.7,0.7-1.4,0.9-2.2c0.2-0.5,0.3-1,0.5-1.4c1.3-2.4,2.7-5.6,4-8.9   c0.3-0.7-0.1-1.5-0.8-1.7c-0.7-0.3-1.5,0.1-1.7,0.8c-0.9,2.3-1.8,4.5-2.7,6.4c-1-0.9-1.8-2.2-2.1-3.8c-0.4-1.7-0.3-3.5-0.3-5.4   v-0.6c0.1-7.6-0.5-15.3-2-22.7c-0.1-0.7-0.8-1.2-1.6-1.1c-0.7,0.1-1.2,0.8-1.1,1.6c1.4,7.3,2,14.7,1.9,22.2v0.6c0,2-0.1,4,0.4,6   c0.5,2.2,1.5,4.1,3,5.3c0.2,0.1,0.3,0.2,0.5,0.4c-0.2,0.5-0.4,1-0.6,1.6c-0.2,0.6-0.4,1.2-0.6,1.6c-0.2,0.3-0.5,0.6-0.8,0.9   c-0.5,0.5-1,1-1.4,1.7c-0.3,0.6-0.6,1.1-0.7,1.7c-0.7-1.2-1.5-2.4-2.3-3.5c-1-1.5-2-2.8-2.8-4.3c-1.3-2.2-2.6-4.3-4.2-6.1   c-0.5-2.4-0.5-5.2-0.4-8c4-2.3,6.3-7.3,5.5-11.9c-0.1-0.7-0.8-1.2-1.6-1.1c-0.7,0.1-1.2,0.8-1.1,1.6c0.5,2.9-0.6,5.9-2.7,7.9   c0.1-2.2,0.2-4.5-0.5-6.7c0.1-0.1,0.1-0.2,0.2-0.3c1.1-2.9,1.9-5.8,2.7-8.7c1.1-3.7,2.1-7.3,3.6-10.8c0.5-1.1,1-2.2,1.6-3.2   c1.1-2.1,2.2-4.2,2.8-6.6l0.2-0.8c0.8-3,1.8-6.6,2.1-10.1c-0.9,0.2-1.8,0.5-2.8,0.7c-0.4,3-1.2,6.1-1.9,8.7l-0.2,0.8   c-0.6,2.1-1.6,4.1-2.6,6.1c-0.1,0.2-0.2,0.4-0.3,0.7c-0.2-1.2-0.5-2.6-0.8-4.1c-0.2-0.9-0.5-1.8-0.7-2.6c-0.6-1.9-1.1-3.6-0.8-5.6   l0.1-1.1c0-0.2,0-0.3,0.1-0.4c-1.3,0.5-2.5,1-3.8,1.5c0.3,0.2,0.5,0.4,0.8,0.6l0.1,0.1c-0.1,2.1,0.4,3.9,1,5.7   c0.2,0.8,0.5,1.6,0.7,2.4c1.3,5.7,1.3,7.9,1.1,8.8c-1.1,2.9-1.9,5.8-2.7,8.6c-0.6,2.2-1.3,4.5-2.1,6.8c-0.6-0.6-1.2-1.2-1.8-1.7   c-0.7-0.6-1.4-1.1-1.9-1.8c-0.9-1.3-1.2-2.8-1.5-4.5c-0.1-0.7-0.3-1.5-0.5-2.2c-0.4-1.7-1.3-3.4-2.3-5c0.1-0.1,0.2-0.1,0.2-0.2   c2.7-4.3,3.9-9.4,3.2-14.4c0-0.3-0.2-0.5-0.3-0.7c-0.7,0.4-1.5,0.8-2.2,1.2c0.4,4-0.4,8.2-2.5,11.8c-0.4-0.5-0.7-1-1.1-1.5   l-0.6-0.8c-1.3-1.8-3.1-2.8-4.8-3.6c-0.8,0.6-1.6,1.2-2.4,1.8c0.1,0,0.1,0.1,0.2,0.1c2,0.9,3.7,1.7,4.9,3.3l0.6,0.8   c1.8,2.4,3.8,5.1,4.5,7.8c0.2,0.7,0.3,1.3,0.4,2c0.3,1.8,0.7,3.7,1.9,5.5c0.7,1,1.6,1.7,2.4,2.4c0.9,0.7,1.8,1.4,2.3,2.4   c1.1,2,0.9,4.6,0.8,7v0.2c-0.2,2.7-0.3,5.6-0.1,8.3c-1.3-1-2.8-1.8-4.6-2.5c-0.6-0.2-1.2-0.5-1.8-0.7c-0.3-1.8-1-3.6-1.8-5.4   c-0.4-1-0.8-1.9-1.1-2.7c-1.4-4.3-3-7.7-4.8-9.9c-1.7-2.2-4-3.7-6.2-5.2c-0.9-0.6-1.9-1.3-2.7-2c-1.4-1.1-2.6-2.3-3.8-3.6   c-0.6,0.6-1.2,1.3-1.8,1.9c1.2,1.4,2.5,2.7,4,3.8c0.9,0.7,1.9,1.4,2.9,2c2.1,1.5,4.1,2.8,5.6,4.7c1.6,2,3.1,5.1,4.3,9.1   c0.3,0.9,0.7,1.9,1.2,3c0.4,0.9,0.8,1.8,1.1,2.7c-0.9-0.5-1.7-1.1-2.6-1.8c-1-0.8-2-1.7-3-2.6c-1.1-1-2.2-1.9-3.3-2.8l-0.2-0.4   c-1.4-3-2.8-5.8-5.3-8.5c-1.1-1.2-2.3-2.2-3.5-3.2c-0.7-0.6-1.5-1.2-2.1-1.9c-0.5-0.4-0.9-0.9-1.3-1.4c-0.1,0.1-0.2,0.2-0.3,0.3   c-0.5,0.6-1,1.2-1.5,1.8c0.4,0.4,0.7,0.9,1.2,1.3c0.7,0.7,1.5,1.3,2.2,2c1.2,1,2.3,2,3.3,3c1.2,1.3,2.2,2.7,3,4.2   c-2.3-1.4-4.6-2.6-6.8-3.5c-0.7-0.3-1.6-0.6-2.6-0.9s-2.4-0.8-3.7-1.3c-0.5,0.7-1,1.5-1.5,2.3c1.4,0.6,2.9,1.1,4.4,1.6   c0.9,0.3,1.8,0.6,2.4,0.8c3,1.3,6.2,3.1,9.5,5.2c1.5,1,2.9,2.2,4.4,3.6c1,0.9,2.1,1.9,3.1,2.7c1.8,1.4,3.4,2.4,5.2,3.3   c0.1,0.1,0.3,0.3,0.5,0.3c0.1,0,0.2,0,0.4,0.1c0.7,0.3,1.4,0.6,2.2,0.9c2.6,1,4.4,2.2,6.1,4c0,0.1,0,0.2,0.1,0.3   c0.1,0.4,0.4,0.8,0.8,0.9c0.1,0,0.1,0,0.2,0c1.1,1.4,2.1,3,3.2,4.9c0.9,1.5,1.9,3,2.9,4.4c1.5,2.1,3,4.3,4,6.6   c0.1,2.4,0.8,4.8,1.4,7c0.2,0.7,0.4,1.4,0.6,2.1c0.4,1.7,1,3.4,1.7,5.2c1.4,3.8,2.8,7.8,2.1,11.1c-0.2,1-0.7,2.1-1.2,3.2   c-0.3,0.5-0.5,1.1-0.7,1.7c-2.8-3.1-4.2-8.7-4.7-11.2c-0.3-1.4-0.7-2.9-1-4.2c-0.6-2.2-1.2-4.5-1.4-6.7c0-0.7-0.7-1.3-1.4-1.3   s-1.3,0.7-1.3,1.4c0.1,2.5,0.8,4.9,1.5,7.2c0.4,1.4,0.7,2.7,1,4c0.7,3.8,2.6,10.5,6.6,13.6c-0.3,2.3-0.1,4.8,0.1,7l0.1,0.8   c0.1,1.2,0.2,2.4,0.3,3.7c0.2,3.7,0.5,7.5,1.6,10.9c-1,4.7-2,9.2-2.6,13.4c-0.8-1.7-1.3-3.6-1.8-5.5c-0.2-0.8-0.4-1.5-0.7-2.2   c0-0.3,0-0.6-0.2-0.9c0-0.1-0.1-0.1-0.1-0.2c-1.1-3.5-2.1-7-2.8-10.8c-0.4-2.4-1.4-4.6-2.3-6.7c-0.1-0.2-0.2-0.4-0.3-0.7   c0-0.1,0.1-0.3,0.1-0.4c0.1-0.4,0.3-0.8,0.3-1.2c0.2-1.2,0.2-2.4,0.2-3.6c0-1,0.1-2,0.2-3c0.4-3.6-0.7-5.2-2.3-7.4l-0.4-0.6   c-0.8-1.1-1.4-2.4-2-3.8c0.1-0.5-0.1-1.1-0.5-1.5c0,0-0.1,0-0.1-0.1c-0.9-2.3-1.6-4.8-2.3-7.2c0.1-0.1,0.1-0.1,0.1-0.2   c0.4-1,0.8-2.1,1.2-3.1c0.9-2.1,1.8-4.3,2.4-6.6c0.7-2.8,0.2-5.4-0.3-8c-0.2-1.1-0.5-2.3-0.6-3.5c-0.1-0.7-0.7-1.3-1.4-1.2   c-0.7,0.1-1.3,0.7-1.2,1.4c0.1,1.3,0.4,2.6,0.6,3.8c0.5,2.3,0.9,4.6,0.3,6.8c-0.6,2.1-1.4,4.2-2.3,6.3c-1-4.2-1.7-8.2-2-11.9   c-0.5-5.4-1.6-10.9-5.7-14.5c-0.6-0.5-1.4-0.4-1.9,0.1c-0.5,0.6-0.4,1.4,0.1,1.9c3.4,3,4.3,7.9,4.8,12.8c0.5,4.8,1.5,10,2.9,15.7   c0.3,1.3,0.7,2.7,1.1,4c-2-2.3-3.7-4.9-4-7.4c-0.1-0.7-0.8-1.3-1.5-1.2c-0.7,0.1-1.3,0.8-1.2,1.5c0.5,4.2,3.7,8.4,7.1,11.3   c0.4,0.4,0.9,0.7,1.4,1.1c0.7,1.8,1.6,3.5,2.6,5l0.4,0.6c1.5,2.2,2.1,3.1,1.8,5.6c-0.1,1.1-0.2,2.1-0.2,3.2c0,0.5,0,1-0.1,1.5   c-0.3-0.5-0.6-1-1-1.5c-1.5-2.3-3.1-4.6-3.2-6.5c-0.1-0.7-0.7-1.3-1.4-1.2c-0.7,0.1-1.3,0.7-1.2,1.4c0.2,2.6,2,5.3,3.7,7.8   c1,1.5,1.9,2.8,2.4,4.1c0,0.1,0.1,0.2,0.1,0.3c0,0.2,0.1,0.4,0.3,0.6c0.1,0.2,0.2,0.4,0.3,0.6c0.9,2,1.8,4,2.1,6.1   c0.2,1.1,0.4,2.2,0.7,3.3c-0.2-0.4-0.5-0.7-0.7-1.1c-0.6-1-1.2-2-1.9-3c-1.8-3-3.8-6.1-6-8.8c-2.4-2.9-4.7-4.9-7.7-6.5   c0-0.3,0-0.6,0-0.9c0-0.5,0-1.1,0-1.7c-0.2-1.9-0.9-4.1-1.5-6c-0.9-2.9-1.1-4.7-1.2-7.8c0-1.1,0-2.2,0.1-3.4c0.1-1.6,0.2-3.3,0-5.1   c-0.1-0.7-0.2-1.3-0.4-1.9c-0.2-3.1,1.4-8.7,2.9-12.5c0.3-0.7-0.1-1.5-0.8-1.7c-0.7-0.3-1.5,0.1-1.7,0.8c-0.4,0.9-1.6,4.4-2.4,7.9   c-0.1-0.4-0.3-0.8-0.4-1.2c-1.4-5.1-2.7-9.8-2.9-14.3c0-0.5-0.5-11.5-4.5-14.4c-0.6-0.4-1.4-0.3-1.9,0.3c-0.4,0.6-0.3,1.4,0.3,1.9   c1.8,1.3,2.9,6.6,3.3,10.6c-0.4-0.3-0.7-0.6-1.1-0.9c-0.6-0.6-1.3-1.2-2.1-1.6c-1-0.6-2.2-0.9-3.2-1.2c-1-0.3-2-0.6-2.8-1   c-2.1-1.2-3.9-4.1-5.4-6.4l-0.1-0.1c-0.3-0.5-0.7-1.1-1.2-1.8c-1.3-1.9-3.2-4.7-3.6-6.7c-0.6,1-1.2,2.1-1.7,3.1   c0.8,1.8,2,3.5,3.1,5.1c0.4,0.6,0.8,1.2,1.1,1.7l0.1,0.1c1.6,2.6,3.6,5.8,6.4,7.3c1.1,0.6,2.2,0.9,3.3,1.3c1,0.3,1.9,0.6,2.7,1   c0.5,0.3,1,0.7,1.6,1.2c0.8,0.7,1.7,1.5,2.9,2c0.1,0,0.1,0,0.2,0.1c0.4,4.3,1.5,8.7,2.9,13.5c0.3,1.2,0.8,2.4,1.3,3.4   c0.6,1.6,1.3,3,1.5,4.7c0.1,0.7,0.1,1.5,0.1,2.2c-1.1-0.3-2.2-0.6-3.3-1c-0.9-0.3-1.9-0.6-2.9-0.9c-1.2-0.3-2.3-0.3-3.4-0.3   c-0.3-0.6-0.6-1.3-0.9-1.9c-0.6-1.3-1.2-2.6-1.6-3.9l-0.2-0.9c-0.5-1.8-1-3.6-1.7-5.5c0-0.1,0.1-0.1,0.1-0.2   c0.2-0.6-0.2-1.3-0.8-1.5c-0.6-1.4-1.3-2.8-2.2-4.1c-1.2-1.7-2.8-2.9-4.3-4.1c-1.1-0.8-2.1-1.5-2.9-2.4c-2.5-2.6-4.5-6.6-5-9.8   c-0.1-0.5-0.4-0.8-0.8-1c-0.5,1.1-0.9,2.3-1.3,3.4c0.9,3.2,2.9,6.7,5.3,9.2c1,1.1,2.2,1.9,3.3,2.7c1.4,1.1,2.8,2.1,3.7,3.4   c0.4,0.5,0.7,1.1,1,1.6c-2.9-0.8-5.9-1.7-8.7-2.9c-1.5-0.7-3.2-1.4-4-2.7c-0.2-0.3-0.4-0.7-0.7-1.2v4.3c1.1,0.9,2.4,1.5,3.6,2   c0.8,0.3,1.5,0.6,2.3,0.9c3,1.1,6,1.9,8.9,2.7c0.7,1.9,1.2,3.8,1.8,5.7l0.3,0.9c0.4,1.5,1.1,2.9,1.7,4.3c0.1,0.2,0.2,0.4,0.3,0.6   c-0.1,0-0.3,0-0.4-0.1c-0.7-0.2-1.4-0.4-2-0.6c-2.4-0.8-4.9-1.6-7.8-0.9c-1.1,0.2-1.8,0.6-2.6,1c-0.4,0.2-0.8,0.5-1.3,0.7   c-1.4,0.5-3,0-4.6-0.7v2.9c1.7,0.7,3.6,1.1,5.6,0.3c0.7-0.3,1.2-0.5,1.7-0.8c0.6-0.3,1.1-0.6,1.8-0.8c2.2-0.5,4.2,0.1,6.5,0.9   c0.7,0.2,1.4,0.4,2.1,0.7c1.1,0.3,2,0.4,3,0.4c0.1,0,0.3,0,0.5,0c0.1,0,0.3,0,0.4,0c1,0,2,0,3,0.3c0.9,0.3,1.8,0.5,2.7,0.8   c1.3,0.4,2.6,0.9,4.1,1.1c0,1.1-0.1,2.2-0.1,3.3c0.1,3.2,0.3,5.2,1.3,8.5c0.6,1.7,1.2,3.8,1.3,5.5c0,0.3,0,0.6,0,1   c-0.1,0-0.2-0.1-0.3-0.1c-2.2-1-4.6-2-6.7-3.2c-0.9-0.5-2-0.9-3-1.4c-0.4-0.2-0.8-0.3-1.1-0.5c-0.3-0.3-0.6-0.4-1-0.4   c-0.5-0.3-1-0.5-1.5-0.9c-1.5-1.1-2.7-2.6-3.9-4.2c-0.8-1.1-1.7-2.2-2.6-3.2c-2.3-2.4-5-3.3-7.7-4.4L5.7,342   c-0.7-0.3-1.5,0.1-1.7,0.8c-0.3,0.7,0.1,1.5,0.8,1.7l0.3,0.1c2.7,1,4.9,1.8,6.8,3.8c0.8,0.9,1.6,1.9,2.4,2.9   c1.3,1.7,2.7,3.5,4.5,4.8l0.1,0.1c-3.5,1.8-6.8,2.7-10.8,2.8c-3.2,0.1-5.5-0.8-8.2-2v2.9c0.5,0.2,1,0.4,1.5,0.6   c2,0.7,4.1,1.3,6.8,1.2c5-0.2,9.1-1.4,13.5-4c0.4,0.2,0.8,0.3,1.2,0.5c0.8,0.3,1.5,0.6,2.2,1c-1.8,1.1-4,2-6,2.8   c-0.6,0.2-1.2,0.5-1.7,0.7c-0.4,0.2-0.8,0.3-1.1,0.5c-1.3,0.6-2.5,1.1-3.8,1.4c-2.1,0.5-4.1,0.4-6.3,0.3c-1.7-0.1-3.4-0.2-5.2,0   c-0.5,0.1-0.9,0.4-1,0.8v0.8c0.1,0.2,0.1,0.4,0.2,0.6s0.3,0.3,0.5,0.4s0.4,0.1,0.6,0.1c1.5-0.2,3.1-0.1,4.7,0   c2.3,0.1,4.7,0.3,7.1-0.4c1.4-0.4,2.8-1,4.2-1.6c0.4-0.2,0.7-0.3,1.1-0.5c0.5-0.2,1.1-0.5,1.7-0.7c2.6-1.1,5.5-2.2,7.7-3.9   c1.6,0.8,3.2,1.5,4.8,2.2c0.6,0.3,1.2,0.5,1.8,0.8c0.2,0.2,0.4,0.5,0.6,0.5c0.2,0.1,0.4,0.1,0.6,0.1c2.6,1.5,4.6,3.2,6.8,5.8   c2.1,2.6,4,5.6,5.8,8.5c0.6,1,1.3,2,1.9,3c1.1,1.7,2.1,3.2,3.1,4.7c-0.6-0.1-1.1-0.1-1.6-0.1c-0.4,0-0.8,0-1.2,0   c-1.2-0.2-2.6-0.8-3.9-1.4c-2.2-1-4.2-1.7-6.2-2.4c-2.7-1-5.5-2-8.2-3.1c-4.5-1.8-7-4.6-10.1-9.2c-0.4-0.6-1.2-0.8-1.8-0.4   c-0.6,0.4-0.8,1.2-0.4,1.8c2.8,4.3,5.6,8,11.3,10.2c1.1,0.4,2.2,0.8,3.2,1.2c-0.9,0.2-1.9,0.3-2.9,0.5c-4,0.7-8.2,1.4-10.3,2.2   c-0.7,0.3-1,1-0.8,1.7c0.1,0.4,0.4,0.6,0.8,0.8c0.3,0.1,0.6,0.1,1,0c1.8-0.7,6-1.4,9.7-2c3.4-0.6,5.8-1,7.1-1.4   c0.1,0,0.3,0.1,0.4,0.1c2,0.7,3.9,1.4,6,2.3c0.7,0.3,1.5,0.7,2.3,1s1.5,0.5,2.3,0.6c0.6,0.1,1.1,0.1,1.6,0.1s0.9,0,1.4,0.1   c0.3,0.1,0.6,0.2,1,0.3c0.4,0.2,0.9,0.4,1.4,0.5c0,0.1,0.1,0.2,0.1,0.3c0.2,0.7,0.4,1.5,0.7,2.2c0.8,2.8,1.7,5.9,3.3,8.3l0,0   c-2.9,5-5.1,10.7-7.1,16.2l-0.4,1.1c-0.1,0.4-0.1,0.8,0.1,1.1c0.5,0.2,1.1,0.4,1.6,0.6c0.3-0.1,0.6-0.4,0.7-0.7h0.1   c3.3-1.7,6-3.5,8.9-5.7c0.1,0,0.3,0,0.4,0c0.9-0.2,1.9-0.4,2.8-0.6c5.3-1.2,10.3-2.4,15.4-1c0.3,0.1,0.6,0.2,1,0.3   c0.6-0.7,1.2-1.5,1.8-2.2c-0.3-0.1-0.5-0.2-0.8-0.3c0.6-0.4,1.3-0.7,1.9-1c1.2-1.4,2.3-2.7,3.6-4c-3.4,0.8-6.1,2-9,4.2   c-4.4-0.6-8.6,0.1-12.7,1.1c2.6-2.5,5-5.2,7.4-8c0.1,0,0.2,0,0.2,0c4.1-1.3,9.9-1.8,16.4-1.4c0.5,0,1,0.1,1.6,0.2   c3.6-3.5,7.4-6.8,11.4-9.9c-2.1,0.8-4.1,1.8-6,2.9c-0.5,0.3-1.2,0.7-1.9,1.2c-1.5,1-3.9,2.5-4.9,2.5c-0.4,0-0.8,0.2-1,0.4   c-3.7-0.2-8.4-0.1-12.8,0.7c7.3-8.6,15.1-17.2,27.1-18.2c1.2-0.1,2.4-0.1,3.6-0.1c2.7-0.1,5.6-0.1,8.5-1.1c1.4-0.5,2.8-1.2,4.1-2   c1.6-0.9,3.1-1.7,4.7-2.1c1.4-0.3,2.9-0.4,4.4-0.4c0.5,0,1.1,0,1.7-0.1c3.6-1.5,7.3-2.9,11-4.1c-1.7,0.2-3.3,0.4-5,0.7   c-1.2,0.2-2.4,0.4-3.6,0.5c1.4-1.3,3-2.3,4.4-3.3c3.4-2.3,7-4.7,9-10c0.3-0.7-0.1-1.5-0.8-1.7c-0.7-0.3-1.5,0.1-1.7,0.8   c-1.7,4.5-4.6,6.4-8,8.7c-2.3,1.6-4.7,3.2-6.9,5.8c0,0,0,0.1-0.1,0.1h-0.1c-1.6,0.1-3.2,0.1-4.9,0.5c-2,0.4-3.7,1.4-5.4,2.3   c-1.3,0.7-2.5,1.4-3.7,1.8c-2.4,0.8-4.8,0.9-7.4,0.9c1.7-1.9,3.2-4.1,4.7-6.3c1.3-1.8,2.5-3.6,3.8-5.1c0.4-0.5,0.9-1,1.3-1.5   c6-0.4,12-1.2,17.8-2.6c0.7-0.2,1.1-0.9,1-1.6c-0.2-0.7-0.9-1.1-1.6-1c-4.6,1.1-9.3,1.9-14.1,2.3c2.2-1.8,4.5-3.4,6.8-5   c0.7-0.5,1.5-1,2.2-1.5c5.1-3.6,10.6-5.3,16.5-7.1c1.6-0.5,3.3-1,5-1.6c1.9-0.6,4.1-1.1,6.4-1.6c4.4-0.9,9-1.9,12.2-4.1   c0-0.7,0.1-1.4,0.1-2.1C170.7,337.8,170.1,337.7,169.6,338.1z"
                fill="#8cf9e4"
            />
            <Path
                d="M165.3,364.3c-1.1,0.2-2.2,0.5-3.2,1c1.4-0.2,2.9-0.4,4.3-0.6C166.1,364.4,165.7,364.3,165.3,364.3z   "
                fill="#8cf9e4"
            />
            <Path
                d="M169.4,349.7c-0.6-0.4-1.4-0.2-1.8,0.4c-1.9,3.1-5.2,5.6-8.4,7.9c-1.1,0.8-2.1,1.6-3.1,2.4   c-0.3,0.2-0.5,0.4-0.8,0.6c0.4-4.6,2.9-8.9,6.7-11.5c0.6-0.4,0.7-1.2,0.3-1.8c-0.4-0.6-1.2-0.7-1.8-0.3c-4.7,3.2-7.7,8.7-7.9,14.4   c0,0.4,0.2,0.7,0.4,1c-2.2,1.7-4.5,3.7-6.1,5.8c1.6-0.5,3.1-0.9,4.7-1.3c1.3-1.2,2.7-2.3,4.1-3.3c0.7-0.5,1.4-1.1,2-1.6   c0.9-0.8,2-1.5,3-2.3c3.4-2.5,6.9-5.1,9.1-8.7l0,0c0.1-0.3,0.1-0.6,0.2-1C170,350.3,169.8,349.9,169.4,349.7z"
                fill="#8cf9e4"
            />
        </G>
        <G>
            <Path
                d="M0,348.8v8.7c4.2-0.5,8-1,8-1s1-2.4,1.9-4.8c1-2.4,2-4.7,2-4.7s-3.7,0.5-7.5,1.1   C2.9,348.4,1.3,348.6,0,348.8z"
                fill="#f9d335"
            />
            <Path d="M0,375.9c0.3,0,0.5-0.1,0.5-0.1l3.7-9.7c0,0-1.8,0.3-4.2,0.8V375.9z" fill="#f9d335" />
            <Path
                d="M5.4,329.9c0,0-1.8,1.2-3.6,2.3c-0.6,0.4-1.2,0.8-1.8,1.2v5.7c1.8-0.2,4-0.4,6.2-0.7   c2.5-0.2,4.9-0.5,6.8-0.7c1.8-0.2,3.1-0.3,3.1-0.3l4.3-9.4c0,0-3.7,0.4-7.5,0.9C9.1,329.5,5.4,329.9,5.4,329.9z"
                fill="#f9d335"
            />
            <Path
                d="M77.8,223.6c-3.7-0.7-7.4-1.2-7.4-1.2s-2,0.6-4.1,1.3c-1.7,0.6-3.3,1.1-3.9,1.3   c1.2-1.6,2.4-3.1,3.5-4.5c0.4-0.5,0.8-1,1.2-1.5c-0.6,0-1.2,0-1.7,0c-0.2,0.2-0.4,0.4-0.5,0.6c-0.8,0.9-1.6,1.9-2.4,2.8   c0-0.5,0.1-1.1,0.2-1.6c0.1-0.6,0.1-1.2,0.2-1.8c-2.5,0-5,0.1-7.5,0.2c0.9,2.5,1.8,4.9,2.5,6.8c0.2,0.5,0.3,0.9,0.5,1.3   c-0.1,0.1-0.1,0.1-0.2,0.2c-2.3,2.9-4.6,5.9-7,9.1c-0.5,0.7-1.1,1.4-1.6,2.2c0-0.3,0-0.7,0.1-1c0.1-2.2,0.2-4.3,0.2-4.3   s-0.4-1-1-2.5s-1.3-3.5-2-5.4c-0.7-2-1.5-4.1-2-5.6c-1,0.1-1.9,0.2-2.9,0.3c-0.4,0.5-0.7,1-1.1,1.5c-0.8,1-1.6,2.1-2.1,2.9   c-0.6,0.8-1,1.3-1,1.3s0.5,1.3,1.3,3.3s1.9,4.5,3,7.1c1.3,3,2.7,6,3.6,8c-0.6,0.8-1.2,1.7-1.8,2.5c-1.2,1.8-2.5,3.6-3.7,5.4   c-0.6,0.9-1.3,1.8-1.9,2.8c-0.2,0.3-0.4,0.7-0.7,1c0-0.2,0-0.4,0-0.5c0-2.1,0-4.3,0-4.3s-1.7-3.8-3.4-7.7s-3.3-7.8-3.3-7.8   s-1.5,2.1-2.9,4.3c-1.4,2.1-2.8,4.3-2.8,4.3s0.6,1.3,1.5,3.2s2.2,4.4,3.4,7c1.4,2.8,2.8,5.6,3.8,7.5c-0.4,0.6-0.8,1.2-1.2,1.9   c-1.2,2-2.5,4-3.7,6.1c-0.6,1-1.3,2.1-1.9,3.1c-0.2,0.3-0.4,0.6-0.6,0.9c0-0.1,0-0.1,0-0.2c-0.1-2.1-0.2-4.3-0.2-4.3   s-1.9-3.8-3.8-7.5c-0.9-1.9-1.9-3.8-2.6-5.2c-0.7-1.4-1.1-2.4-1.1-2.4s-0.4,0.5-0.8,1.4c-0.5,0.8-1.2,1.9-1.8,3   c-1.3,2.2-2.6,4.4-2.6,4.4s0.7,1.2,1.6,3.1c1,1.9,2.4,4.3,3.7,6.8c1.5,2.7,3,5.3,4,7.1c-0.5,0.8-1,1.6-1.4,2.5   c-1.8,3.2-3.6,6.5-5.4,9.8c-0.2-2.1-0.4-4.2-0.4-4.2s-2.1-3.7-4.1-7.4c-2.1-3.7-4-7.5-4-7.5s-0.3,0.6-0.8,1.4s-1.1,2-1.7,3.1   c-1.2,2.2-2.4,4.5-2.4,4.5s0.7,1.2,1.8,3s2.5,4.2,4,6.6c1.6,2.5,3.1,5.1,4.2,6.9c-1.9,3.6-3.8,7.3-5.6,11.1   c-0.2,0.4-0.4,0.9-0.6,1.3l-0.5-4c0,0-0.6-0.9-1.4-2.2c-0.8-1.4-1.9-3.2-3-5c-0.5-0.9-1-1.8-1.5-2.6v15.6c1.1,1.7,2.2,3.3,3,4.6   c0.1,0.1,0.1,0.2,0.2,0.2c-1,2.1-2,4.2-2.9,6.3c-0.1,0.2-0.2,0.4-0.3,0.6v9c0.1-0.3,0.2-0.5,0.3-0.8c1-2.4,2.2-4.8,3.3-7.2   c0.8-1.8,1.6-3.5,2.4-5.3c1.7-0.1,5.3-0.4,8.9-0.6c5-0.3,9.9-0.6,9.9-0.6s1.1-2.3,2.2-4.6c1.2-2.3,2.3-4.6,2.3-4.6   s-3.8,0.3-7.5,0.6c-3.8,0.3-7.5,0.7-7.5,0.7l-5.6,3.4c0.5-1.1,1-2.1,1.5-3.2c1.6-3.4,3.3-6.7,5-10.1c1.7-0.1,5.3-0.2,9-0.3   c4.9-0.2,9.9-0.2,9.9-0.2s1.2-2.3,2.4-4.5c0.6-1.1,1.2-2.3,1.7-3.1c0.5-0.8,0.8-1.4,0.8-1.4s-0.9,0-2.4,0.1   c-1.4,0.1-3.3,0.1-5.2,0.2c-3.8,0.2-7.5,0.4-7.5,0.4s-1.9,1-3.8,2.1c-0.7,0.4-1.5,0.8-2.1,1.2c0.9-1.6,1.7-3.3,2.6-4.9   c1.2-2.2,2.4-4.4,3.5-6.6c0.3-0.5,0.6-1,0.8-1.5c1.6,0,5.4,0,9.2,0c2.5,0,4.9,0.1,6.8,0.1c1.8,0,3.1,0.1,3.1,0.1l5.3-8.8   c0,0-3.8,0-7.5,0c-3.8,0-7.6,0.1-7.6,0.1s-1.9,0.9-3.9,1.9c-0.8,0.4-1.7,0.9-2.3,1.2c0.5-0.9,1-1.8,1.5-2.7c0.6-1,1.2-2.1,1.8-3.1   c1.2-2.1,2.4-4.1,3.6-6.1c0.2-0.3,0.4-0.6,0.6-0.9c1.5,0.1,5.4,0.2,9.4,0.5c2.5,0.2,4.9,0.3,6.8,0.4c1.8,0.1,3.1,0.2,3.1,0.2   s1.4-2.1,2.8-4.2c0.7-1.1,1.4-2.1,1.9-2.9s0.9-1.3,0.9-1.3s-3.8-0.3-7.5-0.4c-3.8-0.1-7.5-0.3-7.5-0.3s-2,0.9-3.9,1.7   c-1,0.5-2,0.9-2.7,1.3c0.6-0.9,1.1-1.9,1.7-2.8c0.6-0.9,1.2-1.9,1.8-2.8c1.2-1.9,2.4-3.7,3.6-5.5c0.4-0.5,0.7-1.1,1.1-1.6   c1.2,0.1,5.4,0.5,9.6,0.9c2.4,0.3,4.9,0.5,6.8,0.8c1.8,0.2,3.1,0.4,3.1,0.4s1.5-2,3-4.1c1.5-2,3.1-4,3.1-4s-3.7-0.5-7.5-0.9   c-1.9-0.2-3.8-0.4-5.2-0.5s-2.3-0.2-2.3-0.2s-2,0.8-4,1.5c-1,0.4-2,0.8-2.8,1.1c-0.2,0.1-0.3,0.1-0.5,0.2c0.9-1.3,1.8-2.6,2.7-3.9   c2.1-3,4.2-5.9,6.2-8.6l0,0c0,0,1.2,0.2,3.1,0.4c1.9,0.3,4.3,0.7,6.7,1.1c2.4,0.4,4.9,0.8,6.7,1.2c1.8,0.4,3,0.6,3,0.6   s1.6-1.9,3.2-3.8c1.6-1.9,3.3-3.7,3.3-3.7S81.5,224.3,77.8,223.6z"
                fill="#f9d335"
            />
        </G>
        <G>
            <Path
                d="M236,683.3c-0.7,0.2-1.1,0.9-0.9,1.6c1,3.4-0.8,6.3-3.4,8.8c-0.7-4.2-1.4-9.4-0.1-12.8   c0.8-2.2,2.3-4.2,3.8-6.3c0.1-0.1,0.2-0.3,0.3-0.4c-0.2-1.2-0.5-2.4-0.7-3.6c-0.5,0.8-1.1,1.6-1.7,2.4c-1.6,2.1-3.2,4.3-4.2,6.9   c-1.7,4.5-0.6,10.9,0.2,15.6v0.3c-0.8,0.6-1.6,1.3-2.3,1.9c-0.8,0.7-1.6,1.3-2.4,1.9c-1.8-5.4-2.5-12.7-0.2-18.3   c0.3-0.7,0-1.5-0.7-1.8s-1.5,0-1.8,0.7c-2.4,5.9-2.2,14.2,0.5,21.4c-3,3.2-5,6.7-6.7,10.2c-0.7,1.3-1.2,2.8-1.7,4.2   c-0.6,1.6-1.1,3.2-1.9,4.4c-1.5,0.7-2.8,1.5-3.9,2.5c-0.6,0.5-1.1,1-1.7,1.5c-0.5,0.5-1,0.9-1.5,1.3c4.2-2.4,8.3-5,12.3-7.6   c-0.5,0.2-1,0.4-1.5,0.6c0.2-0.6,0.5-1.2,0.7-1.9c0.5-1.3,0.9-2.7,1.5-3.8c1.8-3.6,3.8-7.3,7.1-10.4c0.9-0.9,2.1-1.9,3.4-2.9   c3.1-2.5,6.7-5.3,8.4-8.8c0-0.3,0-0.6,0-0.9c0-2.3-0.1-4.6-0.3-6.9C236.5,683.2,236.2,683.2,236,683.3z"
                fill="#f9d335"
            />
            <Path
                d="M234.8,705.8c0-0.7,0-1.4-0.1-2.2c-0.1-0.7-0.8-1.2-1.5-1.1c-0.7,0.1-1.2,0.8-1.1,1.5   c0.2,1.6,0.1,2.9-0.3,4.1C232.7,707.4,233.7,706.6,234.8,705.8z"
                fill="#f9d335"
            />
            <Path
                d="M173.8,705.7c-1.8-3.8-3.7-7.8-4.9-11.3c-0.2-0.7-1-1.1-1.7-0.8l0,0c-0.7,0.2-1,1-0.8,1.7   c1.3,3.7,3.2,7.7,5,11.6c0.7,1.4,1.4,2.8,2,4.2l0,0l0,0c2.1,4.6,5.8,11.8,9.3,17.3c-0.4,3.1-0.5,6.3-0.5,9.5   c0.9-0.4,1.8-0.8,2.7-1.3c0.2-10,1.4-19.9,9-27.4c0.8-0.8,1.7-1.6,2.7-2.4c2.1-1.8,4.2-3.7,5.8-6.3c0.8-1.3,1.3-2.7,1.9-4.2   c0.6-1.7,1.3-3.3,2.2-4.6c0.9-1.2,2-2.1,3.1-3.2c0.8-0.7,1.7-1.5,2.5-2.4c1.1-1.2,2.1-2.3,3.1-3.5c1.9-2.2,3.8-4.3,5.9-6.3l0,0   c0.7-0.7,1.5-1.3,2.3-2c3-2.3,4.3-5.4,5.5-8.4c0.8-2.1,1.6-4,2.9-5.6c-0.3-0.7-0.5-1.5-0.8-2.2c-0.4-0.1-0.9,0.1-1.2,0.4   c-1.6,1.9-2.5,4.1-3.4,6.3c-1.1,2.8-2.2,5.4-4.7,7.3c-0.2,0.1-0.4,0.3-0.6,0.5c0-2.5,0.6-5.4,1.2-8.1c0.2-0.9,0.4-1.7,0.5-2.5   c0.2-1.2,0.5-2.4,0.8-3.7c1-4.1,2-8.4,1.4-12.5l0,0c-0.2-0.3-0.3-0.6-0.5-0.8c-0.3-0.2-0.6-0.3-1-0.3c-0.7,0.1-1.2,0.8-1.1,1.5   c0.5,3.6-0.4,7.6-1.3,11.5c-0.3,1.3-0.6,2.6-0.8,3.8c-0.1,0.3-0.1,0.7-0.2,1c-2.6-3.8-3.5-8.7-2.3-13.1c0.2-0.7-0.2-1.4-0.9-1.6   c-0.7-0.2-1.4,0.2-1.6,0.9c-1.5,5.5-0.3,11.7,3.2,16.1c0.2,0.3,0.6,0.5,1,0.5c-0.7,3.1-1.2,6.5-0.7,9.4c-2,1.9-3.8,3.9-5.6,6   c-0.8,0.9-1.6,1.8-2.4,2.7c0.3-1.9,0.8-3.7,1.2-5.4c1.1-4,2.3-8.1,0.4-13.4c-0.2-0.7-1-1.1-1.7-0.8c-0.8,0.3-1.1,1-0.8,1.7   c1.6,4.5,0.6,7.9-0.5,11.8c-0.8,2.7-1.6,5.5-1.6,8.9v0.1l-0.1,0.1c-1.2,1.1-2.4,2.2-3.4,3.5c-1.2,1.6-1.9,3.5-2.6,5.3   c-0.5,1.3-1,2.6-1.7,3.7c-1.3,2.2-3.1,3.8-5,5.5c0.1-2.6-0.2-5.2-0.4-7.9c-0.2-2.2-0.4-4.3-0.4-6.3c0-0.7,0-1.3,0.1-2   c4.3-4.1,8.4-8.7,11.9-13.5c0.4-0.6,0.3-1.4-0.3-1.8c-0.6-0.4-1.4-0.3-1.8,0.3c-2.8,3.8-5.9,7.5-9.3,10.9c0.5-2.8,1.2-5.5,2-8.2   c0.2-0.9,0.5-1.7,0.7-2.6c1.6-6.1,4.7-10.9,8-16.1c0.9-1.5,1.9-2.9,2.8-4.5c1-1.7,2.4-3.5,3.9-5.4c2.8-3.6,5.6-7.3,6.6-11   c-0.4-0.6-0.9-1.1-1.3-1.7c-0.6,0-1.1,0.4-1.2,1c-0.8,3.2-3.5,6.7-6.2,10.1c-0.8,1-1.5,1.9-2.2,2.8c-1.1-6.4,0.2-14.4,4.3-18.2   c0.4-0.3,0.5-0.9,0.4-1.3c-0.3-0.3-0.6-0.6-0.9-0.9c-0.4-0.1-0.9,0-1.3,0.3c-5.5,5.1-6.6,15.9-4.5,23.3c-0.9,1.4-1.7,2.8-2.6,4.1   c-2.5,3.9-4.8,7.6-6.6,11.8c-0.3-1.9-0.5-3.7-0.3-5.2c0.1-0.9,0.3-1.8,0.5-2.6c0.5-2.6,1.1-5.3-0.5-8.2c-0.3-0.7-1.2-0.9-1.8-0.6   c-0.7,0.3-0.9,1.1-0.6,1.8c1.1,2.1,0.7,4.1,0.2,6.5c-0.2,0.9-0.4,1.9-0.5,2.9c-0.3,2.6,0.4,6.2,0.9,9.1c0.1,0.6,0.2,1.2,0.3,1.7   c-0.2,0.7-0.4,1.5-0.6,2.3c-1.3,4.6-2.7,9.8-2.7,15.1c0,1.6,0.1,3.3,0.3,5c-3.2-4.9-6.1-14.9-4.5-17.8c0.4-0.6,0.1-1.5-0.5-1.8   c-0.6-0.4-1.5-0.1-1.8,0.5c-2.6,4.8,2,19.6,7.2,23.5c0.2,2.6,0.3,5.1,0,7.4c-0.1,0.1-0.2,0.1-0.2,0.2c-1.5,1.5-2.8,3.2-3.9,4.9   c-2.1-2.5-3.5-5.8-4.1-9.8c-0.6-3.9-0.5-7.9-0.4-11.8c0-0.7-0.6-1.4-1.3-1.4s-1.4,0.6-1.4,1.3c-0.1,4-0.3,8.2,0.4,12.4   c0.8,4.7,2.5,8.7,5.2,11.6c0.1,0.1,0.1,0.1,0.2,0.2c-1.6,3.1-2.6,6.3-3.3,9.7c-2.7-4.5-5.4-9.9-7.3-13.9c1.9-5.6,1.3-11.3-0.1-16.9   c2.2-3.7,4.2-8.7,5-12.8c0.1-0.7-0.3-1.4-1.1-1.6c-0.7-0.1-1.4,0.3-1.6,1.1c-0.6,3.1-1.9,6.6-3.4,9.7c-0.5-1.6-1-3.2-1.6-4.7   c-0.2-0.7-1-1.1-1.7-0.8c-0.7,0.2-1.1,1-0.8,1.7c2.4,6.8,4.6,13.9,3.5,20.6C174,706.3,173.9,706,173.8,705.7z"
                fill="#f9d335"
            />
            <Path
                d="M199.9,724.5c1.3-3.3,2.6-6.5,4.9-9c1.8-2,3.1-4.1,4.5-6.3l0.5-0.8c0.4-0.6,0.8-1.2,1.3-1.9   c2.4-3.3,5.6-7.8,3.9-11.5c-0.3-0.7-1.1-1-1.8-0.6c-0.7,0.3-0.9,1.1-0.6,1.8c1.1,2.3-1.7,6.2-3.6,8.8c-0.5,0.7-1,1.4-1.4,2   l-0.5,0.8c-1.4,2.2-2.5,4-4.2,5.9c-2.6,2.9-4.1,6.4-5.4,9.9c-0.2,0.5-0.4,1.3-0.7,2.1c-0.5,1.7-1.3,4.5-2.2,5.1   c-0.3,0.3-0.5,0.6-0.5,1c-0.3,0.2-0.6,0.5-0.9,0.7c2.8-1.5,5.6-3,8.3-4.5c-0.4,0.1-0.7,0.3-1.1,0.4c-0.7,0.2-1.3,0.5-2,0.8   c0.3-0.9,0.6-1.8,0.9-2.8C199.5,725.7,199.7,725,199.9,724.5z"
                fill="#f9d335"
            />
            <Path
                d="M193.3,627.4c0.3-1.7,0.5-3.4,0.9-5.1c0.3-1.6,0.8-3.2,1.4-4.8c-1.8,0.2-3.7,0.3-5.6,0.4   c0.5,1.9,0.8,3.8,0.5,5.1c-0.1,0.5,0.1,1,0.5,1.3c-0.2,0.9-0.3,1.8-0.4,2.7c-0.9,5.4-1.6,10.1-5.6,14.3c-1.7,1.8-4.3,2.7-7,3.8   c-1.3,0.5-2.5,1-3.7,1.5c1-2,2.3-3.8,3.6-5.6c2.3-3,4.6-6.2,5.3-10.6c0.5-3.1,0.2-6.9-0.8-11.5c-0.1-0.2-0.1-0.5-0.1-0.7   c-0.9,0-1.8,0-2.7,0c0.1,0.5,0.2,0.9,0.3,1.3c1,4.3,1.2,7.8,0.8,10.5c-0.6,3.7-2.7,6.5-4.8,9.4c-1.9,2.6-3.9,5.3-5,8.8   c-0.1,0.2-0.1,0.4,0,0.6c-0.7,0.6-1.3,1.3-1.8,2.1c-1.1,1.7-1.4,3.7-1.8,5.6c-0.2,1.2-0.4,2.4-0.8,3.4c0-1.3-0.2-2.7-0.7-4.3   l-0.3-1.3c-1.1-4-1.9-6.9-0.7-10.9c0.8-2.7,2.5-4.9,4.1-7.1c3.1-4.2,6.3-8.5,3.5-15.8c-0.4-1-0.8-1.9-1.3-2.9   c-1.1-0.1-2.2-0.2-3.3-0.3c0.8,1.4,1.6,2.7,2.1,4.2c2.3,5.9-0.2,9.3-3.1,13.2c-1.3,1.7-2.5,3.4-3.5,5.4c-0.1-0.7-0.2-1.4-0.2-1.9   c-0.4-2.4-0.6-4.5-0.5-6.8c0.1-1,0.2-2,0.3-3.1c0.4-3.8,0.8-8-0.6-11.6c0-0.1-0.1-0.1-0.1-0.2c-0.7-0.1-1.4-0.2-2-0.3   c-0.4,0.4-0.5,0.9-0.3,1.5c1.2,3,0.8,6.8,0.5,10.4c-0.1,1.1-0.2,2.2-0.3,3.2c-0.1,2.5,0,4.8,0.5,7.4c0.2,0.8,0.3,2.3,0.4,3.8   c0.2,2.4,0.4,4.8,0.8,6.2c0.2,2.1,0.7,4.1,1.3,6.3l0.3,1.3c1,3.8,0.7,6.1-0.8,8.9c-1.2-2.7-2.9-5.3-4.5-7.9   c-2.5-3.8-5-7.7-5.7-11.8c-0.3-2-0.4-4.2-0.5-6.4c0-2.1-0.1-4.2-0.4-6.3c-0.2-1-0.4-2-0.6-3c0-0.1,0.1-0.2,0.1-0.4   c0.3-2.3,1.1-4.4,2-6.6c1-2.4,2-4.9,2.2-7.7c-0.9-0.2-1.8-0.4-2.6-0.6c-0.1,2.5-1,4.8-2,7.3c-0.4,0.9-0.7,1.9-1.1,2.8   c-0.5-1.7-1.1-3.3-1.7-4.9c-0.9-2.4-1.8-4.8-2.7-7.2c-1.1-0.3-2.2-0.7-3.3-1.1c1.2,3.1,2.4,6.1,3.5,9.2c1.5,4.2,2.9,8.2,3.6,12.6   c0.3,1.9,0.3,3.9,0.4,6c0.1,2.1,0.1,4.2,0.4,6.3c-0.6-0.7-1.3-1.3-2-2c-1-0.9-2.1-1.6-3.2-2.3c-2.2-1.4-4.1-2.6-4.8-5   c-1.1-3.6-2-7.7-2.5-11c-0.4-2.4-0.1-4.8,0.2-7.3c0.3-2.6,0.6-5.2,0.2-7.8c0-0.1,0-0.1,0-0.2c-0.7-0.3-1.3-0.5-2-0.8   c-0.4,0.3-0.7,0.8-0.6,1.3c0.3,2.3,0.1,4.6-0.2,7.1c-0.3,2.6-0.6,5.3-0.2,8c0,0.1,0.1,0.3,0.1,0.5c-2.6-2.2-4.8-4.9-5-7.6   c-0.2-3.7-0.2-7.5-0.1-11.2v-0.7c-1.1-0.5-2.1-1-3.1-1.5c-0.3,0.1-0.7,0.2-1,0.3c0.5,0.3,1,0.6,1.5,0.9v1c0,3.7,0,7.6,0.1,11.3   c0.2,4.7,4.3,8.5,8.4,11.5c0.5,2.3,1.1,4.7,1.8,6.9c0.1,0.3,0.2,0.5,0.3,0.8c-3.5-1.4-7.7-4.1-8.7-6.5c-0.3-0.7-1-1-1.7-0.7   s-1,1.1-0.7,1.7c1.7,4.2,9.4,8.4,13.7,8.9c1,0.9,2.1,1.6,3.1,2.2c1,0.7,2,1.3,2.9,2c1,0.9,1.8,1.7,2.7,2.7c0.8,0.9,1.6,1.8,2.6,2.7   c0.1,0.1,0.1,0.1,0.2,0.1c1.2,2.7,2.9,5.2,4.5,7.7c2.1,3.2,4,6.2,5,9.3c-0.2,0.3-0.2,0.7-0.1,1c0.1,0.3,0.3,0.6,0.6,0.7   c0.2,0.8,0.3,1.6,0.2,2.5c0,2.1-1.1,4.6-2.1,6.9c-0.5,1.2-1,2.3-1.4,3.4c-0.1,0.4-0.3,0.9-0.4,1.3l-0.1,0.1c-0.4,0.4-0.5,1-0.3,1.5   c-0.2,1-0.4,1.9-0.5,2.9c-1.4-1.7-3.3-3.2-5.2-4.6c-1.7-1.3-3.4-2.6-4.5-4c-0.2-0.2-0.4-0.5-0.5-0.7c5.1-9,4.2-20.9-2.2-29.1   c-0.5-0.6-1.3-0.7-1.9-0.2c-0.6,0.5-0.7,1.3-0.2,1.9c5.3,6.8,6.4,16.6,2.8,24.4c-0.3-0.8-0.6-1.7-0.9-2.5c-0.2-0.7-0.5-1.5-0.7-2.2   c-0.3-0.9-0.7-1.8-1-2.7c-0.6-1.7-1.3-3.5-1.9-5.3c-0.5-1.7-0.7-3.4-0.8-5.2c-0.1-1.3-0.2-2.7-0.4-4.1c-0.1-0.7-0.8-1.2-1.6-1.1   c-0.7,0.1-1.2,0.8-1.1,1.6c0.2,1.2,0.3,2.5,0.4,3.8c0.1,1.9,0.3,3.8,0.9,5.8c0.2,0.5,0.3,1,0.5,1.4c-2.8-1.9-5.3-5-6.5-8.4   c-0.7-2-1.1-3.9-1.4-5.9c-0.4-2-0.7-4-1.4-6c-0.2-0.7-1-1.1-1.7-0.8l0,0c-0.7,0.2-1.1,1-0.8,1.7c0.6,1.8,1,3.7,1.3,5.6   c0.4,2,0.8,4.2,1.5,6.3c1.4,4,5,8.9,9.8,11c0.2,0.1,0.3,0.1,0.5,0.1c0.1,0.1,0.1,0.3,0.2,0.4c0.3,0.9,0.7,1.8,1,2.7   c0.2,0.7,0.5,1.4,0.7,2.1c0.8,2.5,1.6,5.1,3.4,7.2c1.3,1.6,3.2,3,5,4.4c2.5,1.9,5.1,3.9,6.2,6.3c0.1,0.2,0.3,0.4,0.4,0.5   c0,1.2,0.2,2.5,0.4,3.7c0.9,6,3.4,12,5.7,17.9c1,2.5,1.9,4.8,2.8,7.1c0.5,1.3,0.9,2.6,1.4,3.8c0.9,2.4,1.7,4.7,2.5,7   c0,0.3,0,0.6,0,0.9c0,0.5,0.3,1,0.7,1.3c0.8,2.7,1.4,5.4,1.7,8.1c0.9-0.4,1.7-0.7,2.6-1.1c-0.4-3.3-1.2-6.4-2.2-9.5   c0.6-11.8-0.6-21.1-3.4-27.5c-0.3-0.7-1.1-1-1.8-0.7s-1,1.1-0.7,1.8c2.1,4.7,3.2,11.1,3.3,19.1c0-0.1-0.1-0.2-0.1-0.4   c-0.5-1.2-0.9-2.5-1.4-3.8c-0.8-2.4-1.8-4.8-2.8-7.2c-2.3-5.7-4.7-11.6-5.6-17.3c-0.6-3.9-0.4-7.3,0.5-10.8   c1.5-1.4,3.6-3.2,5.6-4.1c1.7-0.8,3.4-1.2,5.3-1.6c1.3-0.3,2.6-0.5,4-1l0,0l0,0c0.1,0,0.2-0.1,0.4-0.1c6.9-2.5,15.1-9.8,12.1-18.3   c-0.2-0.7-1-1.1-1.7-0.8l0,0c-0.7,0.2-1.1,1-0.8,1.7c2.2,6.2-3.5,11.7-8.9,14.2c0.2-1.1,0.5-2.1,1.2-3.6c0.3-0.7,0.6-1.6,1-2.6   c0.5-1.5,1.2-3.3,1.8-4c0.5-0.5,0.5-1.4,0-1.9s-1.4-0.5-1.9,0c-1.1,1.1-1.7,3.1-2.4,5c-0.3,0.9-0.6,1.7-0.9,2.3   c-1,2.3-1.4,3.8-1.5,5.7c-0.9,0.3-1.8,0.5-2.8,0.7c-1.9,0.4-3.9,0.8-5.9,1.8c-0.9,0.4-1.8,1-2.6,1.6c0,0,0-0.1,0.1-0.1   c1.1-2.5,2.3-5.2,2.4-7.9c0-1.1-0.1-2.1-0.3-3.1c0.6-1.3,1.5-2.5,2.4-3.7c0.9-1.1,1.8-2.3,2.4-3.6c0.6-1.3,1-2.7,1.2-4.1   c5.4,0,10.8-1.7,15.3-4.9c0.6-0.4,0.8-1.3,0.3-1.9c-0.4-0.6-1.3-0.8-1.9-0.3c-3.8,2.7-8.5,4.2-13.2,4.3c0.2-1,0.5-2,1-2.8   c0.4-0.7,1-1.3,1.7-1.8c0.2,0,0.3,0,0.5-0.1c2.1-0.8,4.5-1.3,7-1.9c2.7-0.6,5.4-1.2,7.9-2.1c2.4-0.9,4.7-2,6.7-3.7   c1.7-1.5,3.2-3.2,4.6-5c0.3-0.2,0.5-0.4,0.6-0.8c0.8-1.1,1.6-2.3,2.4-3.4c0.8-1.2,1.6-2.3,2.4-3.3c0.4-0.5,0.9-1.1,1.4-1.8   c0.7-0.9,1.5-1.9,2.2-2.9c-0.7-0.6-1.3-1.2-2-1.8c-0.8,1.1-1.6,2.1-2.3,3c-0.5,0.7-1,1.3-1.4,1.9c-0.6,0.8-1.2,1.6-1.7,2.4   c0.2-1.1,0.4-2.3,0.5-3.5c0.2-1.1,0.3-2.2,0.5-3.2c0.2-1.3,0.3-2.6,0.4-3.9c-0.8-0.6-1.7-1.3-2.5-1.9c0,0.3,0,0.6-0.1,1   c-0.1,1.6-0.2,3.1-0.4,4.5c-0.2,1.1-0.3,2.1-0.5,3.2c-0.2,1.3-0.4,2.6-0.6,3.8c-0.1,0.5-0.2,1.1-0.3,1.7c-0.2,1.1-0.5,2.3-0.5,3.4   c-1.3,1.8-2.7,3.4-4.3,4.7c-2.2,1.9-5.1,3-8.1,3.9c0.6-0.4,1.2-0.9,1.7-1.5C191.6,638.4,192.4,633.1,193.3,627.4z"
                fill="#f9d335"
            />
            <Path
                d="M123.9,755.3c-0.7-0.2-1.4,0.2-1.7,0.9c-0.1,0.4,0,0.9,0.2,1.2c1.8-0.4,3.5-0.7,5.3-1.1   C126.6,756,125.3,755.7,123.9,755.3z"
                fill="#f9d335"
            />
            <Path
                d="M119.5,635.2c-1.3-3.7-2.6-7.1-2.7-11c-0.1-1.4-0.2-2.7-0.3-3.9c0.4-0.8,0.8-1.5,1.2-2.3   c0.4-0.8,0.7-1.5,1.1-2.2l0.3-0.5c1.3-2.2,3-5.3,1.4-8.4c0-0.1-0.1-0.1-0.1-0.1c-0.8,0.3-1.6,0.6-2.4,0.9c0,0.2,0.1,0.3,0.1,0.5   c1,1.9-0.2,3.9-1.3,5.9l-0.3,0.5c-0.3,0.5-0.5,1-0.8,1.5c-0.4-1.4-0.9-2.9-1.5-4.5c-0.3-0.7-0.6-1.3-0.9-1.9   c-0.8,0.4-1.6,0.7-2.4,1.1c0.3,0.6,0.6,1.2,0.9,1.8c1.1,2.7,1.7,4.9,2,7.3c0,0,0,0.1-0.1,0.1c-0.4,0.6-0.2,1.3,0.3,1.7   c0.1,0.8,0.1,1.7,0.2,2.7c0,0.6,0.1,1.2,0.2,1.8c-0.6-0.4-1.2-0.8-1.8-1.3c-1.1-0.7-2.1-1.4-2.7-2.1c-2.1-2.1-4.5-3.8-6.8-5.4   c-0.6-0.4-1.2-0.9-1.8-1.3c-0.8,0.5-1.6,1.1-2.4,1.6c0.9,0.6,1.8,1.3,2.7,1.9c1.4,1,2.8,2,4.1,3c-3.6-0.4-7.1-0.8-9.9-2.6   c-0.7,0.6-1.5,1.1-2.2,1.7c3.5,2.7,7.9,3.2,12.2,3.6c1.1,0.1,2.2,0.2,3.2,0.4h0.1c0.6,0.5,1.3,0.9,2,1.4c1.5,1,3.2,2.1,3.7,3.2   c0.1,0.2,0.3,0.4,0.5,0.5c0.5,1.8,1.1,3.5,1.8,5.3c1.6,4.3,1.5,7.5,1.5,11.9c0,0.7,0,1.4,0,2.1c0,2.8,0.1,5.5,0.4,8   c-2.6-2.1-5.3-4.2-7.9-6c-0.4-2.7-1.1-5.1-2.6-8.1c-0.9-1.8-1.9-3.4-3.5-5c-0.4-0.4-0.7-0.7-1.1-1.1c-0.9-1-1.9-1.9-2.9-2.8   c-0.6-0.5-1.2-0.9-1.8-1.3c-0.8-0.5-1.5-1-2-1.6s-1.3-0.6-1.9-0.1s-0.6,1.3-0.1,1.9c0.7,0.9,1.7,1.5,2.6,2.1   c0.5,0.4,1.1,0.7,1.5,1.1c0.9,0.8,1.8,1.8,2.7,2.7c0.4,0.4,0.7,0.8,1.1,1.1c1.2,1.2,2,2.5,3,4.4c0.9,1.7,1.4,3.2,1.8,4.6   c-2.2-1.4-4.3-2.7-6.2-3.8c-0.8-0.5-1.8-0.9-2.7-1.4c-2.5-1.2-5.1-2.5-6.7-4.3c-1.9-2.1-3.1-5.9-4.1-9.2l-0.4-1.4   c-0.2-0.8-0.5-1.6-0.7-2.3c-0.7,0.7-1.4,1.4-2.1,2.2c0.1,0.3,0.2,0.6,0.3,1l0.4,1.4c0.1,0.2,0.1,0.4,0.2,0.6   c-0.8-0.4-1.7-0.8-2.5-1.3c-0.6,0.7-1.2,1.4-1.8,2.1l0,0c1.7,0.9,3.7,2,5.3,2.3c0.9,2.4,1.9,4.8,3.5,6.4c2,2.2,4.8,3.6,7.5,4.9   c0.9,0.4,1.8,0.9,2.6,1.3c5.5,3,12.6,8.1,19.1,13.6c0.2,1,0.3,2,0.6,2.9c-0.5-0.3-1-0.7-1.5-1.1c-1-0.8-2-1.5-3.1-2.1   c-1.8-0.9-3.7-1.4-5.6-2c-1.2-0.3-2.3-0.6-3.4-1s-2.3-0.7-3.4-1c-1.6-0.4-3-0.7-4.4-1.4c-3.6-1.8-7.5-4.4-8.1-5.9   c-0.3-0.7-1.1-1-1.7-0.7c-0.7,0.3-1,1.1-0.7,1.7c1.2,3,7.5,6.3,9.4,7.2c1.6,0.8,3.3,1.2,4.9,1.6c1.1,0.3,2.1,0.5,3.1,0.9   c1.2,0.4,2.4,0.8,3.5,1.1c1.8,0.5,3.6,1,5.1,1.8c0.9,0.4,1.7,1.1,2.6,1.8c1.2,1,2.5,2,4,2.5c0.8,2.9,1.9,5.7,3.2,8.6   c3.1,6.7,7.2,13.8,10.9,19c2.2,3,4.7,5.7,7.2,8.3s4.8,5.1,6.8,7.9c4.3,6.1,8.3,13.5,12.1,20.9c-1.1-1.1-2.2-2.2-3.3-3.4   c-0.9-0.9-1.8-1.9-2.7-2.7l-0.5-0.5c-1.7-1.7-3.4-3.4-4.5-5.2c-0.5-0.9-0.9-2.1-1.2-3.3c-0.4-1.3-0.7-2.6-1.4-3.8   c-2-3.6-5.9-5.9-9.8-8.1c-1.6-0.9-3.1-1.8-4.4-2.7c-0.6-0.4-1.2-0.9-1.9-1.3c-3.4-2.3-6.9-4.7-7.6-8.5c-0.1-0.4,0-0.9,0-1.5   s0.1-1.2,0-1.8c-0.1-0.8-0.4-1.5-0.7-2.2c-0.2-0.5-0.4-1-0.5-1.4c-0.6-2.7-1.5-6-2.7-9.4c-0.2-0.7-1-1.1-1.7-0.8s-1.1,1-0.8,1.7   c0.8,2.3,1.5,4.6,2.1,6.6c-1.3,0-2.8-0.6-4.1-1.6c-1.4-1.1-2.5-2.4-3.7-3.9l-0.4-0.5c-4.8-5.9-10.2-11.3-16.2-16.1   c-0.6-0.5-1.4-0.4-1.9,0.2c-0.5,0.6-0.4,1.4,0.2,1.9c5.8,4.7,11.1,9.9,15.8,15.7l0.4,0.5c1.2,1.5,2.5,3.1,4.2,4.4   c1.8,1.4,3.8,2.1,5.7,2.1c0.2,0,0.4,0,0.6-0.1c0.1,0.6,0.3,1.1,0.6,1.6c0.2,0.6,0.5,1.1,0.5,1.6c0,0.4,0,0.8,0,1.3   c-0.1,0.7-0.1,1.4,0,2.2c0.1,0.6,0.3,1.2,0.5,1.8c-1.3-0.4-2.7-0.8-4-1.2c-1.7-0.5-3.3-0.9-4.9-1.5c-2.4-0.9-4.7-1.6-7.1-1.9   c-1.9-1.5-3.8-3.6-5.5-5.8c1.6-4.4,0.1-9.7-3.5-12.6c-0.6-0.5-1.4-0.4-1.9,0.2c-0.5,0.6-0.4,1.4,0.2,1.9c2.2,1.9,3.4,4.9,3,7.8   c-1.3-1.7-2.8-3.6-4.8-4.8c0-0.1,0-0.2,0-0.3c-1-2.9-2.3-5.7-3.5-8.4c-1.6-3.5-3.1-6.9-4.2-10.6c-0.3-1.1-0.6-2.3-0.9-3.5   c-0.5-2.3-1.1-4.6-2.1-6.9l-0.3-0.7c-1.3-2.8-2.9-6.2-4.9-9.1c-0.6,0.8-1.1,1.5-1.6,2.3c1.6,2.5,3,5.5,4.1,7.9l0.3,0.7   c0.9,2,1.4,4.1,1.9,6.3c0.1,0.2,0.1,0.5,0.2,0.7c-0.9-0.8-2-1.7-3.3-2.6c-0.8-0.6-1.5-1.1-2.2-1.5c-1.7-1.1-3.1-2-4.2-3.7l-0.6-0.9   c-0.1-0.1-0.2-0.3-0.2-0.4c-0.7,1.2-1.3,2.4-1.9,3.6c0.3,0,0.7-0.1,1,0c0.1,0,0.1,0,0.2,0c1.3,1.6,2.9,2.7,4.4,3.7   c0.7,0.4,1.4,0.9,2.1,1.4c4.6,3.5,6.1,5.2,6.5,6c1,2.9,2.3,5.6,3.5,8.3c1,2.1,1.9,4.3,2.8,6.5c-0.9-0.1-1.7-0.1-2.5-0.1   c-0.9,0-1.8,0-2.6-0.2c-1.6-0.4-2.7-1.4-4-2.4c-0.6-0.5-1.1-0.9-1.8-1.4c-1.5-1-3.2-1.8-4.9-2.3c0-0.1,0-0.2,0-0.3   c-0.7-5-3.1-9.6-6.8-13.1c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0.8-0.6,1.6-0.9,2.4c2.9,2.8,5,6.6,5.7,10.6c-0.6-0.1-1.2-0.3-1.8-0.4   l-0.9-0.2c-2.2-0.5-4.1-0.2-6,0.3c-0.2,1-0.5,2-0.7,3c0.1,0,0.1,0,0.2-0.1c2.1-0.6,3.9-1.1,5.9-0.6l0.9,0.2   c2.9,0.7,6.2,1.5,8.5,3.1c0.6,0.4,1.1,0.8,1.6,1.3c1.4,1.2,2.9,2.4,5,3c1.2,0.3,2.3,0.3,3.4,0.3c1.2,0,2.3-0.1,3.3,0.4   c2.1,0.8,3.7,2.9,5.2,4.9l0.1,0.1c1.6,2.2,3.4,4.5,5.3,6.4c-1.6,0.1-3.3,0.4-5.1,1.1c-0.6,0.2-1.2,0.4-1.8,0.6   c-1.3-1.2-3.1-2.1-4.8-3c-0.9-0.5-1.8-0.9-2.6-1.4c-3.8-2.4-7.2-3.9-10.1-4.5c-2.7-0.5-5.5-0.3-8.1,0c-1.1,0.1-2.2,0.2-3.3,0.3   c-1.7,0.1-3.5-0.1-5.2-0.3c-0.1,0.9-0.1,1.8-0.2,2.7c1.8,0.3,3.6,0.4,5.5,0.3c1.2,0,2.4-0.2,3.5-0.3c2.6-0.2,5-0.5,7.3,0   c2.5,0.5,5.6,1.9,9.1,4.1c0.8,0.5,1.8,1,2.8,1.5c0.9,0.4,1.8,0.9,2.6,1.4c-1,0.2-2,0.2-3.2,0.3c-1.3,0-2.6,0-3.9,0   c-1.4,0-2.9-0.1-4.3,0l-0.4-0.2c-3-1.4-5.9-2.6-9.6-3.1c-1.6-0.2-3.2-0.2-4.8-0.2c-1,0-1.9,0-2.9-0.1c-0.6,0-1.3-0.1-1.9-0.3   c0,0.1,0,0.3,0,0.4c0,0.8,0,1.6,0,2.3c0.6,0.1,1.1,0.2,1.7,0.2c1,0,2,0.1,3,0.1c1.6,0,3,0,4.5,0.2c1.8,0.2,3.4,0.7,5,1.3   c-2.7,0.4-5.2,1-7.5,1.7c-0.7,0.2-1.6,0.6-2.6,1s-2.4,1-3.7,1.4c0.1,0.9,0.2,1.8,0.3,2.7c1.4-0.4,3-1,4.4-1.6   c0.9-0.4,1.8-0.7,2.3-0.9c3.2-1,6.8-1.7,10.7-2.1c1.8-0.2,3.6-0.1,5.6-0.1c1.4,0,2.8,0.1,4.1,0c2.2-0.1,4.1-0.3,6.1-0.9   c0.2,0,0.4,0,0.6-0.1c0.1,0,0.2-0.1,0.3-0.2c0.7-0.2,1.5-0.5,2.3-0.7c2.6-0.9,4.9-1.2,7.3-0.9c0.1,0.1,0.2,0.1,0.2,0.2   c0.4,0.3,0.8,0.3,1.2,0.2c0.1,0,0.1-0.1,0.2-0.1c1.7,0.3,3.5,0.9,5.6,1.7c1.7,0.6,3.4,1.1,5.1,1.5c2.5,0.7,5.1,1.4,7.3,2.5   c1.6,1.7,3.7,3.1,5.6,4.4c0.6,0.4,1.2,0.9,1.8,1.3c1.4,1,3,1.9,4.6,2.9c3.5,2,7.2,4.1,8.8,7.1c0.5,0.9,0.8,2.1,1.1,3.2   c0.2,0.6,0.3,1.2,0.5,1.8c-4.1-0.5-8.8-3.9-10.8-5.5c-1.1-0.9-2.4-1.7-3.5-2.6c-1.9-1.3-3.9-2.7-5.4-4.2c-0.5-0.5-1.4-0.6-1.9,0   c-0.5,0.5-0.6,1.4,0,1.9c1.7,1.8,3.8,3.2,5.8,4.6c1.2,0.8,2.3,1.6,3.4,2.4c3,2.4,8.7,6.3,13.8,6.2c1.2,2,3,3.7,4.6,5.2l0.5,0.5   c0.9,0.8,1.7,1.7,2.6,2.7c2.6,2.7,5.2,5.5,8.3,7.3c0.9,1.8,1.9,3.6,2.8,5.3c0.8-0.3,1.7-0.7,2.5-1c-0.8-1.5-1.6-3-2.5-4.6   c0.1-0.6-0.1-1.2-0.6-1.5c-0.1,0-0.1-0.1-0.2-0.1c-0.6-1.1-1.1-2.1-1.7-3.2c-3.2-6.2-6.5-12.5-10-18.2c0.8-1.5,2.5-5,2-7.6   c-0.4-2.3-1.4-4.3-2.3-6.3L148,689c-0.3-0.7-1.1-1-1.8-0.6c-0.7,0.3-1,1.1-0.6,1.8l6.2,13.1c0.9,1.8,1.8,3.7,2.1,5.6   c0.2,1-0.3,2.8-1,4.5c-0.5-0.8-1.1-1.6-1.6-2.3c-2.1-3-4.6-5.6-7.1-8.2c-0.7-0.7-1.3-1.4-2-2.1c0,0,0,0,0-0.1c0-1,0.1-2.1,0.3-3.2   c0.3-2.1,0.6-4.2-0.1-6.5c-0.5-1.6-1.2-3.2-1.9-4.7l-0.3-0.8c-0.6-1.3-1.4-2.5-2.2-3.7c-1-1.5-1.9-2.8-2.3-4.4   c-0.2-0.7-0.9-1.1-1.6-1c-0.7,0.2-1.1,0.9-1,1.6c0.5,2,1.6,3.6,2.7,5.2c0.8,1.1,1.5,2.2,1.9,3.2l0.3,0.8c0.7,1.5,1.3,2.9,1.8,4.4   c0.5,1.7,0.3,3.4,0,5.3c0,0.3-0.1,0.6-0.1,0.9c-0.9-1-1.7-2-2.5-3.1c-3.7-5.1-7.6-12.1-10.7-18.6c-3.8-8.2-5.3-15.7-5.3-25.8   c0-0.7,0-1.4,0-2.1C121.2,643.5,121.2,640,119.5,635.2z"
                fill="#f9d335"
            />
            <Path
                d="M153.8,739.7c-1.8-1.5-4-2.6-6.1-3.6c-0.2-0.1-0.4-0.2-0.6-0.3c-0.1-0.1-0.1-0.3-0.2-0.4   c-0.1-0.3-0.3-0.7-0.6-1.2c-0.7-1-1.4-2-2.1-2.9c-0.6-0.8-1.2-1.6-1.8-2.4c-2-3-3.9-3.5-6.5-4.2l-0.6-0.2c-1.3-0.4-2.7-0.9-4-1.6   c-0.2-0.5-0.8-0.8-1.4-0.8h-0.1c-2.2-1.2-4.3-2.6-6.4-4.1c0-0.1,0-0.2,0-0.3c-0.4-1-0.7-2.1-1.1-3.2c-0.7-2.2-1.4-4.5-2.4-6.6   c-1.2-2.6-3.3-4.3-5.3-5.9c-0.9-0.7-1.9-1.5-2.7-2.3c-0.5-0.5-1.4-0.5-1.9,0s-0.5,1.4,0,1.9c0.9,0.9,1.9,1.7,2.9,2.5   c1.9,1.5,3.6,2.9,4.6,5c0.9,1.9,1.6,4.1,2.3,6.2c-3.5-2.6-6.6-5.2-9.2-7.8c-3.9-3.8-8.3-7.3-13.7-7.4c-0.7,0-1.3,0.6-1.4,1.3   c0,0.7,0.6,1.3,1.3,1.4c4.5,0.1,8.4,3.2,11.9,6.6c3.4,3.3,7.6,6.7,12.4,10.1c1.1,0.8,2.3,1.6,3.4,2.4c-3-0.4-6-1.4-7.8-3.1   c-0.5-0.5-1.4-0.5-1.9,0.1c-0.5,0.5-0.5,1.4,0.1,1.9c3.1,2.9,8.2,4,12.7,4c0.6,0,1.2,0,1.7-0.1c1.7,0.9,3.5,1.6,5.3,2.1l0.7,0.2   c2.5,0.7,3.6,1,5,3.1c0.6,0.9,1.3,1.7,1.9,2.5c0.3,0.4,0.6,0.8,0.9,1.2c-0.5-0.2-1.1-0.3-1.7-0.5c-2.6-0.7-5.3-1.5-6.7-2.9   c-0.5-0.5-1.4-0.5-1.9,0s-0.5,1.4,0,1.9c1.9,1.9,4.9,2.8,7.8,3.6c1.7,0.5,3.3,0.9,4.5,1.5c0.1,0,0.2,0.1,0.3,0.1   c0.2,0.2,0.4,0.3,0.6,0.3c0.2,0.1,0.4,0.2,0.6,0.3c1.9,0.9,4,1.9,5.5,3.3c0.9,0.8,1.8,1.4,2.7,2.1c-0.4-0.1-0.8-0.2-1.3-0.4   c-1.1-0.3-2.2-0.7-3.4-1.1c-3.3-1.1-6.8-2.2-10.3-2.8c-3.7-0.7-6.7-0.7-10.1,0c-0.2-0.2-0.4-0.4-0.5-0.7c-0.3-0.4-0.7-0.9-1.1-1.3   c-1.4-1.3-3.3-2.6-5-3.6c-2.6-1.6-3.8-2.9-5.9-5.2c-0.8-0.8-1.4-1.7-2.1-2.6c-1-1.3-2-2.7-3.3-3.8c-0.5-0.5-1-0.8-1.5-1.2   c-2.1-2.3-4.5-7.5-5.9-11.4c-0.2-0.7-1-1.1-1.7-0.8c-0.7,0.2-1.1,1-0.8,1.7c0.3,0.9,1.6,4.4,3.3,7.6c-0.4-0.2-0.7-0.4-1.1-0.7   c-4.4-3-8.3-5.8-11.4-9.1c-0.3-0.3-7.8-8.5-12.7-8.1c-0.7,0.1-1.3,0.7-1.2,1.4c0.1,0.7,0.7,1.3,1.4,1.2c2.2-0.2,6.5,3.1,9.4,6   c-0.4,0-0.9,0-1.4,0c-0.9,0-1.8,0-2.6,0.1c-1.2,0.2-2.2,0.7-3.3,1.2c-1,0.4-1.9,0.8-2.8,1c-2.4,0.5-5.6-0.6-8.2-1.4l-0.2-0.1   c-0.6-0.2-1.3-0.4-2.1-0.6c-2.3-0.6-5.5-1.5-7.1-2.8c0.2,1.2,0.5,2.3,0.7,3.5c1.8,0.8,3.8,1.4,5.6,1.9c0.7,0.2,1.4,0.4,2,0.6   l0.2,0.1c2.9,0.9,6.5,2.1,9.6,1.5c1.2-0.2,2.3-0.7,3.3-1.2c0.9-0.4,1.8-0.8,2.7-1c0.6-0.1,1.3-0.1,2-0.1c1.1,0,2.3,0.1,3.4-0.4   c0.1,0,0.1-0.1,0.2-0.1c3.1,3.1,6.8,5.7,10.9,8.5c1.1,0.7,2.1,1.3,3.2,1.8c1.5,0.8,2.9,1.5,4.2,2.7c0.5,0.5,1.1,1.1,1.5,1.6   c-1,0.5-2.1,1-3.2,1.4c-0.9,0.4-1.8,0.7-2.7,1.2c-1.1,0.5-2,1.2-2.8,1.9c-0.6-0.3-1.2-0.6-1.9-0.9c-1.3-0.6-2.6-1.2-3.7-2l-0.8-0.5   c-1.5-1-3.1-2.1-4.8-3.1c0-0.1,0-0.1-0.1-0.2c-0.3-0.6-1-0.8-1.6-0.7c-1.4-0.7-2.8-1.3-4.3-1.7c-2-0.6-4-0.4-5.9-0.3   c-1.3,0.1-2.6,0.2-3.8,0c-3.5-0.4-7.7-2.1-10.1-4.2c-0.4-0.3-0.8-0.4-1.3-0.2c0.4,1.2,0.8,2.3,1.2,3.5c2.8,1.9,6.6,3.3,10,3.6   c1.5,0.2,2.9,0.1,4.3,0c1.8-0.1,3.5-0.2,5.1,0.2c0.6,0.2,1.2,0.4,1.8,0.6c-2.7,1.3-5.6,2.5-8.5,3.4c-1.6,0.5-3.4,1-4.8,0.6   c-1.2-0.3-4-1.8-5.5-2.8c0.6,1.4,1.3,2.8,1.9,4.1c1.1,0.6,2.2,1,2.9,1.2c2.1,0.6,4.3,0,6.3-0.6c0.8-0.2,1.6-0.5,2.3-0.8   c3-1.1,5.8-2.4,8.5-3.7c1.7,1,3.4,2.1,5.1,3.2l0.8,0.5c1.3,0.9,2.7,1.5,4.1,2.2c0.2,0.1,0.4,0.2,0.6,0.3c-0.1,0.1-0.2,0.1-0.4,0.2   c-0.7,0.3-1.3,0.6-2,0.8c-2.3,1-4.8,2-6.6,4.3c-0.7,0.9-1,1.7-1.3,2.4c-0.2,0.5-0.3,0.9-0.6,1.4c-0.8,1.5-2.7,2.1-4.7,2.6   c-1.6,0.5-3.2,0.9-4.5,2c0.6,0.7,1.1,1.4,1.7,2.1c0.8-0.7,2.1-1,3.5-1.4c2.3-0.7,4.9-1.4,6.3-3.9c0.3-0.6,0.6-1.2,0.8-1.7   c0.3-0.7,0.5-1.2,0.9-1.8c1.4-1.8,3.3-2.6,5.5-3.5c0.7-0.3,1.4-0.6,2.1-0.9c1-0.5,1.8-1,2.5-1.7c0.1-0.1,0.2-0.2,0.3-0.3   c0.1-0.1,0.2-0.2,0.3-0.2c0.8-0.7,1.6-1.3,2.4-1.7c0.9-0.4,1.7-0.8,2.6-1.1c1.3-0.5,2.6-1.1,3.9-1.8c0.7,0.9,1.3,1.7,2.1,2.6   c2.2,2.4,3.6,3.8,6.5,5.6c1.6,1,3.3,2.1,4.6,3.3c0.2,0.2,0.4,0.5,0.6,0.7c-0.1,0-0.2,0.1-0.3,0.1c-2.3,0.7-4.8,1.4-7.2,1.9   c-1.1,0.2-2.1,0.6-3.2,0.9c-0.4,0.1-0.8,0.2-1.2,0.4c-0.4-0.1-0.7,0.1-1,0.3c-0.6,0.1-1.1,0.3-1.7,0.3c-1.8,0.2-3.7-0.3-5.8-0.7   c-1.3-0.3-2.7-0.6-4.1-0.7c-3.3-0.3-6,0.6-8.8,1.6l-0.3,0.1c-0.7,0.2-1.1,1-0.8,1.7c0.2,0.7,1,1.1,1.7,0.8l0.3-0.1   c2.7-1,4.9-1.8,7.6-1.5c1.2,0.1,2.4,0.4,3.8,0.7c2.1,0.5,4.3,0.9,6.5,0.8c0.1,0,0.1,0,0.2,0c-1.5,3.6-3.5,6.4-6.4,9.1   c-2.6,2.3-5.2,3.1-8.3,3.9c-0.8,0.2-1.7,0.5-2.6,0.8c0.4,0.3,0.8,0.6,1.2,0.8c2.5-0.3,5-0.6,7.5-0.9c1.3-0.6,2.7-1.5,4-2.7   c3.7-3.3,6-6.9,7.8-11.7c0.4-0.1,0.8-0.2,1.2-0.4c0.8-0.3,1.6-0.5,2.3-0.7c-0.6,2-1.7,4.1-2.8,6c-0.3,0.6-0.6,1.1-0.9,1.6   c-0.2,0.4-0.4,0.7-0.5,1.1c-0.6,1.2-1.2,2.5-2,3.5c-0.6,0.8-1.2,1.5-1.9,2.1c1.4-0.2,2.8-0.4,4.2-0.7c0.8-1.2,1.5-2.5,2.1-3.8   c0.2-0.4,0.4-0.7,0.5-1.1c0.3-0.5,0.5-1,0.8-1.6c1.3-2.5,2.8-5.3,3.3-7.9c1.7-0.4,3.4-0.9,5-1.4c0.7-0.2,1.3-0.4,1.9-0.5   c0.3,0.1,0.6,0.1,0.8,0s0.3-0.2,0.5-0.3c3-0.6,5.6-0.5,8.9,0.1c3.3,0.6,6.7,1.7,9.9,2.7c1.1,0.4,2.3,0.7,3.4,1.1   c1.9,0.6,3.6,1.1,5.4,1.6c1.5-0.5,3-1.1,4.5-1.6C159.6,744,156.7,742.1,153.8,739.7z"
                fill="#f9d335"
            />
        </G>
        <Path
            d="M288.5,603.9c-0.6,0.2-1,0.3-1,0.3L79.9,752.8l-2.4,1.9l-13.1,8.1c1.2,0,2.5,0,3.7,0  c122,0,225.2-80.3,259.7-190.9L288.5,603.9z"
            fill="#80daef"
        />
        <G id="LEVELS_24" {...pathPlatformAdjustments}>
            {children}
        </G>
    </G>
);

export default BackgroundImage;

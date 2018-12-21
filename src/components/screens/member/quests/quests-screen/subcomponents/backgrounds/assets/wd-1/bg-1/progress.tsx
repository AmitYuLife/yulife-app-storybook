/* tslint:disable */
import React from "react";
import { G, Path, Polygon } from "react-native-svg";

const Progress = () => (
    <G>
        <Path
            fill="#D2FDF9"
            d="M376.5,290h-3V147.4l3,0c0.6,31.7,0.4,64,0.2,95.3C376.6,258.2,376.5,274.3,376.5,290z"
        />
        <Path
            fill="#D2FDF9"
            d="M373.5,147.5c-0.9-47-3.6-85.4-8.5-120.8c-1.3-9.8-2.4-18.5-3.4-26.5l3-0.4c1,8.1,2.1,16.7,3.4,26.5 c4.8,35.5,7.5,74,8.5,121.1L373.5,147.5z"
        />
        <Polygon
            fill="#D2FDF9"
            points="
            374,1011.1
            181.2,828.5
            561.2,828.5
            373.5,650.6
            373.5,290
            376.5,290
            376.5,649.4
            568.8,831.5
            188.8,831.5
            376,1008.9"
        />
    </G>
);

export default Progress;

/* tslint:disable */
import React from "react";
import { LinearGradient, Circle, Polygon, G, Ellipse, Stop, Rect, Path } from "react-native-svg";
import { platformAdjustments } from "../../helpers";

const BackgroundImage = () => (
    <G {...platformAdjustments}>
        <LinearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="375" y1="1297.027" x2="375" y2="-31.4229">
            <Stop offset="6.060234e-02" stopColor="#F5661A" />
            <Stop offset="0.1125" stopColor="#FDF23D" />
            <Stop offset="0.1529" stopColor="#FFFFFF" />
            <Stop offset="0.1805" stopColor="#F0FDFF" />
            <Stop offset="0.2301" stopColor="#DAFBFF" />
            <Stop offset="0.2851" stopColor="#CBF9FF" />
            <Stop offset="0.3489" stopColor="#C2F8FF" />
            <Stop offset="0.4423" stopColor="#BFF8FF" />
            <Stop offset="0.5925" stopColor="#BBF7FE" />
            <Stop offset="0.7384" stopColor="#AFF2F9" />
            <Stop offset="0.882" stopColor="#9CEBF2" />
            <Stop offset="1" stopColor="#86E3EA" />
        </LinearGradient>
        <Rect fill="url(#SVGID_1_)" width="750" height="1333" />
        <Polygon fillRule="evenodd" clipRule="evenodd" fill="#D9FCFF" points="282.2,926 182.5,1045.5 382,1045.5" />
        <Polygon fillRule="evenodd" clipRule="evenodd" fill="#D9FCFF" points="473.3,945.9 573,1065.4 373.6,1065.4" />
        <Polygon fillRule="evenodd" clipRule="evenodd" fill="#DFFBFF" points="374,875.4 217,1063.5 531,1063.5" />
        <Polygon fillRule="evenodd" clipRule="evenodd" fill="#F3FEFF" points="374,875.4 354.3,899.1 363.7,893.9 367.5,906.2 375.3,898 389.9,911 389.9,894.4" />

        {/* CLOUDS START */}
        <Path fill="#FFF" d="M745.7,1012c-6.5,0-12.3,3.5-15.5,8.7c-3.3-3.5-8-5.7-13.2-5.7c-1.2,0-2.3,0.1-3.4,0.3c-1.5-13.5-12.9-24-26.7-24c-14.8,0-26.9,12-26.9,26.9c0,3.4,0.6,6.7,1.8,9.7c-1.8-0.6-3.6-1-5.6-1c-6.4,0-11.9,3.5-14.8,8.6c-3.1-3.1-7.4-5.1-12.2-5.1c-2.8,0-5.4,0.7-7.7,1.9c0.3-1.7,0.5-3.5,0.5-5.3c0-15.2-12.3-27.4-27.4-27.4c-11.5,0-21.3,7-25.4,17c-4.4-3-9.7-4.7-15.4-4.7c-5.9,0-11.4,1.9-15.9,5c-4-10.2-13.9-17.4-25.5-17.4c-2.4,0-4.8,0.3-7,0.9c-5-5.6-12.3-9.1-20.4-9.1c-9.3,0-17.5,4.6-22.5,11.7c-11.5,0.1-21.3,7.2-25.3,17.2c-3.8-10.6-13.9-18.1-25.8-18.1c-9.9,0-18.6,5.2-23.4,13.1c-4.6-3.4-10.2-5.4-16.4-5.4c-10.4,0-19.4,5.8-24.1,14.3c-4.9-4.6-11.5-7.5-18.8-7.5c-8.8,0-16.7,4.2-21.7,10.7c-3.1-4.3-8.1-7.1-13.9-7.1c0,0-0.1,0-0.1,0c-3-11.8-13.8-20.6-26.6-20.6c-10.2,0-19.1,5.6-23.8,13.9c-4.3-2.7-9.3-4.3-14.8-4.3c-6.6,0-12.7,2.3-17.4,6.2c-0.7-14.6-12.7-26.2-27.4-26.2c-5.2,0-10,1.4-14.2,3.9c-4.9-4.9-11.6-8-19.1-8c-13.1,0-24,9.4-26.4,21.8c-1.9-0.4-3.9-0.7-5.9-0.7c-7.6,0-14.4,3.1-19.3,8.2c-3.1-5.7-9.1-9.6-16-9.6c-8.7,0-16,6.2-17.8,14.4c-2.4-0.7-4.9-1.1-7.5-1.1c-7.5,0-14.3,3.1-19.2,8c-3.3-4.5-8.6-7.4-14.6-7.4c-4.9,0-9.3,1.9-12.6,5.1c-1.8-0.6-3.6-0.9-5.6-0.9c-1.7,0-3.3,0.3-4.9,0.7v68.2h750v-44.1v-35.3C748.6,1012.2,747.2,1012,745.7,1012z M161.2,1036.4c0.7-0.3,1.3-0.6,1.9-1c0.3,0.3,0.6,0.6,0.9,0.9L161.2,1036.4z" />
        {/* CLOUDS END */}

        {/* FOREST/SOIL START */}
        <G fillOpacity="0.7">
            <Circle fill="#D4FCF4" cx="688" cy="1045.4" r="28.1" />
            <Polygon fill="#CEDDCE" points="688,1054.8 684.4,1094 691.6,1094" />
        </G>
        <G fillOpacity="0.7">
            <Circle fill="#C4F7EE" cx="153" cy="1033.6" r="30" />
            <Polygon fill="#CEDDCE" points="153,1043.6 149.2,1085.4 156.9,1085.4" />
        </G>
        <G fillOpacity="0.7">
            <Circle fill="#D4FCF4" cx="123.7" cy="1049.5" r="23.2" />
            <Polygon fill="#CEDDCE" points="123.7,1057.2 120.8,1089.5 126.7,1089.5" />
        </G>
        <G fillOpacity="0.7">
            <Circle fill="#C4F7EE" cx="718" cy="1054.3" r="25.1" />
            <Polygon fill="#CEDDCE" points="718,1062.7 714.8,1097.7 721.2,1097.7" />
        </G>
        <Circle fill="#CFF9F2" cx="310.7" cy="1054.2" r="19" />
        <Polygon fill="#CDE0CD" points="310.7,1060.5 308.3,1087 313.1,1087" />
        <Path fill="#449997" d="M430,1079.2c-7.3-0.2-14.8-0.5-21.6-2.4c-13.5-3.8-20.9,0.9-27.4-7.7h-9.3c-6.4,8.6-20.3,4.9-30.2,7.7c-6.7,1.9-14.2,2.2-21.6,2.4c-106.6,3.5-213.3,4-320,4.5v20.3h750v-20.3C643.3,1083.2,536.6,1082.8,430,1079.2z" />
        <Path fill="#A7F2E8" d="M432.2,977.1c0-17.7-12.1-32.6-28.5-36.9c-5.3-14.7-19.4-25.1-35.9-25.1c-21.1,0-38.1,17.1-38.1,38.1c0,4.5,0.8,8.8,2.2,12.8c-8.6,7-14.2,17.7-14.2,29.7c0,21.1,17.1,38.1,38.1,38.1c8,0,15.5-2.5,21.6-6.7c4.6,3,10.2,4.8,16.1,4.8c16.2,0,29.4-13.2,29.4-29.4c0-0.2,0-0.4,0-0.6C428.7,995.2,432.2,986.6,432.2,977.1z" />
        <Polygon fill="#B7AD95" points="397.8,1075.6 382.2,1069.7 378.8,994.5 387.8,982.9 378.6,990 376.9,950.5 376,970 371.9,967 375.9,972.4 374.3,1009.1 365.7,1002.5 374.1,1013.4 371.6,1069.7 355.9,1075.6 370.9,1073.1 365.9,1079 376.9,1072.1 387.8,1079 382.9,1073.1" />
        {/* FOREST/SOIL END */}

        <G id="Shape_81_6_">
            <Path fillRule="evenodd" clipRule="evenodd" fill="#FFDE14" d="M466.2,1062.2v10.2c0,6.1,4.9,11,11,11c6.1,0,11-4.9,11-11v-9.7c4.9,2.9,15,3.6,28,3.6c13,0,22.9-0.7,27.9-3.6v9.7c0,6.1,4.9,11,11,11c6.1,0,11-4.9,11-11l0-22.8c0-2.3-0.2-4.6-0.6-6.9c2.2,0.3,4,2.2,4,4.5v13.3c-0.6,0.5-1,1.2-1,2.1c0,1.5,1.2,2.7,2.7,2.7c1.5,0,2.7-1.2,2.7-2.7c0-0.8-0.4-1.5-0.9-2v-13.4c0-4.4-3.6-8-8-8c-0.1,0-0.1,0-0.2,0c-5.1-20.3-25-35.4-48.7-35.4c-8.7,0-17.2,2.1-24.8,6" />
        </G>
        <Path fillRule="evenodd" clipRule="evenodd" fill="#FFDE14" d="M433,1078.1c-5.4,1.1-12.8,0.5-12.8,0.5c-2.5,0-4.6-2.1-4.6-4.6l0,0c0-2.5,2.1-4.6,4.6-4.6h5.4c6,0,10.9-4.9,10.9-10.9v-21.1c0-14.2,11.6-26.2,25.8-26.1c14,0.1,25.4,11.4,25.5,25.5c0.1,14.2-11.9,25.8-26.1,25.8h-7.6c-3.7,0-7.2,1.9-9.2,5.1C441.8,1072.6,438.8,1076.9,433,1078.1z" />
        <Circle fillRule="evenodd" clipRule="evenodd" fill="#FFDE14" cx="476.2" cy="1025.2" r="21.7" />
        <Circle fillOpacity="0.35" fillRule="evenodd" clipRule="evenodd" fill="#CCC7B2" cx="476.2" cy="1025.1" r="21.7" />
        <Ellipse fillRule="evenodd" clipRule="evenodd" fill="#FFDE14" cx="474.3" cy="1025.2" rx="19.8" ry="21.7" />

        <Circle fillRule="evenodd" clipRule="evenodd" fill="#3D3D3D" cx="449" cy="1036.2" r="3.3" />
        <Circle fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" cx="447.9" cy="1035.1" r="1.2" />

        <G fillOpacity="0.35">
            <Path fillRule="evenodd" clipRule="evenodd" fill="#CCC7B2" d="M438.5,1061.7c-0.7-0.2-1.5-0.5-2.3-0.8c-0.1,0.4-0.2,0.8-0.3,1.2c0.9,0.1,1.7,0.3,2.4,0.4C438.8,1062.5,439,1061.9,438.5,1061.7z" />
            <Path fillRule="evenodd" clipRule="evenodd" fill="#CCC7B2" d="M437.2,1065c-0.6-0.4-1.3-0.9-2-1.3c-0.2,0.4-0.4,0.7-0.6,1c0.8,0.3,1.5,0.7,2.2,1C437.3,1065.8,437.6,1065.2,437.2,1065z" />
            <Path fillRule="evenodd" clipRule="evenodd" fill="#CCC7B2" d="M439,1058.3c-0.8,0-1.6-0.1-2.4-0.2v0.5c0,0.3,0,0.5,0,0.8c0.9-0.1,1.7-0.2,2.5-0.3C439.5,1059,439.4,1058.3,439,1058.3z" />
            <Path fillRule="evenodd" clipRule="evenodd" fill="#CCC7B2" d="M435.1,1067.7c-0.5-0.5-1-1.1-1.6-1.8c-0.3,0.3-0.6,0.6-0.9,0.8c0.7,0.5,1.3,1,1.9,1.5C435,1068.6,435.4,1068.1,435.1,1067.7z" />
        </G>
        <Path fillOpacity="0.35" fillRule="evenodd" clipRule="evenodd" fill="#CCC7B2" d="M464.9,1055.7c-2.7,3.5-6.7,5.8-10.9,6.9c0,0,0.1,0,0.1,0h7.6c0.2,0,0.4,0,0.7,0c1.9-1.2,3.5-2.7,4.9-4.5C468.6,1056.4,466.2,1054,464.9,1055.7z" />
        <Path fill="#FCF0B4" d="M451,1053.2c1,1.6,1.8,3.3,2.5,5.1c-3.2,1.2-6.7,1.9-10.4,2.1c-9.6,0.4-18.4-3.3-24.8-9.5c5.7,3.7,12.5,5.7,19.8,5.4C442.7,1056.1,447.1,1055,451,1053.2z" />

        <LinearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="375" y1="1098" x2="375" y2="1314.0834">
            <Stop offset="9.255689e-03" stopColor="#30DCCE" />
            <Stop offset="9.291732e-02" stopColor="#57E1C1" />
            <Stop offset="0.2022" stopColor="#83E6B1" />
            <Stop offset="0.3164" stopColor="#AAEBA4" />
            <Stop offset="0.4342" stopColor="#C9EF9A" />
            <Stop offset="0.5569" stopColor="#E1F291" />
            <Stop offset="0.6862" stopColor="#F2F48C" />
            <Stop offset="0.8269" stopColor="#FCF688" />
            <Stop offset="1" stopColor="#FFF687" />
        </LinearGradient>
        <Rect y="1094" fill="url(#SVGID_2_)" width="750" height="240" />
    </G>
)



export default BackgroundImage;
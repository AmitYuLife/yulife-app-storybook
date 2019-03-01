// tslint:disable:max-line-length
import * as React from "react";
import { Circle, Path } from "react-native-svg";
import { Colours } from "../../../../styles";

interface IProps {
    isVisible: boolean;
}

export default function Notification({ isVisible }: IProps) {
    return !isVisible ? null : (
        <>
            <Circle fill={Colours.navNotification.border} cx="251.6" cy="28" r="19" />
            <Circle fill={Colours.navNotification.body} cx="251.6" cy="28" r="16" />
            <Path
                fill={Colours.navNotification.border}
                d="M248.7,24.4c-0.2,0.2-0.5,0.3-0.8,0.3c-0.7,0-1.3-0.6-1.3-1.3c0-0.5,0.2-0.9,0.6-1.1l3.5-2.2
		c0.3-0.2,0.5-0.3,0.8-0.3c0.7,0,1.4,0.6,1.4,1.4V35c0,0.7-0.6,1.4-1.4,1.4s-1.4-0.6-1.4-1.4V23.5L248.7,24.4z"
            />
        </>
    );
}

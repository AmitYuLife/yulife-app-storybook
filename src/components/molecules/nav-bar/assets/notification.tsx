// tslint:disable:max-line-length
import * as React from "react";
import { Circle, Path } from "react-native-svg";

interface IProps {
    isVisible: boolean;
}

export default function Notification({ isVisible }: IProps) {
    return !isVisible ? null : (
        <>
            <Circle fill="#FFFFFF" cx="286.1" cy="61.8" r="19" />
            <Circle fill="#A64444" cx="285.8" cy="61.8" r="16" />
            <Path
                fill="#FFFFFF"
                d="M283.3,58.2c-0.2,0.2-0.5,0.3-0.8,0.3c-0.7,0-1.3-0.6-1.3-1.3c0-0.5,0.2-0.9,0.6-1.1l3.5-2.2   c0.3-0.2,0.5-0.3,0.8-0.3c0.7,0,1.4,0.6,1.4,1.4v13.8c0,0.7-0.6,1.4-1.4,1.4s-1.4-0.6-1.4-1.4V57.3L283.3,58.2z"
            />
        </>
    );
}

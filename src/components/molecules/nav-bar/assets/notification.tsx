import * as React from "react";
import { Circle } from "react-native-svg";

interface IProps {
    isVisible: boolean;
}

export default function Notification({ isVisible }: IProps) {
    return !isVisible ? null : (
        <>
            <Circle fill="#FFFFFF" cx="278.3" cy="48" r="19" />
            <Circle fill="#A64444" cx="278" cy="48" r="16" />
        </>
    );
}

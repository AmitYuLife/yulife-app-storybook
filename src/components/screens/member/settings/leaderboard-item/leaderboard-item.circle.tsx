/* tslint:disable */
import React, { SFC } from "react";
import Svg, { G, Circle, Line, Polyline } from "react-native-svg";
import { Colours } from "../../../../../styles";

interface IProps {
    status: "active" | "inactive" | "create";
}

const getColour = (status: IProps["status"]) => {
    switch (status) {
        case "active":
            return Colours.heavyPink;
        case "create":
            return Colours.lightGray;
        case "inactive":
        default:
            return Colours.gray;
    }
};

const getIcon = (status: IProps["status"]) => {
    switch (status) {
        case "active":
            return (
                <G>
                    <Polyline
                        fill="none"
                        stroke="white"
                        strokeWidth="5"
                        strokeMiterlimit="10"
                        points="38.4,51.8 51.6,65 71.6,45"
                    />
                </G>
            );
        case "inactive":
            return (
                <G>
                    <Line
                        fill="none"
                        stroke="white"
                        strokeWidth="5"
                        strokeMiterlimit="10"
                        x1="45.1"
                        y1="64.9"
                        x2="64.9"
                        y2="45.1"
                    />
                    <Line
                        fill="none"
                        stroke="white"
                        strokeWidth="5"
                        strokeMiterlimit="10"
                        x1="64.9"
                        y1="64.9"
                        x2="45.1"
                        y2="45.1"
                    />
                </G>
            );
        case "create":
            return (
                <G>
                    <Line
                        fill="none"
                        stroke="white"
                        strokeWidth="5"
                        strokeMiterlimit="10"
                        x1="41"
                        y1="55"
                        x2="69"
                        y2="55"
                    />
                    <Line
                        fill="none"
                        stroke="white"
                        strokeWidth="5"
                        strokeMiterlimit="10"
                        x1="55"
                        y1="69"
                        x2="55"
                        y2="41"
                    />
                </G>
            );
        default:
            return null;
    }
};

const LeaderboardCircle: SFC<IProps> = ({ status }) => (
    <Svg width="55" height="55" viewBox="0 0 110 110">
        <Circle fill={getColour(status)} cx="55" cy="55" r="55" />
        {getIcon(status)}
    </Svg>
);

export default LeaderboardCircle;

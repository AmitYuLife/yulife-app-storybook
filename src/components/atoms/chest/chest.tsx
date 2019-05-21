/* tslint:disable */
import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { Colours } from "../../../styles";

interface Props {
    scale?: number;
    colour?: string;
}

const Chest: React.SFC<Props> = ({ scale = 1, colour }) => (
    <Svg width={String(30 * scale)} height={String(30 * scale)} viewBox="0 0 59 47">
        <G>
            <Path
                fill={"transparent"}
                strokeWidth={3}
                stroke={colour || Colours.textInput.inactive}
                d="M 0 0 L 0 -26 L -56 -26 L -56 0 "
                transform="matrix(1,0,0,-1,57.5,19.5)"
            />
            <Path
                fill={"transparent"}
                strokeWidth={3}
                stroke={colour || Colours.textInput.inactive}
                d="M 38.5 15 L 20.5 15 L 20.5 37 L 38.5 37 Z M 38.5 15 "
                transform="matrix(1,0,0,-1,0,47)"
            />
            <Path
                strokeWidth={0}
                fill={colour || Colours.textInput.inactive}
                d="M 29.5 26.082031 C 29.222656 26.082031 29 25.859375 29 25.582031 L 29 21.5 L 28.253906 21.066406 C 27.46875 20.609375 27 19.804688 27 18.917969 C 27 17.539062 28.121094 16.417969 29.5 16.417969 C 30.878906 16.417969 32 17.539062 32 18.917969 C 32 19.804688 31.53125 20.609375 30.746094 21.066406 L 30 21.5 L 30 25.582031 C 30 25.859375 29.777344 26.082031 29.5 26.082031 "
            />
            <Path
                strokeWidth={0}
                fill={colour || Colours.textInput.inactive}
                d="M 29.5 14.917969 C 27.289062 14.917969 25.5 16.707031 25.5 18.917969 C 25.5 20.394531 26.308594 21.667969 27.5 22.363281 L 27.5 25.582031 C 27.5 26.6875 28.394531 27.582031 29.5 27.582031 C 30.605469 27.582031 31.5 26.6875 31.5 25.582031 L 31.5 22.363281 C 32.691406 21.667969 33.5 20.394531 33.5 18.917969 C 33.5 16.707031 31.710938 14.917969 29.5 14.917969 M 29.5 17.917969 C 30.050781 17.917969 30.5 18.363281 30.5 18.917969 C 30.5 19.433594 30.109375 19.699219 29.992188 19.769531 L 29.5 20.054688 L 29.007812 19.769531 C 28.890625 19.699219 28.5 19.433594 28.5 18.917969 C 28.5 18.363281 28.949219 17.917969 29.5 17.917969 "
            />
            <Path
                fill={"transparent"}
                strokeWidth={3}
                stroke={colour || Colours.textInput.inactive}
                d="M 0 0 L 0 12 C 0 15.3125 -2.6875 18 -6 18 L -50 18 C -53.3125 18 -56 15.3125 -56 12 L -56 0 "
                transform="matrix(1,0,0,-1,57.5,19.5)"
            />
            <Path
                fill={"transparent"}
                strokeWidth={3}
                stroke={colour || Colours.textInput.inactive}
                d="M 0 0 C 0 6.628906 -5.371094 12 -12 12 "
                transform="matrix(1,0,0,-1,13.5,45.5)"
            />
            <Path
                fill={"transparent"}
                strokeWidth={3}
                stroke={colour || Colours.textInput.inactive}
                d="M 0 0 C 0 6.628906 5.371094 12 12 12 "
                transform="matrix(1,0,0,-1,45.5,45.5)"
            />
            <Path
                fill={"transparent"}
                strokeWidth={3}
                stroke={colour || Colours.textInput.inactive}
                d="M 0 0 L 0 -33.070312 "
                transform="matrix(1,0,0,-1,7.5,1.5)"
            />
            <Path
                fill={"transparent"}
                strokeWidth={3}
                stroke={colour || Colours.textInput.inactive}
                d="M 0 0 L 0 -33.070312 "
                transform="matrix(1,0,0,-1,51.5,1.5)"
            />
            <Path
                fill={"transparent"}
                strokeWidth={3}
                stroke={colour || Colours.textInput.inactive}
                d="M 0 0 L 11 0 "
                transform="matrix(1,0,0,-1,8.5,19.5)"
            />
            <Path
                fill={"transparent"}
                strokeWidth={3}
                stroke={colour || Colours.textInput.inactive}
                d="M 0 0 L -11 0 "
                transform="matrix(1,0,0,-1,50.5,19.5)"
            />
        </G>
    </Svg>
);

export default Chest;

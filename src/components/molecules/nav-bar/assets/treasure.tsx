// tslint:disable:max-line-length
import { Style } from "@styles/index";
import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { getIconColour, IIconProps } from "../nav-bar.helpers";

export default function Treasure({ isActive, onPressIn, onPressOut, isHighlighted }: IIconProps) {
    const fill = getIconColour(isActive || isHighlighted);
    const size = String(Style.SCALE_UP_AND_DOWN(54));

    return (
        <Svg viewBox="0 0 54 54" width={size} height={size}>
            <G data-name="rewards" id="rewards" onPressIn={onPressIn} onPressOut={onPressOut}>
                <Path d="M0 0H54V54H0z" fill="#fff" />
                <Path
                    d="M35.85 10.15h-9.6a3.81 3.81 0 00-1.5.5l-2 1.4a1.07 1.07 0 00-.3 1.3l2.7 4.9"
                    fill="none"
                    stroke={fill}
                    strokeMiterlimit={10}
                />
                <Path
                    d="M30.25 28.25h-10.1a.94.94 0 01-1-.88v-8.12a.94.94 0 01.88-1h10.12"
                    fill="none"
                    stroke={fill}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M24.75 21.25a1.58 1.58 0 01-1.5-1.65v-1.35h3v1.3a1.58 1.58 0 01-1.45 1.7z"
                    fill="none"
                    stroke={fill}
                    strokeMiterlimit={10}
                />
                <Path
                    d="M35.25 18.25h-5v10h4a.94.94 0 001-.88v-9.12z"
                    fill="none"
                    stroke={fill}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M35.25 18.25l-3-5.5 2-2c1.4-1 2.8-.4 3.6 1.4a4.15 4.15 0 01-1.1 5z"
                    fill="none"
                    stroke={fill}
                    strokeMiterlimit={10}
                />
                <Path d="M22.75 12.65h9.5" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
                <Path
                    d="M20 8a.56.56 0 00-.7-.2c-.3.1-.3.4-.2.7zm-.1 1.9a.51.51 0 00.9-.5zm-2.4.9a.51.51 0 00-.61.36.52.52 0 00.21.54zm.9 1.5a.5.5 0 00.6-.8.09.09 0 01-.1-.1h-.2zm-2.1 2a.5.5 0 000 1zm1.5 1a.47.47 0 00.5-.44v-.06a.47.47 0 00-.44-.5h-.06zm1.4-6.8l.8 1.4.9-.5-.85-1.4zm-2.1 3.3l1.3.6.4-.9-1.3-.6zm-.8 3.5h1.5v-1h-1.5zM12.8 42.15a.5.5 0 00-1 0v3.6a.54.54 0 00.5.5.47.47 0 00.5-.44v-2.16a1 1 0 01.89-1.1h.21c.3 0 .4-.3.4-.6a.43.43 0 00-.4-.4 1.23 1.23 0 00-1.1.7zM14.7 44a2.08 2.08 0 002.3 2.4 2.78 2.78 0 001.6-.5.52.52 0 00.2-.4.47.47 0 00-.44-.5h-.06a.37.37 0 00-.3.1 1.68 1.68 0 01-1 .3 1.1 1.1 0 01-1.2-.8v-.2h2.5c.6 0 .6-.4.6-.8a1.88 1.88 0 00-1.7-2h-.3a2 2 0 00-2.2 1.78V44zm2.2-1.5a.83.83 0 01.9.74v.26h-2a1.1 1.1 0 011.1-1zM23 46a.5.5 0 00.6.4.51.51 0 00.4-.4l1.4-3.6v-.2a.47.47 0 00-.44-.5h-.06a.56.56 0 00-.5.3l-.8 2.5-.6-2.4a.51.51 0 00-.66-.31l-.3.3-.7 2.4-.8-2.4c-.1-.3-.5-.3-.7-.2a1.31 1.31 0 00-.3.4v.2l1.4 3.6a.51.51 0 00.66.31l.3-.3.6-2.2zm4.7-3.4c.6 0 .9.3.9.8v.2h-1.3a1.46 1.46 0 00-1.6 1.3v.1a1.47 1.47 0 001.44 1.5h.26a1.37 1.37 0 001.3-.6.56.56 0 00.6.5c.2 0 .4-.2.5-.5v-2.6c0-1.1-.8-1.7-2-1.7a2.25 2.25 0 00-1.6.6.37.37 0 00-.1.3.47.47 0 00.44.5h.06a.37.37 0 00.3-.1c.1-.2.4-.3.8-.3zm-.1 3c-.6 0-.8-.2-.8-.6s.2-.6.7-.6h1.2v.3a1.17 1.17 0 01-1.1.9zm4.1-3.3a.54.54 0 00-.5-.5.47.47 0 00-.5.44v3.66a.56.56 0 00.6.5c.2 0 .4-.2.5-.5v-2.1a1 1 0 01.89-1.1h.21a.44.44 0 00.43-.45.4.4 0 000-.15.43.43 0 00-.4-.4 1.44 1.44 0 00-1.23.6zm5 2.2a1.09 1.09 0 01-.9 1.1h-.1c-.7 0-1.1-.5-1.1-1.5s.4-1.5 1.1-1.5a1.39 1.39 0 011 .5zm-1.1-2.8c-1.3 0-2 .8-2 2.4s.8 2.4 2.1 2.4a2 2 0 002.1-1.6v-5.1a.47.47 0 00-.44-.5h-.06a.47.47 0 00-.5.44V42a1.26 1.26 0 00-1.2-.3zm4.8.9a1.4 1.4 0 01.9.3.37.37 0 00.3.1.47.47 0 00.5-.44v-.06a.37.37 0 00-.1-.3 2.25 2.25 0 00-1.6-.6c-.9 0-1.7.4-1.7 1.3 0 1.7 2.5 1.3 2.5 2.1 0 .3-.3.4-.8.4a1.49 1.49 0 01-1.1-.4.37.37 0 00-.3-.1.47.47 0 00-.5.44v.06a.37.37 0 00.1.3 2.42 2.42 0 001.8.7c1 0 1.8-.5 1.8-1.4 0-1.7-2.5-1.3-2.5-2a.76.76 0 01.7-.4z"
                    fill={fill}
                />
            </G>
        </Svg>
    );
}

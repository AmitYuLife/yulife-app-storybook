import * as React from "react";
import { G, Rect } from "react-native-svg";
import { getIconColour, INavBarColourScheme } from "../nav-bar.helpers";

interface IProps {
    activeIndex: number;
    colourScheme: INavBarColourScheme;
}

export default function Lines({ activeIndex, colourScheme }: IProps) {
    const fill = getIconColour(colourScheme, false, false);
    const { first, second } = getValues(activeIndex);

    return (
        <G>
            <Rect y="85.5" height="3" fill={fill} {...first} />
            <Rect y="85.5" height="3" fill={fill} {...second} />
        </G>
    );
}

function getValues(activeIndex: number) {
    switch (activeIndex) {
        case 2:
            return {
                first: {
                    width: "106.6",
                    x: "108.8"
                },
                second: {
                    width: "86.1",
                    x: "288.1"
                }
            };
        case 1:
            return {
                first: {
                    width: "73.5",
                    x: "108.8"
                },
                second: {
                    width: "62.2",
                    x: "322.4"
                }
            };
        case 0:
            return {
                first: {
                    width: "84.9",
                    x: "130.1"
                },
                second: {
                    width: "96.4",
                    x: "288"
                }
            };
        default:
            return {
                first: {
                    width: "106.6",
                    x: "108.8"
                },
                second: {
                    width: "96.4",
                    x: "288"
                }
            };
    }
}

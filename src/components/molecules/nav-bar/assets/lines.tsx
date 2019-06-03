import * as React from "react";
import { G, Rect } from "react-native-svg";
import { getIconColour, INavBarColourScheme } from "../nav-bar.helpers";

interface IProps {
    activeIndex: number;
    colourScheme: INavBarColourScheme;
}

export default function Lines({ activeIndex, colourScheme }: IProps) {
    const fill = getIconColour(colourScheme, false, false);
    const { first, second, third } = getValues(activeIndex);

    return (
        <G>
            <Rect y="79" height="3" width={40} fill={fill} {...first} />
            <Rect y="79" height="3" width={40} fill={fill} {...second} />
            <Rect y="79" height="3" width={40} fill={fill} {...third} />
        </G>
    );
}

function getValues(activeIndex: number) {
    switch (activeIndex) {
        case 3:
            return {
                first: {
                    x: "116"
                },
                second: {
                    x: "269"
                },
                third: {
                    x: "416"
                }
            };
        case 2:
            return {
                first: {
                    x: "116.2"
                },
                second: {
                    x: "259"
                },
                third: {
                    x: "426.2"
                }
            };
        case 1:
            return {
                first: {
                    x: "104.6"
                },
                second: {
                    x: "274"
                },
                third: {
                    x: "416"
                }
            };
        case 0:
            return {
                first: {
                    x: "120"
                },
                second: {
                    x: "269"
                },
                third: {
                    x: "416"
                }
            };
        default:
            return {
                first: {
                    x: "120"
                },
                second: {
                    x: "269"
                },
                third: {
                    x: "416"
                }
            };
    }
}

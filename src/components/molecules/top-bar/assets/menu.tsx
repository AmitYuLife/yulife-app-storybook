import * as React from "react";
import { SFC } from "react";
import Svg, { G, Rect } from "react-native-svg";

interface IProps {
    scale?: number;
}

const Menu: SFC<IProps> = ({ scale = 1 }) => (
    <Svg
        height={String(52 * scale)}
        width={String(27 * scale)}
        viewBox="0 0 52 27"
    >
        <G>
            <Rect
                fill="#333"
                y="12"
                width={String(52 * scale)}
                height={String(3 * scale)}
            />
            <Rect
                fill="#333"
                width={String(52 * scale)}
                height={String(3 * scale)}
            />
            <Rect
                fill="#333"
                y="24"
                width={String(52 * scale)}
                height={String(3 * scale)}
            />
        </G>
    </Svg>
);

export default Menu;

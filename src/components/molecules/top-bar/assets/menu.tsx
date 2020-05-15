import * as React from "react";
import { SFC } from "react";
import Svg, { Rect } from "react-native-svg";
import { MENU_ICON } from "@ids";

interface IProps {
    color?: string;
    scale?: number;
}

const Menu: SFC<IProps> = ({ color = "#333", scale = 1 }) => (
    <Svg height={String(52 * scale)} width={String(27 * scale)} viewBox="0 0 52 27" testID={MENU_ICON}>
        <Rect fill={color} y="12" width={String(52 * scale)} height={String(3 * scale)} />
        <Rect fill={color} width={String(52 * scale)} height={String(3 * scale)} />
        <Rect fill={color} y="24" width={String(52 * scale)} height={String(3 * scale)} />
    </Svg>
);

export default Menu;

import * as React from "react";
import { Image, ImageStyle } from "react-native";
import assets from "./assets";

interface IProps {
    filled?: boolean;
    style?: ImageStyle;
}

const StarInline: React.SFC<IProps> = ({ filled, style }) => (
    <Image style={style} source={filled ? assets.filled : assets.empty} />
);

export default StarInline;

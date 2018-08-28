import * as React from "react";
import { SFC } from "react";
import { StyleSheet, View } from "react-native";
import { getHeight, getWidth } from "./pad.styles";

interface IProps {
    height?: number;
    width?: number;
}

const Pad: SFC<IProps> = ({ height, width }) => (
    <View
        style={StyleSheet.flatten([
            getHeight(height),
            getWidth(width)
        ])}
    />
);

export default Pad;

import * as React from "react";
import { SFC } from "react";
import { StyleSheet, Text, TextStyle } from "react-native";
import styles from "./text.styles";

interface IProps {
    bold?: boolean;
    style?: TextStyle;
}

const YuText: SFC<IProps> = ({ children, bold, style }) => (
    <Text
        style={StyleSheet.flatten([
            styles.base,
            bold ? styles.weightBold : styles.weightNormal,
            style,
        ])}
    >
        {children}
    </Text>
);

export default YuText;

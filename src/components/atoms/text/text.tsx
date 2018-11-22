import * as React from "react";
import { SFC } from "react";
import { RegisteredStyle, StyleSheet, Text, TextStyle } from "react-native";
import styles from "./text.styles";

interface IProps {
    bold?: boolean;
    style?: RegisteredStyle<TextStyle> | TextStyle;
    numberOfLines?: number;
}

const YuText: SFC<IProps> = ({ children, bold, style, numberOfLines }) => (
    <Text
        numberOfLines={numberOfLines}
        style={StyleSheet.flatten([styles.base, bold ? styles.weightBold : styles.weightNormal, style])}
    >
        {children}
    </Text>
);

export default YuText;

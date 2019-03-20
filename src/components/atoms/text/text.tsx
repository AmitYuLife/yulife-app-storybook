import * as React from "react";
import { SFC } from "react";
import { RegisteredStyle, StyleSheet, Text, TextStyle } from "react-native";
import styles from "./text.styles";

interface IProps {
    bold?: boolean;
    style?: RegisteredStyle<TextStyle> | TextStyle;
    numberOfLines?: number;
    testID?: string;
}

const YuText: SFC<IProps> = ({ children, bold, style, numberOfLines, testID }) => (
    <Text
        numberOfLines={numberOfLines}
        style={StyleSheet.flatten([styles.base, bold ? styles.weightBold : styles.weightNormal, style])}
        testID={testID}
    >
        {children}
    </Text>
);

export default YuText;

import * as React from "react";
import { SFC } from "react";
import { StyleSheet, Text, TextProps, TextStyle } from "react-native";
import styles from "./text.styles";

interface IProps extends TextProps {
  bold?: boolean;
  style?: TextStyle;
  testID?: string;
}

const YuText: SFC<IProps> = ({ children, bold, style, numberOfLines, testID }) => (
  <Text
    allowFontScaling={false}
    numberOfLines={numberOfLines}
    style={StyleSheet.flatten([styles.base, bold ? styles.weightBold : styles.weightNormal, style])}
    testID={testID}
  >
    {children}
  </Text>
);

export default YuText;

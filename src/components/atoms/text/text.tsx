import * as React from "react";
import { StyleSheet, Text, TextProps, TextStyle } from "react-native";
import styles from "./text.styles";

interface IProps extends TextProps {
  bold?: boolean;
  style?: TextStyle | TextStyle[];
  testID?: string;
  children: React.ReactNode | React.ReactNode[];
}

const YuText = ({ children, bold, style, numberOfLines, testID, onPress }: IProps) => (
  <Text
    allowFontScaling={false}
    numberOfLines={numberOfLines}
    style={StyleSheet.flatten([styles.base, bold ? styles.weightBold : styles.weightNormal, style])}
    testID={testID}
    onPress={onPress}
  >
    {children}
  </Text>
);

export default YuText;

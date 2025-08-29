import * as React from "react";
import { Text, TextProps, TextStyle } from "react-native";
import styles from "./text.styles";
import { StyleSheet } from "@styles";
/**
 * @param bold *** WATCH OUT *** This prop will only work if we don't pass a fontFamily alongside other styles.
 * **bold** prop changes the fontFamily to the default bold one but it can be overwriting
 */

interface IProps extends TextProps {
  bold?: boolean;
  style?: TextStyle | TextStyle[];
  testID?: string;
  children: React.ReactNode | React.ReactNode[];
}

/** @deprecated Please use TextTemplate instead; */
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

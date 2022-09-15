import * as React from "react";
import { FC } from "react";
import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import styles from "./blurb.styles";

interface IProps {
  label: string;
  wrapperStyle?: ViewStyle;
  textStyle?: TextStyle;
  accessible?: boolean;
  accessibilityLabel?: string;
}

const Blurb: FC<IProps> = ({ label, wrapperStyle, textStyle, accessible, accessibilityLabel }) => (
  <View
    style={StyleSheet.flatten([styles.wrapper, wrapperStyle])}
    accessible={accessible}
    accessibilityLabel={accessibilityLabel}
  >
    <Text style={StyleSheet.flatten([styles.base, textStyle])}>{label}</Text>
  </View>
);

export default Blurb;

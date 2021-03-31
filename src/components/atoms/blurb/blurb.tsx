import * as React from "react";
import { FC } from "react";
import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import styles from "./blurb.styles";

interface IProps {
  label: string;
  wrapperStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const Blurb: FC<IProps> = ({ label, wrapperStyle, textStyle }) => (
  <View style={StyleSheet.flatten([styles.wrapper, wrapperStyle])}>
    <Text style={StyleSheet.flatten([styles.base, textStyle])}>{label}</Text>
  </View>
);

export default Blurb;

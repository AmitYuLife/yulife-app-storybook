import * as React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import Text from "../text/text";
import styles from "./generic-heading.styles";

interface IProps {
  heading: string;
  subheading?: string;
  hidesBorder?: boolean;
  style?: ViewStyle;
}

export default function GenericHeading({ heading, hidesBorder, subheading, style }: IProps) {
  return (
    <View style={[styles.paddingHorizontal, style]}>
      <View
        style={StyleSheet.flatten([
          styles.headingWrapper,
          hidesBorder ? { borderBottomWidth: 0 } : null,
          subheading ? null : styles.paddingBottom,
        ])}
      >
        <Text numberOfLines={1} bold={true} style={styles.heading}>
          {heading}
        </Text>
      </View>
      {!subheading ? null : (
        <View style={StyleSheet.flatten([styles.subheadingWrapper, styles.paddingBottom])}>
          <Text style={styles.subheading}>{subheading}</Text>
        </View>
      )}
    </View>
  );
}

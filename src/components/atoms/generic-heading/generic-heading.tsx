import React from "react";
import { StyleSheet, View, TouchableOpacity, ViewStyle, Image } from "react-native";
import Text from "../text/text";
import Back from "./../back/back";
import styles from "./generic-heading.styles";

interface IProps {
  heading: string;
  subheading?: string;
  hidesBorder?: boolean;
  onLeftIconPress?: () => void;
  style?: ViewStyle;
  onRightIconPress?: () => void;
}

export default function GenericHeading({
  heading,
  hidesBorder,
  subheading,
  onLeftIconPress,
  onRightIconPress,
  style,
}: IProps) {
  return (
    <View style={[styles.paddingHorizontal, style]}>
      <View
        style={StyleSheet.flatten([
          styles.headingWrapper,
          hidesBorder ? { borderBottomWidth: 0 } : null,
          subheading ? null : styles.paddingBottom,
        ])}
      >
        {!onLeftIconPress ? null : (
          <TouchableOpacity onPress={onLeftIconPress} style={styles.leftIcon}>
            <Back />
          </TouchableOpacity>
        )}

        {!onRightIconPress ? null : (
          <TouchableOpacity onPress={onRightIconPress} style={styles.rightIcon}>
            <Image source={require("../../../../assets/menu/settings.png")} />
          </TouchableOpacity>
        )}
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

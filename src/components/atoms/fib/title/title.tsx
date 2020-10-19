import React from "react";
import { StyleSheet, View, ViewStyle, TextStyle, Text } from "react-native";
import { Style } from "../../../../styles";

interface ITitleProps {
  title: string;
  isLarge?: boolean;
}

export default function FibTitle(props: ITitleProps) {
  const { title, isLarge } = props;

  const style = [styles.title];

  if (isLarge) {
    style.push(styles.large);
  }

  return (
    <View style={styles.wrapper}>
      <Text style={style}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
  } as ViewStyle,
  title: {
    width: Style.DEVICE_WIDTH - 120,
    fontSize: 28,
    lineHeight: 34,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    letterSpacing: 1,
    color: "#464647",
  } as TextStyle,
  large: {
    fontSize: 32,
    lineHeight: 40,
  } as TextStyle,
});

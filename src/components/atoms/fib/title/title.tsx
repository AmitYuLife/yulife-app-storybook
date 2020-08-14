import React from "react";
import { StyleSheet, View, ViewStyle, TextStyle, Text } from "react-native";
import { Style } from "../../../../styles";

interface ITitleProps {
  title: string;
}

export default function FibTitle(props: ITitleProps) {
  const { title } = props;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
  } as ViewStyle,
  title: {
    width: Style.DEVICE_WIDTH - 63,
    fontSize: 24,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    lineHeight: 32,
    letterSpacing: 1,
    color: "#464647",
  } as TextStyle,
});

import React from "react";
import { View, StyleSheet, ViewStyle, TextStyle, Platform } from "react-native";
import { Text } from "@atoms";
import { Style } from "@styles";
import { addCommasToNumber } from "@utils";

interface Props {
  score: number | string;
  bold: boolean;
  style?: TextStyle;
  testID?: string;
}

export function Score({ score, bold, style, testID }: Props) {
  const size = getSize(score.toString().length);

  return (
    <View style={styles.wrapper} testID={testID}>
      <Text style={[styles.text, size, style]} bold={bold}>
        {typeof score === "number" ? addCommasToNumber(score) : score}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingRight: Style.adjust(18),
    width: Style.adjust(80),
    marginLeft: "auto",
  } as ViewStyle,
  text: {
    textAlign: "right",
  } as TextStyle,
  default: {
    fontSize: Style.adjust(15),
  },
  small: {
    fontSize: Platform.select({ ios: Style.adjust(13), android: Style.adjust(12) }),
  },
});

function getSize(length: number) {
  if (length > 6) {
    return styles.small;
  }

  return styles.default;
}

import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { Style } from "@styles";

interface Props {
  label: string;
}

export const Label = memo(({ label }: Props) => {
  return (
    <View style={styles.wrapper}>
      <TextTemplate type="l1">{label}</TextTemplate>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingVertical: Style.adjust(23),
  } as ViewStyle,
});

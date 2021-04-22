import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import Button from "@atoms/button/button";

interface IProps {
  hide?: boolean;
  onPress: () => void;
  title: string;
}

export default function CTA({ hide, onPress, title }: IProps) {
  return hide ? null : (
    <View style={styles.ctaWrapper}>
      <Button onPress={onPress} label={title} />
    </View>
  );
}

const styles = StyleSheet.create({
  ctaWrapper: {
    alignSelf: "center",
    width: 300,
  } as ViewStyle,
});

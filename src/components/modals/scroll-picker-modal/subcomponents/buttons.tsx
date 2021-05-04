import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Button, LinkButton } from "@atoms";
import { Style } from "@styles";

interface Props {
  onConfirm: () => void;
  onCancel: () => void;
}

export const Buttons = ({ onConfirm, onCancel }: Props) => (
  <View style={styles.wrapper}>
    <Button label="Select" onPress={onConfirm} />
    <LinkButton label="Cancel" onPress={onCancel} />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(32),
  } as ViewStyle,
});

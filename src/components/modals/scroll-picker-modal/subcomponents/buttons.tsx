import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Button, LinkButton } from "@molecules";
import { Style } from "@styles";

interface Props {
  onConfirm: () => void;
  onCancel: () => void;
  cancelLabel?: string;
  confirmLabel?: string;
}

export const Buttons = ({ onConfirm, onCancel, cancelLabel = "Cancel", confirmLabel = "Select" }: Props) => (
  <View style={styles.wrapper}>
    <Button label={confirmLabel} onPress={onConfirm} />
    <LinkButton label={cancelLabel} onPress={onCancel} />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(32),
  } as ViewStyle,
});

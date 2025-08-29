import React from "react";
import { View, ViewStyle } from "react-native";
import { Button, LinkButton } from "@molecules";
import { Style, StyleSheet } from "@styles";
import { t } from "@locale";

interface Props {
  onConfirm: () => void;
  onCancel: () => void;
  cancelLabel?: string;
  confirmLabel?: string;
}

export const Buttons = ({
  onConfirm,
  onCancel,
  cancelLabel = t("labels.cta.cancel"),
  confirmLabel = t("labels.cta.select"),
}: Props) => (
  <View style={styles.wrapper}>
    <Button testID="scroll-picker-confirm-button" translatedLabel={confirmLabel} onPress={onConfirm} />
    <LinkButton testID="scroll-picker-cancel-button" translatedLabel={cancelLabel} onPress={onCancel} />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(32),
  } as ViewStyle,
});

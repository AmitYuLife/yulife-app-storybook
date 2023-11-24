import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Button, LinkButton } from "@molecules";
import { Style } from "@styles";
import { t } from "@locale";

interface Props {
  onConfirm: () => void;
  onCancel: () => void;
  cancelLabel?: string;
  confirmLabel?: string;
}

export const Buttons = memo(
  ({ onConfirm, onCancel, cancelLabel = t("labels.cta.cool"), confirmLabel = t("labels.cta.back") }: Props) => {
    return (
      <View style={styles.wrapper}>
        <Button size="Fill" label={confirmLabel} onPress={onConfirm} />
        <LinkButton label={cancelLabel} onPress={onCancel} />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    marginTop: Style.adjust(32),
  } as ViewStyle,
});

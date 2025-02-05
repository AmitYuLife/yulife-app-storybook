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
        {confirmLabel ? (
          <Button testID="hero-image-confirm-button" size="Fill" translatedLabel={confirmLabel} onPress={onConfirm} />
        ) : null}
        {cancelLabel ? (
          <LinkButton testID="hero-image-cancel-button" translatedLabel={cancelLabel} onPress={onCancel} />
        ) : null}
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

import React, { memo, useCallback } from "react";
import { Colours, Style } from "@styles";
import { Box, TextTemplate } from "@atoms";
import { Button, SecondaryButton } from "@molecules";

interface Props {
  header: string;
  description: string;
  onConfirm: () => void;
  closeOverlay?: () => void;
  onCancel?: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
}

const ConfirmationModal = (props: Props) => {
  const { onConfirm, cancelLabel, confirmLabel, header, description, closeOverlay, onCancel } = props;

  const onConfirmButtonPressed = useCallback(() => {
    if (closeOverlay) {
      closeOverlay();
    }

    onConfirm?.();
  }, [closeOverlay, onConfirm]);

  return (
    <Box width="100%" justifyContent="center" alignItems="center" px={24} pb={32} testID="confirmation-modal">
      <Box py={24}>
        <TextTemplate type="h3" color={Colours.neutral.n900} lineHeight={Style.adjust(28)} textAlign="center">
          {header}
        </TextTemplate>
      </Box>
      <Box>
        <TextTemplate type="b2" color={Colours.neutral.n850} lineHeight={Style.adjust(20)} textAlign="center">
          {description}
        </TextTemplate>
      </Box>
      <Box width="100%" mt={32} gap={12}>
        {confirmLabel ? (
          <Button
            testID="confirmation-confirm-button"
            size="Fill"
            translatedLabel={confirmLabel}
            onPress={onConfirmButtonPressed}
          />
        ) : null}
        {cancelLabel ? (
          <SecondaryButton
            testID="confirmation-cancel-button"
            size="Fill"
            translatedLabel={cancelLabel}
            onPress={onCancel ?? closeOverlay}
          />
        ) : null}
      </Box>
    </Box>
  );
};

export default memo(ConfirmationModal);

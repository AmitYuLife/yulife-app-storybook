import React, { memo, useCallback } from "react";
import { Buttons } from "../hero-image-modal/subcomponents/buttons";
import { Colours, Style } from "@styles";
import { Box, TextTemplate } from "@atoms";

interface Props {
  header: string;
  description: string;
  onConfirm: () => void;
  closeOverlay?: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
}

const ConfirmationModal = (props: Props) => {
  const { onConfirm, cancelLabel, confirmLabel, header, description, closeOverlay } = props;

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
      <Buttons
        onConfirm={onConfirmButtonPressed}
        onCancel={closeOverlay}
        cancelLabel={cancelLabel}
        confirmLabel={confirmLabel}
      />
    </Box>
  );
};

export default memo(ConfirmationModal);

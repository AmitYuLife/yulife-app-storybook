import { Navigation } from "@navigation/main";
import React, { ComponentProps } from "react";
import FloatingModal from "./floating-modal";
import { ViewStyle } from "react-native";
import { VoidFunctionOrSduiActionPayload } from "@components/sdui/_types/sdui.types";

type Args = {
  modalId?: string;
  closeOnBlur?: boolean;
  onClose?: VoidFunctionOrSduiActionPayload;
  overlayStyle?: ViewStyle;
} & ComponentProps<typeof FloatingModal>;

export function showFloatingModal({ modalId, closeOnBlur, onClose, ...modalArgs }: Args) {
  const modal = <FloatingModal {...modalArgs} />;
  return Navigation.showOverlayWithChild(
    modal,
    false,
    { flexDirection: "column-reverse", ...modalArgs.overlayStyle },
    modalId,
    closeOnBlur,
    onClose
  );
}

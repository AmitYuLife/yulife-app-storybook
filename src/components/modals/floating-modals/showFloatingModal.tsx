import { Navigation } from "@navigation/main";
import React, { ComponentProps } from "react";
import FloatingModal from "./floating-modal";
import { ViewStyle } from "react-native";

type Args = { modalId?: string; closeOnBlur?: boolean; overlayStyle?: ViewStyle } & ComponentProps<
  typeof FloatingModal
>;

export function showFloatingModal({ modalId, closeOnBlur, ...modalArgs }: Args) {
  const modal = <FloatingModal {...modalArgs} />;
  return Navigation.showOverlayWithChild(
    modal,
    false,
    { flexDirection: "column-reverse", ...modalArgs.overlayStyle },
    modalId,
    closeOnBlur
  );
}

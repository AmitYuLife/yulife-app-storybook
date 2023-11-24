import { Navigation } from "@navigation/main";
import React, { ComponentProps } from "react";
import FloatingModal from "./floating-modal";
import { ViewStyle } from "react-native";

type Args = { modalId?: string; overlayStyle?: ViewStyle } & ComponentProps<typeof FloatingModal>;

export function showFloatingModal({ modalId, ...modalArgs }: Args) {
  const modal = <FloatingModal {...modalArgs} />;
  return Navigation.showOverlayWithChild(
    modal,
    false,
    { flexDirection: "column-reverse", ...modalArgs.overlayStyle },
    modalId
  );
}

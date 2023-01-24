import { Navigation } from "@navigation/main";
import React, { ComponentProps } from "react";
import FloatingModal from "./floating-modal";

type Args = { modalId?: string } & ComponentProps<typeof FloatingModal>;

export function showFloatingModal({ modalId, ...modalArgs }: Args) {
  const modal = <FloatingModal {...modalArgs} />;
  return Navigation.showOverlayWithChild(modal, false, { flexDirection: "column-reverse" }, modalId);
}

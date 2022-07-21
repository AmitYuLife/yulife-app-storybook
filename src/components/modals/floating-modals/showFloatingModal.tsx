import React, { ComponentProps } from "react";
import { showOverlayWithChild } from "../blurred-overlay/showOverlayWithChild";
import FloatingModal from "./floating-modal";

type Args = { modalId?: string } & ComponentProps<typeof FloatingModal>;

export function showFloatingModal({ modalId, ...modalArgs }: Args) {
  const modal = <FloatingModal {...modalArgs} />;
  return showOverlayWithChild(modal, false, { flexDirection: "column-reverse" }, modalId);
}

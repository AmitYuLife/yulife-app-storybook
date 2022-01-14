import React, { ReactElement } from "react";
import { showOverlayWithChild } from "../blurred-overlay/showOverlayWithChild";
import FloatingModal from "./floating-modal";
import { ContentItemLottie as GqlLottie } from "@graphql/_core/schema";

export function showFloatingModal(children: ReactElement, lottie: GqlLottie) {
  const modal = <FloatingModal lottie={lottie}>{children}</FloatingModal>;
  return showOverlayWithChild(modal, false, { flexDirection: "column-reverse" });
}

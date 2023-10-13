import { Navigation } from "@navigation/main";
import React from "react";
import HeroImageModal from "../hero-image-modal/hero-image-modal";
import { MODALS } from "@navigation/constants";

type Args = { modalId: string; componentProps: Record<string, any> };

export function showFloatingModal({ modalId, componentProps }: Args) {
  const Modal = whiteListedModal[modalId as keyof typeof MODALS];

  if (Modal) {
    const child = <Modal {...componentProps} />;
    return Navigation.showOverlayWithChild(child, false, { flexDirection: "column-reverse" }, modalId);
  }
}

const whiteListedModal: Partial<Record<keyof typeof MODALS, React.FunctionComponent<any>>> = {
  [MODALS.genericWithHeroImage]: HeroImageModal,
};

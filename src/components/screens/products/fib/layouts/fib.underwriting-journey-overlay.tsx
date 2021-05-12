import React, { createContext, useContext } from "react";
import { HeightPicker } from "@components/modals/scroll-picker-modal/variants/height-picker";

export type IOverlay = "height" | "weight" | "drinks";
interface IOverlayContext {
  overlay: IOverlay;
  setOverlay: (update: IOverlay) => void;
}

export const FIBUnderwritingJourneyOverlayContext = createContext<IOverlayContext>({
  overlay: null,
  setOverlay: (_update: IOverlay) => null,
});

export const FIBUnderwritingJourneyOverlay = () => {
  const { overlay, setOverlay } = useContext(FIBUnderwritingJourneyOverlayContext);

  if (overlay === "height") {
    return <HeightPicker onConfirm={() => setOverlay(null)} onCancel={() => setOverlay(null)} />;
  }

  return null;
};

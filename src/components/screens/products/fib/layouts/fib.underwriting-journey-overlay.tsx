import React, { createContext, memo, useContext } from "react";
import { HeightPicker } from "@components/modals/scroll-picker-modal/variants/height-picker";
import { WeightPicker } from "@components/modals/scroll-picker-modal/variants/weight-picker";
import { DrinksPicker } from "@components/modals/scroll-picker-modal/variants/drink-picker";

export type IOverlay = "height" | "weight" | "drinks";
interface IOverlayContext {
  overlay: IOverlay;
  setOverlay: (update: IOverlay) => void;
}

export const FIBUnderwritingJourneyOverlayContext = createContext<IOverlayContext>({
  overlay: null,
  setOverlay: (_update: IOverlay) => null,
});

export const FIBUnderwritingJourneyOverlay = memo(() => {
  const { overlay, setOverlay } = useContext(FIBUnderwritingJourneyOverlayContext);

  const hide = () => setOverlay(null);

  if (overlay === "height") {
    return <HeightPicker onConfirm={hide} onCancel={hide} />;
  }

  if (overlay === "weight") {
    return <WeightPicker onConfirm={hide} onCancel={hide} />;
  }

  if (overlay === "drinks") {
    return <DrinksPicker onConfirm={hide} onCancel={hide} />;
  }

  return null;
});

import { useCallback } from "react";
import { MODALS } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { IItemDetailsHalfModalProps } from "@components/modals/item-details-half-modal/item-details-half-modal.modal";
import { Image } from "@redux/_core/types";

export type HalfModalItemDetails = {
  type: "simple" | "tipCard" | "itemReward";
  id: string;
  title?: string;
  description?: string;
  image: Image;
};

export interface GetItemDetailsHookResponse {
  isLoading: boolean;
  details: HalfModalItemDetails[];
  error?: Error;
}

export const useItemDetailsHalfModal = () => {
  const openInfoModal = useCallback((itemDetailsHalfModalProps: Omit<IItemDetailsHalfModalProps, "onClose">) => {
    Navigation.showOverlay({
      component: {
        id: MODALS.itemDetailsHalfModal,
        name: MODALS.itemDetailsHalfModal,
        options: {
          layout: {
            componentBackgroundColor: "transparent",
          },
          overlay: {
            interceptTouchOutside: true,
          },
        },
        passProps: {
          ...itemDetailsHalfModalProps,
          onClose: () => {
            Navigation.dismissAllOverlays();
          },
        },
      },
    });
  }, []);

  return { openInfoModal };
};

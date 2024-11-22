import { ReactNode, useCallback } from "react";
import { ImageSource } from "expo-image";
import { MODALS } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { Image } from "@redux/_core/types";

type ItemDetails = {
  type: "simple" | "tipCard" | "itemReward";
  id: string;
  title?: string;
  description?: string;
  image: Image;
};

type ItemDetailsHalfModalProps = {
  level?: string;
  levelComponent?: ReactNode;
  levelRewardColor: string;
  levelTextColor?: string;

  title?: string;

  subtitle?: string;
  rewardSubtitleComponent?: ReactNode;

  rewardImageComponent?: ReactNode;

  overlayIcon?: ImageSource;

  details?: ItemDetails[];

  detailsContainerComponent?: ReactNode;

  prefetchImages?: boolean;
  onClose: () => void;
};

export const useItemDetailsHalfModal = () => {
  const openInfoModal = useCallback((itemDetailsHalfModalProps: Omit<ItemDetailsHalfModalProps, "onClose">) => {
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

import { MODALS } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import Logger from "@services/logging/logger";
import { ImageSource } from "expo-image";
import { useCallback } from "react";

export const useBattlePassRewardInfoModal = () => {
  const openInfoModal = useCallback(
    ({
      id,
      title,
      position,
      titleColour,
      overlayIcon,
      backgroundColour,
      rewardSubtitleComponent,
      rewardLevelComponent,
      rewardImageComponent,
    }: {
      id: string;
      title: string;
      position: number;
      titleColour: string;
      backgroundColour: string;
      overlayIcon: ImageSource;
      rewardSubtitleComponent?: React.ReactNode;
      rewardLevelComponent?: React.ReactNode;
      rewardImageComponent?: React.ReactNode;
    }) => {
      if (!id) {
        Logger.error(new Error("Tried to open rewards modal without valid reward"), {
          id,
          title,
          position,
          titleColour,
          backgroundColour,
          overlayIcon: overlayIcon?.uri,
        });

        return;
      }

      Navigation.showOverlay({
        component: {
          id: MODALS.battlePassItemExplanation,
          name: MODALS.battlePassItemExplanation,
          options: {
            layout: {
              componentBackgroundColor: "transparent",
            },
            overlay: {
              interceptTouchOutside: true,
            },
          },
          passProps: {
            overlayIcon,
            rewardId: id,
            rewardTitle: title,
            rewardLevel: position,
            textColor: titleColour,
            rewardColor: backgroundColour,
            onClose: () => {
              Navigation.dismissAllOverlays();
            },
            withBlurBackground: true,
            rewardSubtitleComponent,
            rewardLevelComponent,
            rewardImageComponent,
          },
        },
      });
    },
    []
  );

  return { openInfoModal };
};

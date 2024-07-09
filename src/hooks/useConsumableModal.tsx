import { MODALS, ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { getUserDataStart } from "@redux/user/user.actions";
import { AppDataType } from "@redux/user/user.types";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

export const useConsumableModal = () => {
  const dispatch = useDispatch();

  const openConsumables = useCallback(() => {
    Navigation.showOverlay({
      component: {
        id: MODALS.consumableModal,
        name: MODALS.consumableModal,
        options: {
          layout: {
            componentBackgroundColor: "transparent",
          },
          overlay: {
            interceptTouchOutside: true,
          },
        },
        passProps: {
          onRefetch: () => {
            dispatch(
              getUserDataStart({ types: [AppDataType.todayActivity, AppDataType.dailyChallengeAmountAvailable] })
            );
          },
          onGoToRewards: async () => {
            Navigation.dismissAllOverlays();
            await Navigation.popToRoot(ROUTES.quests);

            Navigation.mergeOptions(ROUTES.quests, {
              bottomTabs: {
                currentTabIndex: 4,
              },
              statusBar: {
                drawBehind: false,
                visible: true,
              },
            });
          },
          onClose: () => {
            Navigation.dismissAllOverlays();
          },
          withBlurBackground: true,
        },
      },
    });
  }, [dispatch]);

  return { openConsumables };
};

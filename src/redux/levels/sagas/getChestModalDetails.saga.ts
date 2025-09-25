import { t } from "@locale";
import { MODALS, ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { select } from "redux-saga/effects";
import { getActiveLevel, getChallengesStatus, getCurrentLevel, getYuniversalProgress } from "../levels.selectors";
import { getUserAvatar } from "@redux/user/user.selectors";
import { getAssets } from "@components/screens/member/quests/quests-scroll-screen/unity-movies/unity.data";

export default function* getChestModalDetails() {
  const { done }: ReturnType<typeof getChallengesStatus> = yield select(getChallengesStatus);
  const active: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);
  const level: ReturnType<typeof getCurrentLevel> = yield select(getCurrentLevel);
  const yuniversalProgress: ReturnType<typeof getYuniversalProgress> = yield select(getYuniversalProgress);
  const avatar: ReturnType<typeof getUserAvatar> = yield select(getUserAvatar);

  if (done < 1 && active.status === "success") {
    if (active.yuniversalChest) {
      const assets = getAssets(level - 1);
      return {
        id: MODALS.EOTWChest,
        props: {
          chestType: active.yuniversalChest.chestType,
          title: active.yuniversalChest.title,
          level,
          yuniversalLevel: yuniversalProgress.yuniversalLevel,
          yuniversalMap: yuniversalProgress.yuniversalMap,
          assets,
          avatar,
          onPressCta: () => {
            Navigation.mergeOptions(ROUTES.dailySteps, {
              bottomTabs: {
                currentTabIndex: 0,
              },
              statusBar: {
                drawBehind: false,
                visible: true,
              },
            });
            Navigation.dismissModal(MODALS.EOTWChest);
          },
        },
      };
    }

    if ((active?.chest?.value || 0) > 0) {
      return {
        id: MODALS.chest,
        props: {
          ctaLabel: t("labels.cta.collect"),
          heading: t("screens.challenge_chest_modal.heading_is_completed", { yucoin: active.chest.value }),
          isLocked: false,
          onPressCta: () => Navigation.dismissModal(MODALS.chest),
        },
      };
    }
  }
}

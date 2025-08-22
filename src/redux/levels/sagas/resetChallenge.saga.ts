import { t } from "@locale";
import { MODALS, ROUTES } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { getUserAvatar } from "@redux/user/user.selectors";
import { Navigation } from "@navigation/main";
import { call, put, select } from "redux-saga/effects";
import { challengeResetSuccessAction } from "../levels.actions";
import { getActiveLevel, getChallengesStatus, getCurrentLevel, getYuniversalProgress } from "../levels.selectors";
import { IActiveLevel } from "../levels.types";
import { IUnityData, getAssets } from "@components/screens/member/quests/quests-scroll-screen/unity-movies/unity.data";
import { Source } from "@atoms";

export default function* resetChallengeSaga() {
  const { done }: ReturnType<typeof getChallengesStatus> = yield select(getChallengesStatus);
  const active: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);
  const level: ReturnType<typeof getCurrentLevel> = yield select(getCurrentLevel);
  const yuniversalProgress: ReturnType<typeof getYuniversalProgress> = yield select(getYuniversalProgress);
  const avatar: ReturnType<typeof getUserAvatar> = yield select(getUserAvatar);

  if (done < 1 && active.status === "success") {
    if (active.yuniversalChest) {
      const assets = getAssets(level - 1);

      yield call(
        showEOTWChestModal,
        active,
        level,
        yuniversalProgress,
        { uri: avatar?.avatarRemoteFiles?.pngMini },
        assets
      );
    } else if ((active?.chest?.value || 0) > 0) {
      yield call(showChestModal, active);
    }
  }

  yield put(challengeResetSuccessAction());
}

export function showEOTWChestModal(
  active: IActiveLevel,
  level: number,
  yuniversalProgress: { yuniversalMap: number; yuniversalLevel: number },
  avatar: Source,
  assets: IUnityData
) {
  showYuModal({
    component: {
      id: MODALS.EOTWChest,
      name: MODALS.EOTWChest,
      passProps: {
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
    },
  });
}

export function showChestModal(active: IActiveLevel) {
  showYuModal({
    component: {
      id: MODALS.chest,
      name: MODALS.chest,
      passProps: {
        ctaLabel: t("labels.cta.collect"),
        heading: t("screens.challenge_chest_modal.heading_is_completed", { yucoin: active.chest.value }),
        isLocked: false,
        onPressCta: () => {
          Navigation.dismissModal(MODALS.chest);
        },
      },
    },
  });
}

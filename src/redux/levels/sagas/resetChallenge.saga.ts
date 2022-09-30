import { MODALS, ROUTES } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { clearChallengeStatusPrompt } from "@redux/quests/quests.actions";
import { getQuestsPrompt } from "@redux/quests/quests.selectors";
import { getUserAvatar } from "@redux/user/user.selectors";
import { Source } from "react-native-fast-image";
import { Navigation } from "react-native-navigation";
import { call, put, select } from "redux-saga/effects";
import { challengeResetSuccessAction } from "../levels.actions";
import { getCurrentLevel, IActiveLevel } from "../levels.selectors";

export default function* resetChallengeSaga() {
  const { active }: ReturnType<typeof getQuestsPrompt> = yield select(getQuestsPrompt);
  const level: ReturnType<typeof getCurrentLevel> = yield select(getCurrentLevel);
  const avatar: ReturnType<typeof getUserAvatar> = yield select(getUserAvatar);

  if (active?.status === "success") {
    if (active.yuniversalChest) {
      yield call(showEOTWChestModal, active, level, { uri: avatar?.avatarRemoteFiles?.pngMini });
    } else if ((active?.chest?.value ?? 0) > 0) {
      yield call(showChestModal, active);
    }
  }

  yield put(clearChallengeStatusPrompt());
  yield put(challengeResetSuccessAction());
}

export function* showEOTWChestModal(active: IActiveLevel, level: number, avatar: Source) {
  yield new Promise<void>((resolve) => {
    showYuModal({
      component: {
        id: MODALS.EOTWChest,
        name: MODALS.EOTWChest,
        passProps: {
          chestType: active.yuniversalChest.chestType,
          title: active.yuniversalChest.title,
          level: level,
          levelId: active.levelSlotId,
          items: active.yuniversalChest.items,
          avatar,
          onPressCta: () => {
            resolve();
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
  });
}

export function* showChestModal(active: IActiveLevel) {
  yield new Promise<void>((resolve) => {
    showYuModal({
      component: {
        id: MODALS.chest,
        name: MODALS.chest,
        passProps: {
          ctaLabel: "collect",
          heading: `you get ${active.chest.value} yucoin`,
          isLocked: false,
          onPressCta: () => {
            resolve();
            Navigation.dismissModal(MODALS.chest);
          },
        },
      },
    });
  });
}

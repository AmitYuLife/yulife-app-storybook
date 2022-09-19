import { MODALS, ROUTES } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { getUserAvatar } from "@redux/user/user.selectors";
import { Source } from "react-native-fast-image";
import { Navigation } from "react-native-navigation";
import { call, put, select } from "redux-saga/effects";
import { challengeResetSuccessAction } from "../levels.actions";
import { getActiveLevel, getChallengesStatus, getCurrentLevel, IActiveLevel } from "../levels.selectors";

export default function* resetChallengeSaga() {
  const { done }: ReturnType<typeof getChallengesStatus> = yield select(getChallengesStatus);
  const active: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);
  const level: ReturnType<typeof getCurrentLevel> = yield select(getCurrentLevel);
  const avatar: ReturnType<typeof getUserAvatar> = yield select(getUserAvatar);

  if (done < 1 && active.status === "success") {
    if (active.chest.value > 0) {
      yield call(showChestModal, active);
    } else if (active.yuniversalChest) {
      yield call(showEOTWChestModal, active, level, { uri: avatar.avatarRemoteFiles.pngMini });
    }
  }

  yield put(challengeResetSuccessAction());
}

export function showEOTWChestModal(active: IActiveLevel, level: number, avatar: Source) {
  showYuModal({
    component: {
      id: MODALS.EOTWChest,
      name: MODALS.EOTWChest,
      passProps: {
        chestType: active.yuniversalChest.chestType,
        title: active.yuniversalChest.title,
        level: level,
        items: active.yuniversalChest.items,
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
        ctaLabel: "collect",
        heading: `you get ${active.chest.value} yucoin`,
        isLocked: false,
        onPressCta: () => {
          Navigation.dismissModal(MODALS.chest);
        },
      },
    },
  });
}

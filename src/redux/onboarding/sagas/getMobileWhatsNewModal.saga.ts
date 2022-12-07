import FastImage from "react-native-fast-image";
import { Navigation } from "@navigation/main";
import { call, delay, select, spawn, take } from "redux-saga/effects";
import { getMobileWhatsNewModalClient } from "@graphql/onboardingSteps/getMobileWhatsNewModal.gql";
import { MODALS } from "@navigation/constants";
import Logger from "@services/logging/logger";
import { Unpacked } from "@utils";
import { getModalState } from "@redux/app/app.selectors";
import { UPDATE_APP_STATE, UPDATE_CURRENT_MODAL } from "@redux/app/app.actions";
import { showYuModal } from "@navigation/root";
import { getToken } from "@services/storage";
import { getUserNotification } from "@redux/user/user.selectors";
import { OptionsStatusBar } from "react-native-navigation";

export function* getMobileWhatsNewModalSaga(dataPayload: { payload: string; type: string }) {
  const { payload: appState, type } = dataPayload || {};
  if (type === UPDATE_APP_STATE && appState !== "active") {
    return;
  }

  const userNotification: ReturnType<typeof getUserNotification> = yield select(getUserNotification);
  const token: Unpacked<typeof getToken> = yield call(getToken);
  if (!token || !userNotification.hasMobileWhatsNewModal) {
    return;
  }

  const currentModal: ReturnType<typeof getModalState> = yield select(getModalState);

  if (currentModal === MODALS.whatsNew) {
    return;
  }

  try {
    const { data }: Unpacked<typeof getMobileWhatsNewModalClient> = yield call(getMobileWhatsNewModalClient);

    if (data?.getMobileWhatsNewModal) {
      const preloadAssets = data.getMobileWhatsNewModal.items.map((item) => item.backgroundImage);
      yield call(FastImage.preload, preloadAssets);
      yield delay(1000);

      const activeModal: ReturnType<typeof getModalState> = yield select(getModalState);
      if (activeModal) {
        yield take(UPDATE_CURRENT_MODAL);
      }

      yield call(() =>
        showYuModal({
          component: {
            id: MODALS.whatsNew,
            name: MODALS.whatsNew,
            passProps: data.getMobileWhatsNewModal,
            options: {
              statusBar: {
                style: (data.getMobileWhatsNewModal?.theme?.statusBar as OptionsStatusBar["style"]) || "light",
              },
            },
          },
        })
      );
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "getMobileWhatsNewModalSaga" });
    });
  }
}

export function* dismissWhatsNewModalSaga() {
  try {
    Navigation.dismissModal(MODALS.whatsNew);
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "dismissWhatsNewModalSaga" });
    });
  }
}

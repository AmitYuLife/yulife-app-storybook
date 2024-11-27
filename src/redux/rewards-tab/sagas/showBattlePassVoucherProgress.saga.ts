import { call, select, spawn, take } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import client from "@graphql/_core/client";
import { GetMobileUnlockableBattlePassVouchersProgressQuery, gql } from "@graphql/__generated";
import { QueryResult } from "@apollo/client";
import { MODALS } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { getUserFeatures } from "@redux/user/user.selectors";
import { getChallengesStatus, getActiveLevel } from "@redux/levels/levels.selectors";
import { DISMISS_STREAK_MODAL } from "@redux/streaks/streaks.actions";

export function* showBattlePassVoucherProgressSaga() {
  try {
    const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);

    if (!features.tempAppShowBattlepassVoucherProgressModal) {
      return;
    }

    const { done }: ReturnType<typeof getChallengesStatus> = yield select(getChallengesStatus);
    const active: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);

    if (done > 0 || active.status !== "success") {
      return;
    }

    const { data }: QueryResult<GetMobileUnlockableBattlePassVouchersProgressQuery> = yield call(() =>
      client().query({
        query: gql("GetMobileUnlockableBattlePassVouchersProgressDocument"),
        fetchPolicy: "no-cache",
      })
    );

    if (!data?.getMobileUnlockableBattlePassVouchersProgress) {
      return;
    }

    yield take(DISMISS_STREAK_MODAL);

    yield call(() =>
      showYuModal({
        component: {
          name: MODALS.voucherProgress,
          id: MODALS.voucherProgress,
          passProps: { rewards: data.getMobileUnlockableBattlePassVouchersProgress },
        },
      })
    );
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "showBattlePassVoucherProgressSaga" });
    });
  }
}

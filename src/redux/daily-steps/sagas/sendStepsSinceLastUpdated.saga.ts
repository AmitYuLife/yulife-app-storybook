import { AddHistoricalSteps_addHistoricalSteps } from "@graphql/_core/schema";
import addHistoricalSteps from "@graphql/challenges/addHistoricalSteps.gql";
import { MODALS } from "@navigation/constants";
import { querySteps } from "@services/fitkit/fitkit.helpers";
import Logger from "@services/logging/logger";
import { pathOr } from "@services/utils";
import moment from "moment";
import { Navigation } from "react-native-navigation";
import { delay } from "redux-saga";
import { call, put, select, spawn } from "redux-saga/effects";
import { getRouteState } from "../../app/app.selectors";
import { getUserFeatures } from "../../user/user.selectors";
import { stepsSinceLastUpdateSuccess } from "../daily-steps.actions";
import { getLastUpdatedBeforeToday } from "../daily-steps.selectors";

type HistoricalSteps = AddHistoricalSteps_addHistoricalSteps;

export default function* sendStepsSinceLastUpdatedSaga() {
    const lastUpdatedBeforeToday = yield select(getLastUpdatedBeforeToday);

    if (lastUpdatedBeforeToday) {
        const startOfDay = moment().startOf("day");
        const momentLastUpdatedBeforeToday = moment(lastUpdatedBeforeToday);

        if (momentLastUpdatedBeforeToday.isBefore(startOfDay)) {
            const features = yield select(getUserFeatures);
            let isUpdated = false;
            // get steps from start of last updated date until the end of previous day
            const { results } = yield call(
                querySteps,
                momentLastUpdatedBeforeToday,
                moment().subtract(1, "day"),
                features
            );

            if (results.length > 0) {
                while (!isUpdated) {
                    try {
                        const res = yield call(addHistoricalSteps, results, true, true);
                        const response: HistoricalSteps = pathOr<HistoricalSteps>(res, "data.addHistoricalSteps", {
                            endDateTime: "",
                            startDateTime: "",
                            yucoin: 0
                        });

                        if (response.yucoin > 0) {
                            const route = yield select(getRouteState);

                            if (route !== MODALS.collectReward) {
                                const firstDay = moment(response.startDateTime).format("DD MMM");
                                const lastDay = moment(response.endDateTime).format("DD MMM");
                                const date = firstDay !== lastDay ? `${firstDay} - ${lastDay}` : firstDay;

                                yield call(() => {
                                    Navigation.showModal({
                                        component: {
                                            id: MODALS.collectReward,
                                            name: MODALS.collectReward,
                                            passProps: {
                                                date,
                                                onPress: () => Navigation.dismissModal(MODALS.collectReward),
                                                yucoin: response.yucoin
                                            }
                                        }
                                    });
                                });
                            }
                        }

                        isUpdated = true;
                        yield put(stepsSinceLastUpdateSuccess());
                    } catch (e) {
                        yield spawn(() => Logger.logMixpanelError(e, "sendStepsSinceLastUpdated"));
                        yield call(delay, 15000);
                    }
                }
            }
        }
    }
}

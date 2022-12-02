import { call, put } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { Unpacked } from "@utils";
import { getUserFeaturesSuccess } from "../user.actions";
import getUserFeatures from "@graphql/user/getUserFeatures.gql";

export default function* getUserFeaturesSaga() {
  try {
    const { data }: Unpacked<typeof getUserFeatures> = yield call(getUserFeatures);

    if (data?.getUserFeatures) {
      yield put(getUserFeaturesSuccess(data.getUserFeatures));
    }
  } catch (e) {
    Logger.error(e, { event: "getUserFeatures" });
  }
}

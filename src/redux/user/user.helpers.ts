import { call } from "redux-saga/effects";
import getAllUserDataSaga from "./sagas/getAllUserData.saga";
import { IAppDataTypePayload, IFeature } from "./user.types";
import { getToken } from "@services/storage";
import { Unpacked } from "@utils";

export const reduceUserFeatures = (acc: IFeature, item: { name?: string | null; value?: boolean | null }): IFeature => {
  if (item.name) {
    (acc as Record<string, boolean>)[item.name] = !!item.value;
  }

  return acc;
};

export function generateUserDataSaga(payload: IAppDataTypePayload) {
  return function* () {
    const token: Unpacked<typeof getToken> = yield call(getToken);

    if (token) {
      yield call(getAllUserDataSaga, { payload, type: undefined as never });
    }
  };
}

import { call } from "redux-saga/effects";
import getAllUserDataSaga from "./sagas/getAllUserData.saga";
import { IAppDataTypePayload } from "./user.types";
import { getToken } from "@services/storage";
import { Unpacked } from "@utils";

export const reduceUserFeatures = (acc: { [x: string]: boolean }, item: { name?: string; value?: boolean }) => {
  acc[item.name] = item.value;
  return acc;
};

export function generateUserDataSaga(payload: IAppDataTypePayload) {
  return function* () {
    const token: Unpacked<typeof getToken> = yield call(getToken);

    if (token) {
      yield call(getAllUserDataSaga, { payload, type: undefined });
    }
  };
}

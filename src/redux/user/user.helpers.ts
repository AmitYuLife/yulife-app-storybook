import { call } from "redux-saga/effects";
import getAllUserDataSaga from "./sagas/getAllUserData.saga";
import { AppDataType } from "./user.actions";

export const reduceUserFeatures = (acc: { [x: string]: boolean }, item: { name: string; value: boolean }) => {
  acc[item.name] = item.value;
  return acc;
};

export function generateUserDataSaga(payload: AppDataType[]) {
  return function* () {
    yield call(getAllUserDataSaga, { payload, type: undefined });
  };
}

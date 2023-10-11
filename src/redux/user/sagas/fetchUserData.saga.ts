import { put } from "redux-saga/effects";
import { AppDataType, getUserDataStart } from "../user.actions";

export default function* fetchUserDataSaga() {
  // TODO: Incorporate more data types as reducers from getCurrentUser/loginUser are removed
  yield put(getUserDataStart([AppDataType.socialGroups, AppDataType.hints]));
}

import { put } from "redux-saga/effects";
import { getUserDataStart } from "../user.actions";
import { AppDataType } from "../user.types";

export default function* fetchUserDataOnAuthenticatedSaga() {
  // TODO: Incorporate more data types as reducers from getCurrentUser/loginUser are removed
  yield put(
    getUserDataStart({
      types: [
        AppDataType.todayActivity,
        AppDataType.socialGroups,
        AppDataType.hints,
        AppDataType.coinLedger,
        AppDataType.dailyChallengeAmountAvailable,
      ],
    })
  );
}

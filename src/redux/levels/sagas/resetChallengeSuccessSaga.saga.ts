import { put } from "redux-saga/effects";
import { challengeResetSuccessAction } from "../levels.actions";
import { sudokuReset } from "@redux/sudoku/sudoku.actions";

export default function* resetChallengeSuccessSaga({ payload }: ReturnType<typeof challengeResetSuccessAction>) {
  if (payload?.subtype === "sudoku") {
    yield put(sudokuReset());
  }
}

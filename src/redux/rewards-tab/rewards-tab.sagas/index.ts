import { takeLeading } from "redux-saga/effects";
import { showBattlePassVoucherProgressSaga } from "./showBattlePassVoucherProgress.saga";
import { CHALLENGE_RESET } from "@redux/levels/levels.actions";

export default [takeLeading(CHALLENGE_RESET, showBattlePassVoucherProgressSaga)];

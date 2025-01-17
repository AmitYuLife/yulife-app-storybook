import { takeLatest } from "redux-saga/effects";

import { UPDATE_TOTAL_COINS } from "@redux/coins/coins.actions";
import updateBattlePassCoinsSaga from "./updateBattlePassCoins.saga";
import { GET_USER_COIN_LEDGER_SUCCESS } from "@redux/user/user.actions";

export default [takeLatest([UPDATE_TOTAL_COINS, GET_USER_COIN_LEDGER_SUCCESS], updateBattlePassCoinsSaga)];

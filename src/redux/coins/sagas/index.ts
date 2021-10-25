import { takeEvery } from "redux-saga/effects";
import { REFRESH_TOTAL_COINS } from "../coins.actions";

import updateTotalCoinsSaga from "./updateTotalCoins.saga";

export default [takeEvery(REFRESH_TOTAL_COINS, updateTotalCoinsSaga)];

import { takeLatest } from "redux-saga/effects";

import { PRIZE_AWARDED } from "../prizes.actions";
import highlightPrizeSaga from "./highlightPrize.saga";

export default [takeLatest(PRIZE_AWARDED, highlightPrizeSaga)];

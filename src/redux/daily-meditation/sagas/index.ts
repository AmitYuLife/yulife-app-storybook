import { REHYDRATE } from "redux-persist";
import { takeLatest } from "redux-saga/effects";

import { LOGIN_USER_SUCCESS } from "../../user/user.actions";
import getDailyMeditation from "./getDailyMeditation.saga";

export default [takeLatest(REHYDRATE, getDailyMeditation), takeLatest(LOGIN_USER_SUCCESS, getDailyMeditation)];

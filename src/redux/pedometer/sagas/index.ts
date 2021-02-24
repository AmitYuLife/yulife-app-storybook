import { AUTHENTICATED } from "@redux/app/app.actions";
import { takeLatest } from "redux-saga/effects";
import startPedometerSaga from "./startPedometer.saga";

export default [takeLatest(AUTHENTICATED, startPedometerSaga)];

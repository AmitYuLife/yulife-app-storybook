import { AUTHENTICATED } from "@redux/app/app.actions";
import { takeLatest } from "redux-saga/effects";
import setDefaultProviderSaga from "./setDefaultProvider.saga";
import { YU_HEALTH_SET_ACTIVE_PROVIDER } from "../yu-health.actions";
import setProviderSaga from "./setProvider.saga";

export default [
  takeLatest(AUTHENTICATED, setDefaultProviderSaga),
  takeLatest(YU_HEALTH_SET_ACTIVE_PROVIDER, setProviderSaga),
];

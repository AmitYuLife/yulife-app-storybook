import { AUTHENTICATED } from "@redux/app/app.actions";
import { takeLatest } from "redux-saga/effects";
import listenToNativeEvents from "../../native-logging/sagas/listenToNativeEvents.saga";
import listenToNativeYuHealthEvents from "./listenToNativeYuHealthEvents.saga";

export default [
  takeLatest(AUTHENTICATED, listenToNativeEvents),
  takeLatest(AUTHENTICATED, listenToNativeYuHealthEvents),
];

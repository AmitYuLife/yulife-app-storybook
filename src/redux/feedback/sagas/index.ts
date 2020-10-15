import { takeLatest } from "redux-saga/effects";
import displayFeedbackSaga from "./displayFeedback.saga";
import { AUTHENTICATED } from "@redux/app/app.actions";

export default [takeLatest(AUTHENTICATED, displayFeedbackSaga)];

import { HANDLE_FEEDBACK } from "../feedback.actions";

import handleFeedbackSaga from "./handleFeedback.saga";
import { takeLatest } from "redux-saga/effects";
import displayFeedbackSaga from "./displayFeedback.saga";
import { AUTHENTICATED } from "@redux/app/app.actions";

export default [takeLatest(HANDLE_FEEDBACK, handleFeedbackSaga), takeLatest(AUTHENTICATED, displayFeedbackSaga)];

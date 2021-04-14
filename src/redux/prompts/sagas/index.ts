import { takeLatest } from "redux-saga/effects";
import displayPromptsSaga from "./displayPrompts.saga";
import { AUTHENTICATED } from "@redux/app/app.actions";

export default [takeLatest(AUTHENTICATED, displayPromptsSaga)];

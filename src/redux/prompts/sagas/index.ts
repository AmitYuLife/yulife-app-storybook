import { UPDATE_USER_PROFILE } from "@redux/user/user.actions";
import { takeLatest } from "redux-saga/effects";
import displayPromptsSaga from "./displayPrompts.saga";

export default [takeLatest(UPDATE_USER_PROFILE, displayPromptsSaga)];

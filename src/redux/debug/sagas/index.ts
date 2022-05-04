import { takeLatest } from "@redux-saga/core/effects";
import { UPDATE_APP_STATE } from "@redux/app/app.actions";
import debugTool from "./debugTool.saga";

export default [takeLatest(UPDATE_APP_STATE, debugTool)];

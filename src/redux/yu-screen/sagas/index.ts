import { takeEvery, takeLatest } from "redux-saga/effects";
import { AUTHENTICATED } from "../../app/app.actions";
import { QUERY_YU_SCREEN, QUERY_YU_SCREEN_SECTIONS } from "../yu-screen.actions";

import queryYuScreenSaga from "./queryYuScreen.saga";
import queryYuScreenSectionsSaga from "./queryYuScreenSections.saga";

export default [
  takeLatest([AUTHENTICATED, QUERY_YU_SCREEN], queryYuScreenSaga),
  takeEvery([QUERY_YU_SCREEN_SECTIONS], queryYuScreenSectionsSaga),
];

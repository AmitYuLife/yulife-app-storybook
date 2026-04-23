import { takeEvery, takeLatest } from "redux-saga/effects";
import { QUERY_YU_SCREEN } from "../yu-screen.actions";

import queryYuScreenSaga from "./queryYuScreen.saga";
import queryYuScreenSectionsSaga from "./queryYuScreenSections.saga";
import { SduiActionType } from "@redux/_core/types";

export default [
  takeLatest([QUERY_YU_SCREEN], queryYuScreenSaga),
  takeEvery([SduiActionType.QueryYuScreenSections], queryYuScreenSectionsSaga),
];

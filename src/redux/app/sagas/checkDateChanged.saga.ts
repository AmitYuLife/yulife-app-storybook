import { put, select } from "redux-saga/effects";
import { DATE_FORMAT } from "@utils";
import moment from "moment";

import { UPDATE_CURRENT_DATE, updateCurrentDate } from "../app.actions";
import { getCurrentDateState } from "../app.selectors";
import { Action } from "@reduxjs/toolkit";

export default function* checkDateChanged({ type }: Action) {
  if (type === UPDATE_CURRENT_DATE) {
    return;
  }

  const currentReduxDate: string = yield select(getCurrentDateState);
  const date = moment().format(DATE_FORMAT);

  if (!currentReduxDate || date !== currentReduxDate) {
    yield put(updateCurrentDate(date));
  }
}

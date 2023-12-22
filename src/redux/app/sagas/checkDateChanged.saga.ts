import { put, select } from "redux-saga/effects";
import moment from "moment";

import { Action } from "@reduxjs/toolkit";
import { UPDATE_CURRENT_DATE, updateCurrentDate } from "@redux/device/device.actions";
import { DATE_FORMAT } from "@utils";
import { getCurrentDateState } from "@redux/device/device.selectors";

export default function* checkDateChanged({ type }: Action) {
  if (type === UPDATE_CURRENT_DATE) {
    return;
  }

  const currentReduxDate: string = yield select(getCurrentDateState);
  const date = moment();

  // currentReduxDate will be undefined if updating from an older version
  if (!currentReduxDate || date.isAfter(moment(currentReduxDate), "day")) {
    yield put(updateCurrentDate(date.format(DATE_FORMAT)));
  }
}

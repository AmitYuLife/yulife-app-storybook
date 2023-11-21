import { put, select } from "redux-saga/effects";
import { DATE_FORMAT } from "@utils";
import moment from "moment";

import { updateCurrentDate } from "../app.actions";
import { getCurrentDateState } from "../app.selectors";

export default function* checkDateChanged() {
  const currentReduxDate: string = yield select(getCurrentDateState);
  const date = moment().format(DATE_FORMAT);

  if (!currentReduxDate || date !== currentReduxDate) {
    yield put(updateCurrentDate(date));
  }
}

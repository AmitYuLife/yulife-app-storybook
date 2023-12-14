import { call, put, take } from "redux-saga/effects";
import { dateChangeChannel } from "../app.channels";
import { updateCurrentDate } from "../app.actions";
import moment from "moment";
import { DATE_FORMAT } from "@utils";

export default function* listenOnDateChangeSaga() {
  const channel: ReturnType<typeof dateChangeChannel> = yield call(dateChangeChannel);

  while (true) {
    const hasDateChanged: boolean = yield take(channel);

    if (hasDateChanged) {
      const newDate = moment().format(DATE_FORMAT);
      yield put(updateCurrentDate(newDate));
    }
  }
}

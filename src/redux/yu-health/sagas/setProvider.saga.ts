import { PayloadAction } from "@reduxjs/toolkit";
import { HealthProvider, setActiveProvider } from "@yu-life/react-native-yu-health";
import { call } from "redux-saga/effects";

export default function* setProviderSaga({ payload }: PayloadAction<HealthProvider>) {
  yield call(setActiveProvider, payload);
}

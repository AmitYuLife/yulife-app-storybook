import { PayloadAction } from "@reduxjs/toolkit";
import { HealthProvider, setActiveProvider } from "@yu-life/react-native-yu-health";
import { call } from "redux-saga/effects";
import refreshCapabilityPermissionsSaga from "./refreshCapabilityPermissions.saga";

// Calls the YuHealth module to set the active provider (Not the redux action)
export default function* setProviderSaga({ payload }: PayloadAction<HealthProvider>) {
  yield call(setActiveProvider, payload);

  yield call(refreshCapabilityPermissionsSaga);
}

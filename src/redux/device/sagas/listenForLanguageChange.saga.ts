import { getCurrentLocale, findBestAvailableLanguage } from "@locale";
import { IReduxState } from "@redux/_core/reducers";
import { SyncAction } from "@redux/_core/types";
import { put } from "redux-saga/effects";
import { setDeviceLocale } from "../device.actions";

export default function* updateLanguage(args: SyncAction<IReduxState>) {
  const state = args?.payload?.device;
  const currentDeviceLocale = findBestAvailableLanguage();

  // user has its device locale changed
  if (state?.currentDeviceLocale && state.currentDeviceLocale !== currentDeviceLocale) {
    yield put(setDeviceLocale({ currentDeviceLocale, locale: currentDeviceLocale, shouldMutateTheApi: true }));
    return;
  }

  if (state?.locale && state.locale !== getCurrentLocale()) {
    yield put(setDeviceLocale({ locale: state.locale }));
    return;
  }
}

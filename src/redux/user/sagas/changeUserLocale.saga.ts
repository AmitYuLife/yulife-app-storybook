import changeUserLocaleWithClient from "@graphql/locale/changeUserLocale.gql";
import { call } from "redux-saga/effects";
import { setDeviceLocale } from "@redux/device/device.actions";
import Logger from "@services/logging/logger";

export default function* changeUserLocaleSaga({ payload }: ReturnType<typeof setDeviceLocale>) {
  try {
    if (payload.shouldMutateTheApi) {
      yield call(changeUserLocaleWithClient, { locale: payload.locale });
    }
  } catch (e) {
    Logger.error(e, { event: "changeUserLocale" });
  }
}
